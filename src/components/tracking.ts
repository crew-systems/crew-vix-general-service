type StandardTrackingFieldKey = string;
type RegisteredCustomFieldId = string;
type TrackingCustomField = { value?: unknown; label: string };
type TrackingFileField = { file?: File; files?: File[]; label: string };
type TrackingImageDataField = { dataUrl?: string; label: string };

const fileToDataUrl = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });

export const postTrackingEvent = async (
  trackingPayload: Record<string, unknown> & {
    formData: Record<StandardTrackingFieldKey, unknown>;
    formLabels: Record<StandardTrackingFieldKey, string>;
  },
  options: {
    customFields?: Record<RegisteredCustomFieldId, TrackingCustomField>;
    fileFields?: Record<RegisteredCustomFieldId, TrackingFileField>;
    imageDataFields?: Record<RegisteredCustomFieldId, TrackingImageDataField>;
  } = {},
) => {
  const { customFields = {}, fileFields = {}, imageDataFields = {} } = options;
  const eventPayload = {
    ...trackingPayload,
    formData: { ...trackingPayload.formData },
    formLabels: { ...trackingPayload.formLabels },
  };

  for (const [key, field] of Object.entries(customFields)) {
    if (field.value === undefined) continue;
    eventPayload.formData[key] = field.value;
    eventPayload.formLabels[key] = field.label;
  }

  for (const [key, field] of Object.entries(imageDataFields)) {
    const dataUrl = field.dataUrl;
    if (!dataUrl) continue;
    if (!dataUrl.startsWith("data:image/")) {
      throw new Error("Image data field must be a data:image/* base64 string");
    }
    eventPayload.formData[key] = dataUrl;
    eventPayload.formLabels[key] = field.label;
  }

  // File custom fields (e.g. FILE_UPLOAD type) are sent as inline base64
  // data URLs directly in the JSON event payload, since the tracking
  // endpoint does not persist raw multipart file parts against a custom
  // field — it only stores whatever value is present in `formData`.
  for (const [key, field] of Object.entries(fileFields)) {
    const files = field.files ?? (field.file ? [field.file] : []);
    if (files.length === 0) continue;
    for (const file of files) {
      if (file.size > 15 * 1024 * 1024) {
        throw new Error("Each file must be 15 MB or smaller");
      }
    }
    const dataUrls = await Promise.all(files.map(fileToDataUrl));
    eventPayload.formData[key] = dataUrls;
    eventPayload.formLabels[key] = field.label;
  }

  for (const key of Object.keys(eventPayload.formData)) {
    eventPayload.formLabels[key] ||= key;
  }

  const body = new FormData();
  body.append("event", JSON.stringify(eventPayload));

  await fetch("https://backend.leadconnectorhq.com/external-tracking/events", {
    method: "POST",
    headers: {
      version: "2021-07-28",
    },
    body,
  }).catch(() => {});
};

import React from "react";
import { LegalLayout, LegalSection } from "../components/legal/LegalLayout";
import { COMPANY_INFO } from "../data/landscapingData";
import { PRIVACY_URL, legalLink } from "../lib/legalHosts";

const sections: LegalSection[] = [
  {
    id: "overview",
    title: "Overview",
    body: (
      <p>
        {COMPANY_INFO.legalName}, doing business as {COMPANY_INFO.name} ("VIX," "we," "us"),
        respects your privacy. This policy explains what information we collect through
        vixgeneralservices.com (the "Site"), how we use it, and the choices you have.
      </p>
    ),
  },
  {
    id: "collect",
    title: "Information We Collect",
    body: (
      <>
        <p>Information you give us:</p>
        <ul>
          <li>Name, phone number, email address, and property address or city.</li>
          <li>Project details, service interests, and any photos or notes you submit.</li>
          <li>Messages sent through our forms, chat widget, phone, or text.</li>
        </ul>
        <p>Information collected automatically:</p>
        <ul>
          <li>Device and browser type, IP address, and approximate location.</li>
          <li>Pages viewed, links clicked, referring site, and time on the Site.</li>
          <li>Cookies and similar technologies (see below).</li>
        </ul>
      </>
    ),
  },
  {
    id: "use",
    title: "How We Use Information",
    body: (
      <ul>
        <li>Respond to estimate requests and schedule site visits.</li>
        <li>Provide, manage, and follow up on our services.</li>
        <li>Send appointment updates and, with your consent, service-related messages.</li>
        <li>Improve the Site, measure marketing performance, and prevent fraud or abuse.</li>
        <li>Comply with legal obligations.</li>
      </ul>
    ),
  },
  {
    id: "sharing",
    title: "How We Share Information",
    body: (
      <>
        <p>We do not sell your personal information. We share it only with:</p>
        <ul>
          <li>
            Service providers that help us run the Site and our business, such as our form,
            CRM, scheduling, chat, and messaging platform (LeadConnector / GoHighLevel), hosting,
            and analytics providers.
          </li>
          <li>Subcontractors and suppliers, only as needed to perform work you requested.</li>
          <li>Authorities or advisers when required by law or to protect our rights.</li>
          <li>A successor, if VIX is involved in a merger, sale, or transfer of assets.</li>
        </ul>
      </>
    ),
  },
  {
    id: "sms",
    title: "Calls and Text Messages",
    body: (
      <p>
        If you provide your phone number, we may call or text you about your request. Consent to
        marketing texts is never a condition of purchase. Message frequency varies and message and
        data rates may apply. Reply STOP to opt out or HELP for help. We do not share mobile
        numbers or SMS consent with third parties for their own marketing.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and Tracking",
    body: (
      <p>
        We and our providers use cookies, pixels, and similar tools to keep the Site working,
        remember preferences, and understand how visitors use it. You can block or delete cookies
        in your browser settings, though parts of the Site may not work as intended. Some browsers
        also support "Global Privacy Control" signals, which we honor where required by law.
      </p>
    ),
  },
  {
    id: "retention",
    title: "Data Retention and Security",
    body: (
      <p>
        We keep personal information only as long as needed for the purposes above, including to
        meet legal, tax, and warranty requirements. We use reasonable administrative and technical
        safeguards, but no method of transmission or storage is completely secure.
      </p>
    ),
  },
  {
    id: "rights",
    title: "Your Choices and Rights",
    body: (
      <>
        <p>
          You may ask us to access, correct, or delete the personal information we hold about you,
          or to stop contacting you. Depending on where you live (for example, Massachusetts, Maine,
          New Hampshire, Rhode Island, or Vermont), you may have additional rights under state
          privacy laws. To make a request, contact us using the details below; we may need to verify
          your identity and will respond within the time required by law.
        </p>
        <p>We will not discriminate against you for exercising your privacy rights.</p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children's Privacy",
    body: (
      <p>
        The Site is intended for adults and is not directed to children under 13. We do not
        knowingly collect information from children. If you believe a child has given us
        information, contact us and we will delete it.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    body: (
      <p>
        We may update this policy from time to time. The "Last updated" date above shows the most
        recent revision. Material changes will be posted on this page.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    body: (
      <>
        <p>For privacy questions or requests:</p>
        <ul>
          <li>
            Email: <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
          </li>
          <li>
            Phone: <a href={`tel:${COMPANY_INFO.phone}`}>{COMPANY_INFO.phone}</a>
          </li>
        </ul>
        <p>
          See also our <a href={legalLink("terms")}>Terms of Use</a>.
        </p>
      </>
    ),
  },
];

export const PrivacyPage: React.FC = () => (
  <LegalLayout
    kind="privacy"
    title="Privacy Policy"
    seoTitle="Privacy Policy | VIX General Services"
    description="How VIX General Services collects, uses, and protects your information when you visit our website or request an estimate."
    canonical={PRIVACY_URL}
    updated="September 21, 2026"
    intro="Your privacy matters to us. This policy describes the information we collect when you visit our website or request an estimate, and how we use and protect it."
    sections={sections}
  />
);

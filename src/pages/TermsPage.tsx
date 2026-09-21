import React from "react";
import { LegalLayout, LegalSection } from "../components/legal/LegalLayout";
import { COMPANY_INFO } from "../data/landscapingData";
import { TERMS_URL, legalLink } from "../lib/legalHosts";

const sections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    body: (
      <p>
        By accessing or using vixgeneralservices.com (the "Site"), you agree to these Terms of
        Use. If you do not agree, please do not use the Site. The Site is operated by{" "}
        {COMPANY_INFO.legalName}, doing business as {COMPANY_INFO.name} ("VIX," "we," "us").
      </p>
    ),
  },
  {
    id: "services",
    title: "About the Site and Our Services",
    body: (
      <>
        <p>
          The Site provides information about our construction, remodeling, building systems, and
          smart-energy services in Massachusetts, Maine, New Hampshire, Rhode Island, and Vermont.
          Content on the Site is for general information only and is not a contract, offer, or
          binding quote.
        </p>
        <p>
          Any work we perform is governed by a separate written proposal or contract signed by you
          and VIX. If these Terms conflict with a signed contract, the contract controls.
        </p>
      </>
    ),
  },
  {
    id: "estimates",
    title: "Estimate Requests and Communications",
    body: (
      <>
        <p>
          Submitting a form, calling, texting, or using the chat widget is a request for
          information or a free estimate. It does not create a contractor–client relationship and
          does not guarantee availability or pricing.
        </p>
        <p>
          By providing your phone number or email, you agree that VIX may contact you about your
          request by call, text, or email. Message and data rates may apply. You may opt out at
          any time by replying STOP to a text or by contacting us directly.
        </p>
      </>
    ),
  },
  {
    id: "use",
    title: "Acceptable Use",
    body: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>Submit false, misleading, or another person's information.</li>
          <li>Interfere with or disrupt the Site, its servers, or its security.</li>
          <li>Scrape, copy, or reuse Site content at scale without our written permission.</li>
          <li>Use the Site for any unlawful purpose or to send spam.</li>
        </ul>
      </>
    ),
  },
  {
    id: "ip",
    title: "Intellectual Property",
    body: (
      <p>
        The Site's text, logos, photographs, videos, graphics, and design are owned by or licensed
        to VIX and are protected by copyright and trademark law. You may view and share the Site
        for personal, non-commercial purposes, but you may not modify, republish, or commercially
        exploit our content without written permission.
      </p>
    ),
  },
  {
    id: "third-party",
    title: "Third-Party Services and Links",
    body: (
      <p>
        The Site uses third-party tools such as a scheduling and form platform and a chat widget,
        and may link to other websites. We do not control and are not responsible for third-party
        content, policies, or practices. Your use of those services is at your own risk.
      </p>
    ),
  },
  {
    id: "disclaimer",
    title: "Disclaimer of Warranties",
    body: (
      <p>
        The Site is provided "as is" and "as available" without warranties of any kind, express or
        implied. We do not warrant that the Site will be uninterrupted, error-free, or that
        information on it, including project photos, timelines, and examples, is complete or
        current. Past project results do not guarantee similar outcomes.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    body: (
      <p>
        To the fullest extent permitted by law, VIX and its owners, employees, and contractors are
        not liable for any indirect, incidental, special, or consequential damages arising from
        your use of the Site. Nothing in these Terms limits liability that cannot be limited under
        applicable law, or our obligations under a signed service contract.
      </p>
    ),
  },
  {
    id: "law",
    title: "Governing Law",
    body: (
      <p>
        These Terms are governed by the laws of the Commonwealth of Massachusetts, without regard
        to conflict-of-law rules. Any dispute relating to the Site will be brought in the state or
        federal courts located in Massachusetts, unless a signed contract says otherwise.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    body: (
      <p>
        We may update these Terms from time to time. The "Last updated" date above shows the most
        recent revision. Continued use of the Site after changes means you accept the updated
        Terms.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    body: (
      <>
        <p>Questions about these Terms? Reach us at:</p>
        <ul>
          <li>
            Email: <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
          </li>
          <li>
            Phone: <a href={`tel:${COMPANY_INFO.phone}`}>{COMPANY_INFO.phone}</a>
          </li>
        </ul>
        <p>
          See also our <a href={legalLink("privacy")}>Privacy Policy</a>.
        </p>
      </>
    ),
  },
];

export const TermsPage: React.FC = () => (
  <LegalLayout
    kind="terms"
    title="Terms of Use"
    seoTitle="Terms of Use | VIX General Services"
    description="Terms of Use for the VIX General Services website: estimate requests, acceptable use, intellectual property, and liability."
    canonical={TERMS_URL}
    updated="September 21, 2026"
    intro="Please read these Terms of Use carefully. They explain the rules for using our website and requesting information or estimates from VIX General Services."
    sections={sections}
  />
);

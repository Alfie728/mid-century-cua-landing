import { Footer } from "@/components/landing/Footer";
import { MinimalNavbar } from "@/components/layout/MinimalNavbar";

export const metadata = {
  title: "Privacy Policy | Traceform",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-slate-50">
      <MinimalNavbar />
      <div className="pt-32 pb-24 px-6 container mx-auto max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 font-display mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-400 font-mono mb-12">
          Last updated: February 6, 2026
        </p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-slate-900 font-display mb-3">
              1. Introduction
            </h2>
            <p>
              Traceform Inc. (&quot;Traceform,&quot; &quot;we,&quot;
              &quot;our,&quot; or &quot;us&quot;) is committed to protecting
              your privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our products
              and services, including the Glmpse desktop application and our
              website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 font-display mb-3">
              2. Information We Collect
            </h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                <strong>Account Information:</strong> Name, email address, and
                other details you provide when creating an account.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you interact
                with our services, including features used and session duration.
              </li>
              <li>
                <strong>Trajectory Data:</strong> Screenshots, DOM state, and
                user action data collected by the Glmpse application. This data
                is stored locally on your device unless you explicitly choose to
                upload it.
              </li>
              <li>
                <strong>Device Information:</strong> Operating system, hardware
                model, and application version.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 font-display mb-3">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide, maintain, and improve our services.</li>
              <li>
                To communicate with you about updates, support, and notices.
              </li>
              <li>To ensure the security and integrity of our platform.</li>
              <li>To comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 font-display mb-3">
              4. Data Storage and Security
            </h2>
            <p>
              Trajectory data collected by Glmpse is stored locally on your
              device by default. If you choose to upload data to our platform,
              it is encrypted in transit and at rest using industry-standard
              encryption protocols. We implement appropriate technical and
              organizational measures to protect your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 font-display mb-3">
              5. Data Sharing
            </h2>
            <p>
              We do not sell your personal information. We may share information
              with third parties only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>With your explicit consent.</li>
              <li>
                With service providers who assist in operating our platform.
              </li>
              <li>When required by law or to protect our legal rights.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 font-display mb-3">
              6. Your Rights
            </h2>
            <p>
              Depending on your jurisdiction, you may have the right to access,
              correct, delete, or port your personal data. You may also have the
              right to opt out of certain data processing activities. To
              exercise these rights, contact us at{" "}
              <a
                href="mailto:contact@traceform.xyz"
                className="text-[#0D8FD9] hover:underline"
              >
                contact@traceform.xyz
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 font-display mb-3">
              7. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any material changes by posting the new policy on
              this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 font-display mb-3">
              8. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, please contact us
              at{" "}
              <a
                href="mailto:contact@traceform.xyz"
                className="text-[#0D8FD9] hover:underline"
              >
                contact@traceform.xyz
              </a>
              .
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}

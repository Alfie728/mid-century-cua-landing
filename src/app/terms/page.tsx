import { Footer } from "@/components/landing/Footer";
import { MinimalNavbar } from "@/components/layout/MinimalNavbar";

export const metadata = {
  title: "Terms of Service | Traceform",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-slate-50">
      <MinimalNavbar />
      <div className="pt-32 pb-24 px-6 container mx-auto max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 font-display mb-4">
          Terms of Service
        </h1>
        <p className="text-sm text-slate-400 font-mono mb-12">
          Last updated: February 6, 2026
        </p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-slate-900 font-display mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the services provided by Traceform Inc.
              (&quot;Traceform,&quot; &quot;we,&quot; &quot;our,&quot; or
              &quot;us&quot;), including the Glmpse desktop application,
              website, and related services (collectively, the
              &quot;Services&quot;), you agree to be bound by these Terms of
              Service. If you do not agree, do not use the Services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 font-display mb-3">
              2. Description of Services
            </h2>
            <p>
              Traceform provides infrastructure for computer-using agents,
              including tools for capturing trajectory data (screenshots, DOM
              state, and user actions), training environments, and evaluation
              suites. The Glmpse application captures screen and interaction
              data locally on your device.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 font-display mb-3">
              3. User Responsibilities
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                You are responsible for ensuring you have the right to capture
                and use any data collected through our Services.
              </li>
              <li>
                You must not use the Services for any unlawful purpose or in
                violation of any applicable laws or regulations.
              </li>
              <li>
                You are responsible for maintaining the confidentiality of your
                account credentials.
              </li>
              <li>
                You must not attempt to reverse-engineer, decompile, or
                disassemble any part of the Services.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 font-display mb-3">
              4. Data Ownership
            </h2>
            <p>
              You retain ownership of all trajectory data collected through the
              Glmpse application. By uploading data to our platform, you grant
              Traceform a non-exclusive license to store, process, and display
              the data as necessary to provide the Services. You may delete your
              data at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 font-display mb-3">
              5. Intellectual Property
            </h2>
            <p>
              All intellectual property rights in the Services, including
              software, design, and documentation, are owned by Traceform Inc.
              You are granted a limited, non-exclusive, non-transferable license
              to use the Services in accordance with these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 font-display mb-3">
              6. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, Traceform shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages arising from your use of the Services. Our total
              liability shall not exceed the amount you paid to us in the twelve
              months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 font-display mb-3">
              7. Disclaimer of Warranties
            </h2>
            <p>
              The Services are provided &quot;as is&quot; and &quot;as
              available&quot; without warranties of any kind, whether express or
              implied, including but not limited to implied warranties of
              merchantability, fitness for a particular purpose, and
              non-infringement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 font-display mb-3">
              8. Termination
            </h2>
            <p>
              We may terminate or suspend your access to the Services at any
              time for any reason, including violation of these Terms. Upon
              termination, your right to use the Services ceases immediately.
              You may export your data before termination.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 font-display mb-3">
              9. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms at any time. We will
              provide notice of material changes by posting the updated Terms on
              our website. Continued use of the Services after changes
              constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 font-display mb-3">
              10. Contact Us
            </h2>
            <p>
              If you have questions about these Terms, please contact us at{" "}
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

import { Footer } from "@/components/landing/Footer";
import { MinimalNavbar } from "@/components/layout/MinimalNavbar";

export const metadata = {
  title: "Cookie Policy | Traceform",
};

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-slate-50">
      <MinimalNavbar />
      <div className="pt-32 pb-24 px-6 container mx-auto max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 font-display mb-4">
          Cookie Policy
        </h1>
        <p className="text-sm text-slate-400 font-mono mb-12">
          Last updated: February 6, 2026
        </p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-slate-900 font-display mb-3">
              1. What Are Cookies
            </h2>
            <p>
              Cookies are small text files stored on your device when you visit
              a website. They are widely used to make websites work more
              efficiently and to provide information to site owners.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 font-display mb-3">
              2. How We Use Cookies
            </h2>
            <p>Traceform uses cookies for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                <strong>Essential Cookies:</strong> Required for the operation
                of our website and services. These include cookies that enable
                you to log in and access secure areas.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand how
                visitors interact with our website by collecting and reporting
                information anonymously.
              </li>
              <li>
                <strong>Preference Cookies:</strong> Allow our website to
                remember choices you make (such as language or region) and
                provide enhanced features.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 font-display mb-3">
              3. Third-Party Cookies
            </h2>
            <p>
              Some cookies are placed by third-party services that appear on our
              pages. We use third-party analytics services to help us understand
              how our website is used. These third parties may set their own
              cookies on your device.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 font-display mb-3">
              4. Managing Cookies
            </h2>
            <p>
              Most web browsers allow you to control cookies through their
              settings. You can set your browser to refuse cookies or to alert
              you when cookies are being sent. Note that disabling cookies may
              affect the functionality of our website.
            </p>
            <p className="mt-3">
              To learn more about cookies and how to manage them, visit{" "}
              <a
                href="https://www.allaboutcookies.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0D8FD9] hover:underline"
              >
                allaboutcookies.org
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 font-display mb-3">
              5. Changes to This Policy
            </h2>
            <p>
              We may update this Cookie Policy from time to time. Any changes
              will be posted on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 font-display mb-3">
              6. Contact Us
            </h2>
            <p>
              If you have questions about our use of cookies, please contact us
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

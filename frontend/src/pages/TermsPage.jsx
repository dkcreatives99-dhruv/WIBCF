export default function TermsPage() {
  return (
    <div data-testid="terms-page">
      {/* Hero Section */}
      <section 
        data-testid="terms-hero"
        className="relative py-24 md:py-32 bg-[#0A192F] noise-overlay overflow-hidden"
      >
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="font-accent uppercase tracking-widest text-[#C5A059] text-sm mb-4">
              Legal
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Terms & Conditions
            </h1>
            <p className="text-white/60">
              Last updated: January 1, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto legal-content">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the World Indian Business & Culture Foundation ("Foundation") website 
              and services, you accept and agree to be bound by the terms and provisions of this agreement. 
              If you do not agree to abide by these terms, please do not use this website.
            </p>

            <h2>2. Use of Website</h2>
            <p>
              The content of this website is for your general information and use only. It is subject to 
              change without notice. You may use our website for lawful purposes only.
            </p>
            <ul>
              <li>You must not use our website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website.</li>
              <li>You must not use our website in any way which is unlawful, illegal, fraudulent or harmful.</li>
              <li>You must not use our website for any purposes related to marketing without our express written consent.</li>
            </ul>

            <h2>3. Intellectual Property</h2>
            <p>
              This website contains material which is owned by or licensed to us. This material includes, 
              but is not limited to, the design, layout, look, appearance and graphics. Reproduction is 
              prohibited other than in accordance with the copyright notice, which forms part of these 
              terms and conditions.
            </p>

            <h2>4. Membership Terms</h2>
            <p>
              Membership to the Foundation is subject to approval and acceptance of specific membership 
              agreements. Members agree to:
            </p>
            <ul>
              <li>Provide accurate and complete information during registration</li>
              <li>Maintain the confidentiality of their account credentials</li>
              <li>Abide by the Foundation's code of conduct and ethical guidelines</li>
              <li>Pay membership fees as applicable and agreed upon</li>
              <li>Not transfer or assign membership rights without prior approval</li>
            </ul>

            <h2>5. Event Participation</h2>
            <p>
              Participation in Foundation events, programs, and activities across Asian countries is subject to:
            </p>
            <ul>
              <li>Registration and payment of applicable fees</li>
              <li>Compliance with event-specific guidelines and requirements</li>
              <li>Adherence to venue rules and safety protocols</li>
              <li>Acceptance of photography/recording policies as communicated</li>
            </ul>

            <h2>6. Limitation of Liability</h2>
            <p>
              The Foundation, its directors, employees, and affiliates shall not be liable for any 
              direct, indirect, incidental, consequential, or punitive damages arising out of your 
              use of or inability to use our website or services.
            </p>

            <h2>7. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with applicable 
              international laws. Any disputes relating to these terms shall be subject to the 
              exclusive jurisdiction of the courts in Malaysia.
            </p>

            <h2>8. Changes to Terms</h2>
            <p>
              The Foundation reserves the right to modify these terms at any time. Continued use of 
              the website after such changes constitutes acceptance of the new terms.
            </p>

            <h2>9. Contact Information</h2>
            <p>
              For any questions regarding these Terms & Conditions, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> info@wibcf.org<br />
              <strong>Website:</strong> www.wibcf.org
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

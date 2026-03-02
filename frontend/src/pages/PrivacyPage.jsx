export default function PrivacyPage() {
  return (
    <div data-testid="privacy-page">
      {/* Hero Section */}
      <section 
        data-testid="privacy-hero"
        className="relative py-24 md:py-32 bg-[#0A192F] noise-overlay overflow-hidden"
      >
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="font-accent uppercase tracking-widest text-[#C5A059] text-sm mb-4">
              Legal
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy Policy
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
            <h2>1. Introduction</h2>
            <p>
              The World Indian Business & Culture Foundation ("Foundation", "we", "us", or "our") 
              is committed to protecting your privacy. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you visit our website or use our 
              services across Asian countries.
            </p>

            <h2>2. Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide, including:</p>
            <ul>
              <li>Name and contact information (email address, phone number, mailing address)</li>
              <li>Professional information (organization, job title, industry)</li>
              <li>Account credentials (username, password)</li>
              <li>Payment information for membership or event registration</li>
              <li>Communication preferences</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul>
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Pages visited and time spent on each page</li>
              <li>Referring website addresses</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, operate, and maintain our website and services</li>
              <li>Process membership applications and event registrations</li>
              <li>Send administrative information, updates, and newsletters</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Analyze usage patterns to improve our website and services</li>
            </ul>

            <h2>4. Data Storage and Security</h2>
            <p>
              We implement appropriate technical and organizational measures to maintain the safety 
              of your personal information. Your data may be stored on servers located in various 
              Asian countries where we operate.
            </p>

            <h2>5. Your Rights (GDPR Compliance)</h2>
            <p>You have certain data protection rights:</p>
            <ul>
              <li><strong>Right to Access:</strong> Request copies of your personal data</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
              <li><strong>Right to Restrict Processing:</strong> Request limitation of data processing</li>
              <li><strong>Right to Data Portability:</strong> Request transfer of your data</li>
            </ul>

            <h2>6. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page.
            </p>

            <h2>7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
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

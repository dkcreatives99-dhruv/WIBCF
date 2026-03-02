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
              services.
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
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, operate, and maintain our website and services</li>
              <li>Process membership applications and event registrations</li>
              <li>Send administrative information, updates, and newsletters</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Analyze usage patterns to improve our website and services</li>
              <li>Comply with legal obligations and protect our rights</li>
            </ul>

            <h2>4. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website 
              and store certain information. For detailed information about our use of cookies, 
              please see our Cookies Policy.
            </p>

            <h2>5. Third-Party Services</h2>
            <p>
              We may share your information with third-party service providers who perform services 
              on our behalf, including:
            </p>
            <ul>
              <li>Payment processors for handling transactions</li>
              <li>Email service providers for communications</li>
              <li>Analytics providers to help us understand website usage</li>
              <li>Event management platforms for registration and logistics</li>
            </ul>
            <p>
              These third parties have access to your information only to perform specific tasks 
              on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>

            <h2>6. Data Storage and Security</h2>
            <p>
              We implement appropriate technical and organizational measures to maintain the safety 
              of your personal information. However, no method of transmission over the Internet or 
              electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
            <p>
              Your data may be stored on servers located in various countries. By using our services, 
              you consent to the transfer of information to countries outside your country of residence, 
              which may have different data protection rules.
            </p>

            <h2>7. Your Rights (GDPR Compliance)</h2>
            <p>If you are a resident of the European Economic Area (EEA), you have certain data protection rights:</p>
            <ul>
              <li><strong>Right to Access:</strong> Request copies of your personal data</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
              <li><strong>Right to Restrict Processing:</strong> Request limitation of data processing</li>
              <li><strong>Right to Data Portability:</strong> Request transfer of your data</li>
              <li><strong>Right to Object:</strong> Object to processing of your personal data</li>
            </ul>

            <h2>8. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes 
              outlined in this Privacy Policy, unless a longer retention period is required or permitted 
              by law.
            </p>

            <h2>9. Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 18. We do not knowingly 
              collect personal information from children. If you become aware that a child has provided 
              us with personal data, please contact us.
            </p>

            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2>11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or wish to exercise your rights, 
              please contact our Data Protection Officer:
            </p>
            <p>
              <strong>Email:</strong> privacy@worldindianfoundation.org<br />
              <strong>Website:</strong> www.worldindianfoundation.org
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

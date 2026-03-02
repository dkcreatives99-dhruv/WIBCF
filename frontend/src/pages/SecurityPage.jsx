export default function SecurityPage() {
  return (
    <div data-testid="security-page">
      {/* Hero Section */}
      <section 
        data-testid="security-hero"
        className="relative py-24 md:py-32 bg-[#0A192F] noise-overlay overflow-hidden"
      >
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="font-accent uppercase tracking-widest text-[#C5A059] text-sm mb-4">
              Legal
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Security Updates
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
            <h2>1. Our Commitment to Security</h2>
            <p>
              The World Indian Business & Culture Foundation ("Foundation") is committed to protecting 
              the security and integrity of our systems, data, and user information across our Pan-Asian operations.
            </p>

            <h2>2. Data Encryption Policy</h2>
            <p>
              We employ industry-standard encryption practices to protect your data:
            </p>
            <ul>
              <li><strong>Data in Transit:</strong> All data transmitted between your browser and our servers is encrypted using TLS 1.3.</li>
              <li><strong>Data at Rest:</strong> Sensitive data stored in our databases is encrypted using AES-256 encryption.</li>
              <li><strong>Password Security:</strong> User passwords are hashed and never stored in plain text.</li>
            </ul>

            <h2>3. SSL/TLS Usage</h2>
            <p>
              Our website uses SSL/TLS encryption to ensure secure communication:
            </p>
            <ul>
              <li>All pages on our website are served over HTTPS</li>
              <li>We enforce HSTS to prevent downgrade attacks</li>
              <li>Our SSL certificates are issued by trusted Certificate Authorities</li>
            </ul>

            <h2>4. Security Measures</h2>
            <p>
              We implement comprehensive security measures including:
            </p>
            <ul>
              <li><strong>Access Controls:</strong> Role-based access control to limit data access</li>
              <li><strong>Regular Audits:</strong> Periodic security assessments</li>
              <li><strong>Monitoring:</strong> 24/7 monitoring of our systems</li>
              <li><strong>Updates:</strong> Regular security patches and software updates</li>
            </ul>

            <h2>5. Responsible Disclosure Policy</h2>
            <p>
              We value the security research community and encourage responsible disclosure of 
              potential vulnerabilities.
            </p>

            <h2>6. Report a Vulnerability</h2>
            <p>
              To report a security vulnerability, please email our security team at:
            </p>
            <p>
              <strong>Email:</strong> info@wibcf.org
            </p>

            <h2>7. Contact Information</h2>
            <p>
              For security-related questions or concerns, please contact:
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

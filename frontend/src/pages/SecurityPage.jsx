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
              the security and integrity of our systems, data, and user information. This page outlines 
              our security practices and provides information about how we handle security matters.
            </p>

            <h2>2. Data Encryption Policy</h2>
            <p>
              We employ industry-standard encryption practices to protect your data:
            </p>
            <ul>
              <li><strong>Data in Transit:</strong> All data transmitted between your browser and our servers is encrypted using TLS 1.3 (Transport Layer Security).</li>
              <li><strong>Data at Rest:</strong> Sensitive data stored in our databases is encrypted using AES-256 encryption.</li>
              <li><strong>Password Security:</strong> User passwords are hashed using bcrypt with appropriate salt rounds and are never stored in plain text.</li>
              <li><strong>Payment Information:</strong> We do not store complete payment card details on our servers. All payment processing is handled by PCI-DSS compliant third-party processors.</li>
            </ul>

            <h2>3. SSL/TLS Usage</h2>
            <p>
              Our website uses SSL (Secure Sockets Layer) / TLS encryption to ensure secure communication:
            </p>
            <ul>
              <li>All pages on our website are served over HTTPS</li>
              <li>We enforce HSTS (HTTP Strict Transport Security) to prevent downgrade attacks</li>
              <li>Our SSL certificates are issued by trusted Certificate Authorities</li>
              <li>We regularly renew and update our certificates before expiration</li>
            </ul>

            <h2>4. Security Measures</h2>
            <p>
              We implement comprehensive security measures including:
            </p>
            <ul>
              <li><strong>Access Controls:</strong> Role-based access control (RBAC) to limit data access to authorized personnel only</li>
              <li><strong>Regular Audits:</strong> Periodic security assessments and penetration testing</li>
              <li><strong>Monitoring:</strong> 24/7 monitoring of our systems for suspicious activities</li>
              <li><strong>Updates:</strong> Regular security patches and software updates</li>
              <li><strong>Backup:</strong> Regular encrypted backups of critical data with secure offsite storage</li>
              <li><strong>Firewall Protection:</strong> Web application firewalls to protect against common attack vectors</li>
            </ul>

            <h2>5. Responsible Disclosure Policy</h2>
            <p>
              We value the security research community and encourage responsible disclosure of 
              potential vulnerabilities. If you discover a security vulnerability in our systems, 
              please report it to us responsibly.
            </p>

            <h3>Reporting Guidelines</h3>
            <ul>
              <li>Provide detailed information about the vulnerability</li>
              <li>Include steps to reproduce the issue</li>
              <li>Allow reasonable time for us to investigate and address the issue before public disclosure</li>
              <li>Do not access, modify, or delete data that does not belong to you</li>
              <li>Do not perform any attack that could harm the availability of our services</li>
            </ul>

            <h3>What We Commit To</h3>
            <ul>
              <li>Acknowledge receipt of your report within 48 hours</li>
              <li>Provide regular updates on our progress</li>
              <li>Work to remediate verified vulnerabilities in a timely manner</li>
              <li>Not pursue legal action against researchers who follow these guidelines</li>
              <li>Credit researchers (if desired) for their contributions</li>
            </ul>

            <h2>6. Report a Vulnerability</h2>
            <p>
              To report a security vulnerability, please email our security team at:
            </p>
            <p>
              <strong>Email:</strong> security@worldindianfoundation.org
            </p>
            <p>
              Please include:
            </p>
            <ul>
              <li>Description of the vulnerability</li>
              <li>Steps to reproduce</li>
              <li>Potential impact assessment</li>
              <li>Any suggested remediation (optional)</li>
              <li>Your contact information for follow-up</li>
            </ul>

            <h2>7. Security Incident Response</h2>
            <p>
              In the event of a security incident affecting user data, we will:
            </p>
            <ul>
              <li>Promptly investigate and contain the incident</li>
              <li>Notify affected users as required by applicable laws</li>
              <li>Coordinate with relevant authorities as necessary</li>
              <li>Implement measures to prevent similar incidents</li>
              <li>Provide transparency about the incident and our response</li>
            </ul>

            <h2>8. User Security Responsibilities</h2>
            <p>
              Users play an important role in maintaining security:
            </p>
            <ul>
              <li>Use strong, unique passwords for your account</li>
              <li>Do not share your login credentials</li>
              <li>Log out when using shared or public computers</li>
              <li>Keep your devices and browsers updated</li>
              <li>Report any suspicious activity immediately</li>
            </ul>

            <h2>9. Contact Information</h2>
            <p>
              For security-related questions or concerns, please contact:
            </p>
            <p>
              <strong>Security Team:</strong> security@worldindianfoundation.org<br />
              <strong>General Inquiries:</strong> info@worldindianfoundation.org
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function CookiesPage() {
  return (
    <div data-testid="cookies-page">
      {/* Hero Section */}
      <section 
        data-testid="cookies-hero"
        className="relative py-24 md:py-32 bg-[#0A192F] noise-overlay overflow-hidden"
      >
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="font-accent uppercase tracking-widest text-[#C5A059] text-sm mb-4">
              Legal
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Cookies Policy
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
            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you 
              visit a website. They are widely used to make websites work more efficiently and to 
              provide information to website owners.
            </p>

            <h2>2. Types of Cookies We Use</h2>
            
            <h3>Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function properly. They enable core 
              functionality such as security, network management, and accessibility.
            </p>

            <h3>Performance Cookies</h3>
            <p>
              These cookies collect information about how visitors use our website, such as which 
              pages are visited most often.
            </p>

            <h3>Functionality Cookies</h3>
            <p>
              These cookies allow the website to remember choices you make and provide enhanced features.
            </p>

            <h2>3. Managing Cookies</h2>
            <p>
              You can control and manage cookies in various ways through your browser settings.
            </p>
            <ul>
              <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies</li>
              <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
              <li><strong>Edge:</strong> Settings → Cookies and site permissions</li>
            </ul>

            <h2>4. Cookie Consent</h2>
            <p>
              When you first visit our website, you will be presented with a cookie consent option 
              that allows you to accept or customize your cookie preferences.
            </p>

            <h2>5. Updates to This Policy</h2>
            <p>
              We may update this Cookies Policy from time to time. Any changes will be posted on 
              this page with an updated date.
            </p>

            <h2>6. Contact Us</h2>
            <p>
              If you have any questions about our use of cookies, please contact us:
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

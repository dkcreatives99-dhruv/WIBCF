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
            <p>
              Cookies help us understand how you use our website, remember your preferences, and 
              improve your overall experience. They also help us analyze which pages are visited 
              most frequently and how visitors navigate our site.
            </p>

            <h2>2. Types of Cookies We Use</h2>
            
            <h3>Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function properly. They enable core 
              functionality such as security, network management, and accessibility.
            </p>
            <ul>
              <li>Session management cookies</li>
              <li>Security cookies</li>
              <li>Load balancing cookies</li>
            </ul>

            <h3>Performance Cookies</h3>
            <p>
              These cookies collect information about how visitors use our website, such as which 
              pages are visited most often. This helps us improve how our website works.
            </p>
            <ul>
              <li>Analytics cookies (e.g., Google Analytics)</li>
              <li>Error tracking cookies</li>
              <li>Speed and performance monitoring cookies</li>
            </ul>

            <h3>Functionality Cookies</h3>
            <p>
              These cookies allow the website to remember choices you make (such as your language 
              or region) and provide enhanced, personalized features.
            </p>
            <ul>
              <li>Language preference cookies</li>
              <li>Region/location cookies</li>
              <li>User customization cookies</li>
            </ul>

            <h3>Marketing/Targeting Cookies</h3>
            <p>
              These cookies are used to deliver advertisements more relevant to you and your interests. 
              They may also be used to limit the number of times you see an advertisement.
            </p>
            <ul>
              <li>Advertising cookies</li>
              <li>Social media cookies</li>
              <li>Retargeting cookies</li>
            </ul>

            <h2>3. Third-Party Cookies</h2>
            <p>
              Some cookies are placed by third-party services that appear on our pages. We do not 
              control the dissemination of these cookies. The third-party cookies we may use include:
            </p>
            <ul>
              <li><strong>Google Analytics:</strong> For website traffic analysis</li>
              <li><strong>Social Media Platforms:</strong> For sharing and engagement features</li>
              <li><strong>Payment Processors:</strong> For secure transaction handling</li>
              <li><strong>Email Marketing Services:</strong> For newsletter and communication tracking</li>
            </ul>

            <h2>4. Managing Cookies</h2>
            <p>
              You can control and manage cookies in various ways. Please note that removing or 
              blocking cookies may impact your user experience and some functionality may no 
              longer be available.
            </p>

            <h3>Browser Settings</h3>
            <p>
              Most browsers allow you to manage cookies through their settings. Here's how to 
              access cookie settings in popular browsers:
            </p>
            <ul>
              <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
              <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
              <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
            </ul>

            <h3>Opt-Out Tools</h3>
            <p>
              You can also opt out of certain third-party cookies using industry tools:
            </p>
            <ul>
              <li><strong>Google Analytics:</strong> Install the Google Analytics Opt-out Browser Add-on</li>
              <li><strong>Digital Advertising Alliance:</strong> Visit www.aboutads.info/choices</li>
              <li><strong>Network Advertising Initiative:</strong> Visit www.networkadvertising.org/choices</li>
            </ul>

            <h2>5. Cookie Consent</h2>
            <p>
              When you first visit our website, you will be presented with a cookie consent banner 
              that allows you to:
            </p>
            <ul>
              <li>Accept all cookies</li>
              <li>Reject non-essential cookies</li>
              <li>Customize your cookie preferences</li>
            </ul>
            <p>
              You can change your cookie preferences at any time by accessing the cookie settings 
              through the link in our website footer.
            </p>

            <h2>6. Cookie Duration</h2>
            <p>
              Cookies can be either "session" cookies or "persistent" cookies:
            </p>
            <ul>
              <li><strong>Session Cookies:</strong> These are temporary and expire when you close your browser</li>
              <li><strong>Persistent Cookies:</strong> These remain on your device for a set period or until you delete them</li>
            </ul>

            <h2>7. Updates to This Policy</h2>
            <p>
              We may update this Cookies Policy from time to time to reflect changes in technology, 
              legislation, or our data practices. Any changes will be posted on this page with an 
              updated "Last updated" date.
            </p>

            <h2>8. Contact Us</h2>
            <p>
              If you have any questions about our use of cookies, please contact us:
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

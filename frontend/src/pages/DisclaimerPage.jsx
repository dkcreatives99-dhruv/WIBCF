export default function DisclaimerPage() {
  return (
    <div data-testid="disclaimer-page">
      {/* Hero Section */}
      <section 
        data-testid="disclaimer-hero"
        className="relative py-24 md:py-32 bg-[#0A192F] noise-overlay overflow-hidden"
      >
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="font-accent uppercase tracking-widest text-[#C5A059] text-sm mb-4">
              Legal
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Disclaimer
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
            <h2>1. General Information Purpose</h2>
            <p>
              The information provided by the World Indian Business & Culture Foundation ("Foundation") 
              on our website and through our services is for general informational purposes only. All 
              information is provided in good faith; however, we make no representation or warranty of 
              any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, 
              availability, or completeness of any information.
            </p>

            <h2>2. No Professional Advice</h2>
            <p>
              The content on this website does not constitute professional advice. Specifically:
            </p>
            <ul>
              <li>The information provided is not intended to be a substitute for professional legal, financial, tax, or business advice.</li>
              <li>You should always seek the advice of qualified professionals with any questions you may have regarding your specific circumstances.</li>
              <li>Never disregard professional advice or delay in seeking it because of something you have read on this website.</li>
            </ul>

            <h2>3. No Financial or Investment Advice</h2>
            <p>
              Nothing contained on this website shall be construed as investment, financial, or trading 
              advice, nor shall it be considered as a recommendation, endorsement, or offer of any 
              investment or financial product or service.
            </p>
            <p>
              Any discussions of investment opportunities, business partnerships, or financial matters 
              are presented for informational purposes only. You should conduct your own due diligence 
              and consult with qualified financial advisors before making any investment decisions.
            </p>

            <h2>4. External Links Disclaimer</h2>
            <p>
              This website may contain links to external websites that are not provided or maintained 
              by, or in any way affiliated with, the Foundation.
            </p>
            <ul>
              <li>We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</li>
              <li>We have no control over the content and nature of external sites.</li>
              <li>The inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed within them.</li>
              <li>We are not responsible for any loss or damage that may arise from your use of external websites.</li>
            </ul>

            <h2>5. Event Participation Risk Disclaimer</h2>
            <p>
              Participation in Foundation events, programs, and activities involves inherent risks. 
              By participating, you acknowledge and accept:
            </p>
            <ul>
              <li>Physical risks associated with travel, venue environments, and activities</li>
              <li>Health and safety risks, including potential exposure to illnesses</li>
              <li>The Foundation's limited liability for personal injuries, property damage, or other losses</li>
              <li>Your responsibility to maintain appropriate insurance coverage</li>
              <li>The need to inform the Foundation of any medical conditions or special requirements</li>
            </ul>

            <h2>6. Views and Opinions</h2>
            <p>
              The views and opinions expressed on this website, at events, or in publications are those 
              of the individual authors, speakers, or contributors and do not necessarily reflect the 
              official policy or position of the Foundation, its leadership, or its members.
            </p>

            <h2>7. Accuracy of Information</h2>
            <p>
              While we endeavor to keep the information on this website accurate and up-to-date, we make 
              no representations or warranties of any kind about:
            </p>
            <ul>
              <li>The completeness of the information</li>
              <li>The suitability of the information for any particular purpose</li>
              <li>The continued availability of any programs or services mentioned</li>
              <li>The outcomes of any initiatives or partnerships described</li>
            </ul>

            <h2>8. No Endorsement</h2>
            <p>
              References to any products, services, processes, or other information by trade name, 
              trademark, manufacturer, or otherwise does not constitute or imply endorsement, 
              sponsorship, or recommendation by the Foundation.
            </p>

            <h2>9. Limitation of Liability</h2>
            <p>
              Under no circumstances shall the Foundation be liable for any indirect, incidental, 
              consequential, special, or exemplary damages arising out of or in connection with your 
              access to, or use of, or inability to access or use, this website and its content.
            </p>

            <h2>10. Contact Information</h2>
            <p>
              If you require any more information or have any questions about this disclaimer, 
              please contact us:
            </p>
            <p>
              <strong>Email:</strong> legal@worldindianfoundation.org<br />
              <strong>Website:</strong> www.worldindianfoundation.org
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

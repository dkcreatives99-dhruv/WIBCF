import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { 
  FileText, 
  BarChart3, 
  Target, 
  BookOpen,
  Download,
  ArrowRight,
  Clock
} from 'lucide-react';

const sdgGoals = [
  { number: 8, title: 'Decent Work & Economic Growth', color: '#A21942' },
  { number: 9, title: 'Industry, Innovation & Infrastructure', color: '#FD6925' },
  { number: 17, title: 'Partnerships for the Goals', color: '#19486A' }
];

const reports = [
  {
    title: 'Annual Report 2025',
    type: 'Annual Report',
    description: 'Comprehensive overview of our Pan-Asian activities, achievements, and financial performance.',
    status: 'Coming Soon'
  },
  {
    title: 'Pan-Asian Business Index',
    type: 'Research Paper',
    description: 'Analysis of Indian diaspora business impact across major Asian economies.',
    status: 'Coming Soon'
  },
  {
    title: 'Asian SDG Impact Assessment',
    type: 'Impact Report',
    description: 'Measuring our contribution to UN Sustainable Development Goals across Asian countries.',
    status: 'Coming Soon'
  },
  {
    title: 'Cultural Diplomacy in Asia',
    type: 'Policy Paper',
    description: 'Examining the role of cultural exchange in strengthening Pan-Asian relations.',
    status: 'Coming Soon'
  }
];

export default function ResearchPage() {
  return (
    <div data-testid="research-page">
      {/* Hero Section */}
      <section 
        data-testid="research-hero"
        className="relative py-32 md:py-40 bg-[#0A192F] noise-overlay overflow-hidden"
      >
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="font-accent uppercase tracking-widest text-[#C5A059] text-sm mb-4 animate-fade-in">
              Research & Publications
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              Knowledge for Pan-Asian Impact
            </h1>
            <p className="text-lg text-white/70 leading-relaxed animate-fade-in-up delay-200">
              Evidence-based research and publications driving policy dialogue and sustainable development across Asia.
            </p>
          </div>
        </div>
      </section>

      {/* Reports Section */}
      <section data-testid="reports-section" className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Reports List */}
            <div className="lg:col-span-2">
              <p className="font-accent uppercase tracking-widest text-[#C5A059] text-sm mb-4">
                Publications
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F] mb-8">
                Reports & Papers
              </h2>
              
              <div className="space-y-6">
                {reports.map((report, index) => (
                  <div
                    key={report.title}
                    data-testid={`report-${index}`}
                    className="diplomatic-card p-6 flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-[#0A192F] flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-[#C5A059]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-[#0A192F]">
                          {report.title}
                        </h3>
                        <span className="coming-soon-banner px-2 py-0.5 text-xs">
                          {report.status}
                        </span>
                      </div>
                      <p className="font-accent uppercase tracking-wider text-[#C5A059] text-xs mb-2">
                        {report.type}
                      </p>
                      <p className="text-[#475569] text-sm">
                        {report.description}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      disabled
                      className="text-[#0A192F]/50"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      PDF
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-[#F8F9FA] p-8 border border-[#0A192F]/10 sticky top-28">
                <p className="font-accent uppercase tracking-widest text-[#C5A059] text-sm mb-4">
                  Research Focus
                </p>
                <h3 className="text-xl font-bold text-[#0A192F] mb-4">
                  Areas of Study
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#C5A059] mt-2" />
                    <span className="text-[#475569] text-sm">Pan-Asian Diaspora Economics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#C5A059] mt-2" />
                    <span className="text-[#475569] text-sm">Cross-Border Trade & Investment in Asia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#C5A059] mt-2" />
                    <span className="text-[#475569] text-sm">Cultural Heritage Preservation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#C5A059] mt-2" />
                    <span className="text-[#475569] text-sm">Regional Policy Impact Assessment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#C5A059] mt-2" />
                    <span className="text-[#475569] text-sm">Asian SDG Implementation Metrics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDG Section */}
      <section data-testid="sdg-section" className="section-padding bg-[#F8F9FA]">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="font-accent uppercase tracking-widest text-[#C5A059] text-sm mb-4">
              Our Commitment
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F] mb-4">
              Asian SDG Alignment
            </h2>
            <p className="text-[#475569] max-w-2xl mx-auto">
              All Foundation initiatives are aligned with the United Nations Sustainable Development Goals, 
              ensuring our work contributes to regional progress across Asian countries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {sdgGoals.map((goal, index) => (
              <div
                key={goal.number}
                data-testid={`sdg-${index}`}
                className="bg-white p-8 border border-[#0A192F]/10"
              >
                <div 
                  className="sdg-badge mb-6"
                  style={{ backgroundColor: goal.color }}
                >
                  {goal.number}
                </div>
                <h3 className="text-xl font-bold text-[#0A192F] mb-3">
                  SDG {goal.number}
                </h3>
                <p className="text-[#475569]">
                  {goal.title}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white p-8 md:p-12 border border-[#0A192F]/10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-[#0A192F] mb-4">
                  Measuring Pan-Asian Impact
                </h3>
                <p className="text-[#475569] leading-relaxed mb-6">
                  The Foundation is developing comprehensive impact measurement frameworks 
                  to track our contribution to SDG outcomes across Asian countries. Our research team works with 
                  regional partners to establish credible metrics and reporting standards.
                </p>
                <div className="flex items-center gap-2 text-[#C5A059]">
                  <Clock className="w-4 h-4" />
                  <span className="font-accent uppercase tracking-wider text-xs">
                    Asian Impact Reports Coming Soon
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#F8F9FA] p-6 text-center">
                  <BarChart3 className="w-8 h-8 text-[#C5A059] mx-auto mb-3" />
                  <p className="font-accent uppercase tracking-wider text-xs text-[#0A192F]">
                    Data-Driven Analysis
                  </p>
                </div>
                <div className="bg-[#F8F9FA] p-6 text-center">
                  <Target className="w-8 h-8 text-[#C5A059] mx-auto mb-3" />
                  <p className="font-accent uppercase tracking-wider text-xs text-[#0A192F]">
                    Regional Focused
                  </p>
                </div>
                <div className="bg-[#F8F9FA] p-6 text-center">
                  <BookOpen className="w-8 h-8 text-[#C5A059] mx-auto mb-3" />
                  <p className="font-accent uppercase tracking-wider text-xs text-[#0A192F]">
                    Peer Reviewed
                  </p>
                </div>
                <div className="bg-[#F8F9FA] p-6 text-center">
                  <FileText className="w-8 h-8 text-[#C5A059] mx-auto mb-3" />
                  <p className="font-accent uppercase tracking-wider text-xs text-[#0A192F]">
                    Transparent Reporting
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Papers Section */}
      <section data-testid="policy-section" className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-accent uppercase tracking-widest text-[#C5A059] text-sm mb-4">
              Thought Leadership
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F] mb-6">
              Policy Papers & Whitepapers
            </h2>
            <p className="text-[#475569] leading-relaxed mb-8">
              Our research team is preparing in-depth policy papers on critical issues affecting 
              the Pan-Asian Indian community. These publications will provide evidence-based recommendations 
              for policymakers, business leaders, and civil society organizations across Asian countries.
            </p>
            <div className="coming-soon-banner inline-flex items-center gap-2 px-6 py-3">
              <Clock className="w-5 h-5" />
              <span>Publications Coming Soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section data-testid="research-cta" className="py-20 md:py-32 bg-[#0A192F] noise-overlay">
        <div className="container-wide relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Collaborate With Our Research Team
            </h2>
            <p className="text-white/70 text-lg mb-10">
              We welcome collaboration with academic institutions, think tanks, and research organizations 
              interested in studying the Pan-Asian Indian diaspora and sustainable development.
            </p>
            <Link to="/contact">
              <Button className="btn-gold">
                Contact Research Team
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

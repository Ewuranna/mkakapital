import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Our Team - MKA Kapital',
  description: 'Meet the experienced professionals behind MKA Kapital\'s success.',
};

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Team Hero */}
        <section className="py-20 bg-gradient-to-br from-white via-light-gray to-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-block p-3 bg-gradient-to-r from-primary-red/10 to-secondary-cyan/10 rounded-2xl mb-8">
                <span className="text-primary-red font-bold text-sm uppercase tracking-widest">Our Team</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-typography-black mb-8 leading-tight">
                Meet the
                <br />
                <span className="bg-gradient-to-r from-primary-red to-secondary-cyan bg-clip-text text-transparent">
                  Experts
                </span>
              </h1>
              <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
                Our diverse team of financial professionals brings together decades of experience across global markets, technology, and risk management.
              </p>
            </div>

            {/* Team Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
              {[
                { number: "50+", label: "Team Members" },
                { number: "15+", label: "Avg. Experience" },
                { number: "25+", label: "Countries" },
                { number: "500+", label: "Clients Served" }
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg border border-light-gray">
                  <div className="text-3xl lg:text-4xl font-bold text-primary-red mb-2">{stat.number}</div>
                  <div className="text-sm text-text-secondary font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Leadership Team */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-typography-black text-center mb-12">Leadership Team</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Sarah Chen",
                    title: "CEO & Founder",
                    bio: "20+ years in international trade finance. Former VP at Goldman Sachs. MBA from Wharton.",
                    image: "👩‍💼",
                    certifications: ["CFA", "FRM", "MBA"]
                  },
                  {
                    name: "Marcus Rodriguez",
                    title: "CTO",
                    bio: "15+ years in fintech innovation. Led digital transformation at JPMorgan Chase.",
                    image: "👨‍💻",
                    certifications: ["CISSP", "AWS Solutions Architect", "PhD CS"]
                  },
                  {
                    name: "Elena Volkov",
                    title: "Head of Risk",
                    bio: "18+ years in risk management. Former Chief Risk Officer at HSBC. PhD in Finance.",
                    image: "👩‍🔬",
                    certifications: ["FRM", "PRM", "PhD Finance"]
                  },
                  {
                    name: "David Kim",
                    title: "VP of Operations",
                    bio: "12+ years in supply chain finance. Former operations director at Maersk.",
                    image: "👨‍🎓",
                    certifications: ["PMP", "Six Sigma", "MBA"]
                  },
                  {
                    name: "Amara Okafor",
                    title: "Head of Compliance",
                    bio: "16+ years in regulatory compliance. Former compliance officer at Central Bank of Nigeria.",
                    image: "👩‍⚖️",
                    certifications: ["CAMs", "CFE", "JD"]
                  },
                  {
                    name: "James Wilson",
                    title: "VP of Sales",
                    bio: "14+ years in B2B sales. Former regional director at Citibank Commercial Banking.",
                    image: "👨‍💼",
                    certifications: ["Series 7", "Series 63", "MBA"]
                  }
                ].map((member, index) => (
                  <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-light-gray hover:border-primary-red/30">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-primary-red/20 to-secondary-cyan/20 rounded-2xl mx-auto mb-6 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                        {member.image}
                      </div>
                      <h3 className="text-xl font-bold text-typography-black mb-2 group-hover:text-primary-red transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-primary-red font-semibold mb-4">{member.title}</p>
                      <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                        {member.bio}
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {member.certifications.map((cert, certIndex) => (
                          <span key={certIndex} className="bg-primary-red/10 text-primary-red px-3 py-1 rounded-lg text-xs font-medium">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Department Teams */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-typography-black text-center mb-12">Our Departments</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    name: "Trade Finance",
                    count: "12 members",
                    lead: "Maria Santos",
                    description: "Specialists in international trade and project financing"
                  },
                  {
                    name: "Risk Management",
                    count: "8 members",
                    lead: "Elena Volkov",
                    description: "Experts in credit analysis and risk assessment"
                  },
                  {
                    name: "Technology",
                    count: "15 members",
                    lead: "Marcus Rodriguez",
                    description: "Developers and engineers building our platform"
                  },
                  {
                    name: "Operations",
                    count: "10 members",
                    lead: "David Kim",
                    description: "Ensuring smooth execution of all transactions"
                  }
                ].map((dept, index) => (
                  <div key={index} className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-light-gray hover:border-secondary-cyan/30">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-secondary-cyan/10 text-secondary-cyan rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:bg-secondary-cyan group-hover:text-white transition-colors duration-300">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-typography-black mb-2 group-hover:text-secondary-cyan transition-colors duration-300">
                        {dept.name}
                      </h4>
                      <p className="text-secondary-cyan font-semibold text-sm mb-2">{dept.count}</p>
                      <p className="text-sm text-text-secondary mb-2">Led by {dept.lead}</p>
                      <p className="text-xs text-text-secondary">{dept.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Culture */}
            <div className="bg-gradient-to-r from-primary-red/5 to-secondary-cyan/5 rounded-3xl p-12 text-center">
              <h2 className="text-3xl font-bold text-typography-black mb-6">Our Culture</h2>
              <p className="text-lg text-text-secondary mb-8 max-w-3xl mx-auto">
                We foster a culture of innovation, collaboration, and excellence. Our team is united by a shared commitment to transforming global trade through technology and expertise.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: "🚀",
                    title: "Innovation First",
                    description: "We embrace cutting-edge technology and creative solutions"
                  },
                  {
                    icon: "🤝",
                    title: "Collaboration",
                    description: "We work together across departments and geographies"
                  },
                  {
                    icon: "⭐",
                    title: "Excellence",
                    description: "We maintain the highest standards in everything we do"
                  }
                ].map((value, index) => (
                  <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h4 className="font-bold text-typography-black mb-3">{value.title}</h4>
                    <p className="text-text-secondary text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

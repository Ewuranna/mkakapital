export default function AboutSection() {
  return (
    <section id="about" className="py-10 bg-gradient-to-b from-primary-red/5 via-secondary-cyan/10 to-secondary-teal/15 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-2 bg-secondary-cyan/10 rounded-lg mb-4">
            <span className="text-secondary-cyan font-semibold text-sm uppercase tracking-wider">Why Choose MKA Kapital</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-typography-black mb-6">
            Trusted Since <span className="text-primary-red inline-block">2019</span>
            </h2>
          <p className="text-base text-text-secondary max-w-3xl mx-auto">
          Over 5 years of excellence in trade finance and business solutions, serving corporate institutions, SMEs, and individual clients across Ghana.              </p>
            </div>

        {/* Key Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {[
            { number: "5+", label: "Years of Excellence", icon: "🏆" },
            { number: "50+", label: "Satisfied Clients", icon: "🤝" },
            { number: "$2.5B+", label: "Assets Under Management", icon: "📈" },
            { number: "98%", label: "Client Retention Rate", icon: "⭐" }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-light-gray hover:border-secondary-teal/30 text-center group">
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-2xl font-bold text-black mb-2 group-hover:text-primary-red transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-sm text-text-secondary font-medium">{stat.label}</div>
            </div>
          ))}
              </div>
        
      </div>
    </section>
  );
}

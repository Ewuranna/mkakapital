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
            Trusted by <span className="text-primary-red inline-block">500+ Companies</span>
            </h2>
          <p className="text-base text-text-secondary max-w-3xl mx-auto">
            15+ years of excellence in global trade finance with cutting-edge technology and personalized service.
              </p>
            </div>

        {/* Key Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {[
            { number: "15+", label: "Years of Excellence", icon: "🏆" },
            { number: "500+", label: "Satisfied Clients", icon: "🤝" },
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

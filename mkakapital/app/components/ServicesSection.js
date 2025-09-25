const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "General Trade & E-commerce",
    description: "Streamline trading operations and expand your market reach through our e-commerce solutions.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Asset & Project Financing",
    description: "Flexible financing for trade, business expansion, and project development.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Mining, Oil & Gas Support",
    description: "Specialized operational support and industry expertise for the extractives sector.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Commodity & Agro Trading",
    description: "Trade agricultural commodities like soya bean, maize, cashew, and coffee through Adinkra Market.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Collateral & Warehouse Management",
    description: "Secure storage and efficient inventory management with professional warehouse services.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Revenue Mobilization & Management",
    description: "Optimize income streams with our revenue mobilization and assurance services.",
  }
];

export default function ServicesSection() {
  return (
    <>
      <section id="services" className="py-20 bg-gradient-to-br from-light-gray via-white to-light-gray relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-secondary-cyan/10 rounded-lg mb-4">
              <span className="text-secondary-cyan font-semibold text-sm uppercase tracking-wider">Comprehensive Financial Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-typography-black mb-6">
              Built for Modern Business
            </h2>
            <p className="text-base text-text-secondary max-w-3xl mx-auto">
            MKA Kapital offers a range of services designed to cut waste, reduce operational costs, and deliver value for money through strategic outsourcing. Our robust and versatile operations have attracted partners from various industries who rely on us for innovative trade solutions and comprehensive business support.       </p>
          </div>

          {/* Uniform Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-light-gray hover:border-secondary-teal/30 h-full"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-secondary-teal/10 text-secondary-teal rounded-xl mb-6 flex items-center justify-center group-hover:bg-secondary-teal group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-typography-black mb-4 group-hover:text-secondary-teal transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* CTA */}
                <button className="w-full bg-primary-white text-gray border-1 border-secondary-teal py-2 px-3 rounded-md text-sm font-semibold hover:bg-black hover:text-white hover:border-black transition-all duration-300">
                  Explore Solutions
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-text-secondary mb-8 text-lg">
            Ready to accelerate your business? Discover how our integrated ecosystem unlocks growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-black text-white px-10 py-3 rounded-lg text-lg font-bold hover:bg-red-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105">
              Contact Our Experts
            </button>
            <button className="border-1 border-black text-black px-10 py-3 rounded-lg text-lg font-bold hover:bg-primary-red hover:border-primary-red hover:text-white transition-all duration-300">
              Get Started Today
            </button>
        </div>
      </div>
    </section>
    </>
  );
}

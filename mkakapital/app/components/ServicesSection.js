import Image from "next/image";

const services = [
  {
    image: "/sumup-S8o2yWPu0BM-unsplash.jpg",
    title: "Mobile Money (MoMo) Services",
    description: "Secure and efficient mobile money services across major networks in Ghana — including deposits, withdrawals, airtime & data purchases, bill payments, merchant payment solutions, and agent network management.",
  },
  {
    image: "/pexels-anthonyshkraba-production-8837549.jpg",
    title: "Trade, Stock & Asset Finance",
    description: "Flexible hire purchase financing solutions designed to help individuals and businesses acquire essential assets without financial strain — with repayment terms tailored to customer needs.",
  },
  {
    image: "/pexels-mart-production-7550542.jpg",
    title: "Sales & Marketing Agency",
    description: "Professional sales and marketing services for local and international partners — including digital marketing, field sales representation, product activations, market research, and brand distribution support.",
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block p-2 bg-secondary-cyan/5 rounded-lg mb-4">
            <span className="text-secondary-cyan font-semibold text-sm uppercase tracking-wider">Comprehensive Financial Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-typography-black mb-6">
            Built for Modern Business
          </h2>
          <p className="text-base text-text-secondary max-w-3xl mx-auto text-lg leading-relaxed">
            MKA Kapital & Marketing Limited offers a range of services designed to cut waste, harness operational costs, improve sustainability, and create value for money. Our robust and versatile marketplace solutions have attracted strategic B2B customers and partners across Banking, Finance, and Insurance sectors who rely on us for:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative h-[500px] rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl"
            >
              {/* Background Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />


              {/* Default Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-0"></div>

              {/* Hover Solid Overlay */}
              <div className="absolute inset-0 bg-zinc-900/95 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-500">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                    {service.title}
                  </h3>

                  <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
                    <p className="text-gray-200 mb-6 leading-relaxed text-sm">
                      {service.description}
                    </p>

                    <a href="/get-started" className="inline-flex items-center text-white font-semibold border-b-2 border-primary-red pb-1 hover:text-primary-red transition-colors duration-300">
                      Explore Solutions
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>

                  {/* Initial State Indicator (Visible when not hovered) */}
                  <div className="group-hover:hidden mt-2">
                    <span className="inline-flex items-center text-white/80 text-sm font-medium">
                      Learn More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

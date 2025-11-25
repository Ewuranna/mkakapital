import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Mission Card & Global Reach Image */}
          <div className="space-y-8">
            {/* Global Reach Image */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group relative">
              <div className="h-72 overflow-hidden relative">
                <Image
                  src="/pexels-edmond-dantes-8555600.jpg"
                  alt="Global Business Network"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-bold text-lg">Global Reach</p>
                  <p className="text-sm text-gray-200">Connecting markets worldwide</p>
                </div>
              </div>
            </div>

            {/*  Mission Card  */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-secondary-teal/10 text-secondary-teal rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-typography-black">Our Mission</h3>
              </div>

              <p className="text-text-secondary leading-relaxed mb-8 text-lg">
                We exist to promote business and improve livelihoods through innovative trade solutions and business support services. We seek to create a proactive and dynamic marketplace that serves as a friend to society — making services accessible to businesses of all sizes while delivering exceptional service and sustainable growth.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Integrity", "Speed", "Transparency", "Professionalism"].map((value, index) => (
                  <span key={index} className="bg-gray-100 text-typography-black px-4 py-2 rounded-full text-sm font-medium hover:bg-secondary-teal hover:text-white transition-colors duration-300 cursor-default">
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column -  Features */}
          <div className="space-y-8">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-typography-black mb-4">What Sets Us Apart</h3>
              <p className="text-text-secondary text-lg">We combine deep industry expertise with cutting-edge technology to deliver superior results.</p>
            </div>

            <div className="grid gap-6">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: "Lightning Fast",
                  description: "Decisions in days, not weeks. Our streamlined digital process ensures rapid approval and funding.",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  ),
                  title: "Fully Integrated",
                  description: "One partner for all your business needs. Complete ecosystem from financing to marketing support.",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  ),
                  title: "Industry Experts",
                  description: "Deep sector knowledge and certified professionals with decades of combined experience.",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: "Flexible & Agile",
                  description: "Tailored solutions that adapt to your unique business requirements and market conditions.",
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-secondary-teal/30 hover:shadow-md transition-all duration-300 group flex items-start gap-5">
                  <div className={`w-12 h-12 bg-secondary-teal/5 text-secondary-teal rounded-xl flex items-center justify-center group-hover:bg-secondary-teal group-hover:text-white transition-all duration-300 flex-shrink-0`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-typography-black mb-2 group-hover:text-secondary-teal transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-text-secondary text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
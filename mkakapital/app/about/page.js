import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '../components/Reveal';
import GrowthGraph from '../components/GrowthGraph';

export const metadata = {
  title: 'About Us - MKA Kapital & Marketing Ltd',
  description: 'Learn about MKA Kapital & Marketing Ltd\'s mission, values and journey in transforming global trade finance.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        {/* Modern Hero Section */}
        <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gray-50/50 skew-x-12 translate-x-1/4" />
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary-red/5 rounded-full blur-3xl mix-blend-multiply animate-blob" />
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary-teal/5 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-2000" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 mb-6 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-primary-red"></span>
                  <span className="text-xs font-bold tracking-wider text-text-secondary uppercase">About MKA Kapital & Marketing Ltd</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-typography-black mb-6 leading-tight">
                  Your Trusted Partner in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-red to-secondary-teal">Innovative Solutions</span>
                </h1>
                <p className="text-lg text-text-secondary mb-8 leading-relaxed max-w-lg">
                  MKA Kapital & Marketing Limited delivers tailored mobile payment systems, asset financing and commercial agency solutions that help Ghanaian businesses and households drive convenience and growth.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/services" className="px-8 py-4 bg-primary-red text-white rounded-xl font-semibold hover:bg-red-600 transition-all shadow-lg shadow-primary-red/20 hover:shadow-primary-red/30 hover:-translate-y-0.5">
                    Our Services
                  </Link>
                  <Link href="/contact" className="px-8 py-4 bg-white text-typography-black border border-gray-200 rounded-xl font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all">
                    Contact Us
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={0.2} className="relative">
                <div className="relative h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <Image
                    src="/pexels-civan-9836373.jpg"
                    alt="MKA Team"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                {/* Floating Stats Card */}
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs animate-float hidden md:block">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-typography-black">5+</p>
                      <p className="text-sm text-text-secondary">Years of Excellence</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Vision and Mission Section */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-red/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-teal/5 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <Reveal>
                <div className="inline-block p-2 bg-white rounded-lg mb-4 shadow-sm border border-gray-100">
                  <span className="text-primary-red font-semibold text-sm uppercase tracking-wider">Our Purpose</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-typography-black mb-4">
                  Vision & Mission
                </h2>
                <p className="text-text-secondary text-lg">
                  Driven by purpose, guided by values, focused on impact.
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Vision Card */}
              <Reveal delay={0.1}>
                <div className="group relative bg-white rounded-3xl p-10 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Background Gradient */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-red/10 to-transparent rounded-full blur-2xl -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-500"></div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-primary-red/10 text-primary-red flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary-red group-hover:text-white transition-all duration-300">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-typography-black mb-4">Our Vision</h3>
                    <p className="text-text-secondary text-lg leading-relaxed mb-6">
                      To be Ghana's leading provider of innovative mobile payment systems and commercial agency solutions, empowering businesses and individuals to achieve financial inclusion and sustainable growth.
                    </p>

                    {/* Decorative Image Grid */}
                    <div className="grid grid-cols-3 gap-2 mt-6">
                      <div className="relative h-32 rounded-xl overflow-hidden bg-gradient-to-br from-primary-red/20 to-primary-red/5">
                        <Image
                          src="/pexels-henri-mathieu-8349428.jpg"
                          alt="Vision"
                          fill
                          className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                          sizes="150px"
                        />
                      </div>
                      <div className="relative h-32 rounded-xl overflow-hidden bg-gradient-to-br from-primary-red/20 to-primary-red/5">
                        <Image
                          src="/pexels-civan-9836373.jpg"
                          alt="Growth"
                          fill
                          className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                          sizes="150px"
                        />
                      </div>
                      <div className="relative h-32 rounded-xl overflow-hidden bg-gradient-to-br from-primary-red/20 to-primary-red/5">
                        <Image
                          src="/pexels-thirdman-5319357.jpg"
                          alt="Success"
                          fill
                          className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                          sizes="150px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Mission Card */}
              <Reveal delay={0.2}>
                <div className="group relative bg-white rounded-3xl p-10 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Background Gradient */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-secondary-teal/10 to-transparent rounded-full blur-2xl -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-500"></div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-secondary-teal/10 text-secondary-teal flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-secondary-teal group-hover:text-white transition-all duration-300">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-typography-black mb-4">Our Mission</h3>
                    <p className="text-text-secondary text-lg leading-relaxed mb-6">
                      To deliver tailored, reliable and efficient solutions that bridge financial gaps, eliminate supply challenges and create measurable value for our clients across Ghana.
                    </p>

                    {/* Mission Points */}
                    <ul className="space-y-3">
                      {[
                        "Provide seamless mobile money services",
                        "Enable accessible asset financing",
                        "Build strategic commercial partnerships",
                        "Drive operational excellence"
                      ].map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-secondary-teal/20 text-secondary-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-typography-black font-medium text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Why Work With Us - Modern Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Reveal>
                <h2 className="text-3xl sm:text-4xl font-bold text-typography-black mb-4">Why Choose MKA Kapital & Marketing Ltd?</h2>
                <p className="text-text-secondary text-lg">
                  We combine local expertise with global standards to deliver solutions that truly matter.
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Proven Track Record",
                  desc: "Since 2017, we have consistently delivered value to our clients across multiple sectors.",
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                },
                {
                  title: "Sector Expertise",
                  desc: "Deep understanding of mobile money, asset finance and commercial trading landscapes.",
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                },
                {
                  title: "Client-Centric",
                  desc: "Flexible solutions tailored to the unique needs of every business and individual we serve.",
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z" />
                }
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="group p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300">
                    <div className="w-14 h-14 rounded-xl bg-white text-primary-red shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary-red group-hover:text-white transition-all duration-300">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {item.icon}
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-typography-black mb-3">{item.title}</h3>
                    <p className="text-text-secondary leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Modern Animated Graph Section */}
        <section className="py-24 bg-typography-black text-white overflow-hidden relative">
          {/* Background Gradients */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-red rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary-teal rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <Reveal>
                <div className="inline-block px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm mb-6 border border-white/10">
                  <span className="text-primary-red font-bold tracking-wider uppercase text-sm">Our Trajectory</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Consistent Growth <br />
                  <span className="text-gray-400">Year After Year</span>
                </h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  From our humble beginnings with a lean team, MKA Kapital has grown into a trusted partner with a nationwide presence. Our commitment to Research and Development remains the backbone of our strategic positioning.
                </p>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-4xl font-bold text-white mb-1">2017</p>
                    <p className="text-sm text-gray-400 uppercase tracking-wider">Established</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-white mb-1">100%</p>
                    <p className="text-sm text-gray-400 uppercase tracking-wider">Commitment</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl relative">
                  <div className="absolute top-4 right-6 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-primary-red animate-pulse"></span>
                    <span className="text-xs text-gray-400 font-medium">Live Growth Metrics</span>
                  </div>

                  {/* Custom CSS Chart */}
                  <GrowthGraph />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Our People Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <Reveal className="order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4 mt-8">
                    <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                      <Image src="/pexels-henri-mathieu-8349428.jpg" alt="Team 1" fill className="object-cover hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                      <Image src="/pexels-anthonyshkraba-production-8837549.jpg" alt="Team 2" fill className="object-cover hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                      <Image src="/pexels-thirdman-5319357.jpg" alt="Team 3" fill className="object-cover hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                      <Image src="/pexels-mikhail-nilov-9301824.jpg" alt="Team 4" fill className="object-cover hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal className="order-1 lg:order-2">
                <blockquote className="text-3xl sm:text-4xl font-bold text-typography-black leading-tight mb-6">
                  <span className="text-primary-red">“</span>
                  Our people are our greatest asset. We invest in talent to drive the future.
                  <span className="text-primary-red">”</span>
                </blockquote>
                <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                  We believe that a company is only as good as the people behind it. Our team is carefully selected and strategically developed to meet both the current and future needs of the company and our clients.
                </p>
                <Link href="/team" className="inline-flex items-center gap-2 text-primary-red font-bold hover:gap-3 transition-all">
                  Meet Our Team
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Reveal>
                <h2 className="text-3xl sm:text-4xl font-bold text-typography-black mb-4">Core Values</h2>
                <p className="text-text-secondary text-lg">
                  The principles that guide every decision we make and every relationship we build.
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Transparency",
                  desc: "We believe in open, honest and accountable dealings that build lasting trust.",
                  color: "bg-blue-50 text-blue-600"
                },
                {
                  title: "Integrity",
                  desc: "We do what is right, always. Ethical practices form our foundation.",
                  color: "bg-green-50 text-green-600"
                },
                {
                  title: "Professionalism",
                  desc: "We maintain a high level of conduct, appearance and performance.",
                  color: "bg-purple-50 text-purple-600"
                },
                {
                  title: "Service",
                  desc: "We go the extra mile to create exceptional experiences at every touchpoint.",
                  color: "bg-orange-50 text-orange-600"
                },
                {
                  title: "Speed",
                  desc: "We deliver timely and efficiently without compromise.",
                  color: "bg-red-50 text-red-600"
                }
              ].map((value, index) => (
                <Reveal key={index} delay={index * 0.1}>
                  <div className="group h-full p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className={`w-12 h-12 rounded-xl ${value.color} flex items-center justify-center mb-6 text-xl font-bold`}>
                      {value.title.charAt(0)}
                    </div>
                    <h3 className="text-xl font-bold text-typography-black mb-3">{value.title}</h3>
                    <p className="text-text-secondary leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About Us - MKA Kapital',
  description: 'Learn about MKA Kapital\'s mission, values, and journey in transforming global trade finance.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden py-6 ">
          {/* Radial spotted gradient background */}
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 15%, rgba(239,68,68,0.06), transparent 40%), radial-gradient(circle at 80% 20%, rgba(20,184,166,0.08), transparent 40%), radial-gradient(circle at 10% 80%, rgba(6,182,212,0.06), transparent 40%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "radial-gradient( circle at 0 0, rgba(2,6,23,0.04), transparent 55% )",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "radial-gradient(rgba(2,6,23,0.10) 1px, transparent 1px)",
                backgroundSize: "16px 16px",
                backgroundPosition: "0 0",
                opacity: 0.12,
              }}
            />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-16 sm:py-20">
              {/* Left: Copy */}
              <div>
        
                <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-typography-black mb-6 leading-tight">
                  Empowering Growth Through Innovative Trade Solutions
                </h1>
                <p className="text-base text-text-secondary max-w-2xl mb-8">
                  MKA Kapital is a trusted Ghanaian company providing tailored trade solutions and asset financing to help businesses thrive with speed, transparency, and professionalism.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/services" className="bg-primary-red text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-red-600 transition-colors text-center">
                    Explore Services
                  </Link>
                  <Link href="/contact" className="border-2 border-primary-red text-primary-red px-6 py-3 rounded-lg text-sm font-semibold hover:bg-primary-red hover:text-white transition-colors text-center">
                    Talk to Us
                  </Link>
                </div>
              </div>

              {/* Right: Media card */}
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-light-gray">
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent z-10"></div>
                  <div className="relative w-full h-[360px]">
                    <Image
                      src="/pexels-mikhail-nilov-9301824.jpg"
                      alt="Corporate skyline"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                {/* Accent badges */}
                <div className="absolute -top-4 -left-4 w-28 h-28 bg-secondary-teal/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-primary-red/10 rounded-full blur-2xl"></div>
              </div>
            </div>

            {/* Key facts strip */}
            <div className="mt-10 sm:mt-12">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="rounded-xl border border-light-gray bg-white p-4 sm:p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary-teal/10 text-secondary-teal flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3M3 11h18M5 19h14a2 2 0 002-2v-6H3v6a2 2 0 002 2z"/></svg>
                    </div>
                    <div>
                      <div className="text-sm text-text-secondary">Established</div>
                      <div className="text-typography-black font-semibold">2019</div>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border border-light-gray bg-white p-4 sm:p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-red/10 text-primary-red flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"/></svg>
                    </div>
                    <div>
                      <div className="text-sm text-text-secondary">Headquarters</div>
                      <div className="text-typography-black font-semibold">Airport City, Accra</div>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border border-light-gray bg-white p-4 sm:p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent-navy/10 text-accent-navy flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18M3 17h18"/></svg>
                    </div>
                    <div>
                      <div className="text-sm text-text-secondary">Focus</div>
                      <div className="text-typography-black font-semibold">Trade & Asset Financing</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-14 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 max-w-6xl mx-auto">
              <div className="lg:col-span-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-typography-black mb-6">Company Overview</h2>
                <div className="space-y-5 text-base text-text-secondary leading-relaxed">
                  <p>
                    Registered on 21st May 2019, MKA Kapital Limited is a Ghanaian company duly incorporated under the laws of Ghana by the Registrar General&apos;s Department.
                  </p>
                  <p>
                    We specialize in delivering tailored solutions across general trading, asset financing, and trade financing, helping clients complete transactions seamlessly and efficiently.
                  </p>
                  <p>
                    Our company is committed to delivering reliable, innovative, and efficient support services to both corporate and retail clients.
                  </p>
                  <p>
                    We are strategically headquartered at the 4th Floor, SSNIT Emporium Building, Airport City, Accra, Ghana, serving as a trusted partner to businesses and households alike.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="bg-gray-50 border border-light-gray rounded-2xl p-5 sm:p-6">
                  <h3 className="text-xl font-bold text-typography-black mb-4">At a Glance</h3>
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="relative h-24 rounded-xl overflow-hidden">
                      <Image src="/pexels-anthonyshkraba-production-8837549.jpg" alt="Teamwork" fill sizes="(max-width: 1024px) 50vw, 20vw" className="object-cover" />
                    </div>
                    <div className="relative h-24 rounded-xl overflow-hidden">
                      <Image src="/pexels-edmond-dantes-8555600.jpg" alt="Professional meeting" fill sizes="(max-width: 1024px) 50vw, 20vw" className="object-cover" />
                    </div>
                    <div className="relative h-24 rounded-xl overflow-hidden">
                      <Image src="/pexels-henri-mathieu-8349428.jpg" alt="City skyline" fill sizes="(max-width: 1024px) 50vw, 20vw" className="object-cover" />
                    </div>
                    <div className="relative h-24 rounded-xl overflow-hidden">
                      <Image src="/pexels-mikhail-nilov-9301824.jpg" alt="Strategy planning" fill sizes="(max-width: 1024px) 50vw, 20vw" className="object-cover" />
                    </div>
                  </div>
                  <ul className="space-y-3 text-sm text-text-secondary">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 inline-block w-2 h-2 rounded-full bg-primary-red"></span>
                      Registered: 21st May 2019
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 inline-block w-2 h-2 rounded-full bg-secondary-cyan"></span>
                      Headquarters: SSNIT Emporium, Airport City, Accra
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 inline-block w-2 h-2 rounded-full bg-secondary-teal"></span>
                      Focus: Trade solutions, asset financing, support services
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Growth & People */}
        <section className="py-12 sm:py-14 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-light-gray hover:border-secondary-teal/30 transition-all duration-300 relative overflow-hidden">
                <div className="absolute -right-6 -top-6 w-28 h-28 bg-secondary-teal/10 rounded-full blur-2xl"></div>
                <h3 className="text-2xl font-bold text-typography-black mb-4">Our Growth</h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  From our humble beginnings with a lean team, MKA Kapital has grown into a trusted partner with a broad network of professionals and B2B relationships. Our growth is driven by a deep commitment to research and development, which remains the backbone of our strategic positioning in the market.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-light-gray hover:border-secondary-teal/30 transition-all duration-300 relative overflow-hidden">
                <div className="absolute -left-6 -bottom-6 w-28 h-28 bg-primary-red/10 rounded-full blur-2xl"></div>
                <h3 className="text-2xl font-bold text-typography-black mb-4">Our People</h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  We believe our people are our greatest asset. Our team is carefully selected and strategically developed to meet both the current and future needs of the company and our clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-12 sm:py-14 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-gray-50 rounded-2xl p-8 border border-light-gray">
                <h3 className="text-2xl font-bold text-typography-black mb-4">Mission</h3>
                <div className="space-y-4 text-base text-text-secondary leading-relaxed">
                  <p>We exist to promote business and improve livelihoods through innovative trade solutions and business support services.</p>
                  <p>We seek to empower people and businesses for sustainable growth and wealth creation.</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 border border-light-gray">
                <h3 className="text-2xl font-bold text-typography-black mb-4">Vision</h3>
                <p className="text-base text-text-secondary leading-relaxed">To be the global leader in the provision of innovative trade solutions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-14 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold text-typography-black mb-6">Core Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[ 
                  { title: 'Integrity', desc: 'We do what is right, always.' },
                  { title: 'Service', desc: 'We go the extra mile to meet client needs.' },
                  { title: 'Transparency', desc: 'We believe in open, honest, and accountable dealings.' },
                  { title: 'Speed', desc: 'We deliver timely and efficiently without compromise.' },
                  { title: 'Professionalism', desc: 'We maintain a high level of conduct, appearance and performance.' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg border border-light-gray hover:border-secondary-teal/30 transition-all duration-300 relative overflow-hidden group">
                    <div className="absolute -right-8 -top-8 w-24 h-24 bg-secondary-teal/10 rounded-full blur-2xl group-hover:bg-secondary-teal/20 transition-colors"></div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary-teal/10 text-secondary-teal flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-typography-black mb-1">{item.title}</h4>
                        <p className="text-sm text-text-secondary">{item.desc}</p>
                      </div>
                    </div>
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

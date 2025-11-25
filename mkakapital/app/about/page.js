import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '../components/Reveal';

export const metadata = {
  title: 'About Us - MKA Global Investment',
  description: 'Learn about MKA Global Investment\'s mission, values, and journey in transforming global trade finance.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Minimal Hero */}
        <section className="relative overflow-hidden py-14 sm:py-18">
          {/* Dark radial overlays */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            {/* Mesh-style red radials */}
            <div
              className="absolute inset-0 opacity-80"
              style={{
                background:
                  'radial-gradient(40% 40% at 0% 0%, rgba(239,68,68,0.28) 0%, rgba(239,68,68,0.08) 38%, transparent 62%),\
                   radial-gradient(35% 35% at 100% 100%, rgba(239,68,68,0.22) 0%, rgba(239,68,68,0.06) 42%, transparent 66%),\
                   radial-gradient(22% 22% at 70% 30%, rgba(239,68,68,0.16) 0%, transparent 60%)',
              }}
            />
            {/* Conic accent band */}
            <div
              className="absolute inset-0 opacity-35 mix-blend-multiply"
              style={{
                backgroundImage:
                  'conic-gradient(from 210deg, rgba(239,68,68,0.18), rgba(239,68,68,0), rgba(239,68,68,0.18))',
                WebkitMaskImage:
                  'radial-gradient(circle at 50% 50%, transparent 45%, black 52%, black 62%, transparent 70%)',
                maskImage:
                  'radial-gradient(circle at 50% 50%, transparent 45%, black 52%, black 62%, transparent 70%)',
              }}
            />
            {/* Fine red dot texture */}
            <div
              className="absolute inset-0 opacity-25"
              style={{
                backgroundImage: 'radial-gradient(rgba(239,68,68,0.10) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
            />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center pt-10">
              <div>
                <div className="text-xs uppercase tracking-wider text-text-secondary mb-3">About MKA Global Investment </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-typography-black mb-6 leading-tight">Your Trusted Partner in Financial Solutions</h1>
                <p className="text-base text-text-secondary mb-6"> MKA Global Investment delivers tailored asset financing, trade financing,
                  and general trading solutions that help Ghanaian businesses and households complete transactions seamlessly and efficiently.</p>
                <Link href="/services" className="inline-block bg-primary-red text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-red-600 transition-colors">Learn More</Link>
              </div>
              <div className="relative w-full h-56 sm:h-64 lg:h-72 xl:h-110 mt-5">
                <Image src="/pexels-mikhail-nilov-9301824.jpg" alt="MKA Global Investment mark" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover rounded-2xl border border-primary-red shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Why work with us? Panel */}
        <section className="py-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[28px] bg-gray-50 border border-light-gray p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left column  */}
                <div className="lg:col-span-7">
                  {/* Top small cards row */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white rounded-xl p-5 border border-light-gray">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-primary-red/10 text-primary-red flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-typography-black">Our Mission</h3>
                      </div>
                      <p className="text-sm text-text-secondary">We exist to promote business and improve livelihoods through innovative trade solutions
                        and business support services.</p>
                    </div>
                    <div className="bg-white rounded-xl p-5 border border-light-gray">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-primary-red/10 text-primary-red flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-typography-black">Our Vision</h3>
                      </div>
                      <p className="text-sm text-text-secondary">To be the global leader in the provision of innovative trade solutions..</p>
                    </div>
                  </div>
                  {/* Feature image large */}
                  <div className="relative w-full h-64 sm:h-80 md:h-76 rounded-2xl overflow-hidden border border-light-gray">
                    <Image src="/pexels-mikhail-nilov-9301824.jpg" alt="Work sample" fill sizes="100vw" className="object-cover" />
                  </div>
                </div>

                {/* Right column */}
                <div className="lg:col-span-5 flex flex-col justify-between mt-5 pl-5">
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-typography-black mb-6">Why work with us?</h2>
                    {/* Icon boxes */}
                    <div className="space-y-3 mb-10">
                      <div className="flex items-center gap-4 bg-white rounded-xl border border-light-gray p-4">
                        <div className="w-10 h-10 rounded-lg bg-secondary-teal/10 text-secondary-teal flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" /></svg>
                        </div>
                        <p className="text-sm text-typography-black">Proven track record since 2019</p>
                      </div>
                      <div className="flex items-center gap-4 bg-white rounded-xl border border-light-gray p-4">
                        <div className="w-10 h-10 rounded-lg bg-secondary-teal/10 text-secondary-teal flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101M9 15l6-6" /></svg>
                        </div>
                        <p className="text-sm text-typography-black">Expertise across multiple sectors</p>
                      </div>
                      <div className="flex items-center gap-4 bg-white rounded-xl border border-light-gray p-4">
                        <div className="w-10 h-10 rounded-lg bg-secondary-teal/10 text-secondary-teal flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                        </div>
                        <p className="text-sm text-typography-black">Flexible, client-focused solutions</p>
                      </div>
                      <div className="flex items-center gap-4 bg-white rounded-xl border border-light-gray p-4">
                        <div className="w-10 h-10 rounded-lg bg-secondary-teal/10 text-secondary-teal flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <p className="text-sm text-typography-black">Strong B2B partnerships</p>
                      </div>
                      <div className="flex items-center gap-4 bg-white rounded-xl border border-light-gray p-4">
                        <div className="w-10 h-10 rounded-lg bg-secondary-teal/10 text-secondary-teal flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <p className="text-sm text-typography-black">Commitment to innovation and results</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Growth - asymmetric layout with line-art chart */}
        <section aria-labelledby="our-growth-heading" className="py-14 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <article className="max-w-6xl mx-auto">
              <Reveal as="header">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary-red/10 text-primary-red flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 17l5-5 4 4 7-7" /></svg>
                  </div>
                  <h2 id="our-growth-heading" className="text-3xl sm:text-4xl font-bold text-typography-black">Our Growth</h2>
                </div>
              </Reveal>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative">
                {/* subtle background accent */}
                <div className="pointer-events-none absolute -z-10 inset-0 opacity-20" style={{
                  background:
                    'radial-gradient(30% 50% at 0% 0%, rgba(239,68,68,0.18) 0%, transparent 70%),radial-gradient(24% 40% at 100% 80%, rgba(20,184,166,0.16) 0%, transparent 70%)'
                }} />
                <Reveal className="lg:col-span-5">
                  <p className="text-sm sm:text-base text-text-secondary leading-7">
                    From our humble beginnings with a lean team, MKA Global Investment has grown into a trusted partner with a broad network of professionals and B2B relationships. Our growth is driven by a deep commitment to research and development, which remains the backbone of our strategic positioning in the market.
                  </p>
                  <div className="mt-6">
                    <Link href="/get-started" className="inline-block bg-primary-red text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-red-600 transition-colors">Get Started</Link>
                  </div>
                </Reveal>
                <Reveal className="lg:col-span-7">
                  <div role="img" aria-label="Company growth from 2019 with milestones" className="relative w-full h-64 sm:h-72 lg:h-80 rounded-xl border border-light-gray bg-white p-4 sm:p-6 shadow-sm">
                    <svg viewBox="0 0 600 240" className="w-full h-full">
                      {/* axes */}
                      <line x1="40" y1="210" x2="560" y2="210" stroke="rgba(0,0,0,0.18)" strokeWidth="1.5" />
                      <line x1="40" y1="30" x2="40" y2="210" stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" />
                      {/* horizontal grid lines */}
                      {[180, 150, 120, 90].map((y, i) => (
                        <line key={i} x1="40" y1={y} x2="560" y2={y} stroke="rgba(0,0,0,0.06)" strokeWidth="1" strokeDasharray="4 4" />
                      ))}
                      {/* area fill (brand red, soft) */}
                      <path d="M70 180 L170 160 L270 135 L370 110 L510 90 L510 210 L70 210 Z" fill="rgba(239,68,68,0.14)" />
                      {/* line (brand red, rounded) */}
                      <polyline points="70,180 170,160 270,135 370,110 510,90" fill="none" stroke="rgba(239,68,68,1)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      {/* markers (colored pointers with white stroke for clarity) */}
                      {[{ x: 70, y: 180, label: 'Established' }, { x: 170, y: 160, label: 'First Client' }, { x: 270, y: 135, label: '10+ Partnerships' }, { x: 370, y: 110, label: 'R&D Acceleration' }, { x: 510, y: 90, label: 'Nationwide Presence' }].map((p, i) => (
                        <g key={i}>
                          <circle cx={p.x} cy={p.y} r="5" fill="rgba(239,68,68,1)" stroke="#fff" strokeWidth="2" />
                          <text x={p.x} y={p.y - 12} textAnchor="middle" fontSize="11" fill="rgba(0,0,0,0.68)">{p.label}</text>
                        </g>
                      ))}
                      {/* x ticks and year labels */}
                      {[70, 170, 270, 370, 510].map((x, i) => (
                        <g key={i}>
                          <line x1={x} y1="210" x2={x} y2="214" stroke="rgba(0,0,0,0.25)" strokeWidth="1.5" />
                          <text x={x} y="230" textAnchor="middle" fontSize="12" fontWeight="500" fill="rgba(0,0,0,0.7)">{2019 + i}</text>
                        </g>
                      ))}
                    </svg>
                  </div>
                </Reveal>
              </div>
            </article>
          </div>
        </section>

        {/* Our People - offset with pull quote and mosaic */}
        <section aria-labelledby="our-people-heading" className="py-14 relative overflow-hidden bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
              <div className="lg:col-span-6 lg:m-8 pr-15">

                <Reveal>
                  <blockquote className="text-5xl sm:text-2xl text-typography-black font-semibold leading-relaxed relative pl-4">
                    <span className="absolute left-0 top-0 text-primary-red text-2xl leading-none">“</span>
                    Our people are our greatest asset.
                  </blockquote>
                </Reveal>
                <Reveal>
                  <p className="mt-4 text-sm sm:text-base text-text-secondary leading-7">
                    We believe our people are our greatest asset. Our team is carefully selected and strategically developed to meet both the current and future needs of the company and our clients.
                  </p>
                </Reveal>
                <Reveal>
                  <div className="mt-6">
                    <Link href="/team" className="inline-block bg-primary-red text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-red-600 transition-colors">Meet Our Team</Link>
                  </div>
                </Reveal>
              </div>
              <div className="lg:col-span-6">
                <Reveal>
                  <div className="relative">
                    {/* background accent */}
                    <div className="absolute inset-0 -z-10 opacity-25" style={{
                      background:
                        'radial-gradient(28% 40% at 85% 15%, rgba(34,211,238,0.18) 0%, transparent 70%),\\\n                         radial-gradient(24% 36% at 10% 90%, rgba(20,184,166,0.16) 0%, transparent 70%)'
                    }} />
                    <div className="flex gap-3 h-80 sm:h-72">
                      <div className="relative flex-1 rounded-2xl overflow-hidden">
                        <Image src="/pexels-henri-mathieu-8349428.jpg" alt="Team collaboration" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top" />
                      </div>
                      <div className="flex flex-col gap-3 w-32 sm:w-40">
                        <div className="relative flex-1 rounded-2xl overflow-hidden">
                          <Image src="/pexels-anthonyshkraba-production-8837549.jpg" alt="Team focus" fill sizes="160px" className="object-cover object-top" />
                        </div>
                        <div className="relative flex-1 rounded-2xl overflow-hidden">
                          <Image src="/pexels-thirdman-5319357.jpg" alt="Professional team" fill sizes="160px" className="object-cover object-top" />
                        </div>
                      </div>
                    </div>

                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values - Modern Grid Design */}
        <section aria-labelledby="core-values-heading" className="py-20 relative overflow-hidden bg-gray-50/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <article className="max-w-7xl mx-auto">
              <Reveal as="header" className="mb-16 text-center">
                <h2 id="core-values-heading" className="text-4xl sm:text-5xl font-bold text-typography-black mb-6">Core Values</h2>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
                  The principles that guide every decision we make and every relationship we build.
                </p>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Integrity",
                    desc: "We do what is right, always. Our commitment to ethical practices forms the foundation of every business relationship.",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                      </svg>
                    ),
                    color: "text-primary-red",
                    bg: "bg-primary-red/5"
                  },
                  {
                    title: "Service",
                    desc: "We go the extra mile to meet client needs, ensuring exceptional experiences at every touchpoint of our journey together.",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h2l3 7 4-14 3 7h6" />
                      </svg>
                    ),
                    color: "text-secondary-teal",
                    bg: "bg-secondary-teal/5"
                  },
                  {
                    title: "Transparency",
                    desc: "We believe in open, honest, and accountable dealings that build lasting trust with our partners and clients.",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm7 0a10 10 0 11-20 0 10 10 0 0120 0z" />
                      </svg>
                    ),
                    color: "text-primary-red",
                    bg: "bg-primary-red/5"
                  },
                  {
                    title: "Speed",
                    desc: "We deliver timely and efficiently without compromise, meeting deadlines with precision and reliability.",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    ),
                    color: "text-secondary-teal",
                    bg: "bg-secondary-teal/5"
                  },
                  {
                    title: "Professionalism",
                    desc: "We maintain a high level of conduct, appearance and performance in all our endeavors and interactions.",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    ),
                    color: "text-primary-red",
                    bg: "bg-primary-red/5"
                  }
                ].map((value, index) => (
                  <Reveal key={index} delay={index * 0.1}>
                    <div className="group h-full p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      <div className={`w-14 h-14 rounded-xl ${value.bg} ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-bold text-typography-black mb-4">{value.title}</h3>
                      <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                        {value.desc}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </article>
          </div>
        </section>

        {/* Minimal footer spacing before site Footer */}
      </main>
      <Footer />
    </div>
  );
}

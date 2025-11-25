import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Services - MKA Global Investment',
  description: 'Discover MKA Global Investment\'s service offerings across trade, financing, mining support, agro, marketing, warehousing and more.',
};

const services = [
  {
    title: 'General Trade & E-commerce',
    description: 'Facilitating general trade operations and e-commerce enablement.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18v4H3zM3 7l3.6 9.6A2 2 0 008.47 18H17a2 2 0 001.9-1.37L21 11M16 13a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    )
  },
  {
    title: 'Business & Project Financing',
    description: 'Facilitating general trade, business and project financing.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    )
  },
  {
    title: 'Mining, Oil & Gas Support',
    description: 'Support services for the mining, oil and gas sectors.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    )
  },
  {
    title: 'Commodities & Agro Trading',
    description: 'Trading and sourcing of commodities and other agro products.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 20l4-16m2 16l4-16M5 12h14" /></svg>
    )
  },
  {
    title: 'Agro Processing',
    description: 'Processing capabilities for agro-based inputs and outputs.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12m6-6H6" /></svg>
    )
  },
  {
    title: 'Sales & Marketing',
    description: 'Go-to-market support to drive reach and conversion.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5h10M11 9h7M11 13h4M4 7h.01M4 11h.01M4 15h.01" /></svg>
    )
  },
  {
    title: 'Collateral & Warehouse',
    description: 'Collateral management and professional warehousing.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10l9-6 9 6v8a2 2 0 01-2 2h-4a2 2 0 01-2-2V12H9v6a2 2 0 01-2 2H3z" /></svg>
    )
  },
  {
    title: 'Revenue Mobilization & Assurance',
    description: 'Revenue mobilization, assurance and management.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3v18m-7-7h18" /></svg>
    )
  },
  {
    title: 'MoMo Agents',
    description: 'Mobile money agent network enablement and operations.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M6 10h12M9 13h6M4 17h16" /></svg>
    )
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        {/* Modern Hero Section */}
        <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
          {/* Background Accents */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary-red/5 rounded-full blur-3xl mix-blend-multiply animate-blob"></div>
            <div className="absolute top-20 right-10 w-72 h-72 bg-secondary-teal/5 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-secondary-cyan/5 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 mb-8">
                <span className="w-2 h-2 rounded-full bg-primary-red"></span>
                <span className="text-sm font-medium text-text-secondary">Comprehensive Solutions</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-typography-black mb-8 tracking-tight">
                Services Built for <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-red to-secondary-teal">Modern Business</span>
              </h1>

              <p className="text-lg sm:text-xl text-text-secondary mb-10 leading-relaxed max-w-2xl mx-auto">
                We deliver tailored strategies and operational excellence to help you cut costs, reduce waste, and drive sustainable growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-primary-red text-white rounded-xl font-semibold hover:bg-red-600 transition-all shadow-lg shadow-primary-red/20 hover:shadow-primary-red/30 hover:-translate-y-0.5">
                  Start a Project
                </Link>
                <Link href="/about" className="w-full sm:w-auto px-8 py-4 bg-white text-typography-black border border-gray-200 rounded-xl font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-xl bg-secondary-teal/5 text-secondary-teal flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-typography-black mb-4 group-hover:text-secondary-teal transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-24 rounded-3xl bg-typography-black overflow-hidden relative">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-red rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary-teal rounded-full blur-3xl"></div>
              </div>

              <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-20 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to accelerate your growth?</h2>
                <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                  Join the industry leaders who trust MKA Global Investment for their strategic needs.
                </p>
                <Link href="/contact" className="inline-block px-8 py-4 bg-white text-typography-black rounded-xl font-bold hover:bg-gray-100 transition-colors">
                  Contact Our Experts
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

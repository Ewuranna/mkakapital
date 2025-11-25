import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Services - MKA Global Investment',
  description: 'Discover MKA Global Investment\'s service offerings across trade, financing, mining support, agro, marketing, warehousing and more.',
};

const services = [
  {
    title: 'Mobile Money (MoMo) Services',
    description: 'Secure and efficient mobile money operations across major networks in Ghana — including deposits, withdrawals, airtime & data purchases, bill payments, merchant solutions, and agent network management.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    )
  },
  {
    title: 'Trade, Stock & Asset Finance',
    description: 'Flexible hire purchase financing solutions designed to help individuals and businesses acquire essential assets like home appliances — with repayment terms tailored to customer needs.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    )
  },
  {
    title: 'Sales & Marketing Agency',
    description: 'Professional sales and marketing services for local and international partners — including digital marketing, field sales representation, product activations, market research, and brand distribution support.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
    )
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        {/* Modern Hero Section */}
        <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-15 overflow-hidden">
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
                  Join the industry leaders who trust MKA Kapital & Marketing Limited for their strategic needs.
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

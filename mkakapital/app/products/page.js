import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Products - MKA Global Investment',
  description: 'Explore MKA Global Investment\'s products: Stock Supply, Hire Purchase, and Adinkra Market, built to power everyday growth.',
};

const commodities = [
  'Soya bean',
  'Sorghum',
  'Maize',
  'Milled rice',
  'Cashew',
  'Coffee',
  'Sheanuts'
];

export default function ProductsPage() {
  const tradeCategories = [
    {
      category: "Grains & Legumes",
      items: ["Soya Bean", "Sorghum", "Maize", "Millet", "Groundnut", "Rice"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      )
    },
    {
      category: "Nuts & Tree Crops",
      items: ["Cashew", "Coffee", "Shea Butter", "Coconut Oil"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      category: "Roots, Tubers & Derivatives",
      items: ["Cassava", "Yam", "Plantain", "Starch", "Flour"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      category: "Fruits & Vegetables",
      items: ["Garden Eggs", "Okro", "Pepper", "Mango", "Pineapple"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      )
    },
    {
      category: "Oils & Sweeteners",
      items: ["Vegetable Cooking Oil", "Coconut Oil", "Sugar", "Salt"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        {/* Modern Hero Section */}
        <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
          {/* Background Accents */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
            <div className="absolute top-20 right-0 w-96 h-96 bg-primary-red/5 rounded-full blur-3xl mix-blend-multiply animate-blob"></div>
            <div className="absolute bottom-0 left-10 w-96 h-96 bg-secondary-teal/5 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 mb-8">
                <span className="w-2 h-2 rounded-full bg-secondary-teal"></span>
                <span className="text-sm font-medium text-text-secondary">Our Products & Solutions</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-typography-black mb-8 tracking-tight">
                Practical Solutions for <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-teal to-primary-red">Everyday Growth</span>
              </h1>

              <p className="text-lg sm:text-xl text-text-secondary mb-10 leading-relaxed max-w-2xl mx-auto">
                We deliver practical solutions tailored to support everyday business growth needs. Built for speed, transparency and access.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/get-started" className="w-full sm:w-auto px-8 py-4 bg-primary-red text-white rounded-xl font-semibold hover:bg-red-600 transition-all shadow-lg shadow-primary-red/20 hover:shadow-primary-red/30 hover:-translate-y-0.5">
                  Start Trading
                </Link>
                <Link href="/services" className="w-full sm:w-auto px-8 py-4 bg-white text-typography-black border border-gray-200 rounded-xl font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all">
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What We Trade Section */}
        <section className="py-20 bg-gray-50/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-typography-black mb-4">What We Trade</h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Our platform supports the trade of a wide range of agricultural and agro-processed commodities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {tradeCategories.map((cat, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-secondary-teal/10 text-secondary-teal flex items-center justify-center group-hover:bg-secondary-teal group-hover:text-white transition-colors">
                      {cat.icon}
                    </div>
                    <h3 className="text-xl font-bold text-typography-black">{cat.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item, i) => (
                      <span key={i} className="inline-block px-3 py-1 bg-gray-50 text-text-secondary text-sm rounded-lg border border-gray-100 group-hover:border-secondary-teal/20 transition-colors">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Solutions Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-typography-black mb-4">Our Platforms</h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Specialized solutions designed to eliminate daily supply challenges and bridge financial gaps.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Stock Supply */}
              <div className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-red/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>

                <h3 className="text-2xl font-bold text-typography-black mb-2 relative z-10">Stock Supply</h3>
                <p className="text-sm font-medium text-primary-red mb-4 uppercase tracking-wider relative z-10">Kpa Kpa Kpa Boafo</p>

                <p className="text-text-secondary leading-relaxed mb-6 relative z-10">
                  A fast, reliable stock sourcing solution designed to eliminate daily supply challenges for sole proprietors and SMEs. We connect trusted suppliers and sellers for secure, transparent business.
                </p>

                <ul className="space-y-3 relative z-10">
                  <li className="flex items-start gap-3 text-sm text-text-secondary">
                    <svg className="w-5 h-5 text-secondary-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>Quick stock turnover support</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-text-secondary">
                    <svg className="w-5 h-5 text-secondary-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>Verified supplier network</span>
                  </li>
                </ul>
              </div>

              {/* Hire Purchase */}
              <div className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-teal/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>

                <h3 className="text-2xl font-bold text-typography-black mb-2 relative z-10">Hire Purchase</h3>
                <p className="text-sm font-medium text-secondary-teal mb-4 uppercase tracking-wider relative z-10">To Na Metua</p>

                <p className="text-text-secondary leading-relaxed mb-6 relative z-10">
                  A trusted bridge between consumers and verified suppliers. We pay upfront on your behalf, enabling immediate access to goods with flexible, tailored payment plans.
                </p>

                <ul className="space-y-3 relative z-10">
                  <li className="flex items-start gap-3 text-sm text-text-secondary">
                    <svg className="w-5 h-5 text-secondary-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>Immediate access to goods</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-text-secondary">
                    <svg className="w-5 h-5 text-secondary-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>Flexible payment plans</span>
                  </li>
                </ul>
              </div>

              {/* Adinkra Market */}
              <div className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-cyan/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>

                <h3 className="text-2xl font-bold text-typography-black mb-2 relative z-10">Adinkra Market</h3>
                <p className="text-sm font-medium text-secondary-cyan mb-4 uppercase tracking-wider relative z-10">Agro Marketplace</p>

                <p className="text-text-secondary leading-relaxed mb-6 relative z-10">
                  An e-commerce marketplace connecting farmers and industrial consumers. We improve lives through bespoke services and warehouses with verified conditions.
                </p>

                <ul className="space-y-3 relative z-10">
                  <li className="flex items-start gap-3 text-sm text-text-secondary">
                    <svg className="w-5 h-5 text-secondary-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>Direct farmer-to-consumer</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-text-secondary">
                    <svg className="w-5 h-5 text-secondary-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>Quality assurance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="rounded-3xl bg-typography-black overflow-hidden relative">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-red rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary-teal rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-20 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to grow your business?</h2>
              <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                Whether you need stock, financing, or market access, MKA Global Investment has the solution for you.
              </p>
              <Link href="/get-started" className="inline-block px-8 py-4 bg-white text-typography-black rounded-xl font-bold hover:bg-gray-100 transition-colors">
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

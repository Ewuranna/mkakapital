"use client";

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function ProductsPage() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };
  const tradeCategories = [
    {
      category: "Electronics (Home Appliances)",
      items: ["TVs", "Refrigerators", "Freezers", "Washing Machines", "Air Conditioners", "Microwaves"],
      image: "/pexels-falling4utah-2724749.jpg",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      category: "Mobile Money Services",
      items: ["Deposits", "Withdrawals", "Airtime", "Data", "Bill Payments"],
      image: "/sumup-S8o2yWPu0BM-unsplash.jpg",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        {/* Modern Hero Section with Split Layout */}
        <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 overflow-hidden bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 mb-8 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-secondary-teal"></span>
                  <span className="text-sm font-medium text-text-secondary">Our Products & Solutions</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-typography-black mb-6 tracking-tight leading-tight">
                  Practical Solutions for <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-teal to-primary-red">Everyday Growth</span>
                </h1>

                <p className="text-lg sm:text-xl text-text-secondary mb-10 leading-relaxed max-w-lg">
                  We deliver practical solutions tailored to support everyday business growth needs. Built for speed, transparency, and access.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/get-started" className="px-8 py-4 bg-primary-red text-white rounded-xl font-semibold hover:bg-red-600 transition-all shadow-lg shadow-primary-red/20 hover:shadow-primary-red/30 hover:-translate-y-0.5 text-center">
                    Get Started
                  </Link>
                  <Link href="/services" className="px-8 py-4 bg-white text-typography-black border border-gray-200 rounded-xl font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all text-center">
                    Explore Services
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="relative h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/pexels-king-shooter-664873673-34878652.jpg"
                    alt="MKA Products"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs hidden sm:block">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <p className="font-bold text-typography-black">Trusted Quality</p>
                      <p className="text-xs text-text-secondary">Verified Partners</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer Section - Redesigned */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-typography-black mb-4">What We Offer</h2>
              <p className="text-text-secondary max-w-2xl mx-auto text-lg">
                Our product range supports individuals, SMEs, and corporate clients with essential goods and financial solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {tradeCategories.map((cat, idx) => (
                <div
                  key={idx}
                  className="group relative h-[450px] rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  onClick={() => toggleCard(idx)}
                  onMouseEnter={() => setExpandedCard(idx)}
                  onMouseLeave={() => setExpandedCard(null)}
                >
                  {/* Background Image with Zoom Effect */}
                  <Image
                    src={cat.image}
                    alt={cat.category}
                    fill
                    className={`object-cover transition-transform duration-700 ${expandedCard === idx ? 'scale-110' : 'scale-100'}`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/90 transition-all duration-500 ${expandedCard === idx ? 'via-black/40' : ''}`}></div>

                  {/* Content Container */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className={`transform transition-transform duration-500 ${expandedCard === idx ? 'translate-y-0' : 'translate-y-4'}`}>
                      {/* Icon Badge */}
                      <div className={`w-16 h-16 rounded-2xl backdrop-blur-md border text-white flex items-center justify-center mb-6 shadow-lg transition-all duration-500 ${expandedCard === idx ? 'bg-white text-typography-black border-white' : 'bg-white/20 border-white/30'}`}>
                        {cat.icon}
                      </div>

                      {/* Title */}
                      <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">{cat.category}</h3>

                      {/* Items List - Animated Reveal */}
                      <div className={`space-y-4 transition-opacity duration-500 delay-100 overflow-hidden ${expandedCard === idx ? 'opacity-100 h-auto' : 'opacity-0 h-0'}`}>
                        <div className="w-12 h-1 bg-primary-red rounded-full mb-4"></div>
                        <div className="flex flex-wrap gap-2 pb-2">
                          {cat.items.map((item, i) => (
                            <span key={i} className="inline-block px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-lg border border-white/10 hover:bg-white/30 transition-colors">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* "View Details" hint for mobile/touch */}
                      <div className={`mt-4 flex items-center gap-2 text-white/80 text-sm font-medium transition-opacity duration-300 lg:hidden ${expandedCard === idx ? 'opacity-0' : 'opacity-100'}`}>
                        <span>Tap to view details</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Platforms - Feature Sections */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-typography-black mb-4">Our Platforms</h2>
              <p className="text-text-secondary max-w-2xl mx-auto text-lg">
                Specialized solutions designed to eliminate daily supply challenges and bridge financial gaps.
              </p>
            </div>

            <div className="space-y-24">
              {/* Stock Supply Feature */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="order-2 lg:order-1">
                  <div className="inline-block px-4 py-2 bg-primary-red/10 text-primary-red rounded-lg font-bold text-sm mb-6 uppercase tracking-wider">
                    KPA KPA KPA BOAFO
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-typography-black mb-6">Stock Supply</h3>
                  <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                    A fast, reliable stock-in-trade supply solution designed to eliminate daily supply challenges for sole proprietors and SMEs. We connect trusted suppliers and sellers for secure, transparent business.
                  </p>
                  <ul className="space-y-4 mb-10">
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-typography-black font-medium">Quick stock turnover support</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-typography-black font-medium">Verified supplier network</span>
                    </li>
                  </ul>
                  <Link href="/contact" className="text-primary-red font-bold hover:text-red-700 flex items-center gap-2 group">
                    Learn more about Stock Supply
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </div>
                <div className="order-1 lg:order-2 relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                  <Image
                    src="/pexels-mart-production-7550542.jpg"
                    alt="Stock Supply"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-primary-red/10 mix-blend-multiply"></div>
                </div>
              </div>

              {/* Hire Purchase Feature */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                  <Image
                    src="/pexels-anthonyshkraba-production-8837549.jpg"
                    alt="Hire Purchase"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-secondary-teal/10 mix-blend-multiply"></div>
                </div>
                <div>
                  <div className="inline-block px-4 py-2 bg-secondary-teal/10 text-secondary-teal rounded-lg font-bold text-sm mb-6 uppercase tracking-wider">
                    TO NA METUA
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-typography-black mb-6">Hire Purchase</h3>
                  <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                    A trusted bridge between consumers and verified suppliers. We pay upfront on your behalf, enabling immediate access to home appliances with flexible, tailored payment plans.
                  </p>
                  <ul className="space-y-4 mb-10">
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-typography-black font-medium">Immediate access to goods</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-typography-black font-medium">Flexible payment plans</span>
                    </li>
                  </ul>
                  <Link href="/contact" className="text-secondary-teal font-bold hover:text-teal-700 flex items-center gap-2 group">
                    Learn more about Hire Purchase
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Solutions Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 skew-x-12 translate-x-1/2 -z-10"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-block p-2 bg-gray-100 rounded-lg mb-4">
                <span className="text-text-secondary font-semibold text-sm uppercase tracking-wider">Ecosystem Partners</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-typography-black mb-6">Partner Solutions</h2>
              <p className="text-text-secondary max-w-2xl mx-auto text-lg">
                We collaborate with industry leaders to bring you comprehensive financial products and insurance solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Micro Credit / Lending */}
              <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-red/5 rounded-full blur-3xl -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>

                <div className="flex items-center gap-5 mb-10 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-primary-red/10 text-primary-red flex items-center justify-center shadow-sm">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-typography-black">Micro Credit & Lending</h3>
                    <p className="text-text-secondary">Flexible financial support for every need</p>
                  </div>
                </div>

                <div className="mb-10 relative z-10">
                  <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Available Products</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Credit 360", "Plan-plan", "Pace Gold", "Bliss Cash", "Agenda Cash"].map((product, i) => (
                      <span key={i} className="px-4 py-2 bg-gray-50 rounded-lg text-sm font-medium text-typography-black border border-gray-100">
                        {product}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative z-10">
                  <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-6">Trusted Partners</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {["Oval Micro Credit", "Adinkra Micro Credit", "Global Pace", "Bliss Micro Credit"].map((partner, i) => (
                      <div key={i} className="aspect-square rounded-xl bg-gray-50 border border-gray-100 flex flex-col items-center justify-center p-4 text-center hover:border-primary-red/30 hover:bg-white hover:shadow-md transition-all duration-300 group/logo">
                        <div className="w-10 h-10 rounded-full bg-gray-200 mb-3 group-hover/logo:bg-primary-red/10 group-hover/logo:text-primary-red flex items-center justify-center transition-colors">
                          <span className="font-bold text-xs">{partner.charAt(0)}</span>
                        </div>
                        <span className="text-[10px] font-bold text-gray-400 group-hover/logo:text-typography-black uppercase leading-tight">{partner}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Insurance */}
              <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-teal/5 rounded-full blur-3xl -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>

                <div className="flex items-center gap-5 mb-10 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-secondary-teal/10 text-secondary-teal flex items-center justify-center shadow-sm">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-typography-black">Insurance Solutions</h3>
                    <p className="text-text-secondary">Protecting what matters most to you</p>
                  </div>
                </div>

                <div className="mb-10 relative z-10">
                  <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Available Products</h4>
                  <div className="flex flex-wrap gap-2">
                    {["General Business Insurance"].map((product, i) => (
                      <span key={i} className="px-4 py-2 bg-gray-50 rounded-lg text-sm font-medium text-typography-black border border-gray-100">
                        {product}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative z-10">
                  <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-6">Trusted Partners</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {["Serene Insurance"].map((partner, i) => (
                      <div key={i} className="aspect-square rounded-xl bg-gray-50 border border-gray-100 flex flex-col items-center justify-center p-4 text-center hover:border-secondary-teal/30 hover:bg-white hover:shadow-md transition-all duration-300 group/logo">
                        <div className="w-10 h-10 rounded-full bg-gray-200 mb-3 group-hover/logo:bg-secondary-teal/10 group-hover/logo:text-secondary-teal flex items-center justify-center transition-colors">
                          <span className="font-bold text-xs">{partner.charAt(0)}</span>
                        </div>
                        <span className="text-[10px] font-bold text-gray-400 group-hover/logo:text-typography-black uppercase leading-tight">{partner}</span>
                      </div>
                    ))}
                  </div>
                </div>
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
                Whether you need stock, financing, or market access, MKA Kapital & Marketing Limited has the solution for you.
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

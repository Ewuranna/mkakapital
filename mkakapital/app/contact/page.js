import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Contact Us - MKA Global Investment',
  description: 'Get in touch with our team of financial experts. We\'re here to help with your business needs.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        {/* Modern Hero Section */}
        <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-20 overflow-hidden">
          {/* Background Accents */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
            <div className="absolute top-20 right-0 w-96 h-96 bg-primary-red/5 rounded-full blur-3xl mix-blend-multiply animate-blob"></div>
            <div className="absolute bottom-0 left-10 w-96 h-96 bg-secondary-teal/5 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 mb-8">
                <span className="w-2 h-2 rounded-full bg-secondary-teal"></span>
                <span className="text-sm font-medium text-text-secondary">Contact Us</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-typography-black mb-8 tracking-tight">
                We&apos;re here to <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-teal to-primary-red">Help You Grow</span>
              </h1>

              <p className="text-lg sm:text-xl text-text-secondary mb-10 leading-relaxed max-w-2xl mx-auto">
                Reach our team through your preferred channel or visit any of our locations. We are ready to assist with your business needs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-50/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                {/* Contact Info */}
                <div className="lg:col-span-5 space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-typography-black mb-6">Get in Touch</h2>
                    <p className="text-text-secondary leading-relaxed mb-8">
                      Have questions about our products or services? Our team is available to provide the answers you need.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                      <div className="w-12 h-12 rounded-xl bg-primary-red/10 text-primary-red flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-typography-black mb-1">Email Us</h3>
                        <p className="text-text-secondary text-sm mb-2">For general inquiries and support</p>
                        <a href="mailto:info@mkakapital.com" className="text-primary-red font-medium hover:underline">info@mkakapital.com</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                      <div className="w-12 h-12 rounded-xl bg-secondary-teal/10 text-secondary-teal flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-typography-black mb-1">Call Us</h3>
                        <p className="text-text-secondary text-sm mb-2">Mon-Fri from 8am to 5pm</p>
                        <a href="tel:+233362196916" className="text-secondary-teal font-medium hover:underline">+233 362 196 916</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-7">
                  <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-gray-100">
                    <h3 className="text-2xl font-bold text-typography-black mb-6">Send us a message</h3>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-typography-black mb-2">Full Name</label>
                          <input id="name" type="text" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-red/20 focus:border-primary-red transition-colors outline-none" placeholder="John Doe" />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-typography-black mb-2">Email Address</label>
                          <input id="email" type="email" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-red/20 focus:border-primary-red transition-colors outline-none" placeholder="john@example.com" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-typography-black mb-2">Phone Number</label>
                          <input id="phone" type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-red/20 focus:border-primary-red transition-colors outline-none" placeholder="+233 ..." />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-typography-black mb-2">Company</label>
                          <input id="company" type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-red/20 focus:border-primary-red transition-colors outline-none" placeholder="Company Name" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-typography-black mb-2">Service Interest</label>
                        <select id="service" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-red/20 focus:border-primary-red transition-colors outline-none">
                          <option value="">Select a service</option>
                          <option value="mobile-money">Mobile Money (MoMo) Services</option>
                          <option value="trade-finance">Trade, Stock & Asset Finance</option>
                          <option value="marketing">Sales & Marketing Agency</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-typography-black mb-2">Message</label>
                        <textarea id="message" rows={4} required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-red/20 focus:border-primary-red transition-colors outline-none resize-none" placeholder="How can we help you?"></textarea>
                      </div>
                      <button type="submit" className="w-full bg-primary-red text-white py-4 rounded-xl text-lg font-semibold hover:bg-red-600 transition-all shadow-lg shadow-primary-red/20 hover:shadow-primary-red/30 hover:-translate-y-0.5">
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Locations Maps */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-typography-black mb-4">Visit Our Offices</h2>
              <p className="text-text-secondary max-w-2xl mx-auto">Find us at either of our strategic locations in Accra and Kumasi.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Kaneshie */}
              <div className="group bg-white rounded-3xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="relative w-full h-64 sm:h-80 overflow-hidden rounded-2xl border border-gray-100 mb-6">
                  <iframe
                    src="https://www.google.com/maps?q=Kaneshie%20Market%20Area%2C%20Kumasi%2C%20Ghana&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                    title="Kaneshie Market Area Map"
                  ></iframe>
                </div>
                <div className="px-4 pb-4">
                  <h3 className="text-xl font-bold text-typography-black mb-2">Kumasi Office</h3>
                  <div className="flex items-start gap-3 text-text-secondary">
                    <svg className="w-5 h-5 text-primary-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <p>Kaneshie Market Area, Kumasi, Ghana</p>
                  </div>
                </div>
              </div>

              {/* Airport City */}
              <div className="group bg-white rounded-3xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="relative w-full h-64 sm:h-80 overflow-hidden rounded-2xl border border-gray-100 mb-6">
                  <iframe
                    src="https://www.google.com/maps?q=SSNIT%20Emporium%20Building%2C%20Airport%20City%2C%20Accra%2C%20Ghana&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                    title="Airport City SSNIT Emporium Map"
                  ></iframe>
                </div>
                <div className="px-4 pb-4">
                  <h3 className="text-xl font-bold text-typography-black mb-2">Accra Office</h3>
                  <div className="flex items-start gap-3 text-text-secondary">
                    <svg className="w-5 h-5 text-secondary-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <p>4th Floor, SSNIT Emporium Building, Airport City, Accra – Ghana</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

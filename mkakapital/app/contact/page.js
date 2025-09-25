import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Contact Us - MKA Kapital',
  description: 'Get in touch with our team of financial experts. We\'re here to help with your business needs.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Contact Hero */}
        <section className="py-20 bg-gradient-to-br from-primary-red/5 via-white to-secondary-cyan/5 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block p-3 bg-primary-red/10 rounded-2xl mb-8">
                <span className="text-primary-red font-bold text-sm uppercase tracking-widest">Get In Touch</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-typography-black mb-8 leading-tight">
                Let&apos;s Start a
                <br />
                <span className="bg-gradient-to-r from-primary-red to-secondary-cyan bg-clip-text text-transparent">
                  Conversation
                </span>
              </h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Ready to transform your business? Our team of experts is here to help you find the perfect financial solutions for your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-primary-red/20 rounded-2xl flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-primary-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-typography-black">Send us a Message</h2>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-typography-black mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 border border-medium-gray rounded-xl focus:ring-2 focus:ring-primary-red focus:border-primary-red transition-colors duration-300"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-typography-black mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 border border-medium-gray rounded-xl focus:ring-2 focus:ring-primary-red focus:border-primary-red transition-colors duration-300"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-typography-black mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border border-medium-gray rounded-xl focus:ring-2 focus:ring-primary-red focus:border-primary-red transition-colors duration-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-typography-black mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 border border-medium-gray rounded-xl focus:ring-2 focus:ring-primary-red focus:border-primary-red transition-colors duration-300"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-typography-black mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 border border-medium-gray rounded-xl focus:ring-2 focus:ring-primary-red focus:border-primary-red transition-colors duration-300"
                    >
                      <option value="">Select a service</option>
                      <option value="trade-finance">Trade & Project Financing</option>
                      <option value="asset-financing">Smart Asset Financing</option>
                      <option value="logistics">Integrated Logistics</option>
                      <option value="marketplace">B2B Marketplace</option>
                      <option value="risk-management">Risk Management</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-typography-black mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-3 border border-medium-gray rounded-xl focus:ring-2 focus:ring-primary-red focus:border-primary-red transition-colors duration-300 resize-vertical"
                      placeholder="Tell us about your financial goals and how we can help..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-red text-white py-4 px-6 rounded-xl text-lg font-semibold hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Contact Methods */}
                <div>
                  <h3 className="text-2xl font-bold text-typography-black mb-8">Get in Touch</h3>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-primary-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-7 h-7 text-primary-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-typography-black mb-1">Phone</h4>
                        <p className="text-text-secondary">+1 (555) 123-4567</p>
                        <p className="text-text-secondary">+1 (555) 987-6543</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-secondary-cyan/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-7 h-7 text-secondary-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-typography-black mb-1">Email</h4>
                        <p className="text-text-secondary">info@mkakapital.com</p>
                        <p className="text-text-secondary">support@mkakapital.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-accent-navy/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-7 h-7 text-accent-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-typography-black mb-1">Office</h4>
                        <p className="text-text-secondary">123 Financial District</p>
                        <p className="text-text-secondary">New York, NY 10004</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h4 className="font-bold text-typography-black mb-4">Office Hours</h4>
                  <div className="space-y-2 text-sm text-text-secondary">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 2:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="bg-primary-red/5 border border-primary-red/20 rounded-xl p-6">
                  <h4 className="font-bold text-primary-red mb-2">24/7 Emergency Support</h4>
                  <p className="text-text-secondary text-sm mb-3">
                    For urgent financial matters outside business hours
                  </p>
                  <button className="text-primary-red font-semibold text-sm hover:text-red-600 transition-colors duration-300">
                    Call Emergency Line →
                  </button>
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

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Get Started - Request a Quote | MKA Global Investment',
  description: 'Request a tailored quote for trade solutions, financing, warehousing and more.',
};

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        {/* Modern Hero Section */}
        <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-16 overflow-hidden">
          {/* Background Accents */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
            <div className="absolute top-20 right-0 w-96 h-96 bg-primary-red/5 rounded-full blur-3xl mix-blend-multiply animate-blob"></div>
            <div className="absolute bottom-0 left-10 w-96 h-96 bg-secondary-teal/5 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 mb-8">
                <span className="w-2 h-2 rounded-full bg-secondary-teal"></span>
                <span className="text-sm font-medium text-text-secondary">Get Started</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-typography-black mb-8 tracking-tight">
                Let&apos;s Build Your <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-teal to-primary-red">Success Story</span>
              </h1>

              <p className="text-lg sm:text-xl text-text-secondary mb-10 leading-relaxed max-w-2xl mx-auto">
                Tell us about your needs and we&apos;ll prepare a tailored proposal to help you achieve your business goals.
              </p>
            </div>
          </div>
        </section>

        {/* Split Content Section */}
        <section className="py-20 bg-gray-50/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

                {/* Left Column: Process / Value Prop */}
                <div className="lg:col-span-5 space-y-10">
                  <div>
                    <h2 className="text-3xl font-bold text-typography-black mb-6">How it works</h2>
                    <p className="text-text-secondary leading-relaxed">
                      We&apos;ve streamlined our process to get you the solutions you need as quickly as possible.
                    </p>
                  </div>

                  <div className="space-y-8">
                    {/* Step 1 */}
                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-xl font-bold text-secondary-teal">
                        1
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-typography-black mb-2">Request a Quote</h3>
                        <p className="text-text-secondary text-sm leading-relaxed">
                          Fill out the form with your project details. The more specific you are, the better we can tailor our solution.
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-xl font-bold text-primary-red">
                        2
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-typography-black mb-2">Expert Analysis</h3>
                        <p className="text-text-secondary text-sm leading-relaxed">
                          Our team reviews your requirements and identifies the best financial or logistical structures for you.
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-xl font-bold text-secondary-teal">
                        3
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-typography-black mb-2">Tailored Proposal</h3>
                        <p className="text-text-secondary text-sm leading-relaxed">
                          We present a comprehensive plan outlining costs, timelines and expected outcomes.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-secondary-teal/5 rounded-2xl border border-secondary-teal/10">
                    <h4 className="font-bold text-secondary-teal mb-2">Need immediate assistance?</h4>
                    <p className="text-sm text-text-secondary mb-4">
                      Skip the form and talk to an expert directly.
                    </p>
                    <a href="tel:+233362196916" className="inline-flex items-center font-semibold text-typography-black hover:text-secondary-teal transition-colors">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      +233 362 196 916
                    </a>
                  </div>
                </div>

                {/* Right Column: Form */}
                <div className="lg:col-span-7">
                  <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-gray-100">
                    <h3 className="text-2xl font-bold text-typography-black mb-8">Tell us about your project</h3>
                    <form className="space-y-8">

                      {/* Section: Contact Details */}
                      <div className="space-y-6">
                        <h4 className="text-sm font-bold text-text-secondary uppercase tracking-wider border-b border-gray-100 pb-2">Contact Details</h4>
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
                            <label htmlFor="phone" className="block text-sm font-medium text-typography-black mb-2">Phone</label>
                            <input id="phone" type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-red/20 focus:border-primary-red transition-colors outline-none" placeholder="+233 ..." />
                          </div>
                          <div>
                            <label htmlFor="company" className="block text-sm font-medium text-typography-black mb-2">Company</label>
                            <input id="company" type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-red/20 focus:border-primary-red transition-colors outline-none" placeholder="Company Name" />
                          </div>
                        </div>
                      </div>

                      {/* Section: Project Info */}
                      <div className="space-y-6">
                        <h4 className="text-sm font-bold text-text-secondary uppercase tracking-wider border-b border-gray-100 pb-2">Project Information</h4>
                        <div>
                          <label htmlFor="service" className="block text-sm font-medium text-typography-black mb-2">What do you need a quote for?</label>
                          <select id="service" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-red/20 focus:border-primary-red transition-colors outline-none">
                            <option value="">Select a service</option>
                            <option value="mobile-money">Mobile Money (MoMo) Services</option>
                            <option value="asset-finance">Trade, Stock & Asset Finance</option>
                            <option value="sales-marketing">Sales & Marketing Agency</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="budget" className="block text-sm font-medium text-typography-black mb-2">Estimated Budget</label>
                            <select id="budget" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-red/20 focus:border-primary-red transition-colors outline-none">
                              <option value="">Select a range</option>
                              <option value="lt-50k">Under $50k</option>
                              <option value="50-250k">$50k – $250k</option>
                              <option value="250k-1m">$250k – $1m</option>
                              <option value="gt-1m">$1m+</option>
                            </select>
                          </div>
                          <div>
                            <label htmlFor="timeline" className="block text-sm font-medium text-typography-black mb-2">Timeline</label>
                            <select id="timeline" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-red/20 focus:border-primary-red transition-colors outline-none">
                              <option value="">Select a timeline</option>
                              <option value="immediate">Immediate</option>
                              <option value="1-3m">1–3 months</option>
                              <option value="3-6m">3–6 months</option>
                              <option value="gt-6m">6+ months</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <label htmlFor="details" className="block text-sm font-medium text-typography-black mb-2">Project Details</label>
                          <textarea id="details" rows={4} required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-red/20 focus:border-primary-red transition-colors outline-none resize-none" placeholder="Briefly describe your needs, scope and any specifics."></textarea>
                        </div>
                      </div>

                      <button type="submit" className="w-full bg-primary-red text-white py-4 rounded-xl text-lg font-semibold hover:bg-red-600 transition-all shadow-lg shadow-primary-red/20 hover:shadow-primary-red/30 hover:-translate-y-0.5">
                        Request Quote
                      </button>
                    </form>
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



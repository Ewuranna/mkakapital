import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Products - MKA Kapital',
  description: 'Explore our innovative financial products designed for modern businesses.',
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Products Section */}
        <section id="products" className="py-20 bg-gradient-to-br from-white via-light-gray to-white relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-72 h-72 bg-primary-red/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-64 h-64 bg-secondary-cyan/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent-navy/5 rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Hero Section */}
            <div className="text-center mb-20">
              <div className="inline-block p-3 bg-gradient-to-r from-primary-red/10 to-secondary-cyan/10 rounded-2xl mb-8">
                <span className="text-primary-red font-bold text-sm uppercase tracking-widest">Our Products</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-typography-black mb-8 leading-tight">
                <span className="bg-gradient-to-r from-primary-red via-secondary-cyan to-accent-navy bg-clip-text text-transparent">
                  Innovative
                </span>
                <br />
                <span className="text-typography-black">Financial Solutions</span>
              </h1>
              <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
                Cutting-edge products designed to meet the evolving needs of modern businesses in the global marketplace.
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {[
                {
                  icon: "💳",
                  title: "Trade Finance Platform",
                  description: "Digital platform for streamlined trade finance operations with real-time approvals.",
                  features: ["Instant LC processing", "Digital documentation", "Multi-bank connectivity", "Risk assessment AI"]
                },
                {
                  icon: "📊",
                  title: "Risk Analytics Suite",
                  description: "Advanced analytics and risk management tools powered by machine learning.",
                  features: ["Predictive modeling", "Real-time monitoring", "Portfolio optimization", "Custom reporting"]
                },
                {
                  icon: "🔗",
                  title: "Supply Chain Finance",
                  description: "End-to-end supply chain financing solutions for manufacturers and distributors.",
                  features: ["Dynamic discounting", "Reverse factoring", "Inventory financing", "PO financing"]
                },
                {
                  icon: "🏦",
                  title: "Multi-Bank Portal",
                  description: "Single access point to multiple banking partners with unified interface.",
                  features: ["Unified dashboard", "Comparative quotes", "Automated routing", "Consolidated reporting"]
                },
                {
                  icon: "📱",
                  title: "Mobile Banking App",
                  description: "Comprehensive mobile application for on-the-go financial management.",
                  features: ["Real-time notifications", "Document upload", "Approval workflows", "Transaction history"]
                },
                {
                  icon: "🔒",
                  title: "Security & Compliance",
                  description: "Bank-grade security with comprehensive compliance and audit trails.",
                  features: ["End-to-end encryption", "Multi-factor authentication", "Compliance monitoring", "Audit logging"]
                }
              ].map((product, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-light-gray hover:border-primary-red/30 h-full">
                  <div className="text-5xl mb-6">{product.icon}</div>
                  <h3 className="text-xl font-bold text-typography-black mb-4 group-hover:text-primary-red transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-text-secondary">
                        <div className="w-1.5 h-1.5 bg-primary-red rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-primary-red/10 to-secondary-cyan/10 rounded-3xl p-12 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-typography-black mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
                  Explore our comprehensive suite of products designed to streamline your financial operations and accelerate growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-primary-red text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Schedule Demo
                  </button>
                  <button className="border-2 border-primary-red text-primary-red px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-red hover:text-white transition-all duration-300">
                    Download Brochure
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

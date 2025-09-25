export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-typography-black mb-6">
            Ready to Accelerate Your Business?
          </h2>
          <p className="text-base text-text-secondary max-w-3xl mx-auto mb-12">
          Join the growing network of businesses and individuals who trust MKA Kapital for innovative trade solutions. Whether you&apos;re scaling operations, entering new markets, or optimizing cash flow—we have the expertise and solutions to help you succeed.          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-red text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Get Started Today
            </button>
            <button className="border-2 border-primary-red text-primary-red px-8 py-4 rounded-lg text-base font-semibold hover:bg-primary-red hover:text-white transition-all duration-300">
            Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

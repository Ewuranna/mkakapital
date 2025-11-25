export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-typography-black mb-6">
            Ready to Accelerate Your Business?
          </h2>
          <p className="text-text-secondary max-w-3xl mx-auto mb-6">
            Join the growing network of businesses already benefiting from our integrated solutions. Whether you&apos;re looking for mobile money services, flexible financing, or marketing support — we&apos;re here to help.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/get-started" className="bg-primary-red text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Get Started Today
          </a>
          <a href="/contact" className="border-2 border-primary-red text-primary-red px-8 py-4 rounded-lg text-base font-semibold hover:bg-primary-red hover:text-white transition-all duration-300">
            Contact Our Team
          </a>
        </div>
      </div>

    </section >
  );
}

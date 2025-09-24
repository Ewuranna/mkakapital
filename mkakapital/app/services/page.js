import Navigation from '../components/Navigation';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Services - MKA Kapital',
  description: 'Discover our comprehensive financial services including trade finance, asset financing, and risk management solutions.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}

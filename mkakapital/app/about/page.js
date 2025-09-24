import Navigation from '../components/Navigation';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';

export const metadata = {
  title: 'About Us - MKA Kapital',
  description: 'Learn about MKA Kapital\'s mission, values, and journey in transforming global trade finance.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

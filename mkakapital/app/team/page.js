import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Image from 'next/image';
import TeamGridClient from './TeamGridClient';

export const metadata = {
  title: 'Team - MKA Global Investment',
  description: 'Meet the team behind MKA Global Investment\'s growth and client success.',
};

const team = [];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        {/* Modern Hero Section */}
        <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
          {/* Background Accents */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary-red/5 rounded-full blur-3xl mix-blend-multiply animate-blob"></div>
            <div className="absolute top-20 right-10 w-72 h-72 bg-secondary-teal/5 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-secondary-cyan/5 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 mb-8">
                <span className="w-2 h-2 rounded-full bg-secondary-teal"></span>
                <span className="text-sm font-medium text-text-secondary">Our Team</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-typography-black mb-8 tracking-tight">
                People Who Power <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-teal to-primary-red">Performance</span>
              </h1>

              <p className="text-lg sm:text-xl text-text-secondary mb-10 leading-relaxed max-w-2xl mx-auto">
                A diverse team committed to execution, integrity and client success.
              </p>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-20 bg-gray-50/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <TeamGridClient />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}



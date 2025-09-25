import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-typography-black mb-3">Page Not Found</h1>
        <p className="text-text-secondary mb-6">The page you are looking for does not exist.</p>
        <Link href="/" className="inline-block bg-primary-red text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-red-600 transition-colors">Go Home</Link>
      </div>
    </div>
  );
}



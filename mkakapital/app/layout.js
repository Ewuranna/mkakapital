import "./globals.css";

export const metadata = {
  title: "MKA Global Investment - Professional Financial Services",
  description: "MKA Global Investment provides expert financial services and investment solutions with a modern, professional approach. Discover our comprehensive range of financial services designed for your success.",
  keywords: "financial services, investment, capital, finance, MKA Global Investment, professional finance",
  authors: [{ name: "MKA Global Investment" }],
  openGraph: {
    title: "MKA Global Investment - Professional Financial Services",
    description: "Expert financial services and investment solutions with a modern, professional approach.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

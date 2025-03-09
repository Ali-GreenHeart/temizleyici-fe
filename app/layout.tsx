import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Təmİzləyici - Smart Waste Management Solution',
  description: 'Transform your waste management with Təmİzləyici. Track, analyze, and optimize your waste collection for a cleaner tomorrow.',
  keywords: ['waste management', 'smart trash tracking', 'sustainability', 'environment'],
  authors: [{ name: 'Təmİzləyici Team' }],
  openGraph: {
    title: 'Təmİzləyici - Smart Waste Management Solution',
    description: 'Transform your waste management with Təmİzləyici. Track, analyze, and optimize your waste collection.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "min-h-screen bg-background antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <footer className="bg-green-900 text-white py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                <div>
                  <h3 className="text-lg font-bold mb-4">Təmİzləyici</h3>
                  <p className="text-green-100">Smart waste management solutions for a sustainable future.</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-4">Features</h4>
                  <ul className="space-y-2">
                    <li><Link href="/features" className="hover:text-green-300">Analytics</Link></li>
                    <li><Link href="/features" className="hover:text-green-300">Route Optimization</Link></li>
                    <li><Link href="/features" className="hover:text-green-300">Waste Sorting</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-4">Company</h4>
                  <ul className="space-y-2">
                    <li><Link href="/about" className="hover:text-green-300">About Us</Link></li>
                    <li><Link href="/about" className="hover:text-green-300">Careers</Link></li>
                    <li><Link href="/download" className="hover:text-green-300">Download</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-4">Connect</h4>
                  <ul className="space-y-2">
                    <li><a href="https://twitter.com" className="hover:text-green-300">Twitter</a></li>
                    <li><a href="https://linkedin.com" className="hover:text-green-300">LinkedIn</a></li>
                    <li><a href="https://facebook.com" className="hover:text-green-300">Facebook</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}

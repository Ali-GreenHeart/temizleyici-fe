import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from '@/lib/utils';

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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

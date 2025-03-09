"use client"

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Leaf, BarChart3, Recycle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600 dark:text-green-400" />
            <span className="text-2xl font-bold text-green-800 dark:text-green-100">Təmİzləyici</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/features">
              <Button variant="ghost">Features</Button>
            </Link>
            <Link href="/about">
              <Button variant="ghost">About</Button>
            </Link>
            <Link href="/download">
              <Button variant="ghost">Download</Button>
            </Link>
            <ModeToggle />
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-green-800 dark:text-green-100">
            Smart Waste Management<br />for a Cleaner Tomorrow
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Transform your waste management system with real-time tracking, analytics, and optimization. 
            Make your city cleaner and more sustainable.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/download">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/features">
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="mb-12 text-center text-3xl font-bold text-green-800 dark:text-green-100">
            Key Features
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <FeatureCard 
              icon={<BarChart3 className="h-10 w-10 text-green-600" />}
              title="Real-time Analytics"
              description="Track waste collection patterns and optimize routes with powerful analytics."
            />
            <FeatureCard 
              icon={<Recycle className="h-10 w-10 text-green-600" />}
              title="Smart Sorting"
              description="Automatic waste classification and sorting recommendations."
            />
            <FeatureCard 
              icon={<Leaf className="h-10 w-10 text-green-600" />}
              title="Eco-friendly"
              description="Reduce carbon footprint with optimized collection routes."
            />
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-green-50 dark:bg-green-900/30 py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <StatCard number="85%" text="Waste Collection Efficiency" />
              <StatCard number="50%" text="Carbon Emission Reduction" />
              <StatCard number="1M+" text="Tons of Waste Managed" />
            </div>
          </div>
        </section>
      </main>

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
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="rounded-lg border p-6 text-center transition-all hover:shadow-lg dark:border-green-800">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold text-green-800 dark:text-green-100">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

function StatCard({ number, text }: { number: string; text: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">{number}</div>
      <div className="text-gray-600 dark:text-gray-300">{text}</div>
    </div>
  );
}
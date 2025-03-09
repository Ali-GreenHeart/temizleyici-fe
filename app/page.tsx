import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Leaf, Recycle } from "lucide-react";
import Link from "next/link";

export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background">
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

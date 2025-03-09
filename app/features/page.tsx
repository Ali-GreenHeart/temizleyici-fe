"use client"

import { Button } from "@/components/ui/button";
import { BarChart3, Clock, Database, Route, Shield, Truck } from "lucide-react";
import Link from "next/link";

export default function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background">
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center text-green-800 dark:text-green-100 mb-12">
          Features that Transform Waste Management
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <FeatureCard
            icon={<BarChart3 className="h-12 w-12 text-green-600" />}
            title="Advanced Analytics"
            description="Get detailed insights into waste collection patterns, optimize routes, and track performance metrics in real-time."
          />
          <FeatureCard
            icon={<Route className="h-12 w-12 text-green-600" />}
            title="Smart Route Planning"
            description="AI-powered route optimization that reduces fuel consumption and improves collection efficiency."
          />
          <FeatureCard
            icon={<Clock className="h-12 w-12 text-green-600" />}
            title="Real-time Monitoring"
            description="Track your fleet in real-time, get instant alerts, and respond quickly to changing conditions."
          />
          <FeatureCard
            icon={<Shield className="h-12 w-12 text-green-600" />}
            title="Secure Data"
            description="Enterprise-grade security ensures your data is protected with end-to-end encryption."
          />
          <FeatureCard
            icon={<Database className="h-12 w-12 text-green-600" />}
            title="Data Integration"
            description="Seamlessly integrate with existing systems and export data in multiple formats."
          />
          <FeatureCard
            icon={<Truck className="h-12 w-12 text-green-600" />}
            title="Fleet Management"
            description="Comprehensive fleet management tools for maintenance scheduling and performance tracking."
          />
        </div>

        <div className="text-center">
          <Link href="/download">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Get Started Now
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="rounded-lg border p-8 transition-all hover:shadow-lg dark:border-green-800">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-green-800 dark:text-green-100">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

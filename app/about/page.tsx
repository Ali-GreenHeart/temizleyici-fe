"use client"

import { Button } from "@/components/ui/button"
import { Leaf, Users, Globe, Award } from "lucide-react"
import Link from "next/link"

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background">
      <main className="container mx-auto px-4 py-20">
        <section className="text-center mb-20">
          <h1 className="text-4xl font-bold text-green-800 dark:text-green-100 mb-6">
            About Təmİzləyici
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            We're on a mission to revolutionize waste management through smart technology and sustainable practices.
            Our platform helps cities and businesses optimize their waste collection operations while reducing environmental impact.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-6">
            <Users className="h-12 w-12 mx-auto mb-4 text-green-600" />
            <h3 className="text-xl font-semibold mb-2 text-green-800 dark:text-green-100">Our Team</h3>
            <p className="text-gray-600 dark:text-gray-300">
              A diverse team of experts in technology, environmental science, and urban planning.
            </p>
          </div>
          <div className="text-center p-6">
            <Globe className="h-12 w-12 mx-auto mb-4 text-green-600" />
            <h3 className="text-xl font-semibold mb-2 text-green-800 dark:text-green-100">Global Impact</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Operating in 50+ cities worldwide, helping create cleaner urban environments.
            </p>
          </div>
          <div className="text-center p-6">
            <Award className="h-12 w-12 mx-auto mb-4 text-green-600" />
            <h3 className="text-xl font-semibold mb-2 text-green-800 dark:text-green-100">Recognition</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Award-winning solutions recognized for innovation in sustainability.
            </p>
          </div>
        </section>

        <section className="bg-green-50 dark:bg-green-900/30 rounded-lg p-8 mb-20">
          <h2 className="text-2xl font-bold text-center text-green-800 dark:text-green-100 mb-6">
            Our Vision
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We envision a world where waste management is efficient, sustainable, and technology-driven. 
            Through our innovative solutions, we're working to reduce environmental impact and create 
            cleaner, healthier cities for future generations.
          </p>
        </section>

        <div className="text-center">
          <Link href="/download">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Join Our Mission
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
"use client"

import { Button } from "@/components/ui/button";
import { Apple, Globe, Smartphone } from "lucide-react";

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background">
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center text-green-800 dark:text-green-100 mb-12">
          Download Təmİzləyici
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          {/* iOS App */}
          <div className="rounded-lg border p-8 text-center transition-all hover:shadow-lg dark:border-green-800">
            <Apple className="h-16 w-16 mx-auto mb-4 text-green-600" />
            <h2 className="text-2xl font-semibold mb-4 text-green-800 dark:text-green-100">iOS App</h2>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              Download the Təmİzləyici app for your iPhone or iPad
            </p>
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full bg-green-600 hover:bg-green-700">
                Download for iOS
              </Button>
            </a>
            <p className="mt-4 text-sm text-gray-500">Requires iOS 14.0 or later</p>
          </div>

          {/* Android App */}
          <div className="rounded-lg border p-8 text-center transition-all hover:shadow-lg dark:border-green-800">
            <Smartphone className="h-16 w-16 mx-auto mb-4 text-green-600" />
            <h2 className="text-2xl font-semibold mb-4 text-green-800 dark:text-green-100">Android App</h2>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              Get Təmİzləyici for your Android device
            </p>
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full bg-green-600 hover:bg-green-700">
                Download for Android
              </Button>
            </a>
            <p className="mt-4 text-sm text-gray-500">Requires Android 8.0 or higher</p>
          </div>
        </div>

        {/* Web Version */}
        <div className="max-w-4xl mx-auto text-center bg-green-50 dark:bg-green-900/30 rounded-lg p-8">
          <Globe className="h-12 w-12 mx-auto mb-4 text-green-600" />
          <h2 className="text-2xl font-semibold mb-4 text-green-800 dark:text-green-100">Web Version</h2>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Access Təmİzləyici directly from your browser - no installation required
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Launch Web App
          </Button>
        </div>
      </main>
    </div>
  );
}

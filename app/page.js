'use client'

import { useState } from 'react'
import { ArrowRight, BarChart2, GitBranch, Globe, RefreshCcwDot, Shield, Smartphone } from 'lucide-react'
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-6 lg:px-10 h-16 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <RefreshCcwDot className="h-8 w-8"  />
          <span className="ml-2 text-3xl font-bold">Health<span className='text-teal-600' >Sync</span> </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xl font-medium hover:underline underline-offset-4" href="#">
            Hospitals
          </Link>
          <Link className="text-xl font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-xl font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Revolutionizing Health Data Management
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  HealthSync enables real-time health data updates for efficient monitoring and data-driven policy making.
                </p>
              </div>
              <div className="space-x-4">
                <button className="inline-flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <button variant="outline">Learn More</button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Shield className="h-10 w-10 mb-2" />
                <h3 className="text-xl font-bold">Super Admin Access</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Secure and privileged access for authorized personnel.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Globe className="h-10 w-10 mb-2" />
                <h3 className="text-xl font-bold">Real-time Updates</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Instant data synchronization across all levels.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <BarChart2 className="h-10 w-10 mb-2" />
                <h3 className="text-xl font-bold">Efficient Monitoring</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Comprehensive tools for tracking health programs.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Seamless Data Flow</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  HealthSync facilitates smooth data transfer from facility to state levels, enhancing health program
                  management across all tiers.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <GitBranch className="h-full w-full max-h-72" />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Transform Healthcare?</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join us in revolutionizing health data management. HealthSync is your partner in creating data-driven
                  policies and efficient health program monitoring.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <button className="w-full" size="lg">
                  Get Started
                </button>
                <button className="w-full" variant="outline" size="lg">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 HealthSync. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

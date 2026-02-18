import Image from 'next/image'
import { Play } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-16 pb-24 bg-linear-to-b from-white via-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* New Feature Banner */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-medium px-5 py-2 rounded-full border border-blue-100">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            New Feature: AI Automation V2.0 is live
          </div>
        </div>

        {/* Headline */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter leading-none mb-6">
            Build better workflows{' '}
            <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              without the code
            </span>
            .
          </h1>

          <p className="text-xl text-gray-600 max-w-lg mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <a
            href="#"
            className="group bg-blue-600 hover:bg-blue-700 transition-all text-white px-8 py-4 rounded-2xl text-lg font-semibold flex items-center justify-center gap-3 shadow-lg shadow-blue-200"
          >
            Get Started for Free
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </a>

          <a
            href="#"
            className="group border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all px-8 py-4 rounded-2xl text-lg font-semibold flex items-center justify-center gap-3"
          >
            <Play className="w-5 h-5" />
            Watch Demo
          </a>
        </div>

        {/* Hero Visual */}
        <div className="mt-20 flex justify-center">
          <div className="relative max-w-4xl w-full">
            <Image
              src="/images/hero-image.png"   
              alt="Bitrate Hero"
              width={1200}
              height={620}
              className="rounded-3xl shadow-2xl border border-gray-100"
              priority
            />
            {/* Optional glossy reflection overlay */}
            <div className="absolute inset-0 rounded-3xl bg-linear-to-b from-white/10 via-transparent to-black/10 pointer-events-none" />
          </div>
        </div>

        {/* Trusted by */}
        <div className="mt-20 text-center">
          <p className="text-xs uppercase tracking-[2px] text-gray-500 font-medium mb-6">
            TRUSTED BY 10,000+ INNOVATIVE TEAMS
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-75">
            {['Acme Corp', 'GlobalBank', 'TechFlow', 'Nexa', 'Oasis'].map((name) => (
              <div key={name} className="text-2xl font-semibold text-gray-400 tracking-tight">
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
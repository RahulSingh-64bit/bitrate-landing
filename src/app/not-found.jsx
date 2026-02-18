// src/app/not-found.jsx
import Link from 'next/link'
import { ArrowLeft, Construction } from 'lucide-react'

export default function NotFound() {
  return (
    <div className=" bg-linear-to-b from-background to-muted/20 flex flex-col items-center justify-center px-5 py-10 text-center">
      <div className="max-w-lg w-full space-y-6 sm:space-y-8">
        {/* Icon */}
        <div className="relative inline-flex items-center justify-center w-20 h-20 mx-auto">
          <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse" />
          <Construction className="w-10 h-10 text-primary relative z-10" strokeWidth={1.5} />
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Coming Soon
        </h1>

        {/* Message */}
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          This page is currently under construction.<br className="hidden sm:inline" />
          We're working hard to bring you something great — check back soon!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors shadow-sm min-w-45"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Optional second button — uncomment if you want it */}
          {/* <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-input rounded-xl font-medium hover:bg-muted transition-colors min-w-45"
          >
            Get Notified
          </Link> */}
        </div>

        {/* Tiny brand line */}
        <p className="text-xs text-muted-foreground/80 mt-10">
          Bitrate — Building better workflows without the code
        </p>
      </div>
    </div>
  )
}

export const metadata = {
  title: 'Coming Soon | Bitrate',
  description: 'This section is under development — check back soon!',
}
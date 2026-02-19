export default function FinalCta() {
  return (
    <section className="bg-blue-600 text-white py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight mb-6">
          Ready to transform your business?
        </h2>

        {/* Subtitle / Social proof */}
        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed">
          Join over 10,000+ companies that trust bitrade to automate their daily operations.
          <br className="hidden sm:inline" /> Start your 14-day free trial today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-6 mb-10 md:mb-12">
          <a
            href="#"
            className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold bg-white text-blue-700 hover:bg-blue-50 transition-colors rounded-2xl shadow-lg shadow-blue-700/20 min-w-55"
          >
            Start Free Trial
          </a>

          <a
            href="#"
            className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold border-2 border-white/40 hover:bg-white/10 transition-colors rounded-2xl min-w-55"
          >
            Talk to Sales
          </a>
        </div>

        {/* Trust line */}
        <p className="text-blue-200 text-base md:text-lg">
          No credit card required · Cancel anytime · 24/7 Support
        </p>
      </div>
    </section>
  )
}
import { Twitter, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        {/* Main content - 4 columns on lg, 2 on md, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand / Description column */}
          <div className="lg:col-span-1">
            <p className="text-gray-300 font-medium text-lg mb-4">
              Bitrate
            </p>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Empowering teams to build, automate, and scale their operations without writing a single line of code.
            </p>
            <div className="flex items-center gap-5">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-gray-200 font-semibold mb-5 text-sm uppercase tracking-wider">
              Product
            </h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-gray-100 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-gray-100 transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-gray-100 transition-colors">Enterprise</a></li>
              <li><a href="#" className="hover:text-gray-100 transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-gray-100 transition-colors">Changelog</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-gray-200 font-semibold mb-5 text-sm uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-gray-100 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-gray-100 transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-gray-100 transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-gray-100 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-gray-100 transition-colors">Help Center</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-gray-200 font-semibold mb-5 text-sm uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-gray-100 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-gray-100 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-gray-100 transition-colors">Legal</a></li>
              <li><a href="#" className="hover:text-gray-100 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-100 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-10 border-t border-gray-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 text-sm">
            <p>
              © 2026 Bitrate Inc. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a href="#" className="hover:text-gray-200 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gray-200 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-200 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
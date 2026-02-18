'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, ChevronDown, Zap, Sparkles, Shield, Users } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

const navLinks = [
  {
    label: 'Product',
    hasDropdown: true,
    items: [
      { name: 'Features', description: 'Explore powerful capabilities', icon: <Zap className="w-4 h-4" />, href: '/features' },
      { name: 'Templates', description: 'Ready-to-use workflows', icon: <Sparkles className="w-4 h-4" />, href: '/templates' },
      { name: 'Integrations', description: 'Connect your tools', icon: <Shield className="w-4 h-4" />, href: '/integrations' },
      
    ],
  },
  {
    label: 'Solutions',
    hasDropdown: true,
    items: [
      { name: 'For Teams', description: 'Collaborate seamlessly', href: '/teams' },
      { name: 'For Enterprises', description: 'Scale with confidence', href: '/enterprise' },
      { name: 'Use Cases', description: 'Real-world examples', href: '/use-cases' },
      { name: 'Industries', description: 'Tailored solutions', href: '/industries' },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
  {
    label: 'Resources',
    hasDropdown: true,
    items: [
      { name: 'Blog', href: '/blog' },
      { name: 'Docs', href: '/docs' },
      { name: 'Help Center', href: '/help' },
      { name: 'Community', href: '/community' },
    ],
  },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)          // desktop hover
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState(null)     // mobile accordion
  const navRef = useRef(null)

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Reset mobile expanded state when sheet closes
  useEffect(() => {
    if (!mobileOpen) {
      setMobileExpanded(null)
    }
  }, [mobileOpen])

  const toggleMobileItem = (i) => {
    setMobileExpanded((prev) => (prev === i ? null : i))
  }

  return (
    <nav
      ref={navRef}
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100/80'
          : 'bg-white/60 backdrop-blur-md'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/logo.svg"
            alt="Bitrate"
            width={32}
            height={32}
            className="h-8 w-auto"
            priority
          />
          <span className="font-semibold text-xl tracking-tight text-foreground hidden sm:inline">
            Bitrate
          </span>
        </a>

        {/* Desktop Navigation – hover only */}
        <div className="hidden lg:flex items-center gap-x-1">
          {navLinks.map((link, i) => (
            <div
              key={i}
              className="relative group"
              onMouseEnter={() => link.hasDropdown && setOpenDropdown(i)}
              onMouseLeave={() => link.hasDropdown && setOpenDropdown(null)}
            >
              {link.href && !link.hasDropdown ? (
                <a
                  href={link.href}
                  className="px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <div
                  className={cn(
                    'flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium rounded-lg transition-all cursor-pointer',
                    openDropdown === i
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground group-hover:text-primary group-hover:bg-primary/5'
                  )}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown
                      className={cn(
                        'w-4 h-4 transition-transform duration-200',
                        openDropdown === i && 'rotate-180'
                      )}
                    />
                  )}
                </div>
              )}

              {/* Desktop Dropdown */}
              {link.hasDropdown && (
                <div
                  className={cn(
                    'absolute left-0 top-full z-50 pt-2 transition-all duration-200 ease-in-out pointer-events-none group-hover:pointer-events-auto',
                    openDropdown === i
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 -translate-y-2'
                  )}
                >
                  <div className="bg-popover rounded-xl shadow-xl border border-border overflow-hidden min-w-65">
                    <div className="h-1 bg-linear-to-r from-primary via-primary/80 to-primary/60" />
                    <div className="py-2">
                      {link.items?.map((item, idx) => (
                        <a
                          key={idx}
                          href={item.href || '#'}
                          className="flex items-start gap-3 px-4 py-3 hover:bg-muted transition-colors group/item"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {item.icon && (
                            <div className="mt-0.5 text-primary/80 group-hover/item:text-primary shrink-0">
                              {item.icon}
                            </div>
                          )}
                          <div>
                            <div className="font-medium text-sm text-foreground group-hover/item:text-primary">
                              {item.name}
                            </div>
                            {item.description && (
                              <div className="text-xs text-muted-foreground mt-0.5 leading-tight">
                                {item.description}
                              </div>
                            )}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-primary hover:bg-primary/5"
            asChild
          >
            <a href="/login">Log in</a>
          </Button>

          <Button
            size="sm"
            className="rounded-xl px-5 shadow-md bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring focus-visible:ring-offset-2"
            asChild
          >
            <a href="/signup">Start Free Trial</a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden shrink-0"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-[85vw] max-w-sm p-0 border-l flex flex-col h-full overflow-hidden"
          >
            <SheetHeader className="px-5 py-4 border-b shrink-0">
              <SheetTitle className="text-left">
                <a
                  href="/"
                  className="flex items-center gap-2.5"
                  onClick={() => setMobileOpen(false)}
                >
                  <Image
                    src="/logo.svg"
                    alt="Bitrate"
                    width={28}
                    height={28}
                    className="h-7 w-auto"
                  />
                  <span className="text-lg font-semibold">Bitrate</span>
                </a>
              </SheetTitle>
            </SheetHeader>

            <div className="flex-1 overflow-y-auto py-3 px-3">
              {navLinks.map((link, i) => (
                <div key={i} className="mb-0.5">
                  {link.hasDropdown ? (
                    <>
                      <button
                        className="flex w-full items-center justify-between px-4 py-3.5 text-base font-medium text-foreground hover:bg-muted rounded-xl transition-colors"
                        onClick={() => toggleMobileItem(i)}
                        aria-expanded={mobileExpanded === i}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={cn(
                            'h-5 w-5 text-muted-foreground transition-transform duration-200',
                            mobileExpanded === i && 'rotate-180'
                          )}
                        />
                      </button>

                      {/* Mobile submenu – accordion style */}
                      <div
                        className={cn(
                          'overflow-hidden transition-all duration-300 ease-in-out',
                          mobileExpanded === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        )}
                      >
                        <div className="pl-4 pt-1 pb-2 space-y-1">
                          {link.items?.map((sub, idx) => (
                            <SheetClose asChild key={idx}>
                              <a
                                href={sub.href || '#'}
                                className="flex items-center gap-3 px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                              >
                                {sub.icon && <span className="text-primary/80">{sub.icon}</span>}
                                <span>{sub.name}</span>
                              </a>
                            </SheetClose>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <SheetClose asChild>
                      <a
                        href={link.href || '#'}
                        className="block px-4 py-3.5 text-base font-medium text-foreground hover:bg-muted rounded-xl transition-colors"
                      >
                        {link.label}
                      </a>
                    </SheetClose>
                  )}
                </div>
              ))}
            </div>

            <div className="shrink-0 px-4 py-5 border-t bg-muted/40 space-y-2.5">
              <SheetClose asChild>
                <Button variant="outline" className="w-full h-11 rounded-xl" asChild>
                  <a href="/login">Log in</a>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button
                  className="w-full h-11 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90"
                  asChild
                >
                  <a href="/signup">Start Free Trial</a>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
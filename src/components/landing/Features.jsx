import { 
  MousePointerClick, 
  Zap, 
  BarChart3, 
  ShieldCheck, 
  Globe, 
  Users 
} from 'lucide-react'

const features = [
  {
    icon: MousePointerClick,
    title: "Drag & Drop Builder",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    icon: Zap,
    title: "Instant Automation",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    icon: Globe,
    title: "Global Infrastructure",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  },
]

export default function Features() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
            Everything you need to scale your operations
          </h2>
          <p className="mt-5 text-lg md:text-xl text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className="group relative bg-gray-50/40 border border-gray-100 rounded-3xl p-8 md:p-10 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-gray-100/70 hover:-translate-y-1"
              >
                {/* Icon circle */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-600/10 text-blue-600 mb-6 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <Icon className="w-7 h-7" strokeWidth={2} />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

export default function IntuitiveBuilder() {
  return (
    <section className="py-24 md:py-32 bg-linear-to-b from-white via-gray-50/40 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* First block: Text left + Visual right */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-32 lg:mb-40">
          {/* Text */}
          <div className="max-w-xl">
            <div className="inline-block bg-blue-50 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              INTUITIVE DESIGN
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-tight mb-6">
              Create complex workflows with{' '}
              <span className="text-blue-600">simple logic</span>.
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
            </p>

            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3 text-gray-700">
                <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                <span>Nullam id dolor id nibh ultricies vehicula ut id elit.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                <span>Donec id elit non mi porta gravida at eget metus.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                <span>Maecenas faucibus mollis interdum.</span>
              </li>
            </ul>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-colors group"
            >
              Learn more about Builder
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
          </div>

          {/* Visual - black card with blue circle */}
          <div className="relative mx-auto lg:mx-0 max-w-95 md:max-w-115 lg:max-w-none">
            <div className="aspect-9/16 md:aspect-4/5 lg:aspect-square rounded-3xl overflow-hidden border border-gray-200 shadow-2xl shadow-gray-200/50 bg-black relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-3/5 aspect-square rounded-full border-8 border-blue-500/30 overflow-hidden">
                  <div className="absolute inset-2 rounded-full bg-linear-to-br from-blue-400 via-cyan-300 to-blue-500" />
                  {/* Optional subtle shine */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-white/10" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second block: Visual left + Text right */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Visual - team photo */}
          <div className="relative mx-auto lg:mx-0 order-2 lg:order-1 max-w-125 lg:max-w-none 
rounded-3xl bg-white p-5 shadow-2xl shadow-gray-300/30 border border-gray-100">

  <div className="rounded-2xl overflow-hidden">
    <Image
      src="/images/team-sync.png"
      alt="Team high-fiving in real-time collaboration"
      width={1200}
      height={900}
      className="w-full h-auto"
    />
  </div>

</div>


          {/* Text */}
          <div className="max-w-xl order-1 lg:order-2">
            <div className="inline-block bg-emerald-50 text-emerald-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              TEAM SYNC
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-tight mb-6">
              Collaborate in real-time with your{' '}
              <span className="text-emerald-600">entire team</span>.
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            </p>

            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3 text-gray-700">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                <span>Aenean eu leo quam. Pellentesque ornare sem lacinia.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                <span>Cum sociis natoque penatibus et magnis dis parturient.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                <span>Vestibulum id ligula porta felis euismod semper.</span>
              </li>
            </ul>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-800 transition-colors group"
            >
              Explore Collaboration
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
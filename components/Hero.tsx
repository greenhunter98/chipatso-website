import Link from "next/link";
import ImageWithFallback from './ImageWithFallback';
export default function Hero() {
  return (
    <section className="hero-bg relative py-20 overflow-hidden">
      <ImageWithFallback src="https://images.unsplash.com/photo-1759844197486-5b3612c7d534?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwdGVhbSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjI3NzI4MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Technology workspace" className="absolute inset-0 w-full h-full object-cover z-0" />
      <div className="absolute inset-0 bg-gray-900/60 z-10" />
      <div className="container-max px-12 grid md:grid-cols-2 gap-12 items-center relative z-20">
        <div className="text-white">
          <div className="inline-block mb-6">
            <div className="rounded-full bg-[#081026] w-36 h-9"></div>
          </div>
          <h1 className="hero-heading">Create, Connect and Innovate with IT</h1>
          <p className="mt-6 text-white/80 max-w-xl">Chipatso delivers cutting-edge IT solutions tailored to your business needs. From web development to IT training, we're your trusted partner in digital transformation.</p>
          <div className="mt-8 flex gap-4 items-center">
            <Link href="/services" className="btn-accent inline-flex items-center gap-3">
              Explore Services
            </Link>
            <Link href="/contact" className="btn-muted  inline-flex items-center gap-3">
              Contact Us
            </Link>
          </div>
        </div>

        {/* hero image removed from right-side placeholder - the full section now has the background image */}
      </div>
    </section>
  )
}
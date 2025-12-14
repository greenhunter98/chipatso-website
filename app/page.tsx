import Hero from "@/components/Hero";
import AboutValues from "@/components/AboutValues";
import ServiceCards from "@/components/ServiceCards";
import Team from '@/components/Team'

const services = [
  {
    title: "Web Development",
    desc: "Custom websites and web applications built with modern technologies. Responsive, fast, and optimized for your business goals.",
    features: ["Responsive Design", "E-commerce Solutions", "CMS Integration"]
  },
  {
    title: "Application Development",
    desc: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android devices.",
    features: ["iOS & Android Apps", "Cross-platform Solutions", "API Integration"]
  },
  {
    title: "Graphic Design",
    desc: "Creative visual solutions including branding, logos, marketing materials, and digital assets that make your brand stand out.",
    features: ["Brand Identity", "Logo Design", "Marketing Materials"]
  },
];

export default function Home() {
  return (
    <div>
      <main className="mt-0">
        <Hero />
        <AboutValues />
        <section className="py-20 bg-pale-blue">
          <div className="container-max px-6">
            <h2 className="text-3xl text-center font-semibold text-[#081026]">Our Services</h2>
            <p className="text-muted-text text-center mt-2">Comprehensive IT solutions designed to help your business thrive in the digital age. We combine expertise with innovation to deliver results that matter.</p>
            <div className="mt-8">
              <ServiceCards services={services} />
            </div>
          </div>
        </section>
        <Team />
      </main>
      
    </div>
  );
}

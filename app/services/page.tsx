import ServiceCards from '@/components/ServiceCards'

export default function ServicesPage() {
  const services = [
    {
      title: "Web Development",
      desc: "Custom websites and web applications built with modern technologies. Responsive, fast, and optimized for search engines.",
      features: ["Responsive Design", "SEO Optimization", "Fast Load Times"],
    },
    {
      title: "Application Development",
      desc: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android devices.",
      features: ["iOS & Android Apps", "Cross-platform Solutions", "App Maintenance"],
    },
    {
      title: "Graphic Design",
      desc: "Creative visual solutions including logos, branding materials, and UI/UX design to make your brand stand out.",
      features: ["Brand Identity", "Logos & Marketing Materials", "UI/UX Design"],
    },
    {
      title: "Social Media Marketing",
      desc: "Strategic social media campaigns designed to increase brand awareness, drive traffic, and convert followers into customers.",
      features: ["Content Strategy", "Campaign Management", "Analytics & Reporting", "Community Engagement"],
    },
    {
      title: "IT Support & Training",
      desc: "Comprehensive IT support services and professional training programs to keep your team skilled and systems running smoothly.",
      features: ["Technical Support", "System Maintenance", "Staff Training", "IT Consultation"],
    }
  ]

  return (
    <section className="py-20 bg-pale-blue">
        <div className="container-max px-6">
          <h1 className="text-3xl font-bold text-[#081026] text-center">Our Services</h1>
          <p className="text-muted-text text-center mt-2">Comprehensive IT solutions designed to help your business thrive in the digital age. We combine expertise with innovation to deliver results that matter.</p>
          <div className="mt-8">
            <ServiceCards services={services} />
          </div>
        </div>
    </section>
  )
}
export default function SocialMediaMarketing(){
  return (
    <section className="py-20 bg-white">
      <div className="container-max px-6 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h1 className="text-3xl font-semibold text-[#081026]">Social Media Marketing</h1>
          <p className="mt-4 text-muted-text max-w-2xl">Strategic social media campaigns designed to increase brand awareness, drive traffic, and convert followers into customers. Our services include content planning, community engagement, and insights-driven optimization.</p>
          <ul className="mt-6 orange-bullet text-sm text-[#20343d]">
            <li>Content Strategy</li>
            <li>Campaign Management</li>
            <li>Analytics & Reporting</li>
            <li>Community Engagement</li>
          </ul>
        </div>
        <div>
          <div className="feature-card">
            <h3 className="text-[#081026] font-semibold">Start a campaign</h3>
            <p className="text-muted-text mt-2">We'll help you create a plan that resonates with your audience and achieves measurable results.</p>
            <div className="mt-6">
              <a className="btn-accent" href="/contact">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ITSupportTraining(){
  return (
    <section className="py-20 bg-white">
      <div className="container-max px-6 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h1 className="text-3xl font-semibold text-[#081026]">IT Support & Training</h1>
          <p className="mt-4 text-muted-text max-w-2xl">Comprehensive IT support services and professional training programs to keep your team skilled and your systems running smoothly. We deliver reliable support, system maintenance, and tailored training courses to meet your business needs.</p>
          <ul className="mt-6 orange-bullet text-sm text-[#20343d]">
            <li>Technical Support</li>
            <li>System Maintenance</li>
            <li>Staff Training</li>
            <li>IT Consultation</li>
          </ul>
        </div>
        <div>
          <div className="feature-card">
            <h3 className="text-[#081026] font-semibold">Get Support</h3>
            <p className="text-muted-text mt-2">Need help now? Contact our support team to get assistance and managed services for your systems.</p>
            <div className="mt-6">
              <a className="btn-accent" href="/contact">Request Support</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

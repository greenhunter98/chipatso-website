export default function ContactPage() {
  return (
    <div>
      <main className="mt-0">
        <section className="py-20 bg-white">
          <div className="container-max px-6 grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="feature-card">
                <div className="flex items-center gap-4">
                    <div className="icon-pill" aria-hidden="true" role="img" aria-label="Email">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M3 7.5v9A1.5 1.5 0 0 0 4.5 18h15A1.5 1.5 0 0 0 21 16.5v-9A1.5 1.5 0 0 0 19.5 6h-15A1.5 1.5 0 0 0 3 7.5z" stroke="#ffffff" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 7.5l-9 6-9-6" stroke="#ffffff" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  <div>
                    <h4 className="text-[#081026] font-semibold">Email</h4>
                    <div className="text-muted-text"><a href="mailto:info@chipatso.mw" className="hover:underline">info@chipatso.mw</a></div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex items-center gap-4">
                    <div className="icon-pill" aria-hidden="true" role="img" aria-label="Phone">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.27 11.36 11.36 0 0 0 3.58.57 1 1 0 0 1 1 1v3.59a1 1 0 0 1-1 1A17 17 0 0 1 3 6a1 1 0 0 1 1-1h3.59a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.58 1 1 0 0 1-.27 1z" stroke="#ffffff" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <div>
                      <h4 className="text-[#081026] font-semibold">Phone</h4>
                      <div className="text-muted-text mt-2"><a href="tel:+265XXXXXXXXX" className="hover:underline">+265 XXX XXX XXX</a></div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex items-center gap-4">
                    <div className="icon-pill" aria-hidden="true" role="img" aria-label="Location">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8 2 5 5 5 9c0 6 7 11 7 11s7-5 7-11c0-4-3-7-7-7z" stroke="#ffffff" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="9" r="2.2" fill="#ffffff" /></svg>
                    </div>
                    <div>
                      <h4 className="text-[#081026] font-semibold">Location</h4>
                      <div className="text-muted-text mt-2">Malawi</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="feature-card">
                <h3 className="text-[#081026] font-semibold">Get In Touch</h3>
                <form className="mt-6 space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Your name" className="input-pill" />
                    <input type="email" placeholder="your.email@example.com" className="input-pill" />
                  </div>
                  <input type="text" placeholder="Subject" className="input-pill w-full" />
                  <textarea placeholder="Tell us about your project or inquiry..." rows={6} className="input-pill w-full" />
                  <button className="btn-accent">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
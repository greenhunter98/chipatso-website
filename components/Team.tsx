"use client"
import Link from 'next/link'
import ImageWithFallback from './ImageWithFallback'

type Member = {
  name: string
  role: string
  bio?: string
  photo?: string
  linkedin?: string
  twitter?: string
}

const members: Member[] = [
  { name: 'Piliran Likhoswe', role: 'Founder & CEO', bio: 'Leads product & strategy', photo: '/piliran.jpeg', linkedin: 'https://linkedin.com/in/piliranlikhoswe', twitter: 'https://twitter.com/piliran' },
  { name: 'Bright Likhoswe', role: 'CTO', bio: 'Engineering and architecture', photo: '/bright.jpeg', linkedin: 'https://linkedin.com/in/brightlikhoswe', twitter: 'https://twitter.com/bright' },
  { name: 'Tony Mainala', role: 'Head of Design', bio: 'Design & UX lead', photo: '/tony.jpeg', linkedin: 'https://linkedin.com/in/tonymainala', twitter: 'https://twitter.com/tony' },
  { name: 'Abdullah Silika', role: 'Support Lead', bio: 'IT Support & Training', photo: '/abdullah.jpeg', linkedin: 'https://linkedin.com/in/abdullahsilika', twitter: 'https://twitter.com/abdullah' },
]

export default function Team(){
  function initials(name: string){
    return name.split(' ').map(n=>n[0]).join('').slice(0,2).toUpperCase()
  }
  return (
    <section className="py-20 bg-white">
      <div className="container-max px-6">
        <h2 className="text-3xl font-semibold text-[#081026] text-center">Our Team</h2>
        <p className="text-muted-text text-center mt-2 max-w-2xl mx-auto">A curated team of professionals who deliver technical excellence and client-first solutions.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map(m => (
            <div key={m.name} className="team-card feature-card text-center">
              <div className="mx-auto w-24 h-24 rounded-full overflow-hidden bg-[#6da6b6] flex items-center justify-center text-white font-semibold text-xl">
                {m.photo ? (
                  <ImageWithFallback src={m.photo} alt={m.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-2xl">{initials(m.name)}</div>
                )}
              </div>
              <h3 className="mt-4 text-[#081026] font-semibold">{m.name}</h3>
              <div className="text-sm text-muted-text mt-1">{m.role}</div>
              <p className="text-sm text-muted-text mt-3">{m.bio}</p>
              <div className="mt-4 flex items-center justify-center gap-3">
                <a href={m.twitter || '#'} target="_blank" rel="noreferrer" className="social-square twitter" aria-label={`Follow ${m.name} on Twitter`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.26 4.26 0 0 0 1.86-2.36 8.51 8.51 0 0 1-2.7 1.03 4.25 4.25 0 0 0-7.24 3.88 12.06 12.06 0 0 1-8.76-4.44 4.25 4.25 0 0 0 1.31 5.67c-.66 0-1.28-.2-1.83-.5 0 2.06 1.46 3.78 3.4 4.18a4.3 4.3 0 0 1-1.92.07 4.25 4.25 0 0 0 3.97 2.95A8.53 8.53 0 0 1 2 19.54a12.05 12.05 0 0 0 6.52 1.91c7.84 0 12.13-6.5 12.13-12.14l-.01-.55A8.64 8.64 0 0 0 24 6.56a8.3 8.3 0 0 1-2.39.66z"/></svg>
                </a>
                <a href={m.linkedin || '#'} target="_blank" rel="noreferrer" className="social-square linkedin" aria-label={`Follow ${m.name} on Linkedin`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-9.75 14.5H7.25V10.5h2v7zM8.25 9a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zM17.5 17.5h-2V13c0-1-.5-1.5-1.25-1.5-.75 0-1.5.5-1.5 1.5v4h-2V10.5h2v1.25c.5-.75 1.5-1 2.25-1 1.5 0 2.5 1 2.5 2.5v4.25z"/></svg>
                </a>
                <a href="#" className="social-square facebook" aria-label={`Follow ${m.name} on Facebook`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M22 12a10 10 0 1 0-11.5 9.95v-7.05H8.9v-2.9h1.6V9.53c0-1.58.94-2.46 2.38-2.46.69 0 1.42.12 1.42.12v1.56h-.8c-.79 0-1.04.5-1.04 1v1.2h1.77l-.28 2.9H12.3V21.95A10 10 0 0 0 22 12z"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

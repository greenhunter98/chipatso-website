import Link from 'next/link'

function slugify(title: string) {
	return title.toLowerCase().replace(/[^a-z0-9]+/gi, '-').replace(/^\-+|\-+$/g, '')
}

export default function ServiceCards ({ services }:{ services: {title:string; desc:string; features?:string[]}[] }){
	return (
		<div className="grid md:grid-cols-3 gap-6">
			{services.map((s)=> (
						<div key={s.title} className="feature-card bg-white shadow-md group">
					<div className="flex flex-col gap-4">
						  <div className="service-card-icon">
							{/* choose different svg icons per service title */}
							{s.title.includes('Web') && (
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="5" width="18" height="14" rx="2" stroke="#FF7B3E" strokeWidth="1.6"/></svg>
							)}
							{s.title.includes('Application') && (
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 2h10v20H7z" stroke="#FF7B3E" strokeWidth="1.6"/></svg>
							)}
							{s.title.includes('Graphic') && (
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8" stroke="#FF7B3E" strokeWidth="1.6"/></svg>
							)}
							{s.title.includes('Social') && (
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12a8 8 0 0 1 14.32-5.2L12 10" stroke="#FF7B3E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
							)}
							{s.title.includes('IT Support') && (
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 10v6a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-6" stroke="#FF7B3E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 10a4 4 0 0 1 8 0" stroke="#FF7B3E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
							)}
						</div>
							  <div >
							  <h3 className="text-[#081026] font-semibold"><Link href={`/services/${slugify(s.title)}`}>{s.title}</Link></h3>
							<p className="text-sm text-muted-text mt-2">{s.desc}</p>
							{s.features && (
								<ul className="mt-4 orange-bullet text-sm text-[#20343d]">
									{s.features.map((f)=> <li key={f}>{f}</li>)}
								</ul>
							)}
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

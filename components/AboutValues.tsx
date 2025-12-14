export default function AboutValues () {
	const values = [
		{ title: 'Mission Driven', desc: 'Empowering businesses through innovative IT solutions that drive growth and efficiency.' },
		{ title: 'Client Focused', desc: "Building lasting partnerships by understanding and exceeding our clients' expectations." },
		{ title: 'Quality First', desc: 'Delivering excellence in every project with attention to detail and best practices.' },
		{ title: 'Innovation', desc: "Staying ahead with the latest technologies and creative problem-solving approaches." },
	];

	return (
		<section className="py-20 bg-white">
			<div className="container-max px-6 text-center">
				<h2 className="text-3xl font-semibold text-[#081026]">About Chipatso</h2>
				<p className="mt-3 text-muted-text max-w-2xl mx-auto">We are a dynamic IT company based in Malawi, committed to transforming businesses through technology. Our team of skilled professionals brings together creativity, technical expertise, and a passion for innovation to deliver solutions that matter.</p>
				<div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{values.map((v) => (
						<div key={v.title} className="feature-card">
							<div className="flex flex-col items-center gap-4">
								<div className="icon-pill">
									{/* Individual icons to differentiate the cards */}
									{v.title === 'Mission Driven' && (
										<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l4 8H8l4-8z" stroke="#F05A2B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/></svg>
									)}
									{v.title === 'Client Focused' && (
										<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="2" stroke="#F05A2B" strokeWidth="1.25"/><path d="M5 20c1-4 6-6 7-6s6 2 7 6" stroke="#F05A2B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/></svg>
									)}
									{v.title === 'Quality First' && (
										<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3 7h6l-5 4 2 7-6-4-6 4 2-7-5-4h6z" stroke="#F05A2B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/></svg>
									)}
									{v.title === 'Innovation' && (
										<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 12a3 3 0 1 1 6 0c0 2-3 4-3 4s-3-2-3-4z" stroke="#F05A2B" strokeWidth="1.25"/><path d="M12 3v2" stroke="#F05A2B" strokeWidth="1.25" strokeLinecap="round"/><path d="M12 19v2" stroke="#F05A2B" strokeWidth="1.25" strokeLinecap="round"/></svg>
									)}
								</div>
								<div>
									<h3 className="text-[#081026] font-semibold">{v.title}</h3>
									<p className="text-sm text-muted-text mt-2">{v.desc}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

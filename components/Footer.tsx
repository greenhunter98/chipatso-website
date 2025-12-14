import Image from 'next/image'
import Link from 'next/link'
export default function Footer(){
	return (
		<footer className="site-footer mt-16">
			<div className="container-max px-6 py-12 grid md:grid-cols-4 gap-8">
				<div>
					<Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <div className=" flex items-center justify-center">
            <Image src="/ChipaLogoFinal.png" alt="Chipaso logo" width={100} height={40}  className="object-contain" priority />
          </div>
          
        </Link>
					<p className="mt-4 text-[#081026] text-sm">Create, Connect and Innovate with IT. Empowering businesses in Malawi and beyond with cutting-edge technology solutions.</p>
				</div>

				<div className="text-[#d2d9de]">
					<h4 className="footer-col">Services</h4>
					<ul className="text-sm space-y-2">
						<li>Web Development</li>
						<li>App Development</li>
						<li>Graphic Design</li>
						<li>Social Media Marketing</li>
						<li>IT Support & Training</li>
					</ul>
				</div>

				<div className="text-[#d2d9de]">
					<h4 className="footer-col">Company</h4>
					<ul className="text-sm space-y-2">
						<li>About Us</li>
						<li>Our Team</li>
						<li>Careers</li>
						<li>Contact</li>
					</ul>
				</div>

				<div className="text-[#d2d9de]">
					<h4 className="footer-col">Connect With Us</h4>
					  <div className="text-sm">info@chipatso.mw</div>
					<div className="mt-4 flex gap-3">
						<span className="social-square">W</span>
						<span className="social-square">F</span>
						<span className="social-square">I</span>
						<span className="social-square">T</span>
					</div>
				</div>
			</div>
			<div className="border-t border-white/6 mt-6 py-6">
				<div className="container-max px-6 text-[#081026] text-sm">© 2025 Chipatso IT Solutions. All rights reserved. <span className="float-right">Privacy Policy &nbsp;|&nbsp; Terms of Service</span></div>
			</div>
		</footer>
	)
}

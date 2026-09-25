import { useState } from "react";
import "./App.css";

const projects = [
	{ title: "Cybersecurity Planet", type: "Cybersecurity education", description: "A cybersecurity learning platform that presents security concepts through a focused, accessible web experience.", outcome: "Built with Next.js and TypeScript; deployed at cybersecurity-planet.vercel.app.", url: "https://github.com/Black-widow-codes/Cybersecurity-Planet" },
	{ title: "CareGuardian", type: "Digital health platform", description: "A Patient Safety Intelligence Platform that helps healthcare teams identify discharge risks before patients leave hospital.", outcome: "Developed with Next.js, React, TypeScript, PostgreSQL, Prisma, and Docker.", url: "https://github.com/Black-widow-codes/CareGuardian" },
	{ title: "Brightwell Children's Clinic", type: "HTML / CSS / JavaScript", description: "A hospital website created as a college project with pages for services, telemedicine, remote monitoring, and parent resources.", outcome: "Created a structured, responsive healthcare information experience.", url: "https://github.com/Black-widow-codes/My_html_project" },
];

const services = ["Web development", "React applications", "Technical support", "Digital health solutions"];

function Portfolio() {
	const [submitted, setSubmitted] = useState(false);

	function handleSubmit(event) {
		event.preventDefault();
		setSubmitted(true);
		window.location.hash = "home";
	}

	return (
		<>
			<header className="topbar">
				<a className="brand" href="#home" aria-label="Return to home"><span className="brand-mark">BS</span><span>Bryan Senfuma<span className="brand-dot">.</span></span></a>
				<nav className="nav-links" aria-label="Main navigation">
					<a href="#about">About</a><a href="#projects">Projects</a><a href="#education">Education</a><a href="#services">Services</a><a href="#contact">Contact</a>
				</nav>
			</header>

			<main>
				<section className="hero" id="home">
					  <div><p className="eyebrow hero-eyebrow"><span className="pulse" /> COMP229 portfolio</p><h1>Technology with a <em>human</em> purpose.</h1><p className="hero-text">Welcome to my portfolio. I am Bryan Senfuma, a Digital Health Engineering Technology student interested in secure, accessible, and human-centred technology.</p><a className="primary-button" href="#about">Explore my work <span>↗</span></a></div>
					<div className="hero-orbit" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit-core">P<span>.</span></div><span className="orbit-label label-one">code</span><span className="orbit-label label-two">learn</span><span className="orbit-label label-three">build</span></div>
				</section>

				<section className="section foundations" id="about">
					  <div className="section-intro"><p className="eyebrow">01 / About me</p><h2>A little about the person behind the work.</h2><p>I am a Digital Health Engineering Technology student at Centennial College with a foundation in IT support, cybersecurity awareness, digital literacy, and technology advocacy.</p><a className="text-link" href="/Bryan_Senfuma_resume.pdf" target="_blank" rel="noreferrer">Download my resume <span>↗</span></a></div>
					  <div className="about-panel"><div className="profile-placeholder"><img src="/bryan-avatar.jpg" alt="Professional avatar of Bryan Senfuma" /></div><div><p className="eyebrow">Legal name</p><h3>Bryan Senfuma</h3><p>I enjoy breaking down complex systems, solving technical problems, and turning technical concepts into practical solutions people can genuinely use. My long-term goal is to contribute to secure and accessible digital health systems while growing in healthcare technology and cybersecurity.</p></div></div>
				</section>

				<section className="section" id="projects"><div className="section-heading"><p className="eyebrow">02 / Selected projects</p><h2>Work worth talking about.</h2></div><div className="project-grid">{projects.map((project, index) => <article className="project-card" key={project.title}><div className={`project-image project-image-${index + 1}`}>Project {index + 1}</div><p className="eyebrow">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p><p className="project-outcome"><strong>Outcome:</strong> {project.outcome}</p><a className="project-link" href={project.url} target="_blank" rel="noreferrer">View on GitHub <span>↗</span></a></article>)}</div></section>

				<section className="section split-section" id="education"><div className="section-intro"><p className="eyebrow">03 / Education</p><h2>Learning with purpose.</h2><p>My education combines healthcare technology, systems support, cybersecurity, cloud security, and digital health innovation.</p><p className="education-skills"><strong>Focus areas:</strong> Healthcare information systems, workflow analysis, programming, Python, C#, HTML, CSS, JavaScript, networking, cybersecurity, Linux/Unix, databases, and technical support.</p></div><div className="timeline"><div className="timeline-item"><span>Expected 2028</span><div><h3>Digital Health Engineering Technology Advanced Diploma</h3><p>Centennial College · Toronto, ON</p></div></div><div className="timeline-item"><span>2004</span><div><h3>Computer Engineering Diploma</h3><p>Aptech Education Centre · Kampala, Uganda</p></div></div><div className="timeline-item"><span>2025</span><div><h3>Certificate of Cloud Security Knowledge (CCSK)</h3><p>Cloud Security Alliance</p></div></div><div className="timeline-item"><span>2019</span><div><h3>CompTIA Security+</h3><p>CompTIA</p></div></div><div className="timeline-item"><span>2020</span><div><h3>Oracle Cloud Infrastructure Certification</h3><p>Oracle</p></div></div><div className="timeline-item"><span>2024</span><div><h3>Information Technology Support</h3><p>Alison</p></div></div><div className="timeline-item"><span>2024</span><div><h3>ITIL Fundamentals</h3><p>PeopleCert</p></div></div><div className="timeline-item"><span>2007</span><div><h3>Microsoft Certified Professional (MCP)</h3><p>Microsoft</p></div></div></div></section>

				<section className="section service-section" id="services"><div className="section-intro"><p className="eyebrow">04 / Services</p><h2>Ways I can help.</h2></div><div className="service-list">{services.map((service, index) => <div className="service-item" key={service}><span>0{index + 1}</span><h3>{service}</h3><span>↗</span></div>)}</div></section>

				<section className="section contact-section" id="contact"><div className="section-intro"><p className="eyebrow">05 / Contact me</p><h2>Let&apos;s start a conversation.</h2><p>Email: <a href="mailto:bsenfuma@my.centennialcollege.ca">bsenfuma@my.centennialcollege.ca</a><br />Phone: <a href="tel:+14373282640">437 328 2640</a></p></div><form className="contact-form" onSubmit={handleSubmit}><div className="form-row"><label>First name<input name="firstName" required /></label><label>Last name<input name="lastName" required /></label></div><div className="form-row"><label>Email address<input type="email" name="email" required /></label><label>Contact number<input type="tel" name="phone" /></label></div><label>Message<textarea name="message" rows="5" required /></label><button className="primary-button" type="submit">Send message <span>↗</span></button>{submitted && <p className="form-success" role="status">Thanks. Your message has been captured.</p>}</form></section>
			</main>

			<footer className="footer"><span>© 2026 Bryan Senfuma</span><span>Built with React</span></footer>
		</>
	);
}

export default Portfolio;
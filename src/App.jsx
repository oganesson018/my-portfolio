import { useEffect } from "react";
import "./App.css";

function useRevealOnScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const revealEls = document.querySelectorAll(".reveal");
    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

function Nav() {
  return (
    <header className="nav">
      <a className="brand-text" href="#top">Thanathip Premnirandon</a>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Project</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-inner reveal">
        <p className="eyebrow">Portfolio</p>
        <h1 className="headline">Thanathip Premnirandon</h1>
        <div className="avatar reveal"><img src="/my-portfolio/myphoto.jpg" alt="My portrait" /></div>
        <p className="sub">
          Front‑end / Creative Developer DII GEN 6 / CMU 
        </p>
        <div className="ctas">
          <a href="#projects" className="btn primary">View Project</a>
          <a href="#contact" className="btn ghost">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title reveal">About</h2>
        <p className="section-text reveal">
          I am passionate about simple design that is easy to read and responds quickly. It emphasizes composition with white space and color contrast to highlight important points, along with incorporating small playful elements for a smooth scrolling experience on the website.
        </p>
      </div>
    </section>
  );
}

const PROJECTS = [
  {
    title: "Bluewave Landing",
    desc: "Blue tone landing page, sharp with sliding animation.",
    link: "#",
  },
  {
    title: "Minimal Shop UI",
    desc: "Minimalist store model focusing on speed and ease of use.",
    link: "#",
  },
  {
    title: "Interactive Gallery",
    desc: "Smooth scrolling image gallery with IntersectionObserver",
    link: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="section alt">
      <div className="container">
        <h2 className="section-title reveal">Project</h2>
        <div className="grid">
          {PROJECTS.map((p, i) => (
            <article key={i} className="card reveal">
              <div className="badge">Project {i + 1}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <a className="link" href={p.link}>Details →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title reveal">Skills</h2>
        <ul className="skills reveal">
          <li>React + Vite</li>
          <li>CSS Architecture (BEM/Utility)</li>
          <li>Animation (IntersectionObserver, CSS)</li>
          <li>Design System / Accessibility</li>
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section black">
      <div className="container">
        <h2 className="section-title light reveal">Contact</h2>
        <p className="section-text light reveal">
          If you are interested in collaborating or want to consult about a project, you can send an email to{" "}
          <a className="link light" href="thanathip_pe@cmu.ac.th">
            thanathip_pe@cmu.ac.th
          </a>
        </p>
      </div>
    </section>
  );
}

export default function App() {
  useRevealOnScroll();

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <footer className="footer">
        <div className="container">
          <span>© {new Date().getFullYear()} Thanathip Premnirandon</span>
          <a href="#top" className="backtop">Return to top ↑</a>
        </div>
      </footer>
    </>
  );
}
import React, { useState } from "react";

// Carousel images placeholder
const carouselImages = [
  // Example placeholders; replace with your uploaded image links
  { src: "LINK_TO_IMAGE_1", alt: "Project 1" },
  { src: "LINK_TO_IMAGE_2", alt: "Project 2" },
  { src: "LINK_TO_IMAGE_3", alt: "Project 3" },
];

// Text and image sections placeholder
const textImageSections = [
  {
    title: "About Me",
    text: "Write a short introduction about yourself here. Make it personal and authentic.",
    img: "LINK_TO_YOUR_PORTRAIT_IMAGE",
    imgAlt: "Your photo",
  },
  {
    title: "My Philosophy",
    text: "Share your vision, your mission, or your approach to work and life.",
    img: "LINK_TO_PHILOSOPHY_IMAGE",
    imgAlt: "Philosophy visual",
  },
];

// Interactive sections
const interactiveSections = [
  {
    title: "Projects",
    desc: "Click to view my projects and case studies.",
    link: "/projects", // Update when you build more pages
  },
  {
    title: "Contact",
    desc: "Get in touch with me for collaborations or opportunities.",
    link: "/contact",
  },
];

function Carousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % carouselImages.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);

  return (
    <div className="carousel">
      <button onClick={prev} aria-label="Previous" className="carousel-btn">&#8592;</button>
      <div className="carousel-img-wrapper">
        {/* Replace src with your image links */}
        <img
          src={carouselImages[current].src}
          alt={carouselImages[current].alt}
          className="carousel-img"
        />
      </div>
      <button onClick={next} aria-label="Next" className="carousel-btn">&#8594;</button>
    </div>
  );
}

function TextImageSection({ title, text, img, imgAlt, reverse }) {
  return (
    <section className={`text-img-section${reverse ? " reverse" : ""}`}>
      <div className="text-content">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="img-content">
        {/* Replace src with your image links */}
        <img src={img} alt={imgAlt} />
      </div>
    </section>
  );
}

function InteractiveSection({ title, desc, link }) {
  return (
    <a href={link} className="interactive-section">
      <div className="interactive-content">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <span className="arrow">&#8594;</span>
    </a>
  );
}

export default function Homepage() {
  return (
    <div className="homepage">
      <header className="homepage-header">
        {/* Logo goes here if you want */}
        <h1>Your Name</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#philosophy">Philosophy</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h2>Welcome to My Digital Portfolio</h2>
          <p>
            This is a space to showcase my work, share my story, and connect with you.
          </p>
          <Carousel />
        </section>

        {textImageSections.map((section, idx) => (
          <TextImageSection
            key={section.title}
            title={section.title}
            text={section.text}
            img={section.img}
            imgAlt={section.imgAlt}
            reverse={idx % 2 === 1}
          />
        ))}

        <section className="interactive-sections">
          {interactiveSections.map((item) => (
            <InteractiveSection
              key={item.title}
              title={item.title}
              desc={item.desc}
              link={item.link}
            />
          ))}
        </section>
      </main>
      <footer className="homepage-footer">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

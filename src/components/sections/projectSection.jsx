import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import projects from '../../data/Projects';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const container = useRef(null);

  useGSAP(() => {
    // --- Section Entrance Animation ---
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.from(".section-header h2, .section-header .divider, .section-header p", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
    })
    .from(".project-card", {
      opacity: 0,
      y: 100,
      scale: 0.95,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    }, "-=0.5")
    .from(".deco-shape", {
        opacity: 0,
        scale: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'elastic.out(1, 0.5)'
    }, "<");

    // --- Continuous Floating Animations for Decorative Shapes ---
    gsap.to(".deco-1", { rotation: 360, repeat: -1, duration: 10, ease: "none" });
    gsap.to(".deco-2", { y: -20, yoyo: true, repeat: -1, duration: 3, ease: "sine.inOut" });
    gsap.to(".deco-3", { rotation: -30, yoyo: true, repeat: -1, duration: 5, ease: "sine.inOut" });
    gsap.to(".deco-4", { y: 20, x: -10, yoyo: true, repeat: -1, duration: 4, ease: "sine.inOut", delay: 1 });

    const cards = gsap.utils.toArray(".project-card");
    cards.forEach((card) => {
      const q = gsap.utils.selector(card);
      const cardContent = q(".card-content");
      const cardShadow = q(".card-shadow");
      const cardImage = q(".project-image");
      const cardTitle = q(".project-title");
      const cardOverlay = q(".image-overlay");

      // --- Interactive 3D Card Hover Effect ---
      const hoverTimeline = gsap.timeline({ paused: true })
        .to(card, { scale: 1.03, duration: 0.5, ease: "power3.out" })
        .to(cardShadow, { opacity: 0.3, scale: 1.05, duration: 0.5, ease: "power3.out" }, "<")
        .to(cardImage, { scale: 1.1, rotation: 1, duration: 0.7, ease: "power3.out" }, "<")
        .to(cardTitle, { color: '#4e45d5', x: 5, duration: 0.4, ease: "power2.out" }, "<")
        .to(cardOverlay, { opacity: 1, duration: 0.5, ease: "power3.inOut" }, "<");

      card.addEventListener("mouseenter", () => hoverTimeline.play());
      card.addEventListener("mouseleave", () => hoverTimeline.reverse());

      card.addEventListener("mousemove", (e) => {
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        const rotateX = gsap.utils.mapRange(0, height, -7, 7)(y);
        const rotateY = gsap.utils.mapRange(0, width, 7, -7)(x);

        gsap.to(cardContent, {
          rotationX: rotateX,
          rotationY: rotateY,
          transformPerspective: 1000,
          duration: 0.5,
          ease: "power3.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(cardContent, {
          rotationX: 0,
          rotationY: 0,
          duration: 0.7,
          ease: "elastic.out(1, 0.5)",
        });
      });

      // --- NEW: Smooth Scroll-Driven Parallax Effect ---
      gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2, // Use scrub to link animation to scroll position
        }
      })
      .to(card, { yPercent: -5, ease: "none" }, 0) // Move the entire card up slightly as it scrolls
      .to(cardImage, { yPercent: 5, ease: "none" }, 0); // Move the image down for a depth effect
    });

    // --- CTA Button Animation ---
    const ctaButton = ".cta-button";
    gsap.from(ctaButton, {
        scrollTrigger: {
            trigger: ctaButton,
            start: "top 95%",
        },
        opacity: 0,
        scale: 0.8,
        y: 50,
        duration: 1,
        ease: 'elastic.out(1, 0.75)'
    });

  }, { scope: container });

  return (
    <div id="projects" ref={container} className="relative bg-blue-50 py-20 px-4 md:px-8 font-sans overflow-hidden">
      {/* Floating Decorative Elements */}
      <div className="deco-shape deco-1 absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg opacity-20"></div>
      <div className="deco-shape deco-2 absolute top-1/3 right-20 w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-25"></div>
      <div className="deco-shape deco-3 absolute bottom-40 left-1/4 w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 transform rotate-45 opacity-20"></div>
      <div className="deco-shape deco-4 absolute bottom-20 right-10 w-14 h-14 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-30"></div>

      {/* Section Header */}
      <div className="section-header relative text-center mb-20 z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#4e45d5] font-display font-bold mb-6">
          My Projects
        </h2>
        <div className="divider w-32 h-1 bg-gradient-to-r from-[#4e45d5] via-purple-500 to-pink-500 mx-auto rounded-full"></div>
        <p className="text-lg md:text-xl text-[#343d38] mt-8 max-w-2xl mx-auto font-normal">
          Explore my latest work and creative solutions
        </p>
      </div>

      {/* Projects Grid */}
      <div className="relative max-w-7xl mx-auto">
        <div className="grid gap-12 md:gap-16 lg:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-card group relative ${project.featured ? "lg:col-span-2" : ""}`}
              style={{ perspective: "1000px" }}
            >
              <div
                className="card-content relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-white/60"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-15 transition-opacity duration-500`}></div>
                <div className={`relative ${project.featured ? "md:flex" : ""}`}>
                  <div className={`relative ${project.featured ? "md:w-1/2" : ""}`}>
                    <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-image w-full h-full object-cover"
                      />
                      <div className="image-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 flex items-center justify-center gap-4">
                        <a href={project.vercelLink} target="_blank" rel="noopener noreferrer" className="group/btn relative px-6 py-3 bg-gradient-to-r from-[#4e45d5] to-purple-600 text-white rounded-xl font-semibold transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl">
                          <span className="relative z-10 flex items-center gap-2">🚀 Live Demo</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                        </a>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="group/btn relative px-6 py-3 bg-gradient-to-r from-gray-800 to-black text-white rounded-xl font-semibold transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl">
                          <span className="relative z-10 flex items-center gap-2">🔗 GitHub</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                        </a>
                      </div>
                      <div className="absolute top-4 right-4 z-10">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-gradient-to-r ${project.gradient} text-white shadow-lg backdrop-blur-sm`}>
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={`relative p-8 md:p-10 z-10 ${project.featured ? "md:w-1/2 flex flex-col justify-center" : ""}`}>
                    <h3 className="project-title text-2xl md:text-3xl font-bold text-[#343d38] mb-4 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">{project.description}</p>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="relative px-4 py-2 bg-gradient-to-r from-white to-gray-50 text-[#343d38] rounded-full text-xs md:text-sm font-semibold border border-gray-200 hover:border-[#4e45d5] transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-pointer group/tech shadow-sm hover:shadow-lg">
                          {tech}
                          <div className="absolute inset-0 bg-gradient-to-r from-[#4e45d5] to-purple-500 rounded-full opacity-0 group-hover/tech:opacity-15 transition-opacity duration-300"></div>
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 md:hidden">
                      <a href={project.vercelLink} target="_blank" rel="noopener noreferrer" className="flex-1 group/btn relative px-4 py-2 bg-gradient-to-r from-[#4e45d5] to-purple-600 text-white rounded-xl font-semibold text-center transform hover:scale-105 transition-all duration-300">
                        🚀 Live Demo
                      </a>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex-1 group/btn relative px-4 py-2 bg-gradient-to-r from-gray-800 to-black text-white rounded-xl font-semibold text-center transform hover:scale-105 transition-all duration-300">
                        🔗 GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`card-shadow absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-3xl transform translate-y-4 opacity-15 blur-lg -z-10`}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Call-to-Action */}
      <div className="relative text-center mt-20 z-10">
        <a
          href="https://github.com/Divyanshguptaj"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button group relative px-10 py-4 bg-transparent border-none cursor-pointer inline-block"
        >
          <span className="relative z-10 text-gray-100 font-bold text-lg whitespace-nowrap">
            View All Projects
          </span>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-r from-[#28282d] to-gray-800 rounded-xl transition-all duration-500 group-hover:translate-x-[8%] group-hover:translate-y-[25%] group-hover:w-[115%] group-hover:h-[115%] -z-10 shadow-lg"></div>
          <div className="absolute translate-x-3 translate-y-3 w-12 h-12 bg-gradient-to-r from-[#4e45d5]/20 to-purple-500/20 backdrop-blur-sm rounded-full transition-all duration-500 group-hover:rounded-xl group-hover:translate-x-0 group-hover:translate-y-0 group-hover:w-full group-hover:h-full -z-20"></div>
        </a>
      </div>
    </div>
  );
};

export default Projects;

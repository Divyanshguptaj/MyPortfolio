import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import projects from '../../data/Projects';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const container = useRef(null);

  useGSAP(() => {
    const splitContainer = container.current.querySelector(".split-scroll-container");
    const rightColumn = container.current.querySelector(".right-column");
    const textBlocks = gsap.utils.toArray(".project-text-content");
    const images = gsap.utils.toArray(".project-image-item");
    let lastActiveImage = images[0]; // Keep track of the currently visible image

    // --- Pin the right column ---
    ScrollTrigger.create({
      trigger: splitContainer,
      start: "top top",
      end: "bottom bottom",
      pin: rightColumn,
      pinSpacing: false, // Avoids extra space after pinning
    });

    // --- Set initial visibility ---
    gsap.set(images, { opacity: 0, scale: 0.95, yPercent: 5 }); // Start all images hidden
    gsap.set(images[0], { opacity: 1, scale: 1, yPercent: 0 }); // Make the first image visible

    // --- Create triggers for each text block ---
    textBlocks.forEach((block, index) => {
      const q = gsap.utils.selector(block); // Create a selector for the current block

      ScrollTrigger.create({
        trigger: block,
        start: "top center", // When the top of the text block hits the center
        end: "bottom center", // When the bottom of the text block leaves the center
        onToggle: (self) => {
          // When a trigger becomes active (i.e., its text block is in the center)
          if (self.isActive) {
            // Animate out the previously active image
            if (lastActiveImage && lastActiveImage !== images[index]) {
              gsap.to(lastActiveImage, {
                opacity: 0,
                scale: 0.95,
                yPercent: -5,
                duration: 0.4,
                ease: "power3.in",
              });
            }
            // Animate in the new corresponding image
            gsap.to(images[index], {
              opacity: 1,
              scale: 1,
              yPercent: 0,
              duration: 0.5,
              ease: "power3.out",
            });
            // Update the reference to the new active image
            lastActiveImage = images[index];

            // Animate in the text content for the active block
            gsap.from(q(".animated-text"), {
                opacity: 0,
                y: 30,
                stagger: 0.1,
                duration: 0.6,
                ease: 'power3.out'
            });
          }
        },
      });
    });

    // --- Header Animation ---
    gsap.from(".section-header", {
      scrollTrigger: {
        trigger: ".section-header",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 100,
      duration: 1,
      ease: 'power3.out'
    });

    // --- CTA Section Animation ---
    gsap.from(".cta-section", {
      scrollTrigger: {
        trigger: ".cta-section",
        start: "top 85%", // When the top of the CTA section is 85% from the top of the viewport
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 100,
      duration: 1,
      ease: 'power3.out'
    });

  }, { scope: container });

  return (
    <div id="projects" ref={container} className="relative bg-blue-50 font-sans overflow-hidden">
      {/* Section Header */}
      <div className="section-header relative text-center pt-20 pb-10 z-20 px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#4e45d5] font-display font-bold mb-6">
          My Projects
        </h2>
        <div className="divider w-32 h-1 bg-gradient-to-r from-[#4e45d5] via-purple-500 to-pink-500 mx-auto rounded-full"></div>
        <p className="text-lg md:text-xl text-[#343d38] mt-8 max-w-2xl mx-auto font-normal">
          A curated selection of my work. Scroll to explore each project in detail.
        </p>
      </div>

      {/* Split Scroll Container */}
      <div className="split-scroll-container relative max-w-7xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 px-4 md:px-8">
        {/* Left Column: Scrolling Text */}
        <div className="left-column">
          {/* Spacer to align the first item correctly */}
          <div className="h-[20vh]"></div>
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-text-content mb-[50vh]" // Reduced margin for less scrolling
            >
              <span className={`animated-text inline-block mb-6 px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase bg-gradient-to-r ${project.gradient} text-white shadow-lg`}>
                {project.category}
              </span>
              <h3 className="animated-text text-3xl md:text-4xl font-bold text-[#343d38] mb-6">
                {project.title}
              </h3>
              <p className="animated-text text-gray-700 mb-8 leading-relaxed text-base md:text-lg">
                {project.description}
              </p>
              <div className="animated-text flex flex-wrap gap-3 mb-8">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="relative px-4 py-2 bg-gradient-to-r from-white to-gray-50 text-[#343d38] rounded-full text-sm font-semibold border border-gray-200 shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="animated-text flex flex-col sm:flex-row gap-4">
                <a href={project.vercelLink} target="_blank" rel="noopener noreferrer" className="flex-1 group/btn relative px-4 py-3 bg-gradient-to-r from-[#4e45d5] to-purple-600 text-white rounded-xl font-semibold text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  🚀 Live Demo
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex-1 group/btn relative px-4 py-3 bg-gradient-to-r from-gray-800 to-black text-white rounded-xl font-semibold text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  🔗 GitHub
                </a>
              </div>
            </div>
          ))}
          {/* Spacer to ensure the last item can reach the center */}
          <div className="h-[30vh]"></div>
        </div>

        {/* Right Column: Sticky Image */}
        <div className="right-column hidden lg:block h-screen">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative w-full max-w-2xl h-auto rounded-3xl shadow-2xl border-8 border-white/80 bg-gray-200 aspect-video">
              {projects.map((project) => (
                <div
                  key={`image-${project.id}`}
                  className="project-image-item absolute inset-0 w-full h-full"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - appears after split scroll */}
      <div className="cta-section relative bg-blue-50 text-center py-20">
        <h3 className="text-3xl md:text-4xl font-display text-[#4e45d5] mb-4">Explore More</h3>
        <p className="text-lg text-[#343d38] mb-8">Visit my GitHub to see all my projects and contributions.</p>
        <a
          href="https://github.com/Divyanshguptaj"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button group relative px-10 py-4 bg-transparent border-none cursor-pointer inline-block"
        >
          <span className="relative z-10 text-gray-100 font-bold text-lg whitespace-nowrap">
            View on GitHub
          </span>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-r from-[#28282d] to-gray-800 rounded-xl transition-all duration-500 group-hover:translate-x-[8%] group-hover:translate-y-[25%] group-hover:w-[115%] group-hover:h-[115%] -z-10 shadow-lg"></div>
          <div className="absolute translate-x-3 translate-y-3 w-12 h-12 bg-gradient-to-r from-[#4e45d5]/20 to-purple-500/20 backdrop-blur-sm rounded-full transition-all duration-500 group-hover:rounded-xl group-hover:translate-x-0 group-hover:translate-y-0 group-hover:w-full group-hover:h-full -z-20"></div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
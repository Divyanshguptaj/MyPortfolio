import React, { useRef, useContext } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import links from "../../data/DownloadLinks";
import experiences from "../../data/WorkExperience";
import { ThemeContext } from "../../App";

gsap.registerPlugin(ScrollTrigger);

const WorkExperience = () => {
  const container = useRef(null);
  const { theme } = useContext(ThemeContext);

  useGSAP(() => {
    // --- Section Entrance Animation ---
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.from(
      ".section-header h2, .section-header .divider, .section-header p",
      {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      }
    )
      .from(
        ".experience-card",
        {
          opacity: 0,
          y: 100,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .from(
        ".deco-shape",
        {
          opacity: 0,
          scale: 0,
          stagger: 0.1,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
        },
        "<"
      );

    // --- Continuous Floating Animations for Decorative Shapes ---
    gsap.to(".deco-1", {
      y: -20,
      rotation: 15,
      yoyo: true,
      repeat: -1,
      duration: 4,
      ease: "sine.inOut",
    });
    gsap.to(".deco-2", {
      rotation: 360,
      repeat: -1,
      duration: 15,
      ease: "none",
    });
    gsap.to(".deco-3", {
      y: 20,
      x: -10,
      yoyo: true,
      repeat: -1,
      duration: 5,
      ease: "sine.inOut",
    });
    gsap.to(".deco-4", {
      y: -15,
      x: 15,
      yoyo: true,
      repeat: -1,
      duration: 3,
      ease: "sine.inOut",
      delay: 1,
    });

    // --- Interactive 3D Card Hover Effect ---
    const cards = gsap.utils.toArray(".experience-card");
    cards.forEach((card) => {
      const q = gsap.utils.selector(card);
      const cardContent = q(".card-content");
      const cardShadow = q(".card-shadow");
      const cardGlow = q(".card-glow");
      const cardBadge = q(".card-badge");

      const hoverTimeline = gsap
        .timeline({ paused: true })
        .to(card, { scale: 1.03, duration: 0.5, ease: "power3.out" })
        .to(
          cardShadow,
          { opacity: 0.5, scale: 1.05, duration: 0.5, ease: "power3.out" },
          "<"
        )
        .to(cardGlow, { opacity: 0.7, duration: 0.5, ease: "power3.out" }, "<")
        .to(cardBadge, { scale: 1.1, y: -5, duration: 0.4, ease: "back.out(2)" }, "<");

      card.addEventListener("mouseenter", () => hoverTimeline.play());
      card.addEventListener("mouseleave", () => hoverTimeline.reverse());

      card.addEventListener("mousemove", (e) => {
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        const rotateX = gsap.utils.mapRange(0, height, -8, 8)(y);
        const rotateY = gsap.utils.mapRange(0, width, 8, -8)(x);

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
    });

    // --- CTA Button Animation ---
    const ctaButton = ".cta-button";
    gsap.from(ctaButton, {
      scrollTrigger: {
        trigger: ctaButton,
        start: "top 90%",
      },
      opacity: 0,
      scale: 0.8,
      y: 50,
      duration: 1,
      ease: "elastic.out(1, 0.75)",
    });
  }, { scope: container });

  return (
    <div
      id="experience"
      ref={container}
      className="relative bg-indigo-50 dark:bg-black/20 py-20 px-4 md:px-8 font-sans overflow-hidden transition-colors duration-500"
    >
      {/* Floating Decorative Elements */}
      <div className="deco-shape deco-1 absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 dark:opacity-10"></div>
      <div className="deco-shape deco-2 absolute top-1/4 right-10 w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 transform rotate-45 opacity-30 dark:opacity-15"></div>
      <div className="deco-shape deco-3 absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-25 dark:opacity-10"></div>
      <div className="deco-shape deco-4 absolute bottom-10 right-1/3 w-8 h-8 bg-gradient-to-r from-green-400 to-teal-400 transform rotate-12 opacity-30 dark:opacity-10"></div>

      {/* Section Header */}
      <div className="section-header relative text-center mb-20 z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-[#4e45d5] dark:text-blue-300 font-bold mb-6">
          Work Experience
        </h2>
        <div className="divider w-32 h-1 bg-gradient-to-r from-[#4e45d5] via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-700 dark:to-pink-700 mx-auto rounded-full"></div>
        <p className="text-lg md:text-xl text-[#343d38] dark:text-gray-200 mt-8 max-w-2xl mx-auto font-normal">
          My journey through the world of software development
        </p>
      </div>

      {/* Experience Cards */}
      <div className="relative max-w-6xl mx-auto">
        <div className="grid gap-12 md:gap-16">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="experience-card group relative"
              style={{ perspective: "1000px" }}
            >
              <div
                className="card-content relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/50 dark:border-gray-700 shadow-lg"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  className={`card-glow absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 transition-opacity duration-500`}
                ></div>
                <div className="relative p-8 md:p-10 z-10 bg-white/80 dark:bg-gray-900/80">
                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                    <div className="lg:w-1/3">
                      <div className="inline-block mb-4">
                        <span
                          className={`card-badge px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase bg-gradient-to-r ${exp.gradient} text-white shadow-lg`}
                        >
                          {exp.type === "current"
                            ? "✨ CURRENT"
                            : exp.type === "internship"
                            ? "🎓 INTERNSHIP"
                            : "💼 PREVIOUS"}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[#343d38] dark:text-white mb-2">
                        {exp.company}
                      </h3>
                      <div className="space-y-2 text-gray-600 dark:text-gray-300">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-[#4e45d5] dark:bg-blue-400 rounded-full"></span>
                          <span className="font-semibold">{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full"></span>
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-2/3">
                      <h4 className="text-xl md:text-2xl font-bold text-[#4e45d5] dark:text-blue-300 mb-4">
                        {exp.position}
                      </h4>
                      <p className="text-gray-700 dark:text-gray-200 mb-6 leading-relaxed text-sm md:text-base">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-[#343d38] dark:text-gray-100 rounded-full text-xs md:text-sm font-semibold border border-gray-200 dark:border-gray-600"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`card-shadow absolute inset-0 bg-gradient-to-br ${exp.gradient} rounded-2xl transform translate-y-4 opacity-20 blur-lg -z-10`}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Call-to-Action */}
      <div className="relative text-center mt-20 z-10">
        <a
          href={links.downloadCV}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button group relative px-10 py-4 bg-transparent border-none cursor-pointer inline-block"
        >
          <span className="relative z-10 text-gray-100 dark:text-gray-900 font-bold text-lg whitespace-nowrap">
            Download Resume
          </span>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-r from-[#28282d] to-gray-800 dark:from-blue-200 dark:to-blue-400 rounded-xl transition-all duration-500 group-hover:translate-x-[8%] group-hover:translate-y-[25%] group-hover:w-[115%] group-hover:h-[115%] -z-10 shadow-lg"></div>
          <div className="absolute translate-x-3 translate-y-3 w-12 h-12 bg-gradient-to-r from-[#4e45d5]/20 to-purple-500/20 dark:from-blue-900/20 dark:to-purple-900/20 backdrop-blur-sm rounded-full transition-all duration-500 group-hover:rounded-xl group-hover:translate-x-0 group-hover:translate-y-0 group-hover:w-full group-hover:h-full -z-20"></div>
        </a>
      </div>
    </div>
  );
};

export default WorkExperience;

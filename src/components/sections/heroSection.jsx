import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import UserImage from "../../assets/HeroSection/UserImage.jpg";
import SunHero from "../../assets/HeroSection/SunHero.png";
import DotsHero from "../../assets/HeroSection/DotsHero.png";
import WaveHero from "../../assets/HeroSection/WaveHero.png";
import CubeHero from "../../assets/HeroSection/CubeHero.png";

const HeroSection = () => {
  const container = useRef(null);

  useGSAP(() => {
    // Entrance animations for text content
    gsap.from(".hero-title", { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out', delay: 0.3 });
    gsap.from(".hero-subtitle", { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out', delay: 0.5 });
    gsap.from(".hero-description", { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out', delay: 0.7 });
    gsap.from(".hero-button", { opacity: 0, scale: 0.8, duration: 0.8, ease: 'back.out(1.7)', delay: 0.9 });

    // Entrance animation for the image and icons
    gsap.from(".hero-image-container", { opacity: 0, scale: 0.8, rotation: -5, duration: 1.2, ease: 'elastic.out(1, 0.75)', delay: 0.5 });
    
    // Animate image from grayscale to color on load
    gsap.from(".hero-user-image", { filter: 'grayscale(100%)', duration: 1.5, ease: 'power2.inOut', delay: 0.8 });

    gsap.from(".hero-icon", { opacity: 0, scale: 0, stagger: 0.15, duration: 0.6, ease: 'back.out(2)', delay: 1 });

    // Continuous animations for icons
    gsap.to(".icon-sun", { y: -10, yoyo: true, repeat: -1, duration: 2, ease: 'power1.inOut' });
    gsap.to(".icon-wave", { x: 10, y: -15, yoyo: true, repeat: -1, duration: 3, ease: 'sine.inOut' });
    gsap.to(".icon-cube", { rotation: 360, repeat: -1, duration: 8, ease: 'none' });
    gsap.to(".icon-dots", { y: 10, yoyo: true, repeat: -1, duration: 2.5, ease: 'bounce.out' });

    // Continuous float animation for the main image
    gsap.to(".hero-image-container", { 
      y: -15, 
      rotation: 1, 
      yoyo: true, 
      repeat: -1, 
      duration: 4, 
      ease: 'sine.inOut',
      delay: 1.2
    });

    // Mouse-follow parallax effect
    const quickToX = gsap.quickTo(".hero-right", "x", { duration: 0.6, ease: "power3" });
    const quickToY = gsap.quickTo(".hero-right", "y", { duration: 0.6, ease: "power3" });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const xPercent = (clientX / innerWidth - 0.5) * 2;
      const yPercent = (clientY / innerHeight - 0.5) * 2;
      
      quickToX(xPercent * -20);
      quickToY(yPercent * -15);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };

  }, { scope: container });

  return (
    <div ref={container} id="about" className="relative flex flex-col lg:flex-row justify-center items-center min-h-[80vh] px-4 md:px-8 gap-4 overflow-hidden pt-16 lg:pt-20">
      {/* Faded Background Text */}
      <div className="absolute inset-0 flex items-end justify-start pointer-events-none">
        <div className="text-2xl sm:text-3xl md:text-4xl xl:text-8xl font-bold text-gray-400 opacity-10 blur-sm select-none ml-2 sm:ml-4 mb-2 sm:mb-4">
          Divyansh Gupta
        </div>
      </div>

      {/* Hero Left */}
      <div className="flex flex-col justify-center items-center lg:items-start gap-4 sm:gap-6 lg:gap-8 w-full lg:w-2/5 z-10 text-center lg:text-left px-2">
        <div className="hero-title text-2xl sm:text-3xl md:text-4xl xl:text-6xl text-[#343d38] font-medium leading-tight">
          Divyansh Gupta
        </div>
        <div className="hero-subtitle text-xl sm:text-2xl md:text-3xl xl:text-5xl leading-tight">
          I am a <span className="text-[#4e45d5] font-display tracking-wider">Developer</span>
        </div>
        <div className="hero-description text-sm sm:text-base md:text-lg w-full lg:w-4/5 font-medium leading-relaxed max-w-md lg:max-w-none">
          I’m a passionate Software Developer specializing in building scalable web applications and crafting innovative digital solutions, showcasing my skills and projects that reflect my journey and expertise.
        </div>
        <button className="hero-button group relative px-6 sm:px-8 py-3 bg-transparent border-none cursor-pointer mt-2">
          <span className="relative z-10 text-gray-100 font-medium text-sm sm:text-base whitespace-nowrap">
            Hire Me
          </span>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[#28282d] rounded-lg transition-all duration-400 group-hover:translate-x-[5%] group-hover:translate-y-[20%] group-hover:w-[110%] group-hover:h-[110%] -z-10"></div>
          <div className="absolute translate-x-2.5 translate-y-2.5 w-9 h-9 bg-white/40 backdrop-blur-sm rounded-full transition-all duration-400 group-hover:rounded-lg group-hover:translate-x-0 group-hover:translate-y-0 group-hover:w-full group-hover:h-full -z-20"></div>
        </button>
      </div>

      {/* Hero Right */}
      <div className="hero-right relative flex justify-center items-center w-full lg:w-2/5 mt-8 lg:mt-0">
        <div className="relative">
          {/* User Image */}
          <div className="hero-image-container relative p-4 sm:p-6 lg:p-8 z-10">
            <div
              className="relative w-52 h-64 sm:w-72 sm:h-80 md:w-64 md:h-80 lg:w-72 lg:h-88 xl:w-80 xl:h-96 rounded-lg overflow-hidden border-[15px] sm:border-[20px] md:border-[25px] lg:border-[30px]"
              style={{ borderColor: "#F5F5DC" }}
            >
              <img
                src={UserImage}
                alt="Divyansh Gupta"
                className="hero-user-image w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Animated Icons */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="hero-icon icon-sun absolute bottom-[20%] left-[15%] z-20">
              <img
                src={SunHero}
                alt="Sun decoration"
                className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 drop-shadow-lg"
              />
            </div>
            <div className="hero-icon icon-wave absolute top-[15%] left-[10%] z-20">
              <img
                src={WaveHero}
                alt="Wave decoration"
                className="h-8 w-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 drop-shadow-lg"
              />
            </div>
            <div className="hero-icon icon-cube absolute top-[20%] right-[10%] z-20">
              <img
                src={CubeHero}
                alt="Cube decoration"
                className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 drop-shadow-lg"
              />
            </div>
            <div className="hero-icon icon-dots absolute bottom-[15%] right-[15%] z-20">
              <img
                src={DotsHero}
                alt="Dots decoration"
                className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 lg:h-14 lg:w-14 drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
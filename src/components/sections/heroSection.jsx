import React from "react";
import UserImage from "../../assets/HeroSection/UserImage.jpg";
import SunHero from "../../assets/HeroSection/SunHero.png";
import DotsHero from "../../assets/HeroSection/DotsHero.png";
import WaveHero from "../../assets/HeroSection/WaveHero.png";
import CubeHero from "../../assets/HeroSection/CubeHero.png";

const HeroSection = () => {
  return (
    <div id="about" className="relative flex flex-col lg:flex-row justify-center items-center max-h-[80vh] px-4 md:px-8 gap-4 overflow-hidden pt-16 lg:pt-20">
      {/* Faded Background Text */}
      <div className="absolute inset-0 flex items-end justify-start pointer-events-none">
        <div className="text-2xl sm:text-3xl md:text-4xl xl:text-8xl font-bold text-gray-400 opacity-70 blur-sm select-none ml-2 sm:ml-4 mb-2 sm:mb-4">
          Divyansh Gupta
        </div>
      </div>

      {/* Hero Left */}
      <div className="flex flex-col justify-center items-center lg:items-start gap-4 sm:gap-6 lg:gap-8 w-full lg:w-2/5 z-10 text-center lg:text-left px-2">
        <div className="text-2xl sm:text-3xl md:text-4xl xl:text-6xl text-[#343d38] font-medium leading-tight">
          Divyansh Gupta
        </div>
        <div className="text-xl sm:text-2xl md:text-3xl xl:text-5xl leading-tight">
          I am a <span className="text-[#4e45d5]">Developer</span>
        </div>
        <div className="text-sm sm:text-base md:text-lg w-full lg:w-4/5 font-medium leading-relaxed max-w-md lg:max-w-none">
          I am a software developer and here is my portfolio website. Here you
          will get my projects and skills which I mastered till now.
        </div>
        <button className="group relative px-6 sm:px-8 py-3 bg-transparent border-none cursor-pointer mt-2">
          <span className="relative z-10 text-gray-100 font-medium text-sm sm:text-base whitespace-nowrap">
            Hire Me
          </span>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[#28282d] rounded-lg transition-all duration-400 group-hover:translate-x-[5%] group-hover:translate-y-[20%] group-hover:w-[110%] group-hover:h-[110%] -z-10"></div>
          <div className="absolute translate-x-2.5 translate-y-2.5 w-9 h-9 bg-white/10 backdrop-blur-sm rounded-full transition-all duration-400 group-hover:rounded-lg group-hover:translate-x-0 group-hover:translate-y-0 group-hover:w-full group-hover:h-full -z-20"></div>
        </button>
      </div>

      {/* Hero Right */}
      <div className="relative flex justify-center items-center w-full lg:w-2/5 mt-8 lg:mt-0 min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
        {/* Animated Icons */}
        <div className="absolute bottom-[25%] left-[10%] sm:left-[25%] lg:left-[35%] z-20">
          <img
            src={SunHero}
            alt="Sun decoration"
            className="h-10 w-10 sm:h-12 sm:w-12 lg:h-12 lg:w-12 animate-bounce hover:scale-110 transition-transform duration-300 drop-shadow-lg"
            style={{
              animationDuration: "2s",
            }}
          />
        </div>

        <div className="absolute top-[20%] left-[10%] sm:left-[20%] lg:left-[25%] z-20">
          <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20">
            <img
              src={WaveHero}
              alt="Wave decoration"
              className="h-full w-full hover:scale-110 transition-transform duration-300 drop-shadow-lg"
              style={{
                animation: "float 3s ease-in-out infinite alternate",
              }}
            />
          </div>
        </div>

        <div className="absolute top-[25%] right-[15%] sm:right-[20%] lg:right-[25%] z-20">
          <img
            src={CubeHero}
            alt="Cube decoration"
            className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 hover:scale-110 transition-transform duration-300 drop-shadow-lg"
            style={{
              animation: "spin 4s linear infinite, pulse 2s ease-in-out infinite alternate",
            }}
          />
        </div>

        <div className="absolute bottom-[15%] right-[15%] sm:right-[25%] lg:right-[30%] z-20">
          <img
            src={DotsHero}
            alt="Dots decoration"
            className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 hover:scale-110 transition-transform duration-300 drop-shadow-lg"
            style={{
              animation: "bounce 2.5s ease-in-out infinite alternate-reverse",
            }}
          />
        </div>

        {/* User Image */}
        <div className="relative p-6 sm:p-8 lg:p-10 z-10">
          <div
            className="relative w-40 h-52 sm:w-64 sm:h-72 md:w-56 md:h-72 lg:w-60 lg:h-80 xl:w-80 xl:h-96 rounded-lg  overflow-hidden border-[40px]"
            style={{
              borderColor: "#F5F5DC",
              animation: "userImageFloat 6s ease-in-out infinite",
            }}
          >
            <img
              src={UserImage}
              alt="Divyansh Gupta"
              className="w-full h-full object-cover transition-all duration-1000 grayscale-0  hover:grayscale-1 hover:scale-105"
            />
            <div
              className="absolute border-2 rounded-lg opacity-50 animate-pulse"
              style={{ borderColor: "#F5F5DC" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-15px) translateX(10px);
          }
        }
        @keyframes userImageFloat {
          0%, 100% {
            transform: scale(1) rotateY(0deg);
            filter: grayscale(0);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          }
          33% {
            transform: scale(1.05) rotateY(2deg);
            filter: grayscale(0);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
          }
          66% {
            transform: scale(1.02) rotateY(-1deg);
            filter: grayscale(0);
            box-shadow: 0 20px 35px rgba(0, 0, 0, 0.35);
          }
        }
        @media (max-width: 640px) {
          @keyframes userImageFloat {
            0% {
              transform: scale(1);
              filter: grayscale(0);
            }
            50% {
              transform: scale(1.02);
              filter: grayscale(1);
              }
              100%{
                transform: scale(1.02);
                filter: grayscale(0);
            }
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
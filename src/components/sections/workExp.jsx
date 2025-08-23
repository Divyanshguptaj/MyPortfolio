import React from "react";
import links from "../../data/DownloadLinks";
import experiences from "../../data/WorkExperience";

const WorkExperience = () => {
  return (
    <div
      id="experience"
      className="relative bg-indigo-50 py-20 px-4 md:px-8 font-['Be_Vietnam_Pro'] overflow-hidden"
    >
      {/* Faded Background Text */}
      {/* <div className="absolute bottom-[50px] left-1/4 -translate-x-1/2 pointer-events-none">
        <div className="text-5xl xl:text-[7rem] font-bold text-gray-400 opacity-30 blur-[3px] select-none">
          EXPERIENCE
        </div>
      </div> */}

      {/* Floating Decorative Elements */}
      <div
        className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-bounce"
        style={{ animationDuration: "3s" }}
      ></div>
      <div
        className="absolute top-1/4 right-10 w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 transform rotate-45 opacity-30 animate-spin"
        style={{ animationDuration: "8s" }}
      ></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-25 animate-pulse"></div>
      <div
        className="absolute bottom-10 right-1/3 w-8 h-8 bg-gradient-to-r from-green-400 to-teal-400 transform rotate-12 opacity-30 animate-bounce"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Section Header */}
      <div className="relative text-center mb-20 z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#4e45d5] font-bold mb-6 transform hover:scale-105 transition-transform duration-300">
          Work Experience
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-[#4e45d5] via-purple-500 to-pink-500 mx-auto rounded-full animate-pulse"></div>
        <p className="text-lg md:text-xl text-[#343d38] mt-8 max-w-2xl mx-auto font-medium">
          My journey through the world of software development
        </p>
      </div>

      {/* Experience Cards */}
      <div className="relative max-w-6xl mx-auto">
        <div className="grid gap-8 md:gap-12">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="group relative"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              {/* Card Container with 3D Effect */}
              <div className="relative perspective-1000">
                <div
                  className={`relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden transform-gpu transition-all duration-700 hover:scale-105 hover:rotate-1 hover:shadow-2xl shadow-xl group-hover:shadow-[#4e45d5]/20 border border-white/50`}
                >
                  {/* Gradient Background Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>

                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-[#4e45d5]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>

                  {/* Card Content */}
                  <div className="relative p-8 md:p-10 z-10">
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                      {/* Left Side - Company Info */}
                      <div className="lg:w-1/3">
                        {/* Type Badge with Glow */}
                        <div className="inline-block mb-4">
                          <span
                            className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase bg-gradient-to-r ${exp.gradient} text-white shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300`}
                          >
                            {exp.type === "current"
                              ? "✨ CURRENT"
                              : exp.type === "internship"
                              ? "🎓 INTERNSHIP"
                              : "💼 PREVIOUS"}
                          </span>
                        </div>

                        {/* Company Name with Animation */}
                        <h3 className="text-2xl md:text-3xl font-bold text-[#343d38] mb-2 group-hover:text-[#4e45d5] transition-colors duration-300 transform group-hover:translate-x-2">
                          {exp.company}
                        </h3>

                        {/* Duration & Location */}
                        <div className="space-y-2 text-gray-600">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-[#4e45d5] rounded-full animate-pulse"></span>
                            <span className="font-semibold">
                              {exp.duration}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Right Side - Role Details */}
                      <div className="lg:w-2/3">
                        {/* Position Title */}
                        <h4 className="text-xl md:text-2xl font-bold text-[#4e45d5] mb-4 transform group-hover:translate-x-2 transition-transform duration-300">
                          {exp.position}
                        </h4>

                        {/* Description */}
                        <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base group-hover:text-gray-800 transition-colors duration-300">
                          {exp.description}
                        </p>

                        {/* Skills with Enhanced Effects */}
                        <div className="flex flex-wrap gap-3">
                          {exp.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="relative px-4 py-2 bg-gradient-to-r from-white to-gray-50 text-[#343d38] rounded-full text-xs md:text-sm font-semibold border border-gray-200 hover:border-[#4e45d5] transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-pointer group/skill shadow-sm hover:shadow-lg"
                              style={{
                                animationDelay: `${skillIndex * 0.1}s`,
                              }}
                            >
                              {skill}
                              {/* Skill hover effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-[#4e45d5] to-purple-500 rounded-full opacity-0 group-hover/skill:opacity-10 transition-opacity duration-300"></div>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Glow Effect */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#4e45d5] to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                  </div>

                  {/* Card Reflection Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/0 via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>

                {/* 3D Shadow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} rounded-2xl transform translate-x-2 translate-y-2 opacity-20 group-hover:translate-x-4 group-hover:translate-y-4 group-hover:opacity-30 transition-all duration-500 -z-10`}
                ></div>
              </div>
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
          className="group relative px-10 py-4 bg-transparent border-none cursor-pointer inline-block"
        >
          <span className="relative z-10 text-gray-100 font-bold text-lg whitespace-nowrap">
            Download Resume
          </span>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-r from-[#28282d] to-gray-800 rounded-xl transition-all duration-500 group-hover:translate-x-[8%] group-hover:translate-y-[25%] group-hover:w-[115%] group-hover:h-[115%] -z-10 shadow-lg"></div>
          <div className="absolute translate-x-3 translate-y-3 w-12 h-12 bg-gradient-to-r from-[#4e45d5]/20 to-purple-500/20 backdrop-blur-sm rounded-full transition-all duration-500 group-hover:rounded-xl group-hover:translate-x-0 group-hover:translate-y-0 group-hover:w-full group-hover:h-full -z-20"></div>
        </a>
      </div>

      {/* Enhanced Custom CSS */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes floatSlow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes gradientShift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .group:hover .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default WorkExperience;

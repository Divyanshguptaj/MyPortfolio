// import { useState } from "react";

import projects from '../../data/Projects'

const Projects = () => {
  // const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div id="projects" className="relative bg-blue-50 py-20 px-4 md:px-8 font-['Be_Vietnam_Pro'] overflow-hidden">
      {/* Faded Background Text */}
      {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-bold text-gray-400 opacity-30 blur-[3px] select-none">
          PROJECTS
        </div>
      </div> */}

      {/* Floating Decorative Elements */}
      <div
        className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg opacity-20 animate-spin"
        style={{ animationDuration: "6s" }}
      ></div>
      <div
        className="absolute top-1/3 right-20 w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-25 animate-bounce"
        style={{ animationDuration: "3s" }}
      ></div>
      <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 transform rotate-45 opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-14 h-14 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-30 animate-bounce"
        style={{ animationDelay: "1.5s" }}
      ></div>

      {/* Section Header */}
      <div className="relative text-center mb-20 z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#4e45d5] font-bold mb-6 transform hover:scale-105 transition-transform duration-300">
          My Projects
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-[#4e45d5] via-purple-500 to-pink-500 mx-auto rounded-full animate-pulse"></div>
        <p className="text-lg md:text-xl text-[#343d38] mt-8 max-w-2xl mx-auto font-medium">
          Explore my latest work and creative solutions
        </p>
      </div>

      {/* Projects Grid */}
      <div className="relative max-w-7xl mx-auto">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative ${
                project.featured ? "lg:col-span-2" : ""
              }`}
              // onMouseEnter={() => setHoveredProject(project.id)}
              // onMouseLeave={() => setHoveredProject(null)}
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              {/* Project Card with 3D Effect */}
              <div className="relative perspective-1000">
                <div
                  className={`relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden transform-gpu transition-all duration-700 hover:scale-105 hover:rotate-1 hover:shadow-2xl shadow-xl group-hover:shadow-[#4e45d5]/30 border border-white/60 ${
                    project.featured ? "md:flex" : ""
                  }`}
                >
                  {/* Gradient Background Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-15 transition-opacity duration-500`}
                  ></div>

                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-[#4e45d5]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>

                  {/* Project Image Section */}
                  <div
                    className={`relative ${
                      project.featured ? "md:w-1/2" : ""
                    } group/image`}
                  >
                    <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                      />

                      {/* Image Overlay with Links */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                        {/* Live Demo Button */}
                        <a
                          href={project.vercelLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn relative px-6 py-3 bg-gradient-to-r from-[#4e45d5] to-purple-600 text-white rounded-xl font-semibold transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          <span className="relative z-10 flex items-center gap-2">
                            🚀 Live Demo
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                        </a>

                        {/* GitHub Button */}
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn relative px-6 py-3 bg-gradient-to-r from-gray-800 to-black text-white rounded-xl font-semibold transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          <span className="relative z-10 flex items-center gap-2">
                            🔗 GitHub
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                        </a>
                      </div>

                      {/* Floating Category Badge */}
                      <div className="absolute top-4 right-4 z-10">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-gradient-to-r ${project.gradient} text-white shadow-lg backdrop-blur-sm`}
                        >
                          {project.category}
                        </span>
                      </div>

                      {/* Featured Badge */}
                      {/* {project.featured && (
                        <div className="absolute top-4 left-4 z-10">
                          <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg backdrop-blur-sm animate-pulse">
                            ⭐ FEATURED
                          </span>
                        </div>
                      )} */}
                    </div>
                  </div>

                  {/* Project Details Section */}
                  <div
                    className={`relative p-8 md:p-10 z-10 ${
                      project.featured
                        ? "md:w-1/2 flex flex-col justify-center"
                        : ""
                    }`}
                  >
                    {/* Project Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-[#343d38] mb-4 group-hover:text-[#4e45d5] transition-colors duration-300 transform group-hover:translate-x-2">
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base group-hover:text-gray-800 transition-colors duration-300">
                      {project.description}
                    </p>

                    {/* Technologies with Enhanced Effects */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="relative px-4 py-2 bg-gradient-to-r from-white to-gray-50 text-[#343d38] rounded-full text-xs md:text-sm font-semibold border border-gray-200 hover:border-[#4e45d5] transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-pointer group/tech shadow-sm hover:shadow-lg"
                          style={{
                            animationDelay: `${techIndex * 0.1}s`,
                          }}
                        >
                          {tech}
                          <div className="absolute inset-0 bg-gradient-to-r from-[#4e45d5] to-purple-500 rounded-full opacity-0 group-hover/tech:opacity-15 transition-opacity duration-300"></div>
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons for Mobile */}
                    <div className="flex gap-4 md:hidden">
                      <a
                        href={project.vercelLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 group/btn relative px-4 py-2 bg-gradient-to-r from-[#4e45d5] to-purple-600 text-white rounded-xl font-semibold text-center transform hover:scale-105 transition-all duration-300"
                      >
                        🚀 Live Demo
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 group/btn relative px-4 py-2 bg-gradient-to-r from-gray-800 to-black text-white rounded-xl font-semibold text-center transform hover:scale-105 transition-all duration-300"
                      >
                        🔗 GitHub
                      </a>
                    </div>

                    {/* Bottom Glow Effect */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#4e45d5] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                  </div>

                  {/* Card Reflection Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/0 via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>

                {/* 3D Shadow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-3xl transform translate-x-3 translate-y-3 opacity-15 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:opacity-25 transition-all duration-500 -z-10`}
                ></div>
              </div>
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
          className="group relative px-10 py-4 bg-transparent border-none cursor-pointer inline-block"
        >
          <span className="relative z-10 text-gray-100 font-bold text-lg whitespace-nowrap">
            View All Projects
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

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(3deg);
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

        .group/image:hover img {
          filter: brightness(1.1) contrast(1.1);
        }
      `}</style>
    </div>
  );
};

export default Projects;

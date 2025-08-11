import React from 'react'

const ProjectSection = () => {
  return (
    <div className="bg-gray-200/50 py-16 px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-red-500 font-bold">
            Projects
          </h2>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-4xl h-80 md:h-96 lg:h-[30rem] bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
            {/* Project Background Image Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-50"></div>
            
            {/* Project Content */}
            <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-center">
              {/* Technology Icons */}
              <div className="flex gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded flex items-center justify-center text-white font-bold text-sm">
                  HTML
                </div>
                <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center text-white font-bold text-sm">
                  CSS
                </div>
                <div className="w-12 h-12 bg-yellow-500 rounded flex items-center justify-center text-black font-bold text-sm">
                  JS
                </div>
              </div>

              {/* Project Details */}
              <div className="text-white max-w-lg">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                  Mobile Repair Shop
                </h3>
                <p className="text-lg md:text-xl mb-8 opacity-90">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nulla.
                </p>
                
                <button className="group relative px-8 py-3 bg-transparent border-none cursor-pointer">
                  <span className="relative z-10 text-gray-100 font-medium text-base whitespace-nowrap">
                    View Project
                  </span>
                  <div className="absolute bottom-0 right-0 w-full h-full bg-[#28282d] rounded-lg transition-all duration-400 group-hover:translate-x-[5%] group-hover:translate-y-[20%] group-hover:w-[110%] group-hover:h-[110%] -z-10"></div>
                  <div className="absolute translate-x-2.5 translate-y-2.5 w-9 h-9 bg-white/10 backdrop-blur-sm rounded-full transition-all duration-400 group-hover:rounded-lg group-hover:translate-x-0 group-hover:translate-y-0 group-hover:w-full group-hover:h-full -z-20"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ProjectSection

import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import achievements from "../../data/Achievements";

const AchievementsSection = () => {
  // const [hoveredAchievement, setHoveredAchievement] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [imageOrientations, setImageOrientations] = useState({});

  // Detect image orientations on component mount
  useEffect(() => {
    const detectOrientations = async () => {
      const orientations = {};

      await Promise.all(
        achievements.map(async (achievement) => {
          const img = new Image();
          img.src = achievement.image;

          await img.decode();

          orientations[achievement.id] =
            img.width > img.height
              ? "landscape"
              : img.width < img.height
              ? "portrait"
              : "square";
        })
      );

      setImageOrientations(orientations);
    };

    detectOrientations();
  }, []);

  const openModal = (achievement) => {
    setSelectedCertificate(achievement);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedCertificate(null);
    document.body.style.overflow = "unset";
  };

  return (
    <div
      id="achievements"
      className="relative bg-blue-50 py-20 px-4 md:px-8 font-['Be_Vietnam_Pro'] overflow-hidden"
    >
      {/* Faded Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-bold text-gray-400 opacity-30 blur-[3px] select-none">
          ACHIEVEMENTS
        </div>
      </div>

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
          My Achievements
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-[#4e45d5] via-purple-500 to-pink-500 mx-auto rounded-full animate-pulse"></div>
        <p className="text-lg md:text-xl text-[#343d38] mt-8 max-w-2xl mx-auto font-medium">
          Milestones that define my journey of continuous learning
        </p>
      </div>

      {/* Achievements Grid */}
      <div className="relative max-w-7xl mx-auto">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            const orientation =
              imageOrientations[achievement.id] || "landscape";

            return (
              <div
                key={achievement.id}
                className="group relative"
                // onMouseEnter={() => setHoveredAchievement(achievement.id)}
                // onMouseLeave={() => setHoveredAchievement(null)}
                onClick={() => openModal(achievement)}
                style={{
                  animationDelay: `${index * 0.15}s`,
                }}
              >
                {/* Achievement Card with 3D Effect */}
                <div className="relative perspective-1000 cursor-pointer h-full">
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden transform-gpu transition-all duration-700 hover:scale-105 hover:rotate-1 hover:shadow-2xl shadow-xl group-hover:shadow-[#4e45d5]/30 border border-white/60 h-full flex flex-col">
                    {/* Gradient Background Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-5 group-hover:opacity-15 transition-opacity duration-500`}
                    ></div>

                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-[#4e45d5]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>

                    {/* Achievement Image Section */}
                    <div className="relative group/image flex-grow">
                      <div
                        className={`relative overflow-hidden w-full ${
                          orientation === "portrait" ? "h-96" : "h-auto"
                        }`}
                      >
                        <img
                          src={achievement.image}
                          alt={achievement.title}
                          className={`w-full h-full transition-all duration-700 group-hover:scale-110 ${
                            orientation === "portrait"
                              ? "object-contain bg-gray-100 p-4"
                              : "object-cover"
                          }`}
                          style={{
                            objectPosition:
                              orientation === "portrait"
                                ? "center top"
                                : "center center",
                          }}
                        />

                        {/* Image Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                        {/* Category Badge */}
                        <div className="absolute top-4 right-4 z-10">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-gradient-to-r ${achievement.color} text-white shadow-lg backdrop-blur-sm`}
                          >
                            {achievement.category}
                          </span>
                        </div>

                        {/* Achievement Badge */}
                        <div className="absolute top-4 left-4 z-10">
                          <div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                          >
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                        </div>

                        {/* Bottom Info */}
                        <div className="absolute bottom-4 left-4 right-4 z-10">
                          <div className="flex items-center justify-between">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${achievement.color} text-white shadow-lg`}
                            >
                              {achievement.achievement}
                            </span>
                            <div className="flex items-center text-white text-sm">
                              <Calendar className="w-4 h-4 mr-1" />
                              {achievement.date}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Achievement Details Section */}
                    <div className="relative p-6 md:p-8 z-10">
                      {/* Achievement Title */}
                      <h3 className="text-xl md:text-2xl font-bold text-[#343d38] mb-2 group-hover:text-[#4e45d5] transition-colors duration-300">
                        {achievement.title}
                      </h3>

                      <p className="text-gray-600 mb-3 text-sm">
                        {achievement.issuer}
                      </p>

                      {/* Achievement Description */}
                      <p className="text-gray-700 mb-4 leading-relaxed text-sm md:text-base group-hover:text-gray-800 transition-colors duration-300 line-clamp-2">
                        {achievement.description}
                      </p>

                      {/* Skills with Enhanced Effects */}
                      <div className="flex flex-wrap gap-2">
                        {achievement.skills
                          .slice(0, 4)
                          .map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-gradient-to-r from-white to-gray-50 text-[#343d38] rounded-full text-xs font-semibold border border-gray-200 hover:border-[#4e45d5] transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
                            >
                              {skill}
                            </span>
                          ))}
                        {achievement.skills.length > 4 && (
                          <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">
                            +{achievement.skills.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* 3D Shadow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${achievement.color} rounded-3xl transform translate-x-3 translate-y-3 opacity-15 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:opacity-25 transition-all duration-500 -z-10`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Achievement Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-3xl max-w-6xl w-full min-h-[80vh] max-h-[90vh] overflow-y-auto shadow-2xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-300 z-10"
            >
              <span className="text-gray-600 text-xl">×</span>
            </button>

            {/* Modal Content */}
            <div className={`p-8`}>
              <div className={`grid md:grid-cols-2 gap-8`}>
                {/* Image Section */}
                <div
                  className={`relative flex items-between justify-center ${
                    imageOrientations[selectedCertificate.id] === "portrait"
                      ? "w-[70%] "
                      : ""
                  }`}
                >
                  <div
                    className={`w-full rounded-2xl shadow-lg overflow-hidden ${
                      imageOrientations[selectedCertificate.id] === "portrait"
                        ? "h-fit w-fit"
                        : "h-auto"
                    } flex items-center justify-center bg-gray-50`}
                  >
                    <img
                      src={selectedCertificate.image}
                      alt={selectedCertificate.title}
                      className={`${
                        imageOrientations[selectedCertificate.id] === "portrait"
                          ? "object-cover w-full h-full"
                          : "object-cover w-full h-full"
                      }`}
                    />
                  </div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${selectedCertificate.color} opacity-10 rounded-2xl`}
                  />
                </div>

                {/* Details Section */}
                <div
                  className={`space-y-6 ${
                    imageOrientations[selectedCertificate.id] === "portrait"
                      ? ""
                      : ""
                  }`}
                >
                  <div>
                    <div
                      className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${selectedCertificate.color} text-white text-sm font-bold mb-4 `}
                    >
                      <selectedCertificate.icon className="w-4 h-4 mr-2" />
                      {selectedCertificate.achievement}
                    </div>
                    <h2 className="text-3xl font-bold text-[#343d38] mb-2">
                      {selectedCertificate.title}
                    </h2>
                    <p className="text-gray-600 text-lg">
                      {selectedCertificate.issuer} • {selectedCertificate.date}
                    </p>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    {selectedCertificate.description}
                  </p>

                  <div>
                    <h3 className="text-[#343d38] font-semibold mb-3">
                      Skills & Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCertificate.skills.map((skill, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1.5 bg-gradient-to-r ${selectedCertificate.color} text-white rounded-full text-xs font-medium shadow-md`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-gray-600">
                      <span>Category: {selectedCertificate.category}</span>
                      <span>Year: {selectedCertificate.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Custom CSS */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out forwards;
        }

        .group/image:hover img {
          filter: brightness(1.05) contrast(1.05);
        }
      `}</style>
    </div>
  );
};

export default AchievementsSection;

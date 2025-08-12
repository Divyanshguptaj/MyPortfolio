import LetterD from "../../assets/letterD.png";

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-blue-50 shadow">
        <nav className="flex flex-col md:flex-row justify-around items-center px-4 md:px-8 py-4 w-full">
          <div className="flex items-center text-xl md:text-2xl font-normal mb-4 md:mb-0">
            <img src={LetterD} alt="D" className="bg-blue-50 w-10 h-10 mr-1" />
            <span className="font-bevietnam">ivyansh Gupta</span>
          </div>
          <ul className="flex flex-row gap-6 md:gap-10 text-lg">
            <li>
              <a
                href="/"
                className="text-black font-light hover:border-b-2 hover:border-black transition-all duration-300 px-1 py-1"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="text-black font-light hover:border-b-2 hover:border-black transition-all duration-300 px-1 py-1"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-black font-light hover:border-b-2 hover:border-black transition-all duration-300 px-1 py-1"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#achievements"
                className="text-black font-light hover:border-b-2 hover:border-black transition-all duration-300 px-1 py-1"
              >
                Achievements
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-black font-light hover:border-b-2 hover:border-black transition-all duration-300 px-1 py-1"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/uc?export=download&id=1qJFu7Dh8IxZ8w-6BiDHPTRytGLMh_IZO"
                download
                className="text-black font-light hover:border-b-2 hover:border-black transition-all duration-300 px-1 py-1"
              >
                Download CV
              </a>
            </li>
          </ul>
        </nav>

        {/* Bottom line centered */}
        {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 border-b-2 border-black"></div> */}
      </div>

      {/* Spacer so content doesn't hide behind navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;

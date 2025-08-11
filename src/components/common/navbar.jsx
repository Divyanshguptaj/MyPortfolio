import LetterD from '../../assets/letterD.png'

const Navbar = () => {
  return (
    <div className="relative w-full">
      {/* Navbar */}
      <nav className="flex flex-col md:flex-row justify-around items-center px-4 md:px-8 py-4 w-full">
        <div className="flex items-center text-xl md:text-2xl font-normal mb-4 md:mb-0">
          <img src={LetterD} alt="D" className="bg-blue-50 w-10 h-10 mr-1" />
          <span className="font-bevietnam">Divyansh Gupta</span>
        </div>
        <ul className="flex flex-row gap-6 md:gap-12 text-lg">
          <li>
            <a href="/" className="text-black font-light hover:border-b-2 hover:border-black transition-all duration-300 px-1 py-1">Home</a>
          </li>
          <li>
            <a href="/" className="text-black font-light hover:border-b-2 hover:border-black transition-all duration-300 px-1 py-1">Contact Us</a>
          </li>
          <li>
            <a href="/" className="text-black font-light hover:border-b-2 hover:border-black transition-all duration-300 px-1 py-1">Projects</a>
          </li>
        </ul>
      </nav>

      {/* Bottom line centered */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 border-b-2 border-black"></div>
    </div>
  )
}

export default Navbar

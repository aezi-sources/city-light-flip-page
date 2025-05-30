
interface HeroSectionProps {
  darkMode: boolean;
}

const HeroSection = ({ darkMode }: HeroSectionProps) => {
  return (
    <section 
      id="home" 
      className={`min-h-screen flex items-center justify-center transition-all duration-500 ${
        darkMode ? 'bg-black text-sky-400' : 'bg-sky-400 text-black'
      }`}
    >
      <div className="text-center px-4 sm:px-6 lg:px-8 animate-fade-in max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 animate-scale-in">
          Welcome
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8">
          Discover my journey, projects, and passion for creating amazing experiences
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#about"
            className={`inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 hover-scale text-sm sm:text-base ${
              darkMode 
                ? 'bg-sky-400 text-black hover:bg-sky-300 hover:shadow-lg hover:shadow-sky-400/25' 
                : 'bg-black text-sky-400 hover:bg-gray-800 hover:shadow-lg hover:shadow-black/25'
            }`}
          >
            Learn More
            <i className="fas fa-arrow-down w-4 h-4"></i>
          </a>
          <a
            href="https://athelo.net"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 hover-scale border-2 text-sm sm:text-base ${
              darkMode 
                ? 'border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-black' 
                : 'border-black text-black hover:bg-black hover:text-sky-400'
            }`}
          >
            Basic Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

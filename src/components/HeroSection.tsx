
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
      <div className="text-center px-4 animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-scale-in">
          Welcome
        </h1>
        <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
          Discover my journey, projects, and passion for creating amazing experiences
        </p>
        <div className="mt-8">
          <a
            href="#about"
            className={`inline-block px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover-scale ${
              darkMode 
                ? 'bg-sky-400 text-black hover:bg-sky-300 hover:shadow-lg hover:shadow-sky-400/25' 
                : 'bg-black text-sky-400 hover:bg-gray-800 hover:shadow-lg hover:shadow-black/25'
            }`}
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

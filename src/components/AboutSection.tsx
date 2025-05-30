
interface AboutSectionProps {
  darkMode: boolean;
}

const AboutSection = ({ darkMode }: AboutSectionProps) => {
  return (
    <section 
      id="about" 
      className={`min-h-screen flex items-center justify-center py-20 transition-all duration-500 ${
        darkMode ? 'bg-sky-400 text-black' : 'bg-black text-sky-400'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 animate-fade-in">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg md:text-xl leading-relaxed">
              I'm a passionate developer with a love for creating innovative solutions and beautiful user experiences. 
              My journey in technology has been driven by curiosity and a desire to make a positive impact.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or enjoying the beautiful game of football - especially supporting Manchester City!
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              {['React', 'TypeScript', 'Node.js', 'Python', 'Design'].map((skill) => (
                <span
                  key={skill}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 hover-scale ${
                    darkMode 
                      ? 'bg-black text-sky-400 hover:bg-gray-800' 
                      : 'bg-sky-400 text-black hover:bg-sky-300'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className={`h-80 rounded-lg flex items-center justify-center ${
            darkMode ? 'bg-black/20' : 'bg-sky-400/20'
          }`}>
            <p className="text-center text-lg font-medium opacity-70">
              Profile Image Placeholder
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

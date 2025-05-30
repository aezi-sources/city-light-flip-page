
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDesktop, faServer, faPython } from '@fortawesome/free-solid-svg-icons';
import { faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';

interface AboutSectionProps {
  darkMode: boolean;
}

const AboutSection = ({ darkMode }: AboutSectionProps) => {
  const skills = [
    { name: 'React', icon: faReact },
    { name: 'TypeScript', icon: faCode },
    { name: 'Node.js', icon: faNodeJs },
    { name: 'Python', icon: faPython },
    { name: 'Design', icon: faDesktop },
  ];

  return (
    <section 
      id="about" 
      className={`min-h-screen flex items-center justify-center py-16 sm:py-20 transition-all duration-500 ${
        darkMode ? 'bg-sky-400 text-black' : 'bg-black text-sky-400'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-12 text-center">
          About Me
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              I'm a passionate developer with a love for creating innovative solutions and beautiful user experiences. 
              My journey in technology has been driven by curiosity and a desire to make a positive impact.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or enjoying the beautiful game of football - especially supporting Manchester City!
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full font-medium transition-all duration-200 hover-scale text-sm sm:text-base ${
                    darkMode 
                      ? 'bg-black text-sky-400 hover:bg-gray-800' 
                      : 'bg-sky-400 text-black hover:bg-sky-300'
                  }`}
                >
                  <FontAwesomeIcon icon={skill.icon} className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate">{skill.name}</span>
                </span>
              ))}
            </div>
          </div>
          <div className={`h-64 sm:h-80 lg:h-96 rounded-lg flex items-center justify-center order-1 lg:order-2 ${
            darkMode ? 'bg-black/20' : 'bg-sky-400/20'
          }`}>
            <p className="text-center text-sm sm:text-lg font-medium opacity-70 px-4">
              Profile Image Placeholder
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

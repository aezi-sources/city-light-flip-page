
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink, faCheckCircle, faSpinner, faLightbulb } from '@fortawesome/free-solid-svg-icons';

interface ProjectsSectionProps {
  darkMode: boolean;
}

const ProjectsSection = ({ darkMode }: ProjectsSectionProps) => {
  const projects = [
    {
      id: 1,
      name: 'E-Commerce Platform',
      technology: 'React, Node.js, MongoDB',
      status: 'Completed',
      description: 'Full-stack e-commerce solution with payment integration',
    },
    {
      id: 2,
      name: 'Task Management App',
      technology: 'Vue.js, Express, PostgreSQL',
      status: 'In Progress',
      description: 'Collaborative task management with real-time updates',
    },
    {
      id: 3,
      name: 'Weather Dashboard',
      technology: 'React, TypeScript, API',
      status: 'Completed',
      description: 'Real-time weather monitoring with beautiful visualizations',
    },
    {
      id: 4,
      name: 'Social Media Analytics',
      technology: 'Python, Django, Charts.js',
      status: 'Planning',
      description: 'Analytics dashboard for social media performance tracking',
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return faCheckCircle;
      case 'In Progress':
        return faSpinner;
      case 'Planning':
        return faLightbulb;
      default:
        return faLightbulb;
    }
  };

  return (
    <section 
      id="projects" 
      className={`min-h-screen py-16 sm:py-20 transition-all duration-500 ${
        darkMode ? 'bg-black text-sky-400' : 'bg-sky-400 text-black'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-12 text-center">
          Projects
        </h2>
        
        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className={`w-full rounded-lg overflow-hidden shadow-2xl ${
            darkMode ? 'bg-sky-400/10' : 'bg-black/10'
          }`}>
            <thead className={`${
              darkMode ? 'bg-sky-400 text-black' : 'bg-black text-sky-400'
            }`}>
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Project Name</th>
                <th className="px-6 py-4 text-left font-semibold">Technology</th>
                <th className="px-6 py-4 text-left font-semibold">Status</th>
                <th className="px-6 py-4 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr
                  key={project.id}
                  className={`border-b transition-all duration-200 hover-scale ${
                    darkMode 
                      ? 'border-sky-400/20 hover:bg-sky-400/5' 
                      : 'border-black/20 hover:bg-black/5'
                  }`}
                >
                  <td className="px-6 py-4 font-medium">{project.name}</td>
                  <td className="px-6 py-4">{project.technology}</td>
                  <td className="px-6 py-4">
                    <span className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Completed' 
                        ? darkMode 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-green-500/20 text-green-700'
                        : project.status === 'In Progress'
                        ? darkMode
                          ? 'bg-yellow-500/20 text-yellow-400'
                          : 'bg-yellow-500/20 text-yellow-700'
                        : darkMode
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'bg-blue-500/20 text-blue-700'
                    }`}>
                      <FontAwesomeIcon icon={getStatusIcon(project.status)} className="w-4 h-4" />
                      {project.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">{project.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`p-4 sm:p-6 rounded-lg shadow-lg transition-all duration-200 hover-scale ${
                darkMode ? 'bg-sky-400/10' : 'bg-black/10'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg sm:text-xl font-bold">{project.name}</h3>
                <span className={`flex items-center gap-1 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                  project.status === 'Completed' 
                    ? darkMode 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-green-500/20 text-green-700'
                    : project.status === 'In Progress'
                    ? darkMode
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : 'bg-yellow-500/20 text-yellow-700'
                    : darkMode
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'bg-blue-500/20 text-blue-700'
                }`}>
                  <FontAwesomeIcon icon={getStatusIcon(project.status)} className="w-3 h-3" />
                  {project.status}
                </span>
              </div>
              <p className="text-sm sm:text-base font-medium mb-2">{project.technology}</p>
              <p className="text-sm sm:text-base opacity-80">{project.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <a
            href="https://athelo.net"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 hover-scale text-sm sm:text-base ${
              darkMode 
                ? 'bg-sky-400 text-black hover:bg-sky-300 hover:shadow-lg hover:shadow-sky-400/25' 
                : 'bg-black text-sky-400 hover:bg-gray-800 hover:shadow-lg hover:shadow-black/25'
            }`}
          >
            View Basic Projects
            <FontAwesomeIcon icon={faExternalLink} className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

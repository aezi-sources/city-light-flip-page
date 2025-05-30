
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

  return (
    <section 
      id="projects" 
      className={`min-h-screen py-20 transition-all duration-500 ${
        darkMode ? 'bg-black text-sky-400' : 'bg-sky-400 text-black'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 animate-fade-in">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center">
          Projects
        </h2>
        <div className="overflow-x-auto">
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
              {projects.map((project, index) => (
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
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
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
                      {project.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">{project.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

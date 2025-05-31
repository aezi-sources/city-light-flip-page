
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Blog = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React Development",
      excerpt: "Learn the fundamentals of React and how to build modern web applications with this powerful library.",
      date: "December 15, 2024",
      readTime: "5 min read",
      tags: ["React", "JavaScript", "Web Development"]
    },
    {
      id: 2,
      title: "Building Responsive Layouts with Tailwind CSS",
      excerpt: "Discover how to create beautiful, responsive designs using Tailwind CSS utility classes and best practices.",
      date: "December 10, 2024",
      readTime: "7 min read",
      tags: ["CSS", "Tailwind", "Design"]
    },
    {
      id: 3,
      title: "TypeScript Best Practices for Modern Development",
      excerpt: "Explore advanced TypeScript patterns and techniques that will make your code more maintainable and robust.",
      date: "December 5, 2024",
      readTime: "8 min read",
      tags: ["TypeScript", "Best Practices", "Development"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation darkMode={darkMode} toggleMode={toggleMode} />
      
      {/* Hero Section */}
      <section className={`pt-20 pb-16 transition-all duration-500 ${
        darkMode ? 'bg-black text-sky-400' : 'bg-sky-400 text-black'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Blog
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
            Thoughts, tutorials, and insights on web development, technology, and more
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className={`py-16 sm:py-20 transition-all duration-500 ${
        darkMode ? 'bg-sky-400 text-black' : 'bg-black text-sky-400'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:gap-12">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className={`p-6 sm:p-8 rounded-lg transition-all duration-300 hover-scale ${
                  darkMode 
                    ? 'bg-black/20 hover:bg-black/30' 
                    : 'bg-sky-400/20 hover:bg-sky-400/30'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                  <div className="flex flex-wrap items-center gap-3 text-sm opacity-75">
                    <span className="flex items-center gap-2">
                      <i className="fas fa-calendar w-4 h-4"></i>
                      {post.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <i className="fas fa-clock w-4 h-4"></i>
                      {post.readTime}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          darkMode 
                            ? 'bg-sky-400 text-black' 
                            : 'bg-black text-sky-400'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 hover:opacity-80 transition-opacity cursor-pointer">
                  {post.title}
                </h2>
                
                <p className="text-base sm:text-lg leading-relaxed mb-6 opacity-90">
                  {post.excerpt}
                </p>
                
                <button className={`inline-flex items-center gap-2 font-semibold transition-all duration-200 hover-scale ${
                  darkMode ? 'text-sky-400 hover:text-sky-300' : 'text-black hover:text-gray-700'
                }`}>
                  Read More
                  <i className="fas fa-arrow-right w-4 h-4"></i>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer darkMode={darkMode} />
    </div>
  );
};

export default Blog;

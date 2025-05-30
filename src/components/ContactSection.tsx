
interface ContactSectionProps {
  darkMode: boolean;
}

const ContactSection = ({ darkMode }: ContactSectionProps) => {
  return (
    <section 
      id="contact" 
      className={`min-h-screen flex items-center justify-center py-20 transition-all duration-500 ${
        darkMode ? 'bg-sky-400 text-black' : 'bg-black text-sky-400'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 animate-fade-in">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center">
          Contact
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
              <p className="text-lg leading-relaxed">
                I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and football!
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  darkMode ? 'bg-black text-sky-400' : 'bg-sky-400 text-black'
                }`}>
                  📧
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="opacity-80">hello@example.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  darkMode ? 'bg-black text-sky-400' : 'bg-sky-400 text-black'
                }`}>
                  📱
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="opacity-80">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  darkMode ? 'bg-black text-sky-400' : 'bg-sky-400 text-black'
                }`}>
                  📍
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="opacity-80">Manchester, UK</p>
                </div>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none ${
                  darkMode 
                    ? 'bg-black border-black text-sky-400 placeholder-sky-400/50 focus:border-sky-400' 
                    : 'bg-sky-400 border-sky-400 text-black placeholder-black/50 focus:border-black'
                }`}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none ${
                  darkMode 
                    ? 'bg-black border-black text-sky-400 placeholder-sky-400/50 focus:border-sky-400' 
                    : 'bg-sky-400 border-sky-400 text-black placeholder-black/50 focus:border-black'
                }`}
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Your Message"
                className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none resize-none ${
                  darkMode 
                    ? 'bg-black border-black text-sky-400 placeholder-sky-400/50 focus:border-sky-400' 
                    : 'bg-sky-400 border-sky-400 text-black placeholder-black/50 focus:border-black'
                }`}
              />
            </div>
            <button
              type="submit"
              className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 hover-scale ${
                darkMode 
                  ? 'bg-black text-sky-400 hover:bg-gray-800 hover:shadow-lg hover:shadow-black/25' 
                  : 'bg-sky-400 text-black hover:bg-sky-300 hover:shadow-lg hover:shadow-sky-400/25'
              }`}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

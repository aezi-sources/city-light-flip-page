
interface FooterProps {
  darkMode: boolean;
}

const Footer = ({ darkMode }: FooterProps) => {
  return (
    <footer className={`py-8 transition-all duration-500 ${
      darkMode ? 'bg-black text-sky-400' : 'bg-sky-400 text-black'
    }`}>
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-lg font-medium">
          just more life. 2 aezi
        </p>
      </div>
    </footer>
  );
};

export default Footer;

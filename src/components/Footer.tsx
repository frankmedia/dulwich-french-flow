import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 mt-16">
      <div className="container mx-auto px-4 py-8 text-sm text-muted-foreground">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <span className="font-medium text-foreground">French Flow</span> · Dulwich, South East London
          </div>
          <nav className="flex flex-wrap items-center gap-4 justify-center md:justify-end">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="opacity-50">·</span>
            <Link to="/classes" className="hover:text-primary">Classes</Link>
            <span className="opacity-50">·</span>
            <Link to="/about" className="hover:text-primary">About</Link>
            <span className="opacity-50">·</span>
            <Link to="/contact" className="hover:text-primary">Contact</Link>
            <span className="opacity-50">·</span>
            <Link to="/blog" className="hover:text-primary">Blog</Link>
            <span className="opacity-50">·</span>
            <Link to="/terms" className="hover:text-primary">Terms & Conditions</Link>
            <span className="opacity-50">·</span>
            <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <span className="opacity-50">·</span>
            <Link to="/cookies" className="hover:text-primary">Cookies Policy</Link>
          </nav>
        </div>
        <div className="mt-4 text-center md:text-right">
          © {new Date().getFullYear()} French Flow. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;



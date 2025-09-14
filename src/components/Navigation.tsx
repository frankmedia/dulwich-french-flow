import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import frenchFlowLogo from "@/assets/french-flow-logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "6 Weeks Course", path: "/lessons" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" }
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 bg-background/95 backdrop-blur-md shadow-sm border-b border-border/20"
      )}
    >
      <nav className="container mx-auto px-4 py-4">
        {/* Centered Layout */}
        <div className="flex flex-col items-center space-y-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={frenchFlowLogo} 
              alt="French Flow Logo" 
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation - Horizontal below logo */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "font-medium transition-colors hover:text-primary text-sm uppercase tracking-wider",
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden absolute top-4 right-4 p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <div className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border z-50 md:hidden">
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col items-center space-y-6">
                  {/* Logo */}
                  <Link to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                    <img 
                      src={frenchFlowLogo} 
                      alt="French Flow Logo" 
                      className="h-16 w-auto object-contain"
                    />
                  </Link>
                  
                  <div className="space-y-4 text-center w-full">
                    {navItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={cn(
                          "block py-3 font-medium text-lg transition-colors uppercase tracking-wider",
                          location.pathname === item.path
                            ? "text-primary"
                            : "text-muted-foreground hover:text-primary"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
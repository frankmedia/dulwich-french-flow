import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

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
    { name: "About", path: "/about" },
    { name: "Lessons", path: "/lessons" },
    { name: "Online Classes", path: "/online-classes" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-card/95 backdrop-blur-md shadow-soft border-b border-border" 
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <span className="text-2xl font-heading font-bold text-primary">
                French
              </span>
              <span className="text-2xl font-heading font-bold gradient-accent bg-clip-text text-transparent ml-1">
                PLUS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "font-medium transition-colors hover:text-primary",
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link to="/contact">
                <Phone className="w-4 h-4 mr-2" />
                Free Consultation
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
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
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <div className="fixed top-0 left-0 right-0 bg-card/95 backdrop-blur-md border-b border-border z-50 lg:hidden">
              <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between mb-6">
                  {/* Logo */}
                  <Link to="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
                    <div className="flex items-center">
                      <span className="text-2xl font-heading font-bold text-primary">
                        French
                      </span>
                      <span className="text-2xl font-heading font-bold gradient-accent bg-clip-text text-transparent ml-1">
                        PLUS
                      </span>
                    </div>
                  </Link>
                  
                  {/* Close button */}
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        "block py-3 font-medium text-lg transition-colors",
                        location.pathname === item.path
                          ? "text-primary"
                          : "text-muted-foreground hover:text-primary"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-4">
                    <Button variant="outline" className="w-full" size="lg" asChild>
                      <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                        <Phone className="w-4 h-4 mr-2" />
                        Free Consultation
                      </Link>
                    </Button>
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
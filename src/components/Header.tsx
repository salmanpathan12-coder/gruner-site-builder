import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X, ChevronDown, FolderKanban, HardHat, FlaskConical, Fuel, Leaf, Wrench } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/gruner-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Enhanced navigation structure for multi-page site
  const navLinks = [
    { 
      label: "About", 
      href: "/about",
      dropdown: [
        { label: "Our Story", href: "/about" },
        { label: "Leadership", href: "/about#leadership" },
      ]
    },
    { label: "Technology", href: "/technology" },
    { 
      label: "Solutions", 
      href: "/solutions",
      dropdown: [
        { label: "Project Development", href: "/solutions/project-development", icon: FolderKanban },
        { label: "Engineering & Construction", href: "/solutions/engineering-construction", icon: HardHat },
        { label: "R&D", href: "/solutions/rd", icon: FlaskConical },
        { label: "CNG Retail Outlets", href: "/solutions/cng-retail", icon: Fuel },
        { label: "Bio-Gas", href: "/solutions/bio-gas", icon: Leaf },
        { label: "O&M", href: "/solutions/om", icon: Wrench },
      ]
    },
    { label: "Media", href: "/media" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Background with animated opacity - enhanced for light hero visibility */}
      <motion.div 
        style={{ opacity: headerOpacity }}
        className="absolute inset-0 bg-background/95 backdrop-blur-md shadow-sm"
      />
      
      {/* Subtle always-visible backdrop for light backgrounds */}
      <div className={`absolute inset-0 transition-all duration-300 ${
        isScrolled 
          ? "bg-transparent" 
          : "bg-gradient-to-b from-black/20 via-black/10 to-transparent backdrop-blur-[2px]"
      }`} />
      
      <div className={`relative transition-all duration-500 ${isScrolled ? "py-3" : "py-5"}`}>
        <div className="container-wide flex items-center justify-between">
          <Link to="/" className="relative z-50">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src={logo}
                alt="Gruner Renewable Energy"
                className={`w-auto transition-all duration-300 ${isScrolled ? "h-9" : "h-11"}`}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href || location.pathname.startsWith(link.href + "/");
              const hasDropdown = link.dropdown && link.dropdown.length > 0;
              const isSolutionsDropdown = link.label === "Solutions";
              
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => hasDropdown && setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={link.href}
                    className={`relative px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 rounded-lg flex items-center gap-1 hover:-translate-y-0.5 active:translate-y-0 transition-transform ${
                      isScrolled
                        ? isActive
                          ? "text-primary"
                          : "text-foreground/70 hover:text-foreground hover:bg-muted"
                        : isActive
                          ? "text-white"
                          : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                    style={{
                      textShadow: !isScrolled ? "0 1px 2px rgba(0,0,0,0.3)" : "none"
                    }}
                  >
                    {link.label}
                    {hasDropdown && (
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        openDropdown === link.label ? "rotate-180" : ""
                      }`} />
                    )}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full" />
                    )}
                  </Link>
                  
                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {hasDropdown && openDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute top-full left-0 mt-1 py-3 bg-background rounded-lg shadow-xl border border-border ${
                          isSolutionsDropdown ? "min-w-[260px]" : "min-w-[180px]"
                        }`}
                      >
                        {link.dropdown.map((item) => {
                          const IconComponent = 'icon' in item ? item.icon : null;
                          return (
                            <Link
                              key={item.label}
                              to={item.href}
                              className="flex items-center gap-3 px-4 py-2.5 text-sm text-foreground/70 hover:text-foreground hover:bg-muted transition-colors"
                            >
                              {IconComponent && (
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0">
                                  <IconComponent className="w-4 h-4 text-primary" />
                                </div>
                              )}
                              <span className="font-medium">{item.label}</span>
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
            
            {/* Gradient CTA Button - Sharp edges, matching reference */}
            <Link to="/contact">
              <motion.span 
                className="ml-4 inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                Partner With Us
              </motion.span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden relative z-50 p-2 rounded-lg transition-colors ${
              isMobileMenuOpen 
                ? "text-foreground bg-muted" 
                : isScrolled 
                  ? "text-foreground hover:bg-muted" 
                  : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
            style={{
              textShadow: !isScrolled && !isMobileMenuOpen ? "0 1px 2px rgba(0,0,0,0.3)" : "none"
            }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-background z-40 lg:hidden"
              >
                <nav className="flex flex-col items-center justify-center h-full gap-6">
                  {navLinks.filter(link => !link.dropdown || link.dropdown.length === 0 || ['About', 'Solutions', 'Projects'].includes(link.label)).map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-2xl font-heading font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                  <motion.a
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navLinks.length * 0.1 }}
                    className="mt-4 inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-primary to-accent"
                  >
                    Partner With Us
                  </motion.a>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Header;
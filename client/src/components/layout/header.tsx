import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Update header background
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id')!;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300",
      isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="container-custom">
        <div className="flex justify-between items-center py-4 md:py-5">
          <Link href="/">
            <span className="text-xl font-medium tracking-tight text-primary cursor-pointer">
              Punith <span className="text-secondary">KJ</span>
            </span>
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                className={cn(
                  "nav-link",
                  activeSection === link.href.substring(1) && "active"
                )}
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <button 
            onClick={toggleMenu}
            className="md:hidden focus:outline-none text-primary" 
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background absolute w-full border-b border-border overflow-hidden"
          >
            <div className="px-4 py-2 space-y-1">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:bg-accent hover:text-secondary transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

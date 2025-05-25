import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-animation";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const { elementRef, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  
  return (
    <section 
      id="hero" 
      ref={elementRef}
      className="relative h-screen flex items-center bg-gradient-to-br from-primary/5 via-background to-primary/5 overflow-hidden"
      style={{ minHeight: '700px' }}
    >
      {/* Background gradient circle */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-secondary/20 to-transparent blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-secondary/20 to-transparent blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="w-full md:w-1/2 space-y-6 mb-12 md:mb-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          >
            <motion.span 
              className="inline-block py-1 px-3 bg-secondary/10 text-secondary rounded-md text-sm font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Senior Tax Consultant
            </motion.span>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-primary leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="block">Hello, I'm</span>
              <span className="block font-semibold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-blue-500">
                Punith KJ
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-neutral max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Corporate Tax & VAT Compliance (UAE/EU) | EY Alumni | US CPA Aspirant
            </motion.p>
            
            <motion.div 
              className="pt-6 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <a 
                href="#services" 
                className="apple-btn-primary"
              >
                View Services
              </a>
              <a 
                href="#contact" 
                className="apple-btn-secondary"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-blue-500 rounded-lg blur opacity-20"></div>
              <img 
                src="./assets/profile-photo.jpeg"
                alt="Punith KJ - Senior Tax Consultant" 
                className="relative rounded-lg shadow-lg w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator at the bottom */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <motion.a 
          href="#about"
          className="flex flex-col items-center text-primary/60 hover:text-secondary transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <span className="text-sm font-medium mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="bg-secondary/10 rounded-full p-2"
          >
            <ChevronDown className="h-4 w-4 text-secondary" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}

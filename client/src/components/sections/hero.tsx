import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-animation";
import { ArrowDownIcon } from "lucide-react";

export default function Hero() {
  const { elementRef, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
    }
  };

  return (
    <section 
      id="hero" 
      ref={elementRef}
      className="pt-28 md:pt-32 lg:pt-40 pb-20 md:pb-32 bg-gradient-to-b from-accent to-background"
    >
      <div className="container-custom">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between"
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          <motion.div 
            className="w-full md:w-1/2 space-y-6 mb-12 md:mb-0"
            variants={itemVariants}
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tight text-primary">
              <span className="block">Hello, I'm</span>
              <span className="block font-semibold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-blue-500">Punith KJ</span>
            </h1>
            <motion.p 
              className="text-lg md:text-xl text-neutral max-w-lg leading-relaxed"
              variants={itemVariants}
            >
              Senior Tax Consultant | Corporate Tax & VAT Compliance (UAE/EU) | EY Alumni | US CPA Aspirant
            </motion.p>
            <motion.div 
              className="pt-6 flex flex-wrap gap-4"
              variants={itemVariants}
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
            variants={itemVariants}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-blue-500 rounded-3xl blur opacity-30"></div>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800"
                alt="Punith KJ - Senior Tax Consultant" 
                className="relative rounded-3xl shadow-xl w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover border border-white/20"
              />
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <p className="text-neutral text-sm mb-2">Scroll to explore</p>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDownIcon className="h-5 w-5 text-secondary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

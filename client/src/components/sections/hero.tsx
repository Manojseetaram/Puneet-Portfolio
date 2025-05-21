import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-animation";

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
      className="pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-24 bg-accent"
    >
      <div className="container-custom">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between"
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          <motion.div 
            className="w-full md:w-1/2 space-y-6 mb-10 md:mb-0"
            variants={itemVariants}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-primary">
              <span className="block">Hello, I'm</span>
              <span className="block font-semibold mt-2">Punith KJ</span>
            </h1>
            <motion.p 
              className="text-lg md:text-xl text-neutral max-w-lg"
              variants={itemVariants}
            >
              Senior Tax Consultant | Corporate Tax & VAT Compliance (UAE/EU) | EY Alumni | US CPA Aspirant
            </motion.p>
            <motion.div 
              className="pt-4 flex space-x-4"
              variants={itemVariants}
            >
              <a 
                href="#services" 
                className="px-6 py-3 bg-secondary text-white rounded-full transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg"
              >
                View Services
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border border-secondary text-secondary rounded-full transition-all duration-300 hover:bg-secondary hover:text-white"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 flex justify-center md:justify-end"
            variants={itemVariants}
          >
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800"
              alt="Punith KJ - Senior Tax Consultant" 
              className="rounded-2xl shadow-xl w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

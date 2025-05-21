import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-animation";
import { Linkedin, Mail } from "lucide-react";

export default function About() {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="section bg-white" ref={elementRef}>
      <div className="container-custom">
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-12"
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div 
            className="w-full md:w-1/2"
            variants={fadeIn}
          >
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800" 
              alt="Professional tax consulting workspace" 
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 space-y-6"
            variants={fadeIn}
          >
            <h2 className="section-title">
              <span className="section-title-sm">ABOUT ME</span>
              Expert Tax Consultation with Global Perspective
            </h2>
            
            <p className="text-neutral">
              Experienced Senior Tax Consultant and EY Alumni specializing in corporate tax compliance, VAT advisory, and cross-border regulatory frameworks (UAE, EU). Proven expertise in streamlining financial processes (Exact, Yooz, Zoho, QuickBooks), mitigating tax risks, and delivering actionable insights for multinational clients.
            </p>
            
            <p className="text-neutral">
              Adept at interpreting complex tax laws, optimizing compliance workflows, and training teams on evolving regulations. Actively pursuing US CPA certification to enhance global tax advisory capabilities.
            </p>
            
            <div className="pt-4 flex items-center space-x-6">
              <a 
                href="https://www.linkedin.com/in/punith-kj/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-secondary hover:text-primary transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="#contact" 
                className="text-secondary hover:text-primary transition-colors duration-300"
                aria-label="Contact via Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

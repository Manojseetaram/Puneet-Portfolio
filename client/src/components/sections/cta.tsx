import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-animation";

export default function CTA() {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  return (
    <section ref={elementRef} className="py-20 bg-primary text-white">
      <div className="container-custom">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-8 md:mb-0 md:mr-8">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">
              Ready to optimize your tax strategy?
            </h2>
            <p className="mt-4 text-gray-300 max-w-2xl">
              Let's discuss how my expertise can help your business navigate complex tax regulations and maximize financial efficiency.
            </p>
          </div>
          <div>
            <motion.a 
              href="#contact" 
              className="inline-block px-8 py-4 bg-white text-primary rounded-full font-medium hover:bg-opacity-90 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

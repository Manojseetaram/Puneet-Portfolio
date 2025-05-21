import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-animation";
import { 
  FileText, Calculator, Globe, Sparkles, 
  ShieldCheck, BarChart2, GraduationCap 
} from "lucide-react";

export default function Services() {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  const services = [
    {
      title: "Corporate Tax Compliance & Reporting",
      description: "Comprehensive services ensuring adherence to corporate tax regulations in UAE, Luxembourg, and Germany.",
      icon: FileText
    },
    {
      title: "VAT Advisory & Compliance Solutions",
      description: "Expert guidance and support for VAT compliance under UAE and EU frameworks.",
      icon: Calculator
    },
    {
      title: "International Tax Structuring",
      description: "Advisory on cross-border tax implications, transfer pricing documentation, and strategic planning.",
      icon: Globe
    },
    {
      title: "Tax Automation & Process Optimization",
      description: "Implementing efficient software solutions and workflows to streamline tax and accounting processes.",
      icon: Sparkles
    },
    {
      title: "Regulatory Advisory & Risk Management",
      description: "Providing insights on evolving tax laws and developing strategies to mitigate tax risks.",
      icon: ShieldCheck
    },
    {
      title: "Financial Reporting & IFRS Compliance",
      description: "Support with financial statement preparation and ensuring compliance with IFRS standards.",
      icon: BarChart2
    },
    {
      title: "Tax Training & Capacity Building",
      description: "Developing and delivering training programs on tax law updates and compliance workflows.",
      icon: GraduationCap
    }
  ];

  return (
    <section id="services" className="section bg-accent" ref={elementRef}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="section-title-sm">SERVICES</span>
          <h2 className="section-title">Specialized Tax Solutions</h2>
          <p className="section-subtitle">
            Comprehensive tax services tailored for businesses operating in complex regulatory environments.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { 
                  y: 0, 
                  opacity: 1,
                  transition: { duration: 0.5, ease: "easeOut" }
                }
              }}
            >
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-accent mb-6">
                <service.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-medium text-primary mb-3">{service.title}</h3>
              <p className="text-neutral">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-animation";
import { Award, CheckCircle } from "lucide-react";

export default function Certifications() {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  const certificationItems = [
    {
      title: "Actively Pursuing US CPA Certification",
      organization: "from NASBA | In Progress"
    },
    {
      title: "EY Business – Basics of Business (Bronze Learning)",
      organization: "from EY Global Delivery Services"
    },
    {
      title: "Project Management",
      organization: "from Google Certification"
    },
    {
      title: "Accounting Fundamentals",
      organization: "from Corporate Finance Institute (CFI)"
    },
    {
      title: "QuickBooks Online Essential Training",
      organization: "from LinkedIn Learning"
    },
    {
      title: "International Tax and Technology Course – US Taxation",
      details: ["Overview of US Tax System (Individual, Corporate, Partnerships)"]
    },
    {
      title: "Common Proficiency Test (CPT)",
      organization: "from the Institute of Chartered Accountants of India (ICAI)"
    }
  ];

  return (
    <section id="certifications" className="section bg-background" ref={elementRef}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="section-title-sm">PROFESSIONAL DEVELOPMENT</span>
          <h2 className="section-title">Certifications & Training</h2>
          <p className="section-subtitle">
            Continuous learning and professional development to stay ahead in the ever-evolving tax landscape.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
          {certificationItems.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { 
                  y: 0, 
                  opacity: 1,
                  transition: { duration: 0.5, ease: "easeOut" }
                }
              }}
            >
              <div className="certification-card">
                <div className="flex items-start mb-3">
                  <div className="flex-shrink-0 h-9 w-9 flex items-center justify-center rounded-lg bg-secondary/10 text-secondary mr-3">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-primary">{item.title}</h3>
                  </div>
                </div>
                <div className="ml-12 flex-grow">
                  {item.organization && <p className="text-neutral">{item.organization}</p>}
                  
                  {item.details && (
                    <ul className="mt-2 space-y-1">
                      {item.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-secondary mr-2 mt-0.5" />
                          <span className="text-neutral text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-10">
          <a 
            href="https://www.linkedin.com/in/punith-kj/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="apple-btn-secondary"
          >
            View More on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
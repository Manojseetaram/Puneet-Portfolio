import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-animation";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  const experiences = [
    {
      title: "Senior Tax Consultant",
      company: "AlQaisar Accounting Services",
      location: "Dubai, UAE",
      period: "December 2023 – April 2024",
      description: [
        "Streamlined bookkeeping and accounting workflows using Zoho and QuickBooks, enhancing invoice processing efficiency by 25%.",
        "Advised 50+ clients on UAE Corporate Tax (CIT) and VAT compliance, ensuring 100% on-time submission."
      ],
      achievements: [
        "Reduced client tax penalties by 30% through proactive risk assessments and corrective filing strategies.",
        "Automated reconciliation processes, cutting monthly closing time by 15 hours for SME clients."
      ]
    },
    {
      title: "Advanced Tax Analyst",
      company: "EY (Global Delivery Services)",
      location: "Bengaluru, India",
      period: "September 2022 – December 2023",
      description: [
        "Prepared and filed Luxembourg corporate tax returns for Fortune 500 clients, ensuring compliance with EU directives.",
        "Provided technical advisory on complex Luxembourg tax regulations, resolving 20+ high-risk client queries annually."
      ]
    },
    {
      title: "Tax Consultant",
      company: "Lotus Vana and Companies",
      location: "Bengaluru, India",
      period: "June 2021 – September 2022",
      description: [
        "Led the preparation of financial reports for 50+ local clients, ensuring adherence to Indian tax regulations.",
        "Implemented efficient workflows for tax filing procedures, reducing processing time by 30%."
      ]
    }
  ];

  return (
    <section id="experience" className="section parallax-bg" style={{ backgroundColor: '#f5f5f7' }} ref={elementRef}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="section-title-sm">CAREER</span>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            A track record of success across leading organizations in the tax and financial sectors.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-secondary transform md:translate-x-px"></div>
          
          {/* Timeline items */}
          <motion.div 
            className="space-y-12"
            initial="hidden"
            animate={isIntersecting ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3
                }
              }
            }}
          >
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className="relative flex flex-col md:flex-row md:space-x-8"
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? -20 : 20 },
                  visible: { 
                    opacity: 1, 
                    x: 0,
                    transition: { duration: 0.7, ease: "easeOut" }
                  }
                }}
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="md:w-1/2 md:text-right pb-10 md:pb-0">
                      <div className="bg-white p-6 rounded-2xl shadow-sm md:ml-auto md:mr-8">
                        <h3 className="text-xl font-medium text-primary">{exp.title}</h3>
                        <p className="text-secondary mt-1">{exp.company}</p>
                        <p className="text-neutral mt-1">{exp.location} | {exp.period}</p>
                        <div className="mt-4 space-y-3">
                          {exp.description.map((item, i) => (
                            <p key={i} className="text-neutral">{item}</p>
                          ))}
                          
                          {exp.achievements && (
                            <>
                              <h4 className="text-lg font-semibold mt-4">Achievements:</h4>
                              <ul className="list-disc list-inside">
                                {exp.achievements.map((item, i) => (
                                  <li key={i} className="text-neutral">{item}</li>
                                ))}
                              </ul>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute left-0 md:left-1/2 top-0 w-10 h-10 bg-secondary rounded-full transform -translate-x-1/2 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    
                    <div className="md:w-1/2"></div>
                  </>
                ) : (
                  <>
                    <div className="md:w-1/2"></div>
                    
                    <div className="absolute left-0 md:left-1/2 top-0 w-10 h-10 bg-secondary rounded-full transform -translate-x-1/2 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    
                    <div className="md:w-1/2 pb-10 md:pb-0">
                      <div className="bg-white p-6 rounded-2xl shadow-sm md:mr-auto md:ml-8">
                        <h3 className="text-xl font-medium text-primary">{exp.title}</h3>
                        <p className="text-secondary mt-1">{exp.company}</p>
                        <p className="text-neutral mt-1">{exp.location} | {exp.period}</p>
                        <div className="mt-4 space-y-3">
                          {exp.description.map((item, i) => (
                            <p key={i} className="text-neutral">{item}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

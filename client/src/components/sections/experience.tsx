import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-animation";
import { Calendar, Trophy, Building, MapPin } from "lucide-react";

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
        "Advised 50+ clients on UAE Corporate Tax (CIT) and VAT compliance, ensuring 100% on-time submission.",
        "Interpreted and communicated evolving UAE tax regulations to clients, ensuring seamless adaptation to new policies.",
        "Developed and delivered internal training programs on UAE tax laws, upskilling 15+ team members on compliance workflows."
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
        "Prepared and filed Luxembourg corporate tax returns for Fortune 500 clients (e.g., Oaktree, Triton, EQT), ensuring compliance with EU directives and local laws.",
        "Provided technical advisory on complex Luxembourg tax regulations, resolving 20+ high-risk client queries annually.",
        "Collaborated with cross-functional teams to align tax reporting with IFRS standards and audit requirements.",
        "Automated bookkeeping processes using Exact and Yooz, reducing manual data entry errors by 40%."
      ],
      achievements: [
        "Recognized for delivering zero-defect tax filings across 50+ client engagements, leading to training opportunities for new hires.",
        "Spearheaded a process improvement initiative that cut client reporting turnaround time by 20%."
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
    <section id="experience" className="section bg-background" ref={elementRef}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="section-title-sm">CAREER</span>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            A track record of success across leading organizations in the tax and financial sectors.
          </p>
        </div>
        
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="experience-card"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                {/* Left side - company details */}
                <div className="md:w-1/3 space-y-4">
                  <div className="inline-block p-3 bg-secondary/10 rounded-lg">
                    <Building className="w-6 h-6 text-secondary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-primary mt-4">{exp.title}</h3>
                  <p className="text-secondary font-medium">{exp.company}</p>
                  
                  <div className="flex items-start space-x-2 text-neutral">
                    <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>{exp.location}</span>
                  </div>
                  
                  <div className="flex items-start space-x-2 text-neutral">
                    <Calendar className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                {/* Right side - responsibilities and achievements */}
                <div className="md:w-2/3 space-y-6">
                  <div>
                    <h4 className="text-lg font-medium text-primary mb-3 pb-2 border-b border-border/50">Responsibilities</h4>
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0"></span>
                          <p className="text-neutral">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {exp.achievements && (
                    <div>
                      <h4 className="text-lg font-medium text-primary mb-3 pb-2 border-b border-border/50 flex items-center">
                        <Trophy className="w-5 h-5 text-secondary mr-2" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0"></span>
                            <p className="text-neutral">{item}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Divider for all but the last item */}
              {index < experiences.length - 1 && (
                <div className="mt-16 border-t border-border/30"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

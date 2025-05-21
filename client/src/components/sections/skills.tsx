import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-animation";
import { CheckIcon } from "lucide-react";
import { ProgressBar } from "@/components/ui/progress-bar";

export default function Skills() {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  const skillCategories = [
    {
      title: "Industry Knowledge & Regulations",
      skills: [
        "UAE Federal Tax Authority (FTA) Guidelines",
        "EU Tax Directives (Luxembourg Corporate Tax)",
        "GCC Corporate Tax Frameworks",
        "IFRS Compliance"
      ]
    },
    {
      title: "Accounting & Financial Software",
      skills: [
        "Advanced Microsoft Excel (Macros, Pivot Tables)",
        "ERP Tools: Zoho, QuickBooks, Exact, Yooz",
        "Tax Calculation Software",
        "Financial Reporting & General Ledger"
      ]
    },
    {
      title: "Languages",
      languages: [
        { name: "English", level: 5 },
        { name: "Hindi", level: 5 },
        { name: "Kannada", level: 5 },
        { name: "Tamil", level: 2 }
      ]
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="section bg-white" ref={elementRef}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="section-title-sm">EXPERTISE</span>
          <h2 className="section-title">Skills & Competencies</h2>
          <p className="section-subtitle">
            Specialized knowledge and technical capabilities built through years of industry experience.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
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
          <motion.div variants={fadeInUp}>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800" 
              alt="Tax expertise visualization" 
              className="rounded-2xl shadow-lg w-full h-auto object-cover mb-8"
            />
            
            <div className="space-y-8">
              <ProgressBar label="Corporate Tax Compliance" percentage={95} delay={300} />
              <ProgressBar label="VAT Advisory & Compliance" percentage={90} delay={600} />
              <ProgressBar label="International Tax Frameworks" percentage={85} delay={900} />
              <ProgressBar label="Tax Risk Mitigation" percentage={88} delay={1200} />
            </div>
          </motion.div>
          
          <motion.div className="space-y-8" variants={fadeInUp}>
            {skillCategories.map((category, idx) => (
              <motion.div 
                key={idx}
                className="bg-accent p-8 rounded-2xl"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-medium text-primary mb-4">{category.title}</h3>
                
                {category.skills && (
                  <ul className="space-y-3">
                    {category.skills.map((skill, index) => (
                      <li key={index} className="flex items-start">
                        <CheckIcon className="w-5 h-5 text-secondary mt-1 mr-2" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {category.languages && (
                  <div className="grid grid-cols-2 gap-4">
                    {category.languages.map((lang, index) => (
                      <div key={index}>
                        <p className="mb-1">{lang.name}</p>
                        <div className="flex space-x-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <div 
                              key={i}
                              className={`w-full h-1.5 rounded ${i < lang.level ? 'bg-secondary' : 'bg-gray-300'}`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

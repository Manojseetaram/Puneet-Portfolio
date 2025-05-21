import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-animation";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  const educationItems = [
    {
      degree: "Master of Business Administration (MBA) – Finance",
      institution: "Alva's Institute of Engineering & Technology",
      affiliation: "Affiliated with Visvesvaraya Technological University",
      period: "2021 – 2022"
    },
    {
      degree: "Bachelor of Commerce (BCom) – Tax Procedure and Practice",
      institution: "Alva's Degree College",
      affiliation: "Affiliated with Mangalore University",
      period: "2017 – 2020"
    },
    {
      degree: "Pre-University (Commerce)",
      institution: "Alva's College of Education",
      period: "2014 – 2016"
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Shantiniketan High School",
      period: "2013 – 2014"
    }
  ];

  return (
    <section id="education" className="section bg-accent" ref={elementRef}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="section-title-sm">EDUCATION</span>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-subtitle">
            Educational qualifications that form the foundation of my expertise in taxation and finance.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
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
          {educationItems.map((item, index) => (
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
              <div className="education-card">
                <div className="flex items-start mb-3">
                  <div className="flex-shrink-0 h-9 w-9 flex items-center justify-center rounded-lg bg-secondary text-white mr-3">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-primary">{item.degree}</h3>
                  </div>
                </div>
                <div className="ml-12">
                  <p className="text-secondary font-medium">{item.institution}</p>
                  {item.affiliation && <p className="text-neutral text-sm">{item.affiliation}</p>}
                  <p className="text-neutral mt-1">{item.period}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
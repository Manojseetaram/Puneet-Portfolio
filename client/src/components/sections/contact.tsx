import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-animation";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { elementRef, isIntersecting } = useIntersectionObserver();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest('POST', '/api/contact', data);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+971 50 123 4567"
    },
    {
      icon: Mail,
      title: "Email",
      details: "contact@punithkj.com"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Dubai, United Arab Emirates"
    }
  ];

  return (
    <section id="contact" className="section bg-accent" ref={elementRef}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="section-title-sm">GET IN TOUCH</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Reach out to discuss how my tax expertise can benefit your business.
          </p>
        </div>
        
        <div className="relative p-1 rounded-lg bg-gradient-to-br from-secondary/20 via-secondary/5 to-transparent shadow-xl">
          <div className="bg-background rounded-lg p-0 md:p-1 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
              {/* Left panel - contact info */}
              <motion.div 
                className="lg:col-span-2 bg-secondary/5 p-8 md:p-10"
                initial={{ opacity: 0, x: -30 }}
                animate={isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-semibold text-primary mb-6">Contact Information</h3>
                <p className="text-neutral mb-10">Fill out the form and I'll get back to you as soon as possible.</p>
                
                <div className="space-y-8">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start hover:text-secondary transition-colors duration-300 group">
                      <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-base font-medium text-primary group-hover:text-secondary transition-colors duration-300">{item.title}</h3>
                        <p className="mt-1 text-neutral">{item.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Social media icons could go here */}
                <div className="absolute bottom-10 left-10 hidden lg:block">
                  <div className="flex space-x-4">
                    {/* Social icons */}
                  </div>
                </div>
              </motion.div>
              
              {/* Right panel - form */}
              <motion.div
                className="lg:col-span-3 p-8 md:p-10"
                initial={{ opacity: 0, x: 30 }}
                animate={isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-semibold text-primary mb-6">Send a Message</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary text-sm font-medium">Full Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="John Doe" 
                                className="bg-accent/50 border-0 focus:ring-1 focus:ring-secondary py-3" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary text-sm font-medium">Email Address</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="john@example.com" 
                                type="email"
                                className="bg-accent/50 border-0 focus:ring-1 focus:ring-secondary py-3" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary text-sm font-medium">Subject</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="How can I help you?" 
                              className="bg-accent/50 border-0 focus:ring-1 focus:ring-secondary py-3" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary text-sm font-medium">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Your message here..." 
                              className="bg-accent/50 border-0 focus:ring-1 focus:ring-secondary resize-none min-h-[150px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="px-8 py-3 h-auto bg-secondary text-white hover:bg-secondary/90 transition-colors duration-300 flex items-center gap-2"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="w-4 h-4" />
                    </Button>
                  </form>
                </Form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

const CTASection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="contact" ref={containerRef} className="relative overflow-hidden">
      {/* Animated background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 bg-foreground"
      />
      
      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl"
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl"
          animate={{ 
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative section-padding" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: CTA Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: 60 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-[2px] bg-primary mb-8"
              />
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-background leading-[1.2] mb-6">
                Let's Build Sustainable Energy Infrastructure{" "}
                <span className="text-primary">Together</span>
              </h2>
              
              <p className="text-lg text-background/60 mb-10 leading-relaxed">
                Partner with Gruner Renewable to develop bioenergy assets that
                deliver long-term value and environmental impact.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <MagneticButton 
                  href="mailto:partnerships@grunerrenewable.com"
                  className="btn-primary group text-lg px-8 py-5"
                >
                  Partner With Us
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </MagneticButton>
                
                <MagneticButton 
                  href="mailto:contact@grunerrenewable.com"
                  className="inline-flex items-center justify-center px-8 py-5 bg-transparent border-2 border-background/20 text-background font-medium rounded transition-all duration-200 hover:border-background/40 hover:bg-background/5"
                >
                  Contact Us
                </MagneticButton>
              </div>
            </motion.div>

            {/* Right: Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              {[
                { icon: Mail, label: "Email", value: "contact@grunerrenewable.com" },
                { icon: Phone, label: "Phone", value: "+91 11 2345 6789" },
                { icon: MapPin, label: "Headquarters", value: "New Delhi, India" },
              ].map((contact, index) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="group"
                >
                  <motion.div
                    className="flex items-center gap-5 p-5 rounded-xl border border-background/10 bg-background/5 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-background/10"
                    whileHover={{ x: 8 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                      <contact.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-background/50 mb-1">{contact.label}</p>
                      <p className="text-background font-medium">{contact.value}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}

              {/* Additional info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
                className="pt-6 mt-6 border-t border-background/10"
              >
                <p className="text-sm text-background/40 leading-relaxed">
                  For partnership inquiries, investment opportunities, or project discussions, 
                  our team is ready to connect.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

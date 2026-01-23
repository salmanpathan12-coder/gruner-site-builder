import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, ArrowRight, Cpu, Leaf, Settings, MessageSquare } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FeatureItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  isInView: boolean;
}

const FeatureItem = ({ icon: Icon, title, description, index, isInView }: FeatureItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="group flex gap-5"
    >
      <div className="flex-shrink-0">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20"
        >
          <Icon className="w-6 h-6 text-white" />
        </motion.div>
      </div>
      <div>
        <h4 className="font-heading font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
          {title}
        </h4>
        <p className="text-muted-foreground font-body leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const features = [
  {
    icon: Cpu,
    title: "Cutting-edge Technology",
    description: "State-of-the-art CSTR technology with proprietary systems for maximum biogas yield and efficiency."
  },
  {
    icon: Leaf,
    title: "Sustainable Solutions",
    description: "Eco-friendly approaches that significantly reduce carbon footprint while creating value from waste."
  },
  {
    icon: Settings,
    title: "Customized Installations",
    description: "Tailor-made plant designs and solutions engineered for your specific feedstock and requirements."
  },
  {
    icon: MessageSquare,
    title: "Complete Transparency",
    description: "Open communication and real-time project tracking throughout the entire lifecycle."
  }
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/[0.02] to-transparent" />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 60 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-px bg-gradient-to-r from-primary to-accent mb-6"
            />
            <span className="text-primary text-sm font-medium uppercase tracking-[0.2em] font-body">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold mt-4 text-foreground mb-6">
              Why Choose Gruner Renewable
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 font-body">
              Ready to embrace a cleaner and more sustainable future? Gruner Renewable 
              makes it easy to set up your own Bio-CNG plant with industry-leading 
              technology and end-to-end support.
            </p>

            {/* Feature items */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <FeatureItem
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  index={index}
                  isInView={isInView}
                />
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10"
            >
              <a 
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 group"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/7e6baf576c4.png"
                  alt="Gruner Technology"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
              </div>

              {/* Floating accent elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-2xl opacity-80 -z-10"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-xl opacity-60 -z-10"
              />

              {/* Stats overlay card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-8 -right-8 md:right-8 bg-white rounded-xl shadow-xl p-6 border border-border"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-heading font-bold text-foreground">100%</div>
                    <div className="text-sm text-muted-foreground font-body">Project Success Rate</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;

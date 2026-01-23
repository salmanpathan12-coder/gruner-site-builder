import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, ArrowRight, Cpu, Leaf, Settings, Award, Zap, Shield } from "lucide-react";
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
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
      className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/50 transition-colors duration-300"
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div>
        <h4 className="font-heading font-semibold text-foreground text-lg mb-1 group-hover:text-primary transition-colors">
          {title}
        </h4>
        <p className="text-muted-foreground font-body text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const features = [
  {
    icon: Cpu,
    title: "Advanced Technology",
    description: "State-of-the-art CSTR technology with proprietary systems for maximum biogas yield."
  },
  {
    icon: Leaf,
    title: "Sustainable Impact",
    description: "Eco-friendly approaches that significantly reduce carbon footprint and emissions."
  },
  {
    icon: Settings,
    title: "Custom Solutions",
    description: "Tailor-made plant designs engineered for your specific requirements."
  },
  {
    icon: Shield,
    title: "Full Transparency",
    description: "Open communication and real-time project tracking throughout the journey."
  },
  {
    icon: Award,
    title: "Industry Leaders",
    description: "Recognized pioneers in India's Bio-CNG sector with proven track record."
  },
  {
    icon: Zap,
    title: "Rapid Execution",
    description: "Efficient project delivery with industry-leading turnaround times."
  }
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-secondary/30" />
      
      {/* Accent shapes */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image composition */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-primary/20 to-accent/10 rounded-3xl -z-10" />
              
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-foreground/10">
                <img
                  src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2074&auto=format&fit=crop"
                  alt="Clean Energy Technology"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
              </div>

              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="absolute -bottom-6 -right-6 md:right-8"
              >
                <div className="bg-white rounded-2xl p-5 shadow-xl shadow-foreground/10 border border-foreground/5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/25">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-heading font-bold text-foreground">100%</div>
                      <div className="text-sm text-muted-foreground font-body">Success Rate</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-xs tracking-[0.15em] uppercase text-primary font-medium font-body">
                Why Partner With Us
              </span>
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              Why Choose
              <br />
              <span className="text-primary">Gruner Renewable</span>
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 font-body">
              Ready to embrace a cleaner and more sustainable future? We make it easy to 
              set up your own Bio-CNG plant with industry-leading technology and support.
            </p>

            {/* Features list */}
            <div className="grid sm:grid-cols-2 gap-2 mb-10">
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
            >
              <a 
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 transition-all duration-300 font-body"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, ArrowRight, Cpu, Leaf, Settings, Award, Zap, Shield, Building, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  isInView: boolean;
}

const FeatureCard = ({ icon: Icon, title, description, index, isInView }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: 0.3 + index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="group"
    >
      <div className="relative h-full p-5 rounded-xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.06] backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-primary/25 hover:bg-white/[0.04]">
        {/* Hover glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-transparent to-accent/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative flex items-start gap-4">
          <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-primary/25 to-accent/15 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h4 className="font-heading font-semibold text-white text-base mb-1.5 group-hover:text-primary transition-colors">
              {title}
            </h4>
            <p className="text-white/40 font-body text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
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
    description: "Tailor-made plant designs engineered for your specific requirements and feedstock."
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
  },
  {
    icon: Building,
    title: "End-to-End Support",
    description: "Complete lifecycle management from planning to operations and maintenance."
  },
  {
    icon: Wrench,
    title: "Expert O&M",
    description: "Dedicated operations and maintenance teams ensuring optimal plant performance."
  }
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Premium layered background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[hsl(220,25%,6%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(200,20%,7%)] via-[hsl(180,18%,6%)] to-[hsl(168,20%,6%)]" />
        
        {/* Ambient lighting */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/[0.04] via-transparent to-transparent" />
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-gradient-radial from-accent/[0.06] via-transparent to-transparent blur-[100px]"
        />
      </div>

      <div className="container-wide relative z-10 py-28 md:py-36">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          
          {/* Left content - Hero messaging */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="lg:sticky lg:top-32"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/15 to-accent/10 border border-primary/20">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-xs uppercase tracking-[0.2em] text-white/60 font-body">Why Partner With Us</span>
              </span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-8 leading-[1.1]">
              Why Choose
              <br />
              <span className="bg-gradient-to-r from-primary via-[hsl(140,50%,45%)] to-accent bg-clip-text text-transparent">
                Gruner Renewable
              </span>
            </h2>
            
            <p className="text-white/45 text-lg md:text-xl leading-relaxed mb-10 font-body max-w-lg">
              Ready to embrace a cleaner and more sustainable future? Gruner Renewable 
              makes it easy to set up your own Bio-CNG plant with industry-leading 
              technology and comprehensive end-to-end support.
            </p>

            {/* Key differentiators */}
            <div className="space-y-5 mb-12">
              {[
                "India's largest Bio-CNG infrastructure developer",
                "Proven technology with German collaboration",
                "Complete EPC + O&M solutions"
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-white/70 font-body">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <a 
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-[hsl(168,55%,35%)] text-white font-medium shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300"
              >
                <span className="font-body">Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Feature grid with image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Premium image with overlay */}
            <div className="relative rounded-2xl overflow-hidden mb-8">
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-primary/40 via-accent/20 to-primary/15" />
              
              <div className="relative m-[1px] rounded-[calc(1rem-1px)] overflow-hidden">
                <img
                  src="https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/7e6baf576c4.png"
                  alt="Gruner Bio-CNG Technology"
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,25%,6%)] via-[hsl(220,25%,6%)]/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/10" />
                
                {/* Floating stats card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.8 }}
                  className="absolute bottom-4 right-4"
                >
                  <div className="bg-[hsl(220,25%,10%)]/90 backdrop-blur-xl rounded-xl p-4 border border-white/10 shadow-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-xl font-heading font-bold text-white">100%</div>
                        <div className="text-xs text-white/40 font-body">Success Rate</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Feature grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  index={index}
                  isInView={isInView}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;

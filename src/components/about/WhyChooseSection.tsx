import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, ArrowRight, Cpu, Leaf, Settings, MessageSquare, Award, Zap } from "lucide-react";
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
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="group relative"
    >
      <div className="relative h-full p-6 rounded-xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.06] backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-primary/20">
        {/* Hover glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h4 className="font-heading font-semibold text-white text-base mb-2 group-hover:text-primary transition-colors">
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
    title: "Cutting-edge Technology",
    description: "State-of-the-art CSTR technology with proprietary systems for maximum biogas yield."
  },
  {
    icon: Leaf,
    title: "Sustainable Solutions",
    description: "Eco-friendly approaches that significantly reduce carbon footprint."
  },
  {
    icon: Settings,
    title: "Customized Installations",
    description: "Tailor-made plant designs engineered for your specific requirements."
  },
  {
    icon: MessageSquare,
    title: "Complete Transparency",
    description: "Open communication and real-time project tracking throughout."
  },
  {
    icon: Award,
    title: "Industry Leadership",
    description: "Recognized as pioneers in India's Bio-CNG sector with proven track record."
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Efficient project execution with industry-leading turnaround times."
  }
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(200,15%,10%)] via-[hsl(180,12%,9%)] to-[hsl(168,15%,8%)]" />
        
        {/* Gradient accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/[0.03] to-transparent" />
      </div>

      <div className="container-wide relative z-10 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: 40 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-px bg-gradient-to-r from-primary to-transparent"
              />
              <span className="text-primary text-xs font-medium uppercase tracking-[0.3em] font-body">
                Why Choose Us
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-white mb-6 leading-tight">
              Why Choose
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Gruner Renewable
              </span>
            </h2>
            
            <p className="text-white/40 text-lg leading-relaxed mb-10 font-body max-w-lg">
              Ready to embrace a cleaner and more sustainable future? Gruner Renewable 
              makes it easy to set up your own Bio-CNG plant with industry-leading 
              technology and end-to-end support.
            </p>

            {/* Feature grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
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

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <a 
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-[hsl(168,55%,35%)] text-white font-medium hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main image with premium frame */}
              <div className="relative rounded-2xl overflow-hidden">
                {/* Gradient border */}
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-primary/30 via-accent/15 to-primary/10 z-0" />
                
                <div className="relative z-10 rounded-2xl overflow-hidden m-[1px]">
                  <img
                    src="https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/7e6baf576c4.png"
                    alt="Gruner Technology"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,20%,8%)] via-transparent to-transparent opacity-50" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5" />
                </div>
              </div>

              {/* Floating accent elements */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 w-28 h-28 rounded-2xl bg-gradient-to-br from-primary to-accent opacity-15 blur-sm -z-10"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-20 h-20 rounded-xl bg-gradient-to-br from-accent to-primary opacity-10 blur-sm -z-10"
              />

              {/* Stats overlay card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-6 -right-6 md:right-6"
              >
                <div className="bg-[hsl(220,20%,12%)]/90 backdrop-blur-xl rounded-xl p-5 border border-white/10 shadow-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-heading font-bold text-white">100%</div>
                      <div className="text-xs text-white/40 font-body uppercase tracking-wider">Project Success</div>
                    </div>
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

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Cpu, Leaf, Settings, Award, Zap, Shield, CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FeatureItemProps {
  icon: LucideIcon;
  title: string;
  index: number;
  isInView: boolean;
}

const FeatureItem = ({ icon: Icon, title, index, isInView }: FeatureItemProps) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    animate={isInView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.4, delay: 0.1 + index * 0.06 }}
    className="flex items-center gap-3 p-3 rounded-lg bg-white/40 backdrop-blur-sm border border-white/60 hover:bg-white/60 transition-all duration-300"
  >
    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[hsl(200,50%,45%)] to-[hsl(220,45%,40%)] flex items-center justify-center flex-shrink-0">
      <Icon className="w-4 h-4 text-white" />
    </div>
    <span className="font-body text-sm font-medium text-foreground">{title}</span>
  </motion.div>
);

const features = [
  { icon: Cpu, title: "Advanced CSTR Technology" },
  { icon: Leaf, title: "Sustainable Impact" },
  { icon: Settings, title: "Custom Solutions" },
  { icon: Shield, title: "Full Transparency" },
  { icon: Award, title: "Industry Leaders" },
  { icon: Zap, title: "Rapid Execution" }
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative overflow-hidden py-16 md:py-20">
      {/* Blue-cyan gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,30%,92%)] via-[hsl(200,25%,94%)] to-[hsl(190,30%,91%)]" />
      
      {/* Accent layers */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-[hsl(200,50%,65%)]/10 to-transparent rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-gradient-to-tl from-[hsl(220,45%,60%)]/10 to-transparent rounded-full blur-[80px]" />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Background accent */}
              <div className="absolute -inset-3 bg-gradient-to-br from-[hsl(200,50%,45%)]/15 to-[hsl(220,45%,40%)]/10 rounded-2xl blur-sm" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop"
                  alt="Clean Energy Technology"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,35%,15%)]/40 via-transparent to-transparent" />
              </div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-4 -right-4 md:right-4"
              >
                <div className="bg-white rounded-xl p-4 shadow-lg border border-foreground/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(160,45%,40%)] to-[hsl(175,40%,35%)] flex items-center justify-center shadow-md">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xl font-heading font-bold text-foreground">100%</div>
                      <div className="text-xs text-muted-foreground font-body">Success Rate</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[hsl(200,50%,45%)]/10 border border-[hsl(200,50%,45%)]/20 mb-4">
              <Award className="w-3.5 h-3.5 text-[hsl(200,50%,45%)]" />
              <span className="text-xs tracking-[0.12em] uppercase text-[hsl(200,50%,45%)] font-medium font-body">
                Why Partner With Us
              </span>
            </span>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4 leading-tight">
              Why Choose
              <br />
              <span className="text-[hsl(200,50%,45%)]">Gruner Renewable</span>
            </h2>
            
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-body">
              Ready to embrace a cleaner future? We make it easy to 
              set up your own Bio-CNG plant with industry-leading technology.
            </p>

            {/* Compact features grid */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              {features.map((feature, index) => (
                <FeatureItem
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  index={index}
                  isInView={isInView}
                />
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a 
                href="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[hsl(200,50%,45%)] to-[hsl(220,45%,40%)] text-white font-medium shadow-lg shadow-[hsl(200,50%,45%)]/25 hover:shadow-xl hover:shadow-[hsl(200,50%,45%)]/35 hover:-translate-y-0.5 transition-all duration-300 font-body text-sm"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Cpu, Leaf, Settings, Award, Zap, Shield } from "lucide-react";
import type { LucideIcon } from "lucide-react";
interface FeatureItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  isInView: boolean;
}
const FeatureItem = ({
  icon: Icon,
  title,
  description,
  index,
  isInView
}: FeatureItemProps) => {
  return <motion.div initial={{
    opacity: 0,
    x: -15
  }} animate={isInView ? {
    opacity: 1,
    x: 0
  } : {}} transition={{
    duration: 0.4,
    delay: 0.1 + index * 0.08
  }} className="group flex items-start gap-3 p-3 rounded-lg hover:bg-white/60 transition-colors duration-300">
      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-md shadow-primary/20">
        <Icon className="w-4 h-4 text-white" />
      </div>
      <div>
        <h4 className="font-heading font-semibold text-foreground text-sm mb-0.5 group-hover:text-primary transition-colors">
          {title}
        </h4>
        <p className="text-muted-foreground font-body text-xs leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>;
};
const features = [{
  icon: Cpu,
  title: "Advanced Technology",
  description: "State-of-the-art CSTR technology for maximum biogas yield."
}, {
  icon: Leaf,
  title: "Sustainable Impact",
  description: "Eco-friendly approaches reducing carbon footprint."
}, {
  icon: Settings,
  title: "Custom Solutions",
  description: "Tailor-made plant designs for your requirements."
}, {
  icon: Shield,
  title: "Full Transparency",
  description: "Open communication and real-time tracking."
}, {
  icon: Award,
  title: "Industry Leaders",
  description: "Pioneers in India's Bio-CNG sector."
}, {
  icon: Zap,
  title: "Rapid Execution",
  description: "Industry-leading turnaround times."
}];
const WhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px"
  });
  return <section ref={ref} className="relative overflow-hidden py-16 md:py-20">
      {/* Light gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(45,30%,96%)] via-[hsl(40,25%,94%)] to-[hsl(35,20%,92%)]" />
      
      {/* Accent orbs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-[hsl(250,50%,65%)]/10 to-transparent rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-[80px]" />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl">
          
          {/* Left: Image composition */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.8
        }} className="relative order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-full h-full bg-gradient-to-br from-primary/20 to-accent/10 rounded-2xl" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2074&auto=format&fit=crop" alt="Clean Energy Technology" className="w-full aspect-[4/3] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
              </div>

              {/* Floating stats card */}
              <motion.div initial={{
              opacity: 0,
              y: 20,
              scale: 0.9
            }} animate={isInView ? {
              opacity: 1,
              y: 0,
              scale: 1
            } : {}} transition={{
              duration: 0.5,
              delay: 0.4
            }} className="absolute -bottom-4 -right-4 md:right-4">
                
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.8,
          delay: 0.1
        }} className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Award className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs tracking-[0.12em] uppercase text-primary font-medium font-body">
                Why Partner With Us
              </span>
            </span>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4 leading-tight">
              Why Choose
              <br />
              <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">Gruner Renewable</span>
            </h2>
            
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-body">
              Ready to embrace a cleaner future? We make it easy to 
              set up your own Bio-CNG plant with industry-leading technology and support.
            </p>

            {/* Compact features grid */}
            <div className="grid sm:grid-cols-2 gap-1 mb-8">
              {features.map((feature, index) => <FeatureItem key={feature.title} icon={feature.icon} title={feature.title} description={feature.description} index={index} isInView={isInView} />)}
            </div>

            {/* CTA */}
            <motion.div initial={{
            opacity: 0,
            y: 15
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.5,
            delay: 0.6
          }}>
              <a href="/contact" className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-medium shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 font-body text-sm text-center rounded-md">
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default WhyChooseSection;
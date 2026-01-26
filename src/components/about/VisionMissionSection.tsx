import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, ArrowUpRight } from "lucide-react";
const VisionMissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px"
  });
  return <section ref={ref} className="relative overflow-hidden py-12 md:py-14">
      {/* Multi-color gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(45,30%,96%)] via-[hsl(40,25%,94%)] to-[hsl(35,20%,92%)]" />
      
      {/* Warm accent orbs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-[hsl(35,70%,60%)]/10 to-transparent rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-[80px]" />

      <div className="container-wide relative z-10">
        {/* Compact header */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="text-left mb-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs tracking-[0.12em] uppercase font-medium font-body mb-4 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
            Our Direction
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground">
            Driving India's <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent ">Clean Energy</span> Future
          </h2>
        </motion.div>

        {/* Compact two-column cards */}
        <div className="grid md:grid-cols-2 gap-4 w-full max-w-5xl">
          {/* Vision Card */}
          <motion.div initial={{
          opacity: 0,
          y: 30,
          x: -20
        }} animate={isInView ? {
          opacity: 1,
          y: 0,
          x: 0
        } : {}} transition={{
          duration: 0.7,
          delay: 0.1
        }} className="group">
            <div className="relative h-full bg-white p-6 md:p-7 shadow-lg shadow-foreground/5 border border-foreground/5 overflow-hidden hover:shadow-xl transition-all duration-500 rounded">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg rounded">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-primary/30 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>

                <h3 className="text-xl font-heading font-bold mb-3 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                  Our Vision
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-body mb-5">
                  To be India's leading force in the Bio-CNG revolution, creating a sustainable 
                  ecosystem where agricultural waste transforms into clean energy.
                </p>

                <div className="flex gap-6 pt-4 border-t border-foreground/10">
                  <div>
                    <div className="text-lg font-heading font-bold text-primary">2030</div>
                    <div className="text-xs text-muted-foreground font-body">Net Zero Goal</div>
                  </div>
                  <div>
                    <div className="text-lg font-heading font-bold text-primary">500+</div>
                    <div className="text-xs text-muted-foreground font-body">Plants Target</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div initial={{
          opacity: 0,
          y: 30,
          x: 20
        }} animate={isInView ? {
          opacity: 1,
          y: 0,
          x: 0
        } : {}} transition={{
          duration: 0.7,
          delay: 0.2
        }} className="group">
            <div className="relative h-full bg-gradient-to-br from-[hsl(120,25%,92%)] to-[hsl(140,20%,88%)] p-6 md:p-7 shadow-lg shadow-primary/5 border border-primary/10 overflow-hidden rounded">
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/15 to-transparent rounded-full translate-y-1/2 -translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/10 to-transparent rounded-full" />
              
              <div className="relative">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg rounded">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-primary/30 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>

                <h3 className="text-xl font-heading font-bold mb-3 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                  Our Mission
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed font-body mb-5">
                  Delivering world-class Bio-CNG infrastructure through innovative technology, 
                  operational excellence, and environmental stewardship.
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-primary/15">
                  {["Innovation", "Sustainability", "Excellence"].map(pillar => <span key={pillar} className="px-3 py-1.5 rounded-full bg-primary/10 text-foreground/80 text-xs font-body border border-primary/15">
                      {pillar}
                    </span>)}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Compact quote banner - Centered */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6,
        delay: 0.4
      }} className="mt-6 w-full">
          <div className="relative overflow-hidden rounded">
            <img src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2070&auto=format&fit=crop" alt="Sustainable Energy" className="w-full h-40 md:h-48 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center px-6 md:px-10 rounded">
              <p className="text-base md:text-lg font-heading font-medium text-white leading-relaxed max-w-lg text-center">
                "Building a circular economy where waste becomes wealth and energy becomes sustainable."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default VisionMissionSection;
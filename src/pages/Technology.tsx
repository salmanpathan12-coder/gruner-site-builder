import { motion } from "framer-motion";
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import TechnologyHero from "@/components/technology/TechnologyHero";
import { 
  Beaker, 
  Thermometer, 
  Clock, 
  Settings,
  ArrowRight,
  Leaf,
  Zap,
  Recycle,
  ChevronDown
} from "lucide-react";

const specifications = [
  { label: "Dry Substance", value: "5% < DS < 10%", icon: Beaker },
  { label: "Thermal Regime", value: "Mesophilic or Thermophilic", icon: Thermometer },
  { label: "Retention Time", value: "20 < days < 60", icon: Clock },
  { label: "Mixing System", value: "Mechanical (slow & fast mixers)", icon: Settings }
];

const processSteps = [
  {
    step: "01",
    title: "Biomass Loading",
    description: "Solid and liquid biomasses are loaded through a pre-tank or loader into digesters made of concrete or steel.",
    icon: Recycle
  },
  {
    step: "02",
    title: "Mixing & Digestion",
    description: "Digesters equipped with slow and fast mixers ensure thorough homogenization, preventing crust and sediment formation.",
    icon: Settings
  },
  {
    step: "03",
    title: "Biogas Production",
    description: "Under controlled temperatures, anaerobic digestion produces biogas with high methane content.",
    icon: Zap
  },
  {
    step: "04",
    title: "Gas Storage",
    description: "Digesters are covered with a gasometer to efficiently store the biogas produced.",
    icon: Beaker
  }
];

const advantages = [
  {
    title: "Complex Biomass Handling",
    description: "Suitable for feeding the plant with biomass with a complex digestion process.",
    icon: Recycle
  },
  {
    title: "Co-Digestion Capability",
    description: "Provides the possibility to implement co-digestion with a varied recipe of biomass inputs.",
    icon: Leaf
  },
  {
    title: "pH Buffering Capacity",
    description: "High buffering capacity for pH variation, ensuring stable and consistent operations.",
    icon: Beaker
  }
];

const Technology = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <PageLayout>
      <TechnologyHero />

      {/* Introduction Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Technology</span>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold mt-3 mb-6">
                Introduction to CSTR Technology
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Ever wondered what makes CSTR (Continuous-Flow Stirred Tank Reactor) technology a key player 
                in biogas production? CSTRs ensure perfect homogenization of biomass with continuous mixing.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Ideal for dry matter contents below 10%, they operate at controlled temperatures, providing 
                flexible and efficient biogas production. This makes them suitable for diverse biomass types, 
                contributing significantly to renewable energy generation.
              </p>
              
              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-4">
                {specifications.map((spec, index) => (
                  <motion.div
                    key={spec.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/20 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <spec.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">{spec.label}</span>
                    </div>
                    <p className="text-foreground font-medium text-sm">{spec.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/fc3678381a9.png"
                alt="CSTR Technology"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Process Flow */}
      <section className="section-padding bg-foreground">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">The Process</span>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mt-3 mb-4 text-white">
              How CSTR Transforms Biomass into Energy
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              A step-by-step look at our advanced biogas production process
            </p>
          </motion.div>

          {/* Interactive Diagram */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Steps List */}
            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setActiveStep(index)}
                  className={`cursor-pointer p-6 rounded-xl border transition-all duration-300 ${
                    activeStep === index
                      ? "bg-gradient-to-r from-primary/20 to-accent/20 border-primary/40"
                      : "bg-white/5 border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                      activeStep === index
                        ? "bg-gradient-to-br from-primary to-accent"
                        : "bg-white/10"
                    }`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-primary text-sm font-medium">Step {step.step}</span>
                        <ChevronDown className={`w-4 h-4 text-white/50 transition-transform ${
                          activeStep === index ? "rotate-180" : ""
                        }`} />
                      </div>
                      <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                      <motion.p
                        initial={false}
                        animate={{ 
                          height: activeStep === index ? "auto" : 0,
                          opacity: activeStep === index ? 1 : 0
                        }}
                        className="text-white/60 text-sm overflow-hidden"
                      >
                        {step.description}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Visual Diagram */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-32"
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
                {/* CSTR Diagram */}
                <div className="relative aspect-square max-w-md mx-auto">
                  {/* Outer ring - Tank */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-4 rounded-full border-4 border-dashed border-primary/30"
                  />
                  
                  {/* Inner mixing area */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/40"
                  >
                    {/* Mixer blades */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-1/2 h-0.5 bg-white/40 rounded-full" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center rotate-90">
                      <div className="w-1/2 h-0.5 bg-white/40 rounded-full" />
                    </div>
                  </motion.div>

                  {/* Center hub */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30">
                      <Settings className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Floating particles */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        x: [0, Math.random() * 20 - 10, 0],
                        y: [0, Math.random() * 20 - 10, 0],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.3
                      }}
                      className="absolute w-3 h-3 rounded-full bg-accent/60"
                      style={{
                        top: `${20 + Math.random() * 60}%`,
                        left: `${20 + Math.random() * 60}%`,
                      }}
                    />
                  ))}

                  {/* Input arrow */}
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full flex items-center gap-2"
                  >
                    <span className="text-xs text-white/60 uppercase tracking-wider">Input</span>
                    <ArrowRight className="w-5 h-5 text-primary" />
                  </motion.div>

                  {/* Output arrow */}
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full flex items-center gap-2"
                  >
                    <ArrowRight className="w-5 h-5 text-accent" />
                    <span className="text-xs text-white/60 uppercase tracking-wider">Biogas</span>
                  </motion.div>
                </div>

                {/* Legend */}
                <div className="mt-8 flex justify-center gap-6 text-xs text-white/50">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <span>Biomass Input</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-accent" />
                    <span>Biogas Output</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Benefits</span>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mt-3 mb-4">
              Technology Advantages
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From an engineering and process engineering point of view, CSTR technology offers numerous advantages
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 bg-card rounded-xl border border-border hover:border-primary/20 hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <advantage.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-heading font-semibold mb-3">{advantage.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>

                {/* Hover gradient border */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-xl border border-gradient-to-r from-primary to-accent" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary text-sm font-medium uppercase tracking-wider">Sustainability</span>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold mt-3 mb-6">
                CSTRs and Environmental Impact
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                How do CSTRs contribute to environmental sustainability? CSTRs enable the conversion of diverse 
                biomasses into renewable energy, reducing reliance on fossil fuels and lowering greenhouse gas emissions.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Their efficient digestion process minimizes waste and emissions, contributing to a cleaner and 
                greener environment. This technology is at the heart of our commitment to sustainable energy solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: "CO₂ Reduction", value: "40%+", desc: "Lower emissions vs fossil fuels" },
                { label: "Waste Diverted", value: "100%", desc: "Zero waste to landfill" },
                { label: "Energy Efficiency", value: "85%+", desc: "Conversion rate achieved" },
                { label: "Carbon Credits", value: "Yes", desc: "Eligible for certification" }
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 bg-background rounded-xl border border-border text-center"
                >
                  <div className="text-3xl font-heading font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                    {item.value}
                  </div>
                  <div className="text-foreground font-medium mb-1">{item.label}</div>
                  <div className="text-muted-foreground text-sm">{item.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Technology;

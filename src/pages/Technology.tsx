import { motion } from "framer-motion";
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import TechnologyHero from "@/components/technology/TechnologyHero";
import { Beaker, Thermometer, Clock, Settings, ArrowRight, Leaf, Zap, Recycle, ChevronDown } from "lucide-react";

const specifications = [
  { label: "Dry Substance", value: "5% < DS < 10%", icon: Beaker },
  { label: "Thermal Regime", value: "Mesophilic or Thermophilic", icon: Thermometer },
  { label: "Retention Time", value: "20 < days < 60", icon: Clock },
  { label: "Mixing System", value: "Mechanical (slow & fast mixers)", icon: Settings },
];

const processSteps = [
  {
    step: "01",
    title: "Biomass Loading",
    description:
      "Solid and liquid biomasses are loaded through a pre-tank or loader into digesters made of concrete or steel.",
    icon: Recycle,
  },
  {
    step: "02",
    title: "Mixing & Digestion",
    description:
      "Digesters equipped with slow and fast mixers ensure thorough homogenization, preventing crust and sediment formation.",
    icon: Settings,
  },
  {
    step: "03",
    title: "Biogas Production",
    description: "Under controlled temperatures, anaerobic digestion produces biogas with high methane content.",
    icon: Zap,
  },
  {
    step: "04",
    title: "Gas Storage",
    description: "Digesters are covered with a gasometer to efficiently store the biogas produced.",
    icon: Beaker,
  },
];

const advantages = [
  {
    title: "Complex Biomass Handling",
    description: "Suitable for feeding the plant with biomass with a complex digestion process.",
    icon: Recycle,
  },
  {
    title: "Co-Digestion Capability",
    description: "Provides the possibility to implement co-digestion with a varied recipe of biomass inputs.",
    icon: Leaf,
  },
  {
    title: "pH Buffering Capacity",
    description: "High buffering capacity for pH variation, ensuring stable and consistent operations.",
    icon: Beaker,
  },
];

const Technology = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <PageLayout>
      <TechnologyHero />

      {/* Introduction Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-[#1B2B23] to-[#1B2B23]/90">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <span className="text-[#88C444] text-sm font-bold uppercase tracking-wider">Our Technology</span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4 mb-6 text-white">
                  Introduction to{" "}
                  <span className="bg-gradient-to-r from-[#88C444] via-[#A8E063] to-[#88C444] bg-clip-text text-transparent">
                    CSTR Technology
                  </span>
                </h2>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "200px" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-1.5 bg-gradient-to-r from-[#88C444] to-[#A8E063] shadow-lg shadow-[#88C444]/40"
                />
              </div>

              <div className="space-y-6 text-white/80 text-lg leading-relaxed">
                <p>
                  Ever wondered what makes CSTR (Continuous-Flow Stirred Tank Reactor) technology a key player in biogas
                  production? CSTRs ensure perfect homogenization of biomass with continuous mixing.
                </p>
                <p>
                  Ideal for dry matter contents below 10%, they operate at controlled temperatures, providing flexible
                  and efficient biogas production. This makes them suitable for diverse biomass types, contributing
                  significantly to renewable energy generation.
                </p>
              </div>

              {/* Specs Grid - Sharp cards, no radius */}
              <div className="grid grid-cols-2 gap-6">
                {specifications.map((spec, index) => (
                  <motion.div
                    key={spec.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="p-6 bg-[#1B2B23]/60 border-2 border-[#88C444]/30 hover:border-[#88C444]/70 transition-all duration-500 group"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#88C444] to-[#A8E063] flex items-center justify-center shadow-lg shadow-[#88C444]/50">
                        <spec.icon className="w-6 h-6 text-[#1B2B23]" />
                      </div>
                      <span className="text-xs text-white/60 uppercase tracking-wider font-bold">{spec.label}</span>
                    </div>
                    <p className="text-white font-bold text-lg bg-gradient-to-r from-[#88C444] to-[#A8E063] bg-clip-text text-transparent">
                      {spec.value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden border-4 border-[#88C444]/60 shadow-2xl shadow-[#88C444]/40">
                <img
                  src="https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/fc3678381a9.png"
                  alt="CSTR Technology"
                  className="w-full h-full object-cover"
                />
                {/* Sharp corner accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-[#88C444]/80" />
                <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-[#88C444]/80" />
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-[#88C444]/80" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-[#88C444]/80" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Process Flow */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#1B2B23]/95 via-[#243B2F] to-[#1B2B23]">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-[#88C444] text-sm font-bold uppercase tracking-wider">The Process</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4 mb-6 text-white">
              How CSTR Transforms{" "}
              <span className="bg-gradient-to-r from-[#88C444] via-[#A8E063] to-[#88C444] bg-clip-text text-transparent">
                Biomass into Energy
              </span>
            </h2>
            <p className="text-white/70 max-w-3xl mx-auto text-lg">
              A step-by-step look at our advanced biogas production process
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Steps List */}
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  onClick={() => setActiveStep(index)}
                  className={`cursor-pointer p-8 border-2 transition-all duration-500 group ${
                    activeStep === index
                      ? "bg-gradient-to-r from-[#88C444]/20 to-[#A8E063]/10 border-[#88C444] shadow-2xl shadow-[#88C444]/40"
                      : "bg-[#1B2B23]/50 border-white/10 hover:border-[#88C444]/40"
                  }`}
                >
                  <div className="flex items-start gap-6">
                    <div
                      className={`w-16 h-16 flex-shrink-0 flex items-center justify-center transition-all duration-500 ${
                        activeStep === index
                          ? "bg-gradient-to-br from-[#88C444] to-[#A8E063] shadow-xl shadow-[#88C444]/60"
                          : "bg-white/10"
                      }`}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[#88C444] font-bold text-lg">Step {step.step}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-white/60 transition-transform duration-300 ${
                            activeStep === index ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                      <h3 className="text-white text-xl font-bold mb-3">{step.title}</h3>
                      <motion.p
                        initial={false}
                        animate={{ height: activeStep === index ? "auto" : 0, opacity: activeStep === index ? 1 : 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-white/70 text-base overflow-hidden"
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
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="sticky top-32"
            >
              <div className="relative p-10 bg-[#1B2B23]/70 border-4 border-[#88C444]/50 shadow-2xl shadow-[#88C444]/30">
                {/* Sharp corner accents */}
                <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-[#88C444]/80" />
                <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-[#88C444]/80" />
                <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-[#88C444]/80" />
                <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-[#88C444]/80" />

                <div className="relative aspect-square max-w-lg mx-auto">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-6 border-4 border-dashed border-[#88C444]/40"
                  />

                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-16 bg-gradient-to-br from-[#88C444]/20 to-[#A8E063]/20 border-2 border-[#88C444]/50"
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-1/2 h-1 bg-white/50" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center rotate-90">
                      <div className="w-1/2 h-1 bg-white/50" />
                    </div>
                  </motion.div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-24 h-24 bg-gradient-to-br from-[#88C444] to-[#A8E063] flex items-center justify-center shadow-2xl shadow-[#88C444]/70"
                    >
                      <Settings className="w-12 h-12 text-[#1B2B23]" />
                    </motion.div>
                  </div>

                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        x: [0, Math.random() * 40 - 20, 0],
                        y: [0, Math.random() * 40 - 20, 0],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, delay: i * 0.4 }}
                      className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-[#88C444] to-[#A8E063] shadow-lg shadow-[#88C444]/60 blur-sm"
                      style={{ top: `${15 + Math.random() * 70}%`, left: `${15 + Math.random() * 70}%` }}
                    />
                  ))}

                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full flex items-center gap-3"
                  >
                    <span className="text-sm text-white/70 uppercase font-bold">Input</span>
                    <ArrowRight className="w-8 h-8 text-[#88C444]" />
                  </motion.div>

                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full flex items-center gap-3 flex-row-reverse"
                  >
                    <span className="text-sm text-white/70 uppercase font-bold">Biogas</span>
                    <ArrowRight className="w-8 h-8 text-[#A8E063]" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-[#1B2B23] to-[#243B2F]">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-[#88C444] text-sm font-bold uppercase tracking-wider">Benefits</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4 mb-6 text-white">
              Technology{" "}
              <span className="bg-gradient-to-r from-[#88C444] via-[#A8E063] to-[#88C444] bg-clip-text text-transparent">
                Advantages
              </span>
            </h2>
            <p className="text-white/70 max-w-3xl mx-auto text-lg">
              From an engineering and process engineering point of view, CSTR technology offers numerous advantages
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="group relative p-10 bg-[#1B2B23]/60 border-2 border-[#88C444]/20 hover:border-[#88C444]/80 transition-all duration-700 hover:shadow-2xl hover:shadow-[#88C444]/40"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#88C444] to-[#A8E063] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-[#88C444]/50">
                  <advantage.icon className="w-10 h-10 text-[#1B2B23]" />
                </div>

                <h3 className="text-2xl font-heading font-bold text-white mb-4">{advantage.title}</h3>
                <p className="text-white/80 leading-relaxed text-lg">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#243B2F] via-[#1B2B23] to-[#1B2B23]">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <span className="text-[#88C444] text-sm font-bold uppercase tracking-wider">Sustainability</span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4 mb-6 text-white">
                  CSTRs and{" "}
                  <span className="bg-gradient-to-r from-[#88C444] via-[#A8E063] to-[#88C444] bg-clip-text text-transparent">
                    Environmental Impact
                  </span>
                </h2>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "220px" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-1.5 bg-gradient-to-r from-[#88C444] to-[#A8E063] shadow-lg shadow-[#88C444]/40"
                />
              </div>

              <div className="space-y-6 text-white/80 text-lg leading-relaxed">
                <p>
                  How do CSTRs contribute to environmental sustainability? CSTRs enable the conversion of diverse
                  biomasses into renewable energy, reducing reliance on fossil fuels and lowering greenhouse gas
                  emissions.
                </p>
                <p>
                  Their efficient digestion process minimizes waste and emissions, contributing to a cleaner and greener
                  environment. This technology is at the heart of our commitment to sustainable energy solutions.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-8"
            >
              {[
                { label: "CO₂ Reduction", value: "40%+", desc: "Lower emissions vs fossil fuels" },
                { label: "Waste Diverted", value: "100%", desc: "Zero waste to landfill" },
                { label: "Energy Efficiency", value: "85%+", desc: "Conversion rate achieved" },
                { label: "Carbon Credits", value: "Yes", desc: "Eligible for certification" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="p-8 bg-[#1B2B23]/60 border-2 border-[#88C444]/30 text-center hover:border-[#88C444]/70 transition-all duration-500 group"
                >
                  <div className="text-4xl md:text-5xl font-heading font-bold bg-gradient-to-r from-[#88C444] via-[#A8E063] to-[#88C444] bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-500">
                    {item.value}
                  </div>
                  <div className="text-white font-bold text-lg mb-2">{item.label}</div>
                  <div className="text-white/70 text-sm">{item.desc}</div>
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

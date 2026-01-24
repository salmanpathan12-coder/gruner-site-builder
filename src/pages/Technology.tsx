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

      {/* Introduction Section - Light Theme */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white">
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
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#88C444] to-[#A8E063] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#88C444]/30">
                  Our Technology
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mt-6 mb-6 text-gray-900">
                  Introduction to{" "}
                  <span className="bg-gradient-to-r from-[#A8E063] via-[#88C444] to-[#A8E063] bg-clip-text text-transparent">
                    CSTR Technology
                  </span>
                </h2>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "220px" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-1.5 bg-gradient-to-r from-[#88C444] to-[#A8E063] shadow-lg shadow-[#88C444]/30"
                />
              </div>

              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
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

              {/* Specs Grid - Sharp cards with gradient accents */}
              <div className="grid grid-cols-2 gap-6">
                {specifications.map((spec, index) => (
                  <motion.div
                    key={spec.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="p-6 bg-white border-2 border-gray-200 hover:border-[#88C444] hover:shadow-xl hover:shadow-[#88C444]/20 hover:-translate-y-1 transition-all duration-500 group"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 inline-flex items-center justify-center bg-gradient-to-r from-[#88C444] to-[#A8E063] text-white shadow-lg shadow-[#88C444]/30 group-hover:shadow-xl group-hover:shadow-[#88C444]/40 transition-all duration-300">
                        <spec.icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">{spec.label}</span>
                    </div>
                    <p className="text-gray-900 font-bold text-lg bg-gradient-to-r from-[#88C444] via-[#A8E063] to-[#88C444] bg-clip-text text-transparent">
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
              <div className="relative overflow-hidden border-4 border-[#88C444]/40 shadow-2xl shadow-[#88C444]/20 hover:shadow-[#88C444]/30 transition-shadow duration-500">
                <img
                  src="https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/fc3678381a9.png"
                  alt="CSTR Technology"
                  className="w-full h-full object-cover"
                />
                {/* Sharp green corner accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-[#88C444]" />
                <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-[#88C444]" />
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-[#88C444]" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-[#88C444]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Process Flow - Light Theme */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#88C444] to-[#A8E063] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#88C444]/30">
              The Process
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mt-6 mb-6 text-gray-900">
              How CSTR Transforms{" "}
              <span className="bg-gradient-to-r from-[#A8E063] via-[#88C444] to-[#A8E063] bg-clip-text text-transparent">
                Biomass into Energy
              </span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
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
                      ? "bg-gradient-to-r from-[#88C444]/10 to-[#A8E063]/5 border-[#88C444] shadow-2xl shadow-[#88C444]/20"
                      : "bg-white border-gray-200 hover:border-[#88C444]/50 hover:shadow-lg"
                  } hover:-translate-y-1`}
                >
                  <div className="flex items-start gap-6">
                    <div
                      className={`w-16 h-16 flex-shrink-0 inline-flex items-center justify-center transition-all duration-500 group-hover:shadow-xl group-hover:shadow-[#88C444]/40 ${
                        activeStep === index
                          ? "bg-gradient-to-r from-[#88C444] to-[#A8E063] text-white shadow-xl shadow-[#88C444]/50"
                          : "bg-gradient-to-r from-gray-100 to-gray-200 text-[#88C444]"
                      }`}
                    >
                      <step.icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <span className="bg-gradient-to-r from-[#88C444] via-[#A8E063] to-[#88C444] bg-clip-text text-transparent font-bold text-lg">
                          Step {step.step}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                            activeStep === index ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                      <h3 className="text-gray-900 text-xl font-bold mb-3">{step.title}</h3>
                      <motion.p
                        initial={false}
                        animate={{ height: activeStep === index ? "auto" : 0, opacity: activeStep === index ? 1 : 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-gray-600 text-base overflow-hidden"
                      >
                        {step.description}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Visual Diagram - Light Version */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="sticky top-32"
            >
              <div className="relative p-10 bg-white border-4 border-[#88C444]/30 shadow-2xl shadow-[#88C444]/20">
                <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-[#88C444]" />
                <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-[#88C444]" />
                <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-[#88C444]" />
                <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-[#88C444]" />

                <div className="relative aspect-square max-w-lg mx-auto">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-6 border-4 border-dashed border-[#88C444]/30"
                  />

                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-16 bg-gradient-to-br from-[#88C444]/10 to-[#A8E063]/10 border-2 border-[#88C444]/40"
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-1/2 h-0.5 bg-gray-400/50" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center rotate-90">
                      <div className="w-1/2 h-0.5 bg-gray-400/50" />
                    </div>
                  </motion.div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-24 h-24 bg-gradient-to-r from-[#88C444] to-[#A8E063] flex items-center justify-center shadow-2xl shadow-[#88C444]/40"
                    >
                      <Settings className="w-12 h-12 text-white" />
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
                      className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-[#88C444] to-[#A8E063] shadow-lg shadow-[#88C444]/40"
                      style={{ top: `${15 + Math.random() * 70}%`, left: `${15 + Math.random() * 70}%` }}
                    />
                  ))}

                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full flex items-center gap-3"
                  >
                    <span className="text-sm text-gray-600 uppercase font-bold">Input</span>
                    <ArrowRight className="w-8 h-8 text-[#88C444]" />
                  </motion.div>

                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full flex items-center gap-3 flex-row-reverse"
                  >
                    <span className="text-sm text-gray-600 uppercase font-bold">Biogas</span>
                    <ArrowRight className="w-8 h-8 text-[#A8E063]" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advantages Section - Light Theme */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#88C444] to-[#A8E063] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#88C444]/30">
              Benefits
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mt-6 mb-6 text-gray-900">
              Technology{" "}
              <span className="bg-gradient-to-r from-[#A8E063] via-[#88C444] to-[#A8E063] bg-clip-text text-transparent">
                Advantages
              </span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
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
                className="group relative p-10 bg-white border-2 border-gray-200 hover:border-[#88C444] hover:shadow-2xl hover:shadow-[#88C444]/20 hover:-translate-y-1 transition-all duration-700"
              >
                <div className="w-20 h-20 inline-flex items-center justify-center bg-gradient-to-r from-[#88C444] to-[#A8E063] text-white mb-8 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[#88C444]/40 transition-all duration-500 shadow-lg shadow-[#88C444]/30">
                  <advantage.icon className="w-10 h-10" />
                </div>

                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">{advantage.title}</h3>
                <p className="text-gray-700 leading-relaxed text-lg">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact - Light Theme */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
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
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#88C444] to-[#A8E063] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#88C444]/30">
                  Sustainability
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mt-6 mb-6 text-gray-900">
                  CSTRs and{" "}
                  <span className="bg-gradient-to-r from-[#A8E063] via-[#88C444] to-[#A8E063] bg-clip-text text-transparent">
                    Environmental Impact
                  </span>
                </h2>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "240px" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-1.5 bg-gradient-to-r from-[#88C444] to-[#A8E063] shadow-lg shadow-[#88C444]/30"
                />
              </div>

              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
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
                  className="p-8 bg-white border-2 border-gray-200 text-center hover:border-[#88C444] hover:shadow-2xl hover:shadow-[#88C444]/20 hover:-translate-y-1 transition-all duration-500 group"
                >
                  <div className="text-4xl md:text-5xl font-heading font-bold bg-gradient-to-r from-[#88C444] via-[#A8E063] to-[#88C444] bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-500">
                    {item.value}
                  </div>
                  <div className="text-gray-900 font-bold text-lg mb-2">{item.label}</div>
                  <div className="text-gray-600 text-sm">{item.desc}</div>
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

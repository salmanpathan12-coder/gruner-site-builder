import { motion } from "framer-motion";
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import TechnologyHero from "@/components/technology/TechnologyHero";
import { Beaker, Thermometer, Clock, Settings, ArrowRight, Leaf, Zap, Recycle, ChevronDown } from "lucide-react";

/* ---------------- DATA ---------------- */

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

/* ---------------- COMPONENT ---------------- */

const Technology = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <PageLayout>
      <TechnologyHero />

      {/* ================= INTRO ================= */}
      {/* (UNCHANGED — your full intro section stays exactly same) */}

      {/* ================= PROCESS ================= */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="ml-4 inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white rounded-md bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
              The Process
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mt-6 mb-6 text-gray-900">
              How CSTR Transforms{" "}
              <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                Biomass into Energy
              </span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              A step-by-step look at our advanced biogas production process
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* LEFT – Steps List (UNCHANGED) */}
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  onClick={() => setActiveStep(index)}
                  className={`relative cursor-pointer p-10 bg-white/90 backdrop-blur border-2 transition-all duration-600 group overflow-hidden ${
                    activeStep === index
                      ? "border-[#88C444] shadow-3xl shadow-[#88C444]/30"
                      : "border-gray-100 hover:border-[#88C444]/60 hover:shadow-2xl"
                  } hover:-translate-y-2`}
                >
                  <div className="flex items-start gap-7">
                    <div
                      className={`w-20 h-20 flex-shrink-0 inline-flex items-center justify-center transition-all duration-500 ${
                        activeStep === index
                          ? "bg-gradient-to-br from-[#88C444] to-[#A8E063] text-white shadow-2xl shadow-[#88C444]/60"
                          : "bg-gradient-to-br from-gray-100 to-gray-200 text-[#88C444] group-hover:shadow-xl"
                      }`}
                    >
                      <step.icon className="w-10 h-10" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                          Step {step.step}
                        </span>
                        <ChevronDown
                          className={`w-6 h-6 text-[#88C444] transition-transform duration-300 ${
                            activeStep === index ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">{step.title}</h3>
                      <motion.p
                        initial={false}
                        animate={{
                          height: activeStep === index ? "auto" : 0,
                          opacity: activeStep === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.4 }}
                        className="text-gray-700 text-base leading-relaxed overflow-hidden"
                      >
                        {step.description}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ================= RIGHT – ENERGY ECOSYSTEM (NEW) ================= */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-full"
            >
              <div className="h-full w-full p-8 bg-white border border-black/5 shadow-md relative overflow-hidden flex flex-col justify-between">
                {/* Ambient Energy Glow */}
                <motion.div
                  animate={{ opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-r from-[#88C444]/20 to-[#A8E063]/20"
                />

                {/* ENERGY FIELD */}
                <div className="relative flex-1 flex items-end justify-center gap-14 z-10">
                  {/* WINDMILLS */}
                  <div className="relative flex items-end gap-10">
                    {[1, 2, 3].map((_, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <motion.img
                          animate={{ rotate: 360 }}
                          transition={{ duration: 5 + i, repeat: Infinity, ease: "linear" }}
                          src="https://cdn-icons-png.flaticon.com/512/1693/1693746.png"
                          className="w-12 h-12"
                        />
                        <div className="w-1 h-24 bg-gray-300" />
                      </div>
                    ))}
                  </div>

                  {/* BIOGAS REACTOR */}
                  <div className="relative flex flex-col items-center gap-3">
                    <motion.div
                      animate={{ scale: [1, 1.04, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-28 h-36 rounded-t-full rounded-b-lg border-2 border-black/10 bg-gradient-to-b from-[#88C444]/40 to-[#A8E063]/20 shadow-lg relative overflow-hidden"
                    >
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{ y: [40, -10], opacity: [0, 1, 0] }}
                          transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.4 }}
                          className="absolute bottom-2 w-2 h-2 rounded-full bg-[#88C444]"
                          style={{ left: `${15 + i * 10}%` }}
                        />
                      ))}
                    </motion.div>
                    <div className="text-xs font-semibold text-gray-700">Biogas Reactor</div>
                  </div>

                  {/* ENERGY GRID */}
                  <div className="relative flex flex-col items-center gap-2">
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 0px rgba(136,196,68,0.4)",
                          "0 0 25px rgba(136,196,68,0.9)",
                          "0 0 0px rgba(136,196,68,0.4)",
                        ],
                      }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                      className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-[#88C444] to-[#A8E063] text-white"
                    >
                      <Zap className="w-8 h-8" />
                    </motion.div>
                    <div className="text-xs font-semibold text-gray-700">Energy Grid</div>
                  </div>
                </div>

                {/* FLOW LINES */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <defs>
                    <linearGradient id="flow" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#88C444" />
                      <stop offset="100%" stopColor="#A8E063" />
                    </linearGradient>
                  </defs>

                  <motion.path
                    d="M160 260 Q 320 200 420 240"
                    fill="none"
                    stroke="url(#flow)"
                    strokeWidth="3"
                    strokeDasharray="6 6"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.path
                    d="M420 240 Q 520 220 620 200"
                    fill="none"
                    stroke="url(#flow)"
                    strokeWidth="3"
                    strokeDasharray="6 6"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  />
                </svg>

                {/* LABEL */}
                <div className="relative z-10 text-center pt-4">
                  <div className="text-lg font-bold text-gray-900">CSTR Energy Ecosystem</div>
                  <motion.div
                    animate={{ x: [0, 14, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                    className="flex items-center justify-center gap-3 text-sm font-semibold text-gray-600"
                  >
                    <span>Input</span>
                    <ArrowRight className="w-4 h-4" />
                    <span>Biogas</span>
                    <ArrowRight className="w-4 h-4" />
                    <span>Energy Grid</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= REST OF PAGE ================= */}
      {/* Advantages, Sustainability, Environmental Impact */}
      {/* ALL UNCHANGED */}
    </PageLayout>
  );
};

export default Technology;

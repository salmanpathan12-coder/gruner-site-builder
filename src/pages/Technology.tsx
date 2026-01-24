import { motion } from "framer-motion";
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import TechnologyHero from "@/components/technology/TechnologyHero";
import { Beaker, Thermometer, Clock, Settings, ArrowRight, Leaf, Zap, Recycle, ChevronDown } from "lucide-react";

/* ---------------- DATA ---------------- */

const GRADIENT = "bg-gradient-to-r from-[#1f8f7a] to-[#7fbf2e]";
const GRADIENT_TEXT = "bg-gradient-to-r from-[#1f8f7a] to-[#7fbf2e] bg-clip-text text-transparent";

const specifications = [
  { label: "Dry Substance", value: "5% < DS < 10%", icon: Beaker },
  { label: "Thermal Regime", value: "Mesophilic / Thermophilic", icon: Thermometer },
  { label: "Retention Time", value: "20 – 60 Days", icon: Clock },
  { label: "Mixing System", value: "Mechanical Mixing", icon: Settings },
];

const processSteps = [
  {
    step: "01",
    title: "Biomass Loading",
    description: "Solid and liquid biomasses are loaded into digesters via pre-tank systems.",
    icon: Recycle,
  },
  {
    step: "02",
    title: "Mixing & Digestion",
    description: "Controlled mixing ensures homogeneous digestion and prevents sedimentation.",
    icon: Settings,
  },
  {
    step: "03",
    title: "Biogas Production",
    description: "Anaerobic digestion produces methane-rich biogas.",
    icon: Zap,
  },
  {
    step: "04",
    title: "Gas Storage",
    description: "Produced biogas is stored safely in gasometers.",
    icon: Beaker,
  },
];

const advantages = [
  {
    title: "Complex Biomass Handling",
    description: "Handles complex digestion processes efficiently.",
    icon: Recycle,
  },
  {
    title: "Co-Digestion Capability",
    description: "Supports multiple biomass input combinations.",
    icon: Leaf,
  },
  {
    title: "pH Buffering Capacity",
    description: "Stable operations with strong pH buffering.",
    icon: Beaker,
  },
];

/* ---------------- COMPONENT ---------------- */

const Technology = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <PageLayout>
      <TechnologyHero />

      {/* ---------------- INTRO SECTION ---------------- */}
      <section className="py-20 bg-white">
        <div className="container-wide grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <span className={`inline-flex px-5 py-2 text-sm text-white font-medium ${GRADIENT}`}>Our Technology</span>

            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900">
              Introduction to <span className={GRADIENT_TEXT}>CSTR Technology</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              CSTR (Continuous-Flow Stirred Tank Reactor) technology enables efficient, stable, and scalable biogas
              production with optimized digestion and energy output.
            </p>

            {/* SPECS GRID */}
            <div className="grid grid-cols-2 gap-5">
              {specifications.map((spec, i) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-5 bg-white border border-black/5 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-9 h-9 flex items-center justify-center text-white ${GRADIENT}`}>
                      <spec.icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">{spec.label}</span>
                  </div>
                  <div className="font-semibold text-gray-900">{spec.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden shadow-xl">
              <img
                src="https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/fc3678381a9.png"
                alt="CSTR Technology"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- PROCESS FLOW ---------------- */}
      <section className="py-20 bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-16">
            <span className={`inline-flex px-5 py-2 text-sm text-white font-medium ${GRADIENT}`}>The Process</span>
            <h2 className="text-4xl font-heading font-bold mt-4 text-gray-900">
              Biomass to <span className={GRADIENT_TEXT}>Energy Flow</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* STEPS */}
            <div className="space-y-4">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  onClick={() => setActiveStep(i)}
                  className={`p-6 bg-white border border-black/5 cursor-pointer transition-all duration-300 ${
                    activeStep === i ? "shadow-lg" : "hover:shadow-md"
                  }`}
                >
                  <div className="flex gap-4 items-start">
                    <div className={`w-10 h-10 flex items-center justify-center text-white ${GRADIENT}`}>
                      <step.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <div className="text-sm font-bold text-gray-900">{step.title}</div>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${activeStep === i ? "rotate-180" : ""}`}
                        />
                      </div>
                      {activeStep === i && (
                        <p className="text-sm text-gray-600 mt-2 leading-relaxed">{step.description}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* DIAGRAM PANEL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 bg-white border border-black/5 shadow-lg flex items-center justify-center"
            >
              <div className="text-center space-y-4">
                <div className={`w-20 h-20 mx-auto flex items-center justify-center text-white ${GRADIENT}`}>
                  <Settings className="w-10 h-10" />
                </div>
                <div className="text-lg font-bold text-gray-900">CSTR Reactor Core</div>
                <div className="text-sm text-gray-600">Central digestion and energy transformation system</div>
                <div className="flex items-center justify-center gap-4 pt-4">
                  <span className="font-semibold text-gray-700">Input</span>
                  <ArrowRight className="w-5 h-5 text-gray-500" />
                  <span className="font-semibold text-gray-700">Biogas</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------------- ADVANTAGES ---------------- */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <span className={`inline-flex px-5 py-2 text-sm text-white font-medium ${GRADIENT}`}>Benefits</span>
            <h2 className="text-4xl font-heading font-bold mt-4 text-gray-900">
              Technology <span className={GRADIENT_TEXT}>Advantages</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {advantages.map((adv, i) => (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 bg-white border border-black/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-10 h-10 mb-3 flex items-center justify-center text-white ${GRADIENT}`}>
                  <adv.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1">{adv.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{adv.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Technology;

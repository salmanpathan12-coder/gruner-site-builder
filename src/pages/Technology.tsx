import { motion } from "framer-motion";
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import TechnologyHero from "@/components/technology/TechnologyHero";
import { Beaker, Thermometer, Clock, Settings, ArrowRight, Leaf, Zap, Recycle, ChevronDown } from "lucide-react";

/* ---------------- CONSTANTS ---------------- */

const GRADIENT = "bg-gradient-to-r from-[#1f8f7a] to-[#7fbf2e]";
const GRADIENT_TEXT = "bg-gradient-to-r from-[#1f8f7a] to-[#7fbf2e] bg-clip-text text-transparent";

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
      <section className="py-16 bg-white">
        <div className="container-wide grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className={`inline-flex px-4 py-2 text-sm text-white font-medium ${GRADIENT}`}>Our Technology</span>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 leading-tight">
              Introduction to <span className={GRADIENT_TEXT}>CSTR Technology</span>
            </h2>

            <div className="space-y-4 text-gray-600 text-base leading-relaxed">
              <p>
                Ever wondered what makes CSTR (Continuous-Flow Stirred Tank Reactor) technology a key player in biogas
                production? CSTRs ensure perfect homogenization of biomass with continuous mixing.
              </p>
              <p>
                Ideal for dry matter contents below 10%, they operate at controlled temperatures, providing flexible and
                efficient biogas production. This makes them suitable for diverse biomass types, contributing
                significantly to renewable energy generation.
              </p>
            </div>

            {/* Specs */}
            <div className="grid grid-cols-2 gap-4">
              {specifications.map((spec, i) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-4 bg-white border border-black/5 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3 mb-1">
                    <div className={`w-8 h-8 flex items-center justify-center text-white ${GRADIENT}`}>
                      <spec.icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">{spec.label}</span>
                  </div>
                  <div className="font-semibold text-gray-900 text-sm">{spec.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/fc3678381a9.png"
              alt="CSTR Technology"
              className="w-full h-full object-cover shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-16 bg-gray-50">
        <div className="container-wide grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className={`inline-flex px-4 py-2 text-sm text-white font-medium ${GRADIENT}`}>The Process</span>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
              How CSTR Transforms <span className={GRADIENT_TEXT}>Biomass into Energy</span>
            </h2>

            {/* Animated Timeline */}
            <div className="relative pl-6 space-y-4">
              {/* vertical animated line */}
              <motion.div
                animate={{ height: ["0%", "100%"] }}
                transition={{ duration: 1.2 }}
                className={`absolute left-1 top-0 w-[3px] ${GRADIENT}`}
              />

              {processSteps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                  onClick={() => setActiveStep(i)}
                  className="relative cursor-pointer"
                >
                  {/* node */}
                  <motion.div
                    animate={{
                      scale: activeStep === i ? [1, 1.2, 1] : 1,
                    }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                    className={`absolute -left-[22px] top-2 w-4 h-4 rounded-full ${GRADIENT}`}
                  />

                  <div
                    className={`p-4 bg-white border border-black/5 transition-all ${
                      activeStep === i ? "shadow-md" : "hover:shadow-sm"
                    }`}
                  >
                    <div className="flex gap-3 items-start">
                      <div className={`w-9 h-9 flex items-center justify-center text-white ${GRADIENT}`}>
                        <step.icon className="w-4 h-4" />
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
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-white border border-black/5 shadow-md flex items-center justify-center"
          >
            <div className="text-center space-y-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className={`w-20 h-20 mx-auto flex items-center justify-center text-white rounded-full ${GRADIENT}`}
              >
                <Settings className="w-10 h-10" />
              </motion.div>

              <div className="text-base font-bold text-gray-900">CSTR Reactor Core</div>

              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="flex items-center justify-center gap-3 text-sm font-semibold text-gray-600"
              >
                <span>Input</span>
                <ArrowRight className="w-4 h-4" />
                <span>Biogas</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="py-16 bg-white">
        <div className="container-wide space-y-10">
          <div className="space-y-4">
            <span className={`inline-flex px-4 py-2 text-sm text-white font-medium ${GRADIENT}`}>Benefits</span>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
              Technology <span className={GRADIENT_TEXT}>Advantages</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {advantages.map((adv, i) => (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-5 bg-white border border-black/5 hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div className={`w-9 h-9 mb-2 flex items-center justify-center text-white ${GRADIENT}`}>
                  <adv.icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">{adv.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{adv.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SUSTAINABILITY ================= */}
      <section className="py-16 bg-gray-50">
        <div className="container-wide grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className={`inline-flex px-4 py-2 text-sm text-white font-medium ${GRADIENT}`}>Sustainability</span>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
              CSTRs and <span className={GRADIENT_TEXT}>Environmental Impact</span>
            </h2>

            <div className="space-y-4 text-gray-600 text-base leading-relaxed">
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

          {/* RIGHT METRICS */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "CO₂ Reduction", value: "40%+", desc: "Lower emissions vs fossil fuels" },
              { label: "Waste Diverted", value: "100%", desc: "Zero waste to landfill" },
              { label: "Energy Efficiency", value: "85%+", desc: "Conversion rate achieved" },
              { label: "Carbon Credits", value: "Yes", desc: "Eligible for certification" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-4 bg-white border border-black/5 text-center hover:shadow-md transition-all"
              >
                <div className={`text-lg font-bold ${GRADIENT_TEXT}`}>{item.value}</div>
                <div className="text-sm font-semibold text-gray-900">{item.label}</div>
                <div className="text-xs text-gray-600">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Technology;

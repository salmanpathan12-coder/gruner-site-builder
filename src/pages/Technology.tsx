import { motion } from "framer-motion";
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import TechnologyHero from "@/components/technology/TechnologyHero";
import { Beaker, Thermometer, Clock, Settings, ArrowRight, Leaf, Zap, Recycle, ChevronDown } from "lucide-react";

const specifications = [
  { label: "Dry Substance", value: "5% < DS < 10%", icon: Beaker },
  { label: "Thermal Regime", value: "Mesophilic / Thermophilic", icon: Thermometer },
  { label: "Retention Time", value: "20 – 60 Days", icon: Clock },
  { label: "Mixing System", value: "Dual Mechanical Mixing", icon: Settings },
];

const processSteps = [
  {
    step: "01",
    title: "Biomass Loading",
    description: "Automated intake of solid & liquid biomass into sealed digesters.",
    icon: Recycle,
  },
  {
    step: "02",
    title: "Mixing & Digestion",
    description: "Continuous homogenization with intelligent mixer systems.",
    icon: Settings,
  },
  {
    step: "03",
    title: "Biogas Production",
    description: "Anaerobic digestion under controlled thermal regimes.",
    icon: Zap,
  },
  {
    step: "04",
    title: "Gas Storage",
    description: "Secure high-pressure gas storage with membrane domes.",
    icon: Beaker,
  },
];

const advantages = [
  { title: "Complex Biomass Handling", description: "Supports multi-feedstock digestion systems.", icon: Recycle },
  { title: "Co-Digestion Capability", description: "Flexible input recipes for optimized yield.", icon: Leaf },
  { title: "pH Buffer Stability", description: "High buffering ensures process reliability.", icon: Beaker },
];

const Technology = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <PageLayout>
      <TechnologyHero />

      {/* Gradient System Background Wrapper */}
      <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top,#ecfdf5,#ffffff,#f0fdf4)]">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(136,196,68,0.08),rgba(168,224,99,0.08),rgba(136,196,68,0.05))]" />

        {/* Intro Section */}
        <section className="relative py-28">
          <div className="container-wide grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-5xl font-heading font-bold text-gray-900 leading-tight">
                Continuous Stirred Tank Reactor
                <span className="block bg-gradient-to-r from-[#88C444] to-[#A8E063] bg-clip-text text-transparent">
                  CSTR Technology
                </span>
              </h2>
              <p className="mt-8 text-lg text-gray-700 max-w-xl leading-relaxed">
                Advanced biogas engineering delivering high-efficiency renewable energy through intelligent digestion
                systems.
              </p>

              <div className="mt-14 grid grid-cols-2 gap-8">
                {specifications.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="relative p-7 rounded-2xl bg-white/80 backdrop-blur-xl border border-[#88C444]/20 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#88C444] to-[#A8E063] flex items-center justify-center text-white shadow-lg">
                      <s.icon className="w-6 h-6" />
                    </div>
                    <div className="mt-4 text-sm uppercase tracking-wide text-gray-500 font-semibold">{s.label}</div>
                    <div className="text-xl font-bold bg-gradient-to-r from-[#88C444] to-[#A8E063] bg-clip-text text-transparent">
                      {s.value}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#88C444]/30">
                <img
                  src="https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/fc3678381a9.png"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#88C444]/20 via-transparent to-[#A8E063]/20" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Process Flow */}
        <section className="relative py-32">
          <div className="container-wide grid lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  onClick={() => setActiveStep(i)}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`cursor-pointer p-8 rounded-2xl backdrop-blur-xl border transition-all ${activeStep === i ? "bg-white/90 border-[#88C444] shadow-2xl" : "bg-white/60 border-[#88C444]/20 hover:border-[#88C444]/50"}`}
                >
                  <div className="flex items-start gap-6">
                    <div
                      className={`w-16 h-16 rounded-xl flex items-center justify-center ${activeStep === i ? "bg-gradient-to-br from-[#88C444] to-[#A8E063] text-white" : "bg-[#ecfdf5] text-[#88C444]"}`}
                    >
                      <step.icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        <ChevronDown className={`transition-transform ${activeStep === i ? "rotate-180" : ""}`} />
                      </div>
                      {activeStep === i && <p className="mt-3 text-gray-700">{step.description}</p>}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Animated Core */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative w-[420px] h-[420px] rounded-full bg-gradient-to-br from-[#88C444]/10 to-[#A8E063]/10 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
                  className="absolute inset-6 border border-dashed border-[#88C444]/40 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                  className="absolute inset-16 border border-[#A8E063]/40 rounded-full"
                />
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#88C444] to-[#A8E063] flex items-center justify-center shadow-2xl">
                  <Settings className="w-12 h-12 text-white" />
                </div>
                <div className="absolute left-[-120px] flex items-center gap-3">
                  <span className="font-semibold text-gray-700">Input</span>
                  <ArrowRight className="text-[#88C444]" />
                </div>
                <div className="absolute right-[-140px] flex items-center gap-3">
                  <ArrowRight className="text-[#A8E063]" />
                  <span className="font-semibold text-gray-700">Biogas</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Advantages */}
        <section className="relative py-32">
          <div className="container-wide grid md:grid-cols-3 gap-10">
            {advantages.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="p-10 rounded-3xl bg-white/80 backdrop-blur-xl border border-[#88C444]/20 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#88C444] to-[#A8E063] flex items-center justify-center text-white shadow-xl">
                  <a.icon className="w-10 h-10" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">{a.title}</h3>
                <p className="mt-3 text-gray-700">{a.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Technology;

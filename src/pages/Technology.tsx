import { motion } from "framer-motion";
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import TechnologyHero from "@/components/technology/TechnologyHero";
import { Beaker, Thermometer, Clock, Settings, ArrowRight, Leaf, Zap, Recycle, ChevronDown } from "lucide-react";
const specifications = [
  {
    label: "Dry Substance",
    value: "5% < DS < 10%",
    icon: Beaker,
  },
  {
    label: "Thermal Regime",
    value: "Mesophilic or Thermophilic",
    icon: Thermometer,
  },
  {
    label: "Retention Time",
    value: "20 < days < 60",
    icon: Clock,
  },
  {
    label: "Mixing System",
    value: "Mechanical (slow & fast mixers)",
    icon: Settings,
  },
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

      {/* Introduction Section - Premium Light Theme */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
              className="space-y-8"
            >
              <div>
                <span className="ml-4 inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white rounded-md bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
                  Our Technology
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mt-6 mb-6 text-gray-900">
                  Introduction to{" "}
                  <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                    CSTR Technology
                  </span>
                </h2>
                <motion.div
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: "240px",
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.5,
                  }}
                  className="h-1.5 bg-gradient-to-r from-[#88C444] to-[#A8E063] shadow-xl shadow-[#88C444]/40 rounded-full"
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

              {/* Specs Grid - Elite Cards */}
              <div className="grid grid-cols-2 gap-8">
                {specifications.map((spec, index) => (
                  <motion.div
                    key={spec.label}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15,
                    }}
                    className="relative p-8 bg-white/80 backdrop-blur-sm border-2 border-gray-100 hover:border-[#88C444] hover:shadow-2xl hover:shadow-[#88C444]/30 hover:-translate-y-2 transition-all duration-500 group overflow-hidden"
                  >
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#88C444] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#88C444] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-[#88C444] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[#88C444] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="flex items-center gap-5 mb-5">
                      <div className="w-14 h-14 inline-flex items-center justify-center bg-gradient-to-br from-[#88C444] to-[#A8E063] text-white shadow-2xl shadow-[#88C444]/50 group-hover:scale-110 transition-transform duration-400">
                        <spec.icon className="w-7 h-7" />
                      </div>
                      <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">{spec.label}</span>
                    </div>
                    <p className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                      {spec.value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
              className="relative"
            >
              <div className="relative overflow-hidden border-4 border-[#88C444]/50 shadow-3xl shadow-[#88C444]/30 hover:shadow-[#88C444]/50 transition-shadow duration-700">
                <img
                  src="https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/fc3678381a9.png"
                  alt="CSTR Technology"
                  className="w-full h-full object-cover"
                />
                {/* Strong corner accents */}
                <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-[#88C444]" />
                <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-[#88C444]" />
                <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-[#88C444]" />
                <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-[#88C444]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Process Flow - Premium Light */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-wide">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
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
            {/* Steps List */}
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{
                    opacity: 0,
                    x: -50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                  }}
                  onClick={() => setActiveStep(index)}
                  className={`relative cursor-pointer p-10 bg-white/90 backdrop-blur border-2 transition-all duration-600 group overflow-hidden ${activeStep === index ? "border-[#88C444] shadow-3xl shadow-[#88C444]/30" : "border-gray-100 hover:border-[#88C444]/60 hover:shadow-2xl"} hover:-translate-y-2`}
                >
                  {/* Corner accents on active/hover */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-[#88C444] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-[#88C444] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-[#88C444] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-[#88C444] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="flex items-start gap-7">
                    <div
                      className={`w-20 h-20 flex-shrink-0 inline-flex items-center justify-center transition-all duration-500 ${activeStep === index ? "bg-gradient-to-br from-[#88C444] to-[#A8E063] text-white shadow-2xl shadow-[#88C444]/60" : "bg-gradient-to-br from-gray-100 to-gray-200 text-[#88C444] group-hover:shadow-xl"}`}
                    >
                      <step.icon className="w-10 h-10" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                          Step {step.step}
                        </span>
                        <ChevronDown
                          className={`w-6 h-6 text-[#88C444] transition-transform duration-300 ${activeStep === index ? "rotate-180" : ""}`}
                        />
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">{step.title}</h3>
                      <motion.p
                        initial={false}
                        animate={{
                          height: activeStep === index ? "auto" : 0,
                          opacity: activeStep === index ? 1 : 0,
                        }}
                        transition={{
                          duration: 0.4,
                        }}
                        className="text-gray-700 text-base leading-relaxed overflow-hidden"
                      >
                        {step.description}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Visual Diagram */}
            {/* RIGHT VISUAL */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-full"
            >
              <div className="h-full w-full p-8 bg-white border border-black/5 shadow-md flex flex-col items-center justify-center gap-6 relative overflow-hidden">
                {/* Animated background gradient glow */}
                <motion.div
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className={`absolute inset-0 ${GRADIENT} opacity-10`}
                />

                {/* WINDMILL FIELD */}
                <div className="relative w-full h-[260px] flex items-end justify-center gap-10 z-10">
                  {/* Windmill 1 */}
                  <div className="relative flex flex-col items-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                      className="w-16 h-16"
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/1693/1693746.png"
                        alt="windmill"
                        className="w-full h-full"
                      />
                    </motion.div>
                    <div className="w-1 h-24 bg-gray-300" />
                  </div>

                  {/* Windmill 2 */}
                  <div className="relative flex flex-col items-center scale-110">
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                      className="w-20 h-20"
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/1693/1693746.png"
                        alt="windmill"
                        className="w-full h-full"
                      />
                    </motion.div>
                    <div className="w-1 h-28 bg-gray-300" />
                  </div>

                  {/* Windmill 3 */}
                  <div className="relative flex flex-col items-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                      className="w-14 h-14"
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/1693/1693746.png"
                        alt="windmill"
                        className="w-full h-full"
                      />
                    </motion.div>
                    <div className="w-1 h-20 bg-gray-300" />
                  </div>
                </div>

                {/* Reactor Core */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className={`w-24 h-24 flex items-center justify-center text-white rounded-full ${GRADIENT} z-10 shadow-lg`}
                >
                  <Settings className="w-12 h-12" />
                </motion.div>

                <div className="text-lg font-bold text-gray-900 z-10">CSTR Reactor Core</div>

                {/* Flow animation */}
                <motion.div
                  animate={{ x: [0, 14, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                  className="flex items-center justify-center gap-3 text-sm font-semibold text-gray-600 z-10"
                >
                  <span>Input</span>
                  <ArrowRight className="w-4 h-4" />
                  <span>Biogas</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-wide">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="text-center mb-20"
          >
            <span className="ml-4 inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white rounded-md bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
              Benefits
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mt-6 mb-6 text-gray-900">
              Technology{" "}
              <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                Advantages
              </span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              From an engineering and process engineering point of view, CSTR technology offers numerous advantages
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                }}
                className="group relative p-12 bg-white/90 backdrop-blur border-2 border-gray-100 hover:border-[#88C444] hover:shadow-3xl hover:shadow-[#88C444]/30 hover:-translate-y-3 transition-all duration-700 overflow-hidden"
              >
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-[#88C444] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-[#88C444] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-[#88C444] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-[#88C444] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="w-24 h-24 inline-flex items-center justify-center bg-gradient-to-br from-[#88C444] to-[#A8E063] text-white mb-10 group-hover:scale-110 group-hover:shadow-3xl group-hover:shadow-[#88C444]/60 transition-all duration-600 shadow-2xl shadow-[#88C444]/50">
                  <advantage.icon className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-5">{advantage.title}</h3>
                <p className="text-gray-700 leading-relaxed text-lg">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{
                opacity: 0,
                x: -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
              className="space-y-8"
            >
              <div>
                <span className="ml-4 inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white rounded-md bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
                  Sustainability
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mt-6 mb-6 text-gray-900">
                  CSTRs and{" "}
                  <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                    Environmental Impact
                  </span>
                </h2>
                <motion.div
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: "260px",
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.5,
                  }}
                  className="h-1.5 bg-gradient-to-r from-[#88C444] to-[#A8E063] shadow-xl shadow-[#88C444]/40 rounded-full"
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
              initial={{
                opacity: 0,
                x: 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
              className="grid grid-cols-2 gap-10"
            >
              {[
                {
                  label: "CO₂ Reduction",
                  value: "40%+",
                  desc: "Lower emissions vs fossil fuels",
                },
                {
                  label: "Waste Diverted",
                  value: "100%",
                  desc: "Zero waste to landfill",
                },
                {
                  label: "Energy Efficiency",
                  value: "85%+",
                  desc: "Conversion rate achieved",
                },
                {
                  label: "Carbon Credits",
                  value: "Yes",
                  desc: "Eligible for certification",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.15,
                  }}
                  className="relative p-10 bg-white/90 backdrop-blur border-2 border-gray-100 text-center hover:border-[#88C444] hover:shadow-3xl hover:shadow-[#88C444]/30 hover:-translate-y-2 transition-all duration-600 group overflow-hidden"
                >
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#88C444] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#88C444] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-[#88C444] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[#88C444] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                    {item.value}
                  </div>
                  <div className="text-gray-900 font-bold text-xl mb-2">{item.label}</div>
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

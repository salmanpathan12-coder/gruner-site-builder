import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";
import { Factory, Settings, Wrench, TrendingUp, Leaf, Zap, Shield, CheckCircle2, ArrowRight } from "lucide-react";

/* ---------------- CONSTANTS ---------------- */

const GRADIENT = "bg-gradient-to-r from-[#1f8f7a] to-[#7fbf2e]";
const GRADIENT_TEXT = "bg-gradient-to-r from-[#1f8f7a] to-[#7fbf2e] bg-clip-text text-transparent";

/* ---------------- DATA ---------------- */

const solutions = [
  {
    icon: Factory,
    title: "Bio-CNG Plant Development",
    description: "End-to-end development of state-of-the-art Bio-CNG plants using advanced CSTR technology.",
    features: [
      "Complete turnkey solutions",
      "Capacity from 2 TPD to 100+ TPD",
      "Customized plant design",
      "Regulatory compliance support",
      "Site assessment & feasibility",
    ],
    image: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=2000",
  },
  {
    icon: Settings,
    title: "Technology Integration",
    description: "Integration of cutting-edge CSTR technology for maximum biogas yield and operational efficiency.",
    features: [
      "CSTR reactor systems",
      "Biogas upgrading solutions",
      "Compression & dispensing",
      "SCADA & automation",
      "Remote monitoring systems",
    ],
    image: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=2000",
  },
  {
    icon: Wrench,
    title: "Operations & Maintenance",
    description: "Comprehensive O&M services to ensure optimal plant performance and longevity.",
    features: [
      "24/7 plant monitoring",
      "Preventive maintenance",
      "Performance optimization",
      "Spare parts management",
      "Training & capacity building",
    ],
    image:
      "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=2000",
  },
  {
    icon: TrendingUp,
    title: "Project Financing",
    description: "Financial structuring and investment support for Bio-CNG projects.",
    features: [
      "Financial modeling",
      "Investment facilitation",
      "Subsidy assistance",
      "Carbon credit registration",
      "ROI optimization",
    ],
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=2000",
  },
];

const benefits = [
  {
    icon: Leaf,
    title: "Environment Friendly",
    description:
      "Bio-CNG plants are a sustainable alternative to fossil fuels and significantly reduce greenhouse gas emissions.",
  },
  {
    icon: Zap,
    title: "Cost Effective",
    description: "Convert organic waste into revenue while reducing waste disposal and fuel procurement costs.",
  },
  {
    icon: Shield,
    title: "Customizable",
    description: "Tailor-made Bio-CNG solutions designed for specific industry and operational needs.",
  },
];

/* ---------------- COMPONENT ---------------- */

const Solutions = () => {
  return (
    <PageLayout>
      {/* ================= HERO ================= */}
      <section className="relative bg-white overflow-hidden pt-28">
        <div className="container-wide grid lg:grid-cols-2 min-h-[85vh] items-center gap-16">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <span className={`inline-flex px-4 py-2 text-sm text-white font-semibold ${GRADIENT}`}>
              Renewable Energy Solutions
            </span>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-heading font-bold text-black leading-tight">
              Engineering the Future of <span className={GRADIENT_TEXT}>Bio-CNG & Renewable Energy</span>
            </h1>

            <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
              We design, build and operate next-generation Bio-CNG and biogas infrastructure using advanced CSTR
              technology, delivering scalable, sustainable and commercially viable clean energy solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/contact"
                className={`inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold ${GRADIENT} rounded-md shadow-lg hover:shadow-xl transition-all`}
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                to="/technology"
                className="inline-flex items-center justify-center px-8 py-4 font-semibold text-black border border-black/15 hover:border-black/30 transition-all"
              >
                Explore Technology
              </Link>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 pt-10 max-w-xl">
              {[
                { value: "100+", label: "Projects Designed" },
                { value: "25+", label: "Cities Impacted" },
                { value: "1M+", label: "Tons Waste Converted" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.2 }}
                  className="border-l-2 border-[#1f8f7a] pl-4"
                >
                  <div className={`text-xl font-bold ${GRADIENT_TEXT}`}>{item.value}</div>
                  <div className="text-xs text-gray-600 font-medium">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — VIDEO HERO */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative bg-white border border-black/5 shadow-2xl overflow-hidden">
              <video
                src="https://cdn.coverr.co/videos/coverr-solar-panels-at-sunset-4996/1080p.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Cards */}
            <div className="absolute -bottom-10 -left-10 bg-white p-5 border border-black/5 shadow-lg">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 flex items-center justify-center text-white ${GRADIENT}`}>
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-black">Clean Energy</div>
                  <div className="text-xs text-gray-600">Low carbon systems</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-10 -right-10 bg-white p-5 border border-black/5 shadow-lg">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 flex items-center justify-center text-white ${GRADIENT}`}>
                  <Factory className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-black">Industrial Scale</div>
                  <div className="text-xs text-gray-600">Utility-grade plants</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SOLUTIONS ================= */}
      <section className="py-24 bg-white">
        <div className="container-wide space-y-28">
          <div className="text-center max-w-3xl mx-auto">
            <span className={`inline-flex px-4 py-2 text-sm text-white font-medium ${GRADIENT}`}>What We Offer</span>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mt-4">
              Integrated <span className={GRADIENT_TEXT}>Bio-CNG Solutions</span>
            </h2>

            <p className="text-gray-600 mt-4">
              From concept to commissioning, we deliver complete, scalable and future-ready renewable energy solutions.
            </p>
          </div>

          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 flex items-center justify-center text-white ${GRADIENT}`}>
                    <solution.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900">{solution.title}</h3>
                </div>

                <p className="text-gray-600 text-base leading-relaxed mb-6">{solution.description}</p>

                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {solution.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#1f8f7a]" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 font-semibold text-sm text-gray-900 hover:gap-3 transition-all"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-black/5 shadow-xl overflow-hidden"
                >
                  <img src={solution.image} alt={solution.title} className="w-full h-auto object-cover" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="py-24 bg-gray-50">
        <div className="container-wide space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className={`inline-flex px-4 py-2 text-sm text-white font-medium ${GRADIENT}`}>Why Bio-CNG</span>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mt-4">
              Benefits of <span className={GRADIENT_TEXT}>Bio-CNG Plants</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-7 bg-white border border-black/5 hover:shadow-lg transition-all"
              >
                <div className={`w-10 h-10 mb-3 flex items-center justify-center text-white ${GRADIENT}`}>
                  <benefit.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-white">
        <div className="container-wide text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Ready to Start Your <span className={GRADIENT_TEXT}>Bio-CNG Project?</span>
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto mb-10">
              Partner with us to build future-ready renewable energy infrastructure with world-class engineering and
              technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className={`inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold ${GRADIENT} rounded-md shadow-lg hover:shadow-xl transition-all`}
              >
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                to="/technology"
                className="inline-flex items-center justify-center px-8 py-4 font-semibold text-gray-900 border border-black/10 hover:border-black/20 transition-all"
              >
                Explore Our Technology
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Solutions;

import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";
import { HardHat, CheckCircle2, ArrowRight, Settings, Wrench, Shield, Zap } from "lucide-react";

const GRADIENT = "bg-gradient-to-r from-[#1f8f7a] to-[#7fbf2e]";
const GRADIENT_TEXT = "bg-gradient-to-r from-[#1f8f7a] to-[#7fbf2e] bg-clip-text text-transparent";

const features = [
  "Turnkey EPC solutions",
  "Civil and structural engineering",
  "Mechanical system integration",
  "Electrical and instrumentation",
  "Quality assurance protocols",
  "Safety management systems",
  "Project commissioning",
  "Performance testing",
];

const capabilities = [
  {
    icon: Settings,
    title: "Design Engineering",
    description: "Comprehensive engineering design including P&IDs, layouts, and detailed specifications.",
  },
  {
    icon: HardHat,
    title: "Construction Management",
    description: "Professional construction oversight ensuring quality, safety, and timeline adherence.",
  },
  {
    icon: Shield,
    title: "Quality Control",
    description: "Rigorous quality assurance protocols at every stage of construction.",
  },
  {
    icon: Zap,
    title: "Commissioning",
    description: "Complete plant commissioning and performance validation services.",
  },
];

const EngineeringConstruction = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden pt-28 pb-20">
        <div className="container-wide grid lg:grid-cols-2 min-h-[70vh] items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <span className={`inline-flex px-4 py-2 text-sm text-white font-semibold ${GRADIENT}`}>
              Engineering & Construction
            </span>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-heading font-bold text-black leading-tight">
              World-Class <span className={GRADIENT_TEXT}>EPC Services</span>
            </h1>

            <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
              Complete engineering, procurement, and construction solutions for Bio-CNG plants. We deliver turnkey projects with precision and excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/contact"
                className={`inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold ${GRADIENT} shadow-lg hover:shadow-xl transition-all`}
              >
                Request Quote
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                to="/solutions"
                className="inline-flex items-center justify-center px-8 py-4 font-semibold text-black border border-black/15 hover:border-black/30 transition-all"
              >
                View All Solutions
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative bg-white border border-black/5 shadow-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=2000"
                alt="Engineering & Construction"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="absolute -bottom-10 -left-10 bg-white p-5 border border-black/5 shadow-lg">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 flex items-center justify-center text-white ${GRADIENT}`}>
                  <HardHat className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-black">63+ Plants</div>
                  <div className="text-xs text-gray-600">Built & Commissioned</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className={`inline-flex px-4 py-2 text-sm text-white font-medium ${GRADIENT}`}>Our Services</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mt-4">
              Complete <span className={GRADIENT_TEXT}>EPC Capabilities</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white border border-black/5 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1f8f7a] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 font-medium">{feature}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="p-6 bg-white border border-black/5 hover:shadow-lg transition-all"
              >
                <div className={`w-12 h-12 mb-4 flex items-center justify-center text-white ${GRADIENT}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Partner with <span className={GRADIENT_TEXT}>Engineering Experts</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-10">
              Let our experienced team handle your next Bio-CNG plant construction project.
            </p>
            <Link
              to="/contact"
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold ${GRADIENT} shadow-lg hover:shadow-xl transition-all`}
            >
              Get Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default EngineeringConstruction;
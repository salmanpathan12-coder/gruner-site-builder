import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";
import { FlaskConical, CheckCircle2, ArrowRight, Microscope, Lightbulb, BarChart3, Target } from "lucide-react";

const GRADIENT = "bg-gradient-to-r from-[#1f8f7a] to-[#7fbf2e]";
const GRADIENT_TEXT = "bg-gradient-to-r from-[#1f8f7a] to-[#7fbf2e] bg-clip-text text-transparent";

const features = [
  "Process optimization research",
  "Feedstock characterization",
  "Microbial culture development",
  "Biogas yield enhancement",
  "Technology innovation",
  "Pilot plant testing",
  "Performance benchmarking",
  "Knowledge transfer programs",
];

const researchAreas = [
  {
    icon: Microscope,
    title: "Microbiology Research",
    description: "Advanced microbial studies to enhance digestion efficiency and biogas production.",
  },
  {
    icon: Lightbulb,
    title: "Process Innovation",
    description: "Continuous development of new processes and technologies for improved performance.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Leveraging data science for predictive maintenance and process optimization.",
  },
  {
    icon: Target,
    title: "Performance Optimization",
    description: "Research-driven improvements to maximize plant efficiency and output.",
  },
];

const RD = () => {
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
              Research & Development
            </span>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-heading font-bold text-black leading-tight">
              Innovation-Driven <span className={GRADIENT_TEXT}>R&D Excellence</span>
            </h1>

            <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
              Our dedicated R&D team continuously pushes the boundaries of Bio-CNG technology, developing innovative solutions for enhanced efficiency and sustainability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/contact"
                className={`inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold ${GRADIENT} shadow-lg hover:shadow-xl transition-all`}
              >
                Collaborate With Us
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                to="/technology"
                className="inline-flex items-center justify-center px-8 py-4 font-semibold text-black border border-black/15 hover:border-black/30 transition-all"
              >
                Explore Technology
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
                src="https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=2000"
                alt="R&D Laboratory"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="absolute -bottom-10 -left-10 bg-white p-5 border border-black/5 shadow-lg">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 flex items-center justify-center text-white ${GRADIENT}`}>
                  <FlaskConical className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-black">20+ Patents</div>
                  <div className="text-xs text-gray-600">Technology Innovations</div>
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
            <span className={`inline-flex px-4 py-2 text-sm text-white font-medium ${GRADIENT}`}>Our Focus</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mt-4">
              Research <span className={GRADIENT_TEXT}>Capabilities</span>
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

      {/* Research Areas Section */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
              Key Research <span className={GRADIENT_TEXT}>Areas</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchAreas.map((item, index) => (
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
              Interested in <span className={GRADIENT_TEXT}>Research Collaboration?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-10">
              Partner with our R&D team to develop innovative solutions for the biogas industry.
            </p>
            <Link
              to="/contact"
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold ${GRADIENT} shadow-lg hover:shadow-xl transition-all`}
            >
              Contact R&D Team
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default RD;
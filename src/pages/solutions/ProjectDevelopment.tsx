import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";
import { FolderKanban, CheckCircle2, ArrowRight, FileText, Users, MapPin, TrendingUp } from "lucide-react";

const GRADIENT = "bg-gradient-to-r from-[#1f8f7a] to-[#7fbf2e]";
const GRADIENT_TEXT = "bg-gradient-to-r from-[#1f8f7a] to-[#7fbf2e] bg-clip-text text-transparent";

const features = [
  "Comprehensive feasibility studies",
  "Site selection and assessment",
  "Environmental impact analysis",
  "Regulatory compliance support",
  "Financial modeling and ROI projections",
  "Stakeholder engagement",
  "Project timeline planning",
  "Risk assessment and mitigation",
];

const processSteps = [
  {
    icon: FileText,
    title: "Feasibility Analysis",
    description: "Comprehensive assessment of project viability including technical, financial, and environmental factors.",
  },
  {
    icon: MapPin,
    title: "Site Selection",
    description: "Strategic location analysis considering feedstock availability, infrastructure, and market access.",
  },
  {
    icon: Users,
    title: "Stakeholder Alignment",
    description: "Engaging all key stakeholders including investors, communities, and regulatory bodies.",
  },
  {
    icon: TrendingUp,
    title: "Project Execution",
    description: "End-to-end project management ensuring timely delivery within budget and quality standards.",
  },
];

const ProjectDevelopment = () => {
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
              Project Development
            </span>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-heading font-bold text-black leading-tight">
              End-to-End <span className={GRADIENT_TEXT}>Project Development</span>
            </h1>

            <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
              From concept to commissioning, we provide comprehensive project development services for Bio-CNG and renewable energy infrastructure projects across India.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/contact"
                className={`inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold ${GRADIENT} shadow-lg hover:shadow-xl transition-all`}
              >
                Start Your Project
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
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=2000"
                alt="Project Development"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="absolute -bottom-10 -left-10 bg-white p-5 border border-black/5 shadow-lg">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 flex items-center justify-center text-white ${GRADIENT}`}>
                  <FolderKanban className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-black">100+ Projects</div>
                  <div className="text-xs text-gray-600">Successfully Delivered</div>
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
            <span className={`inline-flex px-4 py-2 text-sm text-white font-medium ${GRADIENT}`}>Our Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mt-4">
              Comprehensive <span className={GRADIENT_TEXT}>Development Services</span>
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

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className={`inline-flex px-4 py-2 text-sm text-white font-medium ${GRADIENT}`}>Our Process</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mt-4">
              How We <span className={GRADIENT_TEXT}>Deliver Projects</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center text-white ${GRADIENT}`}>
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
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
              Ready to Start Your <span className={GRADIENT_TEXT}>Project?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-10">
              Partner with us to develop your next Bio-CNG or renewable energy project with confidence.
            </p>
            <Link
              to="/contact"
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold ${GRADIENT} shadow-lg hover:shadow-xl transition-all`}
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ProjectDevelopment;
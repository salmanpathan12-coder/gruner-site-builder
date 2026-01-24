import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";
import { Wrench, CheckCircle2, ArrowRight, Activity, Clock, Shield, Settings } from "lucide-react";

const GRADIENT = "bg-gradient-to-r from-[#1f8f7a] to-[#7fbf2e]";
const GRADIENT_TEXT = "bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent";

const features = [
  "24/7 plant monitoring",
  "Preventive maintenance programs",
  "Performance optimization",
  "Spare parts management",
  "Emergency response services",
  "Operator training",
  "Compliance management",
  "Performance reporting",
];

const services = [
  {
    icon: Activity,
    title: "Real-Time Monitoring",
    description: "Continuous plant monitoring with advanced SCADA systems for optimal performance.",
  },
  {
    icon: Clock,
    title: "Preventive Maintenance",
    description: "Scheduled maintenance programs to prevent downtime and extend equipment life.",
  },
  {
    icon: Shield,
    title: "Safety Compliance",
    description: "Comprehensive safety protocols and regulatory compliance management.",
  },
  {
    icon: Settings,
    title: "Performance Optimization",
    description: "Continuous improvement initiatives to maximize plant efficiency and output.",
  },
];

const stats = [
  { value: "99.5%", label: "Plant Uptime" },
  { value: "24/7", label: "Monitoring" },
  { value: "63+", label: "Plants Managed" },
];

const OM = () => {
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
            <span className={`inline-flex px-4 py-2 text-sm text-white font-semibold rounded-md ${GRADIENT}`}>
              Operations & Maintenance
            </span>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-heading font-bold text-black leading-tight">
              Expert <span className={GRADIENT_TEXT}>O&M Services</span>
            </h1>

            <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
              Comprehensive operations and maintenance services to ensure optimal plant performance, maximum uptime, and long-term asset value.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/contact"
                className={`inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold ${GRADIENT} rounded-md shadow-lg hover:shadow-xl transition-all`}
              >
                Get O&M Quote
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                to="/solutions"
                className="inline-flex items-center justify-center px-8 py-4 font-semibold text-black border border-black/15 hover:border-black/30 rounded-md transition-all"
              >
                View All Solutions
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 max-w-xl">
              {stats.map((item) => (
                <div key={item.label} className="border-l-2 border-[#1f8f7a] pl-4">
                  <div className={`text-xl font-bold ${GRADIENT_TEXT}`}>{item.value}</div>
                  <div className="text-xs text-gray-600 font-medium">{item.label}</div>
                </div>
              ))}
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
                alt="O&M Services"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="absolute -bottom-10 -left-10 bg-white p-5 border border-black/5 shadow-lg">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 flex items-center justify-center text-white rounded-md ${GRADIENT}`}>
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-black">99.5% Uptime</div>
                  <div className="text-xs text-gray-600">Guaranteed Performance</div>
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
            <span className={`inline-flex px-4 py-2 text-sm text-white font-medium rounded-md ${GRADIENT}`}>Our Services</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mt-4">
              O&M <span className={GRADIENT_TEXT}>Capabilities</span>
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
                className="p-6 bg-white border border-black/5 hover:shadow-lg rounded-md transition-all"
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

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
              Key O&M <span className={GRADIENT_TEXT}>Services</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="p-6 bg-white border border-black/5 hover:shadow-lg rounded-md transition-all"
              >
                <div className={`w-12 h-12 mb-4 flex items-center justify-center text-white rounded-md ${GRADIENT}`}>
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
              Need Professional <span className={GRADIENT_TEXT}>O&M Support?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-10">
              Our experienced O&M team ensures your plant operates at peak performance with minimal downtime.
            </p>
            <Link
              to="/contact"
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold ${GRADIENT} rounded-md shadow-lg hover:shadow-xl transition-all`}
            >
              Request O&M Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default OM;
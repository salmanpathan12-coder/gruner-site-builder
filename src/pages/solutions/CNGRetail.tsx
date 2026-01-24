import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";
import { Fuel, CheckCircle2, ArrowRight, MapPin, Truck, Clock, Shield } from "lucide-react";

const GRADIENT = "bg-gradient-to-r from-[#1f8f7a] to-[#7fbf2e]";
const GRADIENT_TEXT = "bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent";

const features = [
  "Retail outlet development",
  "Dispensing equipment supply",
  "Safety compliance systems",
  "24/7 operations support",
  "Payment systems integration",
  "Customer management",
  "Inventory management",
  "Quality certification",
];

const benefits = [
  {
    icon: MapPin,
    title: "Strategic Locations",
    description: "Prime location selection for maximum visibility and customer accessibility.",
  },
  {
    icon: Truck,
    title: "Fleet Solutions",
    description: "Dedicated solutions for commercial fleet operators and transport companies.",
  },
  {
    icon: Clock,
    title: "24/7 Operations",
    description: "Round-the-clock fueling services for uninterrupted operations.",
  },
  {
    icon: Shield,
    title: "Safety Standards",
    description: "Highest safety standards with certified equipment and trained personnel.",
  },
];

const CNGRetail = () => {
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
              CNG Retail Outlets
            </span>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-heading font-bold text-black leading-tight">
              Modern <span className={GRADIENT_TEXT}>CNG Retail Network</span>
            </h1>

            <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
              Building India's next-generation Bio-CNG retail infrastructure with state-of-the-art dispensing stations and customer-focused services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/contact"
                className={`inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold ${GRADIENT} rounded-md shadow-lg hover:shadow-xl transition-all`}
              >
                Partner With Us
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                to="/solutions"
                className="inline-flex items-center justify-center px-8 py-4 font-semibold text-black border border-black/15 hover:border-black/30 rounded-md transition-all"
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
                src="https://images.pexels.com/photos/3651313/pexels-photo-3651313.jpeg?auto=compress&cs=tinysrgb&w=2000"
                alt="CNG Retail Station"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="absolute -bottom-10 -left-10 bg-white p-5 border border-black/5 shadow-lg">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 flex items-center justify-center text-white rounded-md ${GRADIENT}`}>
                  <Fuel className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-black">25+ Stations</div>
                  <div className="text-xs text-gray-600">Across India</div>
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
              Retail <span className={GRADIENT_TEXT}>Capabilities</span>
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
              Why Choose Our <span className={GRADIENT_TEXT}>Retail Outlets</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, index) => (
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
              Interested in <span className={GRADIENT_TEXT}>CNG Retail Partnership?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-10">
              Join our growing network of Bio-CNG retail outlets across India.
            </p>
            <Link
              to="/contact"
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold ${GRADIENT} rounded-md shadow-lg hover:shadow-xl transition-all`}
            >
              Become a Partner
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CNGRetail;
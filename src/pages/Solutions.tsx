import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { 
  Factory, 
  Settings, 
  Wrench, 
  TrendingUp,
  Leaf,
  Zap,
  Shield,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

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
      "Site assessment & feasibility"
    ],
    image: "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/db934269a9b.png"
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
      "Remote monitoring systems"
    ],
    image: "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/fc3678381a9.png"
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
      "Training & capacity building"
    ],
    image: "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/7e6baf576c4.png"
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
      "ROI optimization"
    ],
    image: "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/e96f0a488ac.png"
  }
];

const benefits = [
  {
    icon: Leaf,
    title: "Environment Friendly",
    description: "Bio CNG plants are a sustainable alternative to traditional fossil fuels and help reduce greenhouse gas emissions. The biogas produced is a renewable energy source."
  },
  {
    icon: Zap,
    title: "Cost Effective",
    description: "Setting up a Bio CNG plant can be a cost-effective solution for organizations generating organic waste. Convert waste into revenue while saving on disposal costs."
  },
  {
    icon: Shield,
    title: "Customizable",
    description: "Bio CNG plants can be designed and customized to meet specific industry needs. We provide tailor-made solutions that optimize biogas production."
  }
];

const Solutions = () => {
  return (
    <PageLayout>
      <PageHero
        title="Our Solutions"
        subtitle="Comprehensive Bio-CNG solutions from plant development to operations, designed for maximum efficiency and sustainability."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" }
        ]}
        image="https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/db934269a9b.png"
      />

      {/* Solutions Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mt-3 mb-4">
              Integrated Bio-CNG Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From concept to commissioning, we provide complete solutions for your renewable energy needs
            </p>
          </motion.div>

          <div className="space-y-20">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <solution.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-heading font-semibold">{solution.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {solution.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {solution.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                  >
                    Learn more about this solution
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative rounded-2xl overflow-hidden shadow-xl"
                  >
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
                  </motion.div>
                  
                  {/* Decorative elements */}
                  <div className={`absolute -z-10 w-32 h-32 rounded-2xl bg-gradient-to-br from-primary to-accent opacity-20 ${
                    index % 2 === 0 ? "-bottom-6 -right-6" : "-bottom-6 -left-6"
                  }`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-foreground">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Why Bio-CNG</span>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mt-3 mb-4 text-white">
              Benefits of Bio-CNG Plants
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Discover why Bio-CNG is the smart choice for sustainable energy
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 bg-white/5 rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-white/60 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6">
              Ready to Start Your Bio-CNG Project?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Contact us today to discuss your requirements and receive a customized solution for your renewable energy needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white rounded-lg bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/technology"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-foreground rounded-lg border-2 border-border hover:border-primary hover:bg-primary/5 transition-all duration-300"
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

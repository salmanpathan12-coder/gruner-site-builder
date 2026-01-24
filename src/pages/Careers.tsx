import { motion } from "framer-motion";
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";
import {
  Briefcase,
  MapPin,
  Clock,
  Users,
  Heart,
  TrendingUp,
  Leaf,
  GraduationCap,
  ArrowRight,
  ChevronDown,
  Building2,
  Wrench,
  BarChart3,
  HardHat,
  Mail,
  Send,
} from "lucide-react";
import careersHeroImage from "@/assets/careers-hero.jpg";

/* ---------------- CONSTANTS ---------------- */

const GRADIENT = "bg-gradient-to-r from-[#1f8f7a] to-[#7fbf2e]";
const GRADIENT_TEXT = "bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent";

/* ---------------- DATA ---------------- */

const jobOpenings = [
  {
    id: 1,
    title: "Senior Project Engineer",
    department: "Engineering",
    location: "Noida, UP",
    type: "Full-time",
    experience: "5-8 years",
    description:
      "Lead the design and implementation of Bio-CNG plant projects. Oversee engineering teams and ensure project delivery within timelines.",
    icon: Wrench,
    category: "Engineering",
  },
  {
    id: 2,
    title: "Operations Manager",
    department: "Operations",
    location: "Gujarat",
    type: "Full-time",
    experience: "7-10 years",
    description:
      "Manage day-to-day operations of Bio-CNG plants. Ensure optimal plant performance and maintenance schedules.",
    icon: Building2,
    category: "Operations",
  },
  {
    id: 3,
    title: "Process Engineer",
    department: "Engineering",
    location: "Maharashtra",
    type: "Full-time",
    experience: "3-5 years",
    description: "Optimize biogas production processes. Work with CSTR technology to maximize yield and efficiency.",
    icon: Wrench,
    category: "Engineering",
  },
  {
    id: 4,
    title: "Business Development Manager",
    department: "Sales",
    location: "Pan India",
    type: "Full-time",
    experience: "5-7 years",
    description:
      "Identify and develop new business opportunities. Build relationships with potential clients and partners.",
    icon: BarChart3,
    category: "Sales",
  },
  {
    id: 5,
    title: "Site Supervisor",
    department: "Construction",
    location: "Multiple Locations",
    type: "Full-time",
    experience: "3-5 years",
    description: "Supervise construction activities at plant sites. Ensure safety compliance and quality standards.",
    icon: HardHat,
    category: "Construction",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Fast-growing industry with ample opportunities for advancement",
  },
  {
    icon: Heart,
    title: "Health Benefits",
    description: "Comprehensive health insurance for you and your family",
  },
  {
    icon: Leaf,
    title: "Meaningful Work",
    description: "Contribute to India's clean energy transition",
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "Continuous training and skill development programs",
  },
];

// Group jobs by category
const jobCategories = jobOpenings.reduce((acc, job) => {
  if (!acc[job.category]) {
    acc[job.category] = [];
  }
  acc[job.category].push(job);
  return acc;
}, {} as Record<string, typeof jobOpenings>);

/* ---------------- COMPONENT ---------------- */

const Careers = () => {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  return (
    <PageLayout>
      {/* ================= HERO (ELITE SPLIT) ================= */}
      <section className="relative bg-white pt-28 pb-24 overflow-hidden">
        <div className="container-wide grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className={`inline-flex px-4 py-2 text-sm text-white font-semibold ${GRADIENT}`}>
              Careers at Gruner
            </span>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-heading font-bold text-black leading-tight">
              Build Your Career in <span className={GRADIENT_TEXT}>Clean Energy</span>
            </h1>

            <p className="text-gray-700 text-lg max-w-xl leading-relaxed">
              Be part of India's renewable energy revolution. Build a career that creates real-world impact while
              working on cutting-edge Bio-CNG and clean energy infrastructure projects.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#openings"
                className={`inline-flex items-center gap-2 px-7 py-3 text-white font-semibold ${GRADIENT} rounded-md shadow-lg hover:shadow-xl transition-all`}
              >
                View Open Positions
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="mailto:careers@grunerrenewable.com"
                className="inline-flex items-center gap-2 px-7 py-3 font-semibold text-black border border-black/15 hover:border-black/30 transition-all"
              >
                Submit Resume
              </a>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 pt-8 max-w-xl">
              {[
                { value: "250+", label: "Team Members" },
                { value: "63+", label: "Projects" },
                { value: "Pan India", label: "Presence" },
              ].map((item) => (
                <div key={item.label} className="border-l-2 border-[#1f8f7a] pl-4">
                  <div className={`text-xl font-bold ${GRADIENT_TEXT}`}>{item.value}</div>
                  <div className="text-xs text-gray-600 font-medium">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white border border-black/5 shadow-2xl overflow-hidden">
              <img
                src={careersHeroImage}
                alt="Careers at Gruner"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Cards */}
            <div className="absolute -bottom-8 -left-8 bg-white p-5 border border-black/5 shadow-lg">
              <div className="text-sm font-bold text-black">Growth Culture</div>
              <div className="text-xs text-gray-600">Fast-growing organization</div>
            </div>

            <div className="absolute -top-8 -right-8 bg-white p-5 border border-black/5 shadow-lg">
              <div className="text-sm font-bold text-black">Clean Energy</div>
              <div className="text-xs text-gray-600">Purpose-driven careers</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CULTURE ================= */}
      <section className="section-padding bg-background">
        <div className="container-wide grid lg:grid-cols-2 gap-16 items-center">
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Why Gruner</span>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mt-3 mb-6">
              Build Your Career in Clean Energy
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At Gruner Renewable, we're not just building Bio-CNG plants – we're building the future of sustainable
              energy in India. Join a team of passionate professionals working on cutting-edge technology.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our team of 250+ experts comes from diverse backgrounds, united by a shared commitment to innovation and
              environmental responsibility. We offer a collaborative environment where your contributions matter.
            </p>
          </motion.div>

          {/* BENEFITS GRID */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-5"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white border border-black/5 shadow-md hover:shadow-lg transition-all"
              >
                <div className={`w-12 h-12 mb-4 flex items-center justify-center text-white ${GRADIENT}`}>
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= JOB OPENINGS - MODERN GRID LAYOUT ================= */}
      <section id="openings" className="section-padding bg-muted/30">
        <div className="container-wide">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className={`inline-flex px-4 py-1.5 text-sm font-semibold ${GRADIENT_TEXT} border border-primary/20 rounded-full mb-4`}>
              Opportunities
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">Open Positions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Find the best available position for you</p>
          </motion.div>

          {/* Category Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {Object.keys(jobCategories).map((category) => (
              <div
                key={category}
                className="px-5 py-2 bg-white border border-primary/10 rounded-full text-sm font-medium text-foreground/80 shadow-sm hover:shadow-md hover:border-primary/30 transition-all cursor-default"
              >
                {category}
                <span className="ml-2 px-2 py-0.5 bg-primary/10 rounded-full text-xs text-primary font-semibold">
                  {jobCategories[category].length}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Job Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group bg-white border border-black/5 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Card Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 flex items-center justify-center text-white ${GRADIENT} rounded-lg shadow-md`}>
                      <job.icon className="w-5 h-5" />
                    </div>
                    <span className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
                      {job.category}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1.5 bg-muted/50 px-2.5 py-1 rounded-md">
                      <MapPin className="w-3.5 h-3.5" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5 bg-muted/50 px-2.5 py-1 rounded-md">
                      <Clock className="w-3.5 h-3.5" />
                      {job.type}
                    </span>
                  </div>
                </div>

                {/* Expandable Content */}
                <div className="border-t border-black/5">
                  <button
                    onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                    className="w-full px-6 py-3 text-left flex items-center justify-between text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-muted/30 transition-all"
                  >
                    <span>View Details</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${expandedJob === job.id ? "rotate-180" : ""}`}
                    />
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedJob === job.id ? "auto" : 0,
                      opacity: expandedJob === job.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2">
                      <div className="mb-3 flex items-center gap-2">
                        <span className="text-sm font-medium text-foreground">Experience:</span>
                        <span className="text-sm text-muted-foreground">{job.experience}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{job.description}</p>
                      <Link
                        to="/contact"
                        className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white ${GRADIENT} rounded-md shadow-md hover:shadow-lg transition-all`}
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GENERAL CTA - WHITE BACKGROUND ================= */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-muted/50 to-muted/30 border border-primary/10 rounded-2xl p-10 md:p-14 shadow-lg shadow-primary/5 overflow-hidden"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-accent/5 to-primary/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10 text-center max-w-xl mx-auto">
              {/* Icon */}
              <div className={`w-16 h-16 mx-auto mb-6 flex items-center justify-center ${GRADIENT} rounded-xl shadow-lg shadow-primary/20`}>
                <Mail className="w-7 h-7 text-white" />
              </div>

              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-4">
                Don't See Your Role?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future
                opportunities.
              </p>
              
              <a
                href="mailto:careers@grunerrenewable.com"
                className={`inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white ${GRADIENT} rounded-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300`}
              >
                <Send className="w-5 h-5" />
                Submit General Application
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Careers;

import { motion } from "framer-motion";
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
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
} from "lucide-react";

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
  },
  {
    id: 3,
    title: "Process Engineer",
    department: "Engineering",
    location: "Maharashtra",
    type: "Full-time",
    experience: "3-5 years",
    description: "Optimize biogas production processes. Work with CSTR technology to maximize yield and efficiency.",
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
  },
  {
    id: 5,
    title: "Site Supervisor",
    department: "Construction",
    location: "Multiple Locations",
    type: "Full-time",
    experience: "3-5 years",
    description: "Supervise construction activities at plant sites. Ensure safety compliance and quality standards.",
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

const Careers = () => {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  return (
    <PageLayout>
      <PageHero
        title="Join Our Team"
        subtitle="Be part of India's renewable energy revolution. Build a career that makes a difference."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Careers", href: "/careers" },
        ]}
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#openings"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white rounded-md bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
          >
            View Open Positions
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </PageHero>

      {/* Company Culture */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our team of 250+ experts comes from diverse backgrounds, united by a shared commitment to innovation and
                environmental responsibility. We offer a collaborative environment where your contributions matter.
              </p>

              <div className="flex items-center gap-8">
                <div>
                  <div className="text-4xl font-heading font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    250+
                  </div>
                  <div className="text-muted-foreground text-sm">Team Members</div>
                </div>
                <div>
                  <div className="text-4xl font-heading font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    63+
                  </div>
                  <div className="text-muted-foreground text-sm">Projects</div>
                </div>
                <div>
                  <div className="text-4xl font-heading font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Pan India
                  </div>
                  <div className="text-muted-foreground text-sm">Presence</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-card rounded-xl border border-border hover:border-primary/20 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= JOB OPENINGS (CREATIVE STRUCTURE) ================= */}
      <section id="openings" className="section-padding bg-muted/30">
        <div className="container-wide grid lg:grid-cols-3 gap-14 items-start">
          {/* LEFT PANEL */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32 space-y-6"
          >
            <span className="inline-flex px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#1f8f7a] to-[#7fbf2e]">
              Opportunities
            </span>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-black leading-tight">
              Open <span className={GRADIENT_TEXT}>Positions</span>
            </h2>

            <p className="text-gray-600 leading-relaxed max-w-sm">
              Find the best available position for you and become part of India’s clean energy transformation journey.
            </p>

            {/* Decorative stat bar */}
            <div className="pt-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#1f8f7a]" />
                <span className="text-sm text-gray-600">Engineering Roles</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#7fbf2e]" />
                <span className="text-sm text-gray-600">Operations & Management</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#1f8f7a]" />
                <span className="text-sm text-gray-600">Pan-India Opportunities</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT JOB LIST */}
          <div className="lg:col-span-2 space-y-4">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-black/5 shadow-md hover:shadow-lg transition-all overflow-hidden"
              >
                <button
                  onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                  className="w-full p-6 text-left flex items-center justify-between"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 flex items-center justify-center text-white ${GRADIENT}`}>
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${expandedJob === job.id ? "rotate-180" : ""}`}
                  />
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: expandedJob === job.id ? "auto" : 0,
                    opacity: expandedJob === job.id ? 1 : 0,
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-2 border-t border-black/5">
                    <div className="mb-4">
                      <span className="text-sm font-medium text-black">Experience Required: </span>
                      <span className="text-sm text-muted-foreground">{job.experience}</span>
                    </div>
                    <p className="text-muted-foreground mb-6">{job.description}</p>
                    <Link
                      to="/contact"
                      className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white ${GRADIENT} shadow-lg hover:shadow-xl transition-all`}
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* General Application CTA */}
      <section className="section-padding bg-foreground">
        <div className="container-narrow text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-white mb-4">Don't See Your Role?</h2>
            <p className="text-white/60 mb-8">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future
              opportunities.
            </p>
            <a
              href="mailto:careers@grunerrenewable.com"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-foreground rounded-lg bg-white hover:bg-white/90 transition-all duration-300"
            >
              Submit General Application
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Careers;

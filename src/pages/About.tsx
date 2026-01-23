import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { 
  Target, 
  Eye, 
  Leaf, 
  Users, 
  Award, 
  TrendingUp,
  Factory,
  Globe,
  CheckCircle2
} from "lucide-react";

// Team data from their website
const leadership = [
  {
    name: "Mr. Anil Kumar Tyagi",
    role: "Chief Consultant",
    image: "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/9c778952225.png"
  },
  {
    name: "Mr. Rajesh Gupta",
    role: "EVP - Engineering Quality & Commissioning",
    image: "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/457decaf8d4.jpeg"
  },
  {
    name: "Ajmal Singh Kathat",
    role: "EVP - Project Oversight",
    image: "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/36a83cac955.jpeg"
  },
  {
    name: "Mr. Anil Dhussa",
    role: "Chief Advisor",
    image: "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/60737fd0ffe.png"
  },
  {
    name: "Mr. Sanjay Nandre",
    role: "EVP - Engineering Design",
    image: "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/c6b23a5abd9.jpeg"
  },
  {
    name: "Mr. Asit Chaterjee",
    role: "Group President",
    image: "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/21eff9bca03.jpeg"
  }
];

const stats = [
  { value: "63+", label: "Projects", icon: Factory },
  { value: "9,000+", label: "Engineering Hours", icon: TrendingUp },
  { value: "250+", label: "Team Members", icon: Users },
  { value: "₹1,500+ Cr", label: "Project Orders", icon: Award }
];

const coreValues = [
  {
    icon: Leaf,
    title: "Sustainability First",
    description: "Every decision we make is guided by our commitment to environmental responsibility and a cleaner future."
  },
  {
    icon: Target,
    title: "Innovation",
    description: "We continuously push the boundaries of biogas technology to maximize efficiency and output."
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We believe in building long-term relationships with our clients, communities, and stakeholders."
  },
  {
    icon: Globe,
    title: "Impact",
    description: "Our goal is to make a substantial impact on India's renewable energy landscape."
  }
];

const About = () => {
  return (
    <PageLayout>
      <PageHero
        title="About Gruner Renewable"
        subtitle="A trailblazer in the development and implementation of Bio-CNG gas plants, committed to sustainability and innovation."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" }
        ]}
        image="https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/3af758a0f7c.png"
      />

      {/* Mission & Vision Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-semibold">Our Mission</h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Gruner Renewable is dedicated to transforming the energy landscape with state-of-the-art 
                Bio-CNG plants. We harness the power of organic waste to produce clean, green, and 
                renewable energy, revolutionizing the way we think about and utilize energy resources.
              </p>
              <div className="mt-8 space-y-3">
                {["Zero waste to landfill approach", "Converting trash to treasure", "Supporting India's clean energy goals"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-semibold">Our Vision</h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We work on the motto of Zero Waste to Landfill. Biogas can aid in filling a shortcoming 
                in the supply of green energy. As a member of the Indian Biogas Association, it is our 
                responsibility to help India achieve its goal of becoming a global leader in production 
                of clean energy within a decade.
              </p>
              <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10">
                <p className="text-2xl font-heading font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  100 Bio Gas Plants by 2025
                </p>
                <p className="text-muted-foreground mt-2">Our commitment to make a substantial impact on India's renewable energy landscape.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-foreground">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Foundation</span>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mt-3 mb-4">
              Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Gruner Renewable
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 bg-background rounded-xl border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Gruner */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary text-sm font-medium uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold mt-3 mb-6">
                Why Choose Gruner Renewable
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Ready to embrace a cleaner and more sustainable future? Gruner Renewable makes it easy to 
                set up your own bio CNG pump or plant. Join us in the journey towards a greener tomorrow.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Cutting-edge Technology", desc: "State-of-the-art CSTR technology for maximum efficiency" },
                  { title: "Sustainable Solutions", desc: "Eco-friendly approaches that reduce carbon footprint" },
                  { title: "Customized Installations", desc: "Tailor-made solutions for your specific requirements" },
                  { title: "Complete Transparency", desc: "Open communication throughout the project lifecycle" }
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/7e6baf576c4.png"
                alt="Gruner Technology"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-2xl -z-10 opacity-30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-padding bg-foreground">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mt-3 mb-4 text-white">
              Leadership
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Veterans from the Biofuel Industry guiding Gruner Renewable with deep expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadership.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all duration-300"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-heading font-semibold text-white mb-1">{person.name}</h3>
                  <p className="text-white/50 text-sm">{person.role}</p>
                </div>
                {/* Gradient accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;

import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Calendar, ArrowRight, Clock, User } from "lucide-react";

const blogPosts = [
  {
    title: "The Future of Bio-CNG in India's Energy Transition",
    excerpt: "Exploring how compressed biogas is revolutionizing India's transportation and energy sectors while promoting sustainable development.",
    author: "Gruner Team",
    date: "Jan 15, 2025",
    readTime: "5 min read",
    category: "Industry Insights",
    image: "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/1efe4048fa1.jpeg",
  },
  {
    title: "Understanding CSTR Technology for Biogas Production",
    excerpt: "A comprehensive guide to Continuous-Flow Stirred Tank Reactor technology and its advantages in large-scale biogas production.",
    author: "Technical Team",
    date: "Jan 10, 2025",
    readTime: "8 min read",
    category: "Technology",
    image: "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/873015d8f04.jpeg",
  },
  {
    title: "Agricultural Waste to Clean Energy: The Complete Process",
    excerpt: "From farm residues to vehicle fuel - understanding the complete lifecycle of agricultural waste transformation.",
    author: "Operations Team",
    date: "Jan 5, 2025",
    readTime: "6 min read",
    category: "Process",
    image: "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/026c6cb8455.jpeg",
  },
];

const Blog = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-white pt-28 pb-16">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <nav className="flex items-center gap-2 text-sm mb-6">
              <a href="/" className="text-black/60 hover:text-primary transition-colors">Home</a>
              <span className="text-black/40">/</span>
              <span className="text-primary font-medium">Blog</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-black mb-6">
              Insights & Updates
            </h1>
            <p className="text-lg md:text-xl text-black/70">
              Stay updated with the latest news, insights, and developments in the renewable energy sector.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-white text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                    <span className="inline-flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16 py-12 bg-white rounded-xl border border-border"
          >
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-3">
              More Articles Coming Soon
            </h3>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              We're working on bringing you more insights about renewable energy, sustainability, and Bio-CNG technology.
            </p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Blog;

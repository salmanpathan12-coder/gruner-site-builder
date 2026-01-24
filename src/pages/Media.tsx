import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { ExternalLink, Calendar, ArrowRight } from "lucide-react";

const mediaArticles = [
  {
    title: "Gruner Renewable Energy secures $60 million to expand CBG projects",
    source: "The Hindu Business Line",
    date: "Jul 28, 2024",
    image: "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/1efe4048fa1.jpeg",
    link: "https://www.thehindubusinessline.com/companies/gruner-renewable-energy-secures-60-million-to-expand-cbg-projects/article68460239.ece",
  },
  {
    title: "Gruner Renewable Energy Bags $60 Mn To Expand CBG Projects In India",
    source: "BW Disrupt",
    date: "Jul 28, 2024",
    image: "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/873015d8f04.jpeg",
    link: "https://bwdisrupt.com/article/gruner-renewable-energy-bags-60-mn-to-expand-cbg-projects-in-india-527590",
  },
  {
    title: "Gruner Renewable Energy Raises $60M for Sustainable Biogas Solutions",
    source: "YourStory",
    date: "Jul 28, 2024",
    image: "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/026c6cb8455.jpeg",
    link: "https://yourstory.com/2024/07/gruner-renewable-energy-raises-60m-sustainable-biogas-solutions",
  },
  {
    title: "Gruner Renewable Energy receives USD 60Mn Funding",
    source: "Economic Times Energy",
    date: "Jul 28, 2024",
    image: "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/18aa68569d5.jpeg",
    link: "https://energy.economictimes.indiatimes.com/news/renewable/gruner-renewable-energy-receives-usd-60-mn-funding/112101344",
  },
  {
    title: "Gruner Renewable Energy to set up compressed biogas plant in Gujarat at Rs 220-cr investment",
    source: "PTI News",
    date: "Jun 16, 2024",
    image: "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/f66104c6968.jpeg",
    link: "https://www.ptinews.com/story/business/gruner-renewable-energy-to-set-up-compressed-biogas-plant-in-gujarat-at-rs-220-cr-investment/1589043",
  },
  {
    title: "Gruner to set up compressed biogas plant in Gujarat at Rs 220-cr investment",
    source: "Business Standard",
    date: "Jun 16, 2024",
    image: "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/211cf1429b1.jpeg",
    link: "https://www.business-standard.com/companies/news/gruner-to-set-up-compressed-biogas-plant-in-gujarat-at-rs-220cr-investment-124061700378_1.html",
  },
  {
    title: "Gruner Renewable Energy to setup compressed biogas plant in Gujarat at Rs 220 cr. investment",
    source: "Economic Times",
    date: "Jun 16, 2024",
    image: "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/0d9246c1b72.jpeg",
    link: "https://economictimes.indiatimes.com/industry/renewables/gruner-renewable-energy-to-set-up-compressed-biogas-plant-in-gujarat-at-rs-220-cr-investment/articleshow/111056160.cms",
  },
  {
    title: "Gruner Renewable Energy to setup compressed biogas plant in Gujarat",
    source: "ET Energy World",
    date: "Jun 6, 2024",
    image: "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/12735de8b1d.jpeg",
    link: "https://energy.economictimes.indiatimes.com/news/oil-and-gas/gruner-renewable-energy-to-set-up-compressed-biogas-plant-in-gujarat-at-rs-220-cr-investment/111057079",
  },
];

const pressHighlights = [
  { stat: "$60M", label: "Funding Secured", desc: "Latest investment round" },
  { stat: "₹220 Cr", label: "Gujarat Project", desc: "New plant investment" },
  { stat: "8+", label: "Major Publications", desc: "Featured in leading media" },
];

const Media = () => {
  return (
    <PageLayout>
      <PageHero
        title="Media Coverage"
        subtitle="Gruner Renewable Energy in the news. Read about our latest milestones, investments, and industry impact."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Media", href: "/media" },
        ]}
      />

      {/* Highlights Section */}
      <section className="py-16 bg-foreground">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-6">
            {pressHighlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="text-4xl md:text-5xl font-heading font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {item.stat}
                </div>
                <div className="text-white font-medium mb-1">{item.label}</div>
                <div className="text-white/50 text-sm">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Latest News</span>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mt-3">Featured Coverage</h2>
          </motion.div>

          {/* Featured Article Card */}
          <motion.a
            href={mediaArticles[0].link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group block mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center p-6 md:p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 hover:border-primary/30 transition-all duration-300">
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src={mediaArticles[0].image}
                  alt={mediaArticles[0].title}
                  className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
              </div>
              <div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{mediaArticles[0].date}</span>
                  <span className="text-primary">•</span>
                  <span>{mediaArticles[0].source}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-4 group-hover:text-primary transition-colors">
                  {mediaArticles[0].title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  Gruner Renewable Energy has secured $60 million in funding to expand its compressed biogas (CBG)
                  projects across India, marking a significant milestone in the company's growth trajectory.
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                  Read full article
                  <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </div>
          </motion.a>

          {/* All Articles Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-heading font-semibold">All Coverage</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaArticles.slice(1).map((article, index) => (
              <motion.a
                key={article.title}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-xl border border-border hover:border-primary/20 hover:shadow-lg overflow-hidden transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-white/90 text-foreground text-xs font-medium rounded-full">
                      {article.source}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{article.date}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-4">
                    {article.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                    Read more
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-4">Press Inquiries</h2>
            <p className="text-muted-foreground mb-8">
              For media inquiries, interviews, or press releases, please contact our communications team.
            </p>
            <a
              href="mailto:info@grunerrenewable.com"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white rounded-lg bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
            >
              Contact Press Team
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Media;

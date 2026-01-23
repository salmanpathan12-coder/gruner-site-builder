import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; href: string }[];
  image?: string;
  children?: React.ReactNode;
}

const PageHero = ({ title, subtitle, breadcrumbs, image, children }: PageHeroProps) => {
  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center overflow-hidden pt-24 pb-16 md:pt-32 md:pb-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground/95 to-primary/20" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-3xl" />
      </div>
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-white/50 mb-6">
              {breadcrumbs.map((crumb, index) => (
                <span key={crumb.href} className="flex items-center gap-2">
                  {index > 0 && <ChevronRight className="w-3.5 h-3.5" />}
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-primary">{crumb.label}</span>
                  ) : (
                    <Link 
                      to={crumb.href} 
                      className="hover:text-white transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  )}
                </span>
              ))}
            </nav>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-white mb-6 leading-tight">
              {title}
            </h1>

            {/* Subtitle */}
            {subtitle && (
              <p className="text-lg text-white/70 max-w-xl leading-relaxed mb-8">
                {subtitle}
              </p>
            )}

            {/* Optional CTA or children */}
            {children}
          </motion.div>

          {/* Image/Visual Side */}
          {image && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-2xl overflow-hidden">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl" />
                <div className="absolute inset-[1px] bg-foreground rounded-2xl" />
                
                <img
                  src={image}
                  alt={title}
                  className="relative w-full h-auto rounded-2xl object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent rounded-2xl" />
              </div>
              
              {/* Floating accent elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-xl opacity-80"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-lg opacity-60"
              />
            </motion.div>
          )}
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default PageHero;

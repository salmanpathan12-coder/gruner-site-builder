import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/gruner-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About Us", href: "#about" },
      { label: "Leadership", href: "#team" },
      { label: "Careers", href: "#contact" },
      { label: "News & Media", href: "#" },
    ],
    solutions: [
      { label: "EPC Services", href: "#solutions" },
      { label: "O&M Services", href: "#solutions" },
      { label: "Technology", href: "#solutions" },
      { label: "Projects", href: "#projects" },
    ],
    resources: [
      { label: "Investor Relations", href: "#about" },
      { label: "Sustainability", href: "#" },
      { label: "Certifications", href: "#awards" },
      { label: "Contact", href: "#contact" },
    ],
  };

  return (
    <footer className="bg-foreground text-background">
      {/* Divider line at top */}
      <div className="border-t border-background/10" />
      
      {/* Main footer content */}
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <motion.a 
              href="#" 
              className="inline-block mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={logo}
                alt="Gruner Renewable Energy"
                className="h-10 w-auto brightness-0 invert opacity-90"
              />
            </motion.a>
            <p className="text-background/60 text-sm leading-relaxed max-w-sm">
              India's leading Bio-CNG infrastructure company, transforming agricultural waste into clean, reliable fuel for a sustainable future.
            </p>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 text-background">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 text-background">Solutions</h4>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 text-background">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="container-wide py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/40">
            © {currentYear} Gruner Renewable Energy Pvt. Ltd. All rights reserved.
          </p>
          
          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center text-background/60 hover:bg-primary hover:text-white transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center text-background/60 hover:bg-primary hover:text-white transition-all"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
          
          {/* Legal links */}
          <div className="flex items-center gap-4 text-xs">
            <a href="#" className="text-background/40 hover:text-background/60 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/40 hover:text-background/60 transition-colors">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

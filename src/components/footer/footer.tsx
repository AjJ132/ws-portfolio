import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GITHUB_LINK } from "@/data/contact-info";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      href: GITHUB_LINK,
      icon: Github,
      label: "GitHub"
    },
    {
      href: "https://linkedin.com/in/yourlinkedin",
      icon: Linkedin,
      label: "LinkedIn"
    }
  ];

  const footerLinks = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
    { href: "/this-website", label: "About This Site" }
  ];

  return (
    <footer className="w-full border-t bg-background mt-auto">
      <div className="container mx-auto py-6 px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-1">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                asChild
              >
                <Link href={social.href} target="_blank" rel="noopener noreferrer">
                  <social.icon className="h-4 w-4" />
                  <span className="sr-only">{social.label}</span>
                </Link>
              </Button>
            ))}
          </div>

          <nav className="flex space-x-6">
            {footerLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <p className="text-sm text-muted-foreground">
            © {currentYear} AJ Johnson
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
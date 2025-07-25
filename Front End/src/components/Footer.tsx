import { Shield, Mail, Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const Footer = () => {
  return <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold">Novelty Verify</span>
            </div>
            <p className="text-secondary-foreground">
              Intelligent Cloud Usage Monitoring. Transparent. Secure. Enterprise-Ready.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-foreground hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-foreground hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-foreground hover:text-accent transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-secondary-foreground hover:text-accent transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-secondary-foreground hover:text-accent transition-colors">Pricing</a></li>
              <li><a href="#" className="text-secondary-foreground hover:text-accent transition-colors">Documentation</a></li>
              <li><a href="#" className="text-secondary-foreground hover:text-accent transition-colors">API Reference</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-secondary-foreground hover:text-accent transition-colors">About</a></li>
              <li><a href="#team" className="text-secondary-foreground hover:text-accent transition-colors">Team</a></li>
              <li><a href="#" className="text-secondary-foreground hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="text-secondary-foreground hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-secondary-foreground mb-4 text-sm">
              Get the latest security insights and product updates.
            </p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Enter your email" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-secondary-foreground" />
              <Button variant="cta" size="sm">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-foreground text-sm">© 2025 Novelty Verify. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-secondary-foreground hover:text-accent transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-secondary-foreground hover:text-accent transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-secondary-foreground hover:text-accent transition-colors text-sm">Security</a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
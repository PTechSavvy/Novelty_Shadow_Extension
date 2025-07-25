import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Play } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-security.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Cloud Security Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Novelty Verify – <span className="text-accent">Your Eyes in the Cloud</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-secondary-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Prevent data exfiltration, track app usage, and secure your enterprise cloud ecosystem with intelligent monitoring.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="group" asChild>
              <Link to="/download">
                <Download className="mr-2 h-5 w-5" />
                Download the Web Extension
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" className="border-secondary text-secondary bg-transparent hover:bg-secondary/10">
              <Play className="mr-2 h-5 w-5" />
              View Features
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-secondary-foreground/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span>Enterprise-Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Zero Vendor Lock-in</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span>Transparent AI</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
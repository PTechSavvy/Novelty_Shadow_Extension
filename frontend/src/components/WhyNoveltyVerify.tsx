import { Check, Star, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyNoveltyVerify = () => {
  const benefits = [
    {
      icon: Check,
      title: "No Vendor Lock-in",
      description: "Own your data and maintain full control over your security infrastructure."
    },
    {
      icon: Star,
      title: "Lightweight Extension",
      description: "Minimal system impact with maximum security coverage across all browsers."
    },
    {
      icon: Award,
      title: "Custom Dashboards",
      description: "Tailored analytics and reporting that fits your organization's specific needs."
    },
    {
      icon: TrendingUp,
      title: "Transparent AI",
      description: "Understand exactly how our AI makes decisions with full algorithmic transparency."
    }
  ];

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkZGRkYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Why Choose Novelty Verify?
          </h2>
          <p className="text-lg text-secondary-foreground max-w-2xl mx-auto">
            Built for enterprise security teams who demand transparency, control, and results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-start space-x-4 p-6 rounded-lg bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300 animate-slide-in"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="flex-shrink-0 p-2 rounded-full bg-success/20">
                <benefit.icon className="h-6 w-6 text-success" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-secondary-foreground">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="success" size="lg" className="font-semibold">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyNoveltyVerify;
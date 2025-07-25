import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Pricing = () => {
  const plans = [
    {
      name: "Free Version",
      price: "Free",
      description:
        "Perfect for small teams getting started with cloud security monitoring",
      features: [
        "Monitor up to 5 cloud applications",
        "Basic activity tracking",
        "Email alerts",
        "7-day activity history",
        "Community support",
      ],
      buttonText: "Download Free Version",
      buttonVariant: "outline" as const,
      popular: false,
    },
    {
      name: "Pro Version",
      price: "₦/month per user",
      description: "Advanced features for enterprise security teams",
      features: [
        "Unlimited cloud application monitoring",
        "AI-powered risk analysis",
        "Real-time alerts & notifications",
        "90-day activity history",
        "Advanced reporting dashboard",
        "Role-based access controls",
        "API integrations",
        "Priority support",
      ],
      buttonText: "Download Pro Version",
      buttonVariant: "success" as const,
      popular: true,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Choose Your Security Plan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start free or unlock advanced enterprise features with our Pro version.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in ${
                plan.popular ? 'border-accent shadow-lg' : ''
              }`}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </CardTitle>
                <div className="text-3xl font-bold text-accent mb-3">
                  {plan.price}
                </div>
                <p className="text-muted-foreground">
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.buttonVariant} 
                  size="lg" 
                  className="w-full font-semibold"
                >
                  {plan.buttonText}
                </Button>

                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    {plan.name === "Free Version" ? "No credit card required" : "30-day money-back guarantee"}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Need custom enterprise pricing? <a href="#contact" className="text-accent hover:underline">Contact our sales team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
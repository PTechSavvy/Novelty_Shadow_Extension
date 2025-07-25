import { Shield, Eye, AlertTriangle, Users, Zap, Lock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Eye,
      title: "Real-time Monitoring",
      description: "Track cloud application usage across your organization in real-time with detailed analytics and insights.",
      color: "text-accent"
    },
    {
      icon: Shield,
      title: "AI-Driven Risk Analysis",
      description: "Advanced machine learning algorithms identify potential security threats and data exfiltration attempts.",
      color: "text-success"
    },
    {
      icon: AlertTriangle,
      title: "Intelligent Alerts & Reporting",
      description: "Receive instant notifications about suspicious activities with comprehensive reporting dashboards.",
      color: "text-destructive"
    },
    {
      icon: Users,
      title: "Role-Based Enforcement",
      description: "Implement granular access controls based on user roles and organizational policies.",
      color: "text-accent"
    },
    {
      icon: Zap,
      title: "Seamless Integrations",
      description: "Works with Google Workspace, AWS, Microsoft 365, and all major cloud platforms out of the box.",
      color: "text-success"
    },
    {
      icon: Lock,
      title: "Zero Trust Architecture",
      description: "Built on zero trust principles with end-to-end encryption and minimal privilege access.",
      color: "text-primary"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Comprehensive Cloud Security
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Advanced features designed for enterprise IT and security teams to monitor, protect, and control cloud usage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in border-muted"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 rounded-full bg-muted/50 w-fit group-hover:bg-accent/10 transition-colors">
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
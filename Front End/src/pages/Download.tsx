import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Download, Monitor, Shield, Cpu, Globe } from "lucide-react";
const DownloadPage = () => {
  return <div className="min-h-screen">
      <Header />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Download Novelty Verify</h1>
              <p className="text-xl text-muted-foreground">
                Your browser extension for cloud security monitoring
              </p>
            </div>

            {/* App Description */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="h-5 w-5 text-primary" />
                  Description
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">ShadowShield monitors and flags potentially insecure cloud platforms being accessed via the browser. Perfect for IT teams and compliance officers who want peace of mind without heavy software.</p>
              </CardContent>
            </Card>

            {/* System Requirements */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-primary" />
                  System Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Operating System</h4>
                    <div className="space-y-1">
                      <Badge variant="secondary">Windows 7,8, 10, 11</Badge>
                      <Badge variant="secondary">MacOS 10.14+</Badge>
                      <Badge variant="secondary">Linux </Badge>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Browser Support</h4>
                    <div className="space-y-1">
                      <Badge variant="secondary">Chrome </Badge>
                      <Badge variant="secondary">Brave</Badge>
                      <Badge variant="secondary">Edge</Badge>
                      <Badge variant="secondary">firefox</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Memory</h4>
                    <Badge variant="outline">Minimum 2 GB RAM</Badge>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Internet</h4>
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Required for real-time updates</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Download Button */}
            <div className="text-center">
              <Button asChild size="lg" className="group">
                <a href="https://github.com/PTechSavvy/Extension/archive/refs/heads/main.zip" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Now ShadowShield Extension
                  <Shield className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              </Button>
            </div>
            
              <p className="text-sm text-muted-foreground mt-4">
                Free to download • Instant setup • Enterprise-ready
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default DownloadPage;

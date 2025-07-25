import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
const Contact = () => {
  return <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-emerald-900">
                Get in Touch
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to secure your enterprise cloud environment? Contact our team for demos, 
                custom solutions, or enterprise pricing.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="john.doe@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <Input placeholder="Your Company Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea placeholder="Tell us about your security needs or ask any questions..." className="min-h-[120px]" />
                  </div>
                  <Button variant="cta" className="w-full">
                    Send Message
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="shadow-lg">
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <Mail className="h-6 w-6 text-accent" />
                      <div>
                        <h3 className="font-semibold">Email Us</h3>
                        <p className="text-muted-foreground">novelityverify@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 mb-4">
                      <Phone className="h-6 w-6 text-accent" />
                      <div>
                        <h3 className="font-semibold">Call Us</h3>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      
                      
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle>Enterprise Solutions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Need custom deployment, advanced integrations, or enterprise-grade support? 
                      Our team specializes in tailored security solutions.
                    </p>
                    <Button variant="outline" className="w-full">
                      Schedule Demo
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>;
};
export default Contact;
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: "123 Big Sur Avenue, Nairobi, Kenya",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+254 700 123 456",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@thebigsur.com",
    },
    {
      icon: Clock,
      title: "Hours",
      details: "24/7 - Always Open",
    },
  ];

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-secondary/20 to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <span className="text-sm font-semibold text-accent tracking-wide uppercase">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground">
            Wasiliana{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Nasi
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Questions? We're here to help. Reach out and we'll get back to you soon.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {/* Contact Form */}
          <Card className="lg:col-span-3 border-0 shadow-xl">
            <CardHeader className="pb-8">
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
              <CardDescription className="text-base">Fill out the form and we'll respond within 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Input placeholder="Your Name" className="h-12" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" className="h-12" />
                  </div>
                </div>
                <div>
                  <Input placeholder="Subject" className="h-12" />
                </div>
                <div>
                  <Textarea placeholder="Your Message" rows={6} className="resize-none" />
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90 h-12 text-base font-semibold shadow-accent hover:shadow-lg transition-all">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="border-l-4 border-l-accent hover:shadow-lg transition-shadow">
                  <CardContent className="flex items-start space-x-4 p-6">
                    <div className="p-3 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base mb-1 text-foreground">{info.title}</h3>
                      <p className="text-muted-foreground text-sm">{info.details}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
            
            {/* CTA Card */}
            <Card className="bg-gradient-to-br from-primary to-accent border-0 shadow-xl mt-6">
              <CardContent className="p-6 text-center text-white">
                <h3 className="text-xl font-bold mb-2">Visit Us Today</h3>
                <p className="text-white/90 text-sm mb-4">Experience The Big Sur in person</p>
                <Button variant="secondary" className="bg-white text-primary hover:bg-white/90 font-semibold">
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

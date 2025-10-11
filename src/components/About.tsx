import { CheckCircle2 } from "lucide-react";

const About = () => {
  const highlights = [
    "Modern fitness equipment",
    "Authentic Kenyan cuisine",
    "Comfortable guest rooms",
    "Friendly, welcoming staff",
    "Growing community space",
    "Accessible location",
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              About <span className="text-accent">The Big Sur</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Big Sur is a new community hub bringing together fitness, dining, and accommodation services 
              under one roof. We're just getting started, but our vision is clear: to create a welcoming space 
              where locals and visitors can work out, enjoy good food, and find comfortable lodging—all without 
              having to go far.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're a small but passionate team building something special for our community. Every member, 
              guest, and visitor helps us grow and improve. Come experience genuine Kenyan hospitality and 
              be part of our journey from the beginning.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary to-accent/50 p-1">
              <div className="w-full h-full bg-card rounded-xl flex items-center justify-center p-8">
                <div className="text-center space-y-8">
                  <div className="space-y-2">
                    <div className="text-6xl font-bold text-accent">2024</div>
                    <div className="text-muted-foreground">Newly Opened</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-6xl font-bold text-accent">3in1</div>
                    <div className="text-muted-foreground">Services Combined</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-6xl font-bold text-accent">100%</div>
                    <div className="text-muted-foreground">Community Focused</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

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
    <section id="about" className="py-32 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <span className="text-sm font-semibold text-accent tracking-wide uppercase">About Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Building Kenya's Next{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Community Hub
                </span>
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                The Big Sur is a new community hub bringing together fitness, dining, and accommodation services 
                under one roof. We're just getting started, but our vision is clear: to create a welcoming space 
                where locals and visitors can thrive.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                We're a passionate team building something special. Come experience genuine Kenyan hospitality and 
                be part of our journey from the beginning.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((highlight, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 p-3 rounded-xl bg-card border border-border/50 hover:border-accent/50 transition-colors"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Stats Card */}
          <div className="relative order-1 lg:order-2">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
            <div className="relative rounded-3xl bg-card border border-border shadow-2xl p-12">
              <div className="space-y-12">
                <div className="text-center group">
                  <div className="text-7xl md:text-8xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
                    2024
                  </div>
                  <div className="text-muted-foreground text-lg font-medium">Newly Opened</div>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-3" />
                </div>
                
                <div className="text-center group">
                  <div className="text-7xl md:text-8xl font-bold bg-gradient-to-br from-accent to-primary bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
                    3in1
                  </div>
                  <div className="text-muted-foreground text-lg font-medium">Services Combined</div>
                  <div className="w-16 h-1 bg-gradient-to-r from-accent to-primary rounded-full mx-auto mt-3" />
                </div>
                
                <div className="text-center group">
                  <div className="text-7xl md:text-8xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
                    100%
                  </div>
                  <div className="text-muted-foreground text-lg font-medium">Community Focused</div>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-3" />
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

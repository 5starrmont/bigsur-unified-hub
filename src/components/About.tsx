import { CheckCircle2 } from "lucide-react";

const About = () => {
  const highlights = [
    "State-of-the-art fitness facilities",
    "Award-winning culinary team",
    "Luxurious accommodation",
    "Exceptional customer service",
    "Premium amenities",
    "Convenient location",
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
              The Big Sur is a premier destination that seamlessly integrates world-class fitness facilities, 
              exceptional dining experiences, and luxury accommodation. Our mission is to provide a 
              comprehensive lifestyle solution where you can pursue your fitness goals, enjoy gourmet meals, 
              and relax in comfort—all in one convenient location.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe in creating an environment that caters to every aspect of your wellbeing. 
              Whether you're here for a workout, a memorable meal, or a restful stay, our dedicated 
              team is committed to exceeding your expectations.
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
                    <div className="text-6xl font-bold text-accent">10+</div>
                    <div className="text-muted-foreground">Years of Excellence</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-6xl font-bold text-accent">5000+</div>
                    <div className="text-muted-foreground">Happy Members</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-6xl font-bold text-accent">24/7</div>
                    <div className="text-muted-foreground">Available Service</div>
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

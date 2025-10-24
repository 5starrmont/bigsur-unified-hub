import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dumbbell, UtensilsCrossed, Hotel, ArrowRight } from "lucide-react";
import buildingImg from "@/assets/bigsur-exterior.jpg";

const Services = () => {
  const services = [
    {
      title: "Fitness Center",
      description: "Stay active with our growing collection of equipment and friendly trainers ready to guide your fitness journey.",
      icon: Dumbbell,
      image: buildingImg,
      features: ["Cardio & Weights", "Group Sessions", "Flexible Hours", "Affordable Rates"],
    },
    {
      title: "Restaurant",
      description: "Enjoy delicious local and continental dishes prepared fresh. A perfect spot for meals with family and friends.",
      icon: UtensilsCrossed,
      image: buildingImg,
      features: ["Local Flavors", "Fresh Daily", "Family Friendly", "Takeaway Available"],
    },
    {
      title: "Guest Rooms",
      description: "Clean, comfortable rooms for short or extended stays. Experience our warm hospitality and feel at home.",
      icon: Hotel,
      image: buildingImg,
      features: ["Clean & Cozy", "Daily Housekeeping", "Wi-Fi Included", "Friendly Service"],
    },
  ];

  return (
    <section id="services" className="py-32 bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 space-y-6 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <span className="text-sm font-semibold text-accent tracking-wide uppercase">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Everything You Need,{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              One Place
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Three essential services designed to enhance your daily life in Kenya
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-0 shadow-md hover:shadow-2xl transition-all duration-500 bg-card hover:-translate-y-2"
              >
                {/* Image Section */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  
                  {/* Floating Icon */}
                  <div className="absolute top-6 right-6 p-4 bg-accent/90 backdrop-blur-sm rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-3xl font-bold text-white mb-2">{service.title}</h3>
                  </div>
                </div>

                {/* Content Section */}
                <CardContent className="p-6 space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm font-medium text-foreground">
                        <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mr-3 flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-accent" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full group/btn hover:bg-accent/10 font-semibold text-accent hover:text-accent"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

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
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            What We <span className="text-accent">Offer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three essential services to support your lifestyle, all in one convenient location.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-accent overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 p-3 bg-accent rounded-full">
                    <Icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full group/btn"
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

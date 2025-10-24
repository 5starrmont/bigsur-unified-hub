import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/bigsur-front.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Modern Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="The Big Sur - Modern facility with gym, restaurant and accommodation in Kenya"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-primary/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto space-y-10 animate-fade-in">
          {/* Overline */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-white/90 tracking-wide">NOW OPEN IN KENYA</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight">
            Karibu{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-accent via-orange-400 to-accent bg-clip-text text-transparent">
                The Big Sur
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-accent/30 blur-xl" />
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
            Your community hub for fitness, dining, and comfort—all in one modern space.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white shadow-accent hover:shadow-lg hover:scale-105 transition-all duration-300 px-8 py-6 text-lg group"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm bg-white/5 px-8 py-6 text-lg hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2 backdrop-blur-sm">
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import buildingFront from "@/assets/bigsur-front.jpg";
import buildingExterior from "@/assets/bigsur-exterior.jpg";

const Gallery = () => {
  const images = [
    {
      src: buildingFront,
      alt: "The Big Sur - Front view of our modern facility",
      title: "Our Facility"
    },
    {
      src: buildingExterior,
      alt: "The Big Sur - Exterior view with surrounding landscape",
      title: "Beautiful Setting"
    }
  ];

  return (
    <section className="py-32 bg-muted/30 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <span className="text-sm font-semibold text-accent tracking-wide uppercase">Gallery</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground">
            Experience{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              The Big Sur
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our modern facility in the heart of Kenya
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                    {image.title}
                  </h3>
                  <div className="w-20 h-1 bg-accent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

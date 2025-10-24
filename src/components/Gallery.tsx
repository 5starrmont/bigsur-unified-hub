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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See The Big Sur
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take a look at our modern facility nestled in beautiful surroundings
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-semibold">
                    {image.title}
                  </h3>
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

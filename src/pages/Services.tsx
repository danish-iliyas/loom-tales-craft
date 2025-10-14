import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import washingImg from "@/assets/service-washing.jpg";
import repairImg from "@/assets/service-repair.jpg";
import restorationImg from "@/assets/service-restoration.jpg";
import exchangeImg from "@/assets/service-exchange.jpg";
import cleaningImg from "@/assets/service-cleaning.jpg";
import heroImage from "@/assets/hero-carpet.jpg";

const Services = () => {
  const carpetServices = [
    {
      title: "Professional Washing",
      description: "We offer multiple washing techniques tailored to your carpet's specific needs. From delicate hand-washing to specialized deep cleaning, each method preserves the fabric's integrity while removing years of accumulated dirt and grime.",
      image: washingImg,
    },
    {
      title: "Steam Cleaning Treatment",
      description: "Our advanced steam cleaning technology penetrates deep into carpet fibers, eliminating allergens, dust mites, and embedded dirt particles. This method is especially effective for high-traffic carpets.",
      image: washingImg,
    },
    {
      title: "Expert Repairing",
      description: "Master craftsmen meticulously restore damaged areas using traditional hand-weaving techniques. We match original patterns, colors, and textures to seamlessly blend repairs with the existing fabric.",
      image: repairImg,
    },
    {
      title: "Complete Restoration",
      description: "Bring vintage and antique carpets back to their former glory through our comprehensive restoration service. We address structural damage, color fading, and pattern loss using authentic materials.",
      image: restorationImg,
    },
    {
      title: "Wall Hanging Care",
      description: "Wall hangings require specialized cleaning techniques due to their vertical display. Our experts carefully remove, clean, restore, and rehang decorative carpets and tapestries.",
      image: cleaningImg,
    },
    {
      title: "Moth & Pest Treatment",
      description: "Protect your investment with our professional moth and pest treatment services. We use safe, effective solutions to eliminate existing infestations and prevent future damage.",
      image: cleaningImg,
    },
  ];

  const shawlServices = [
    {
      title: "Delicate Shawl Washing",
      description: "Specialized hand-washing techniques for precious Pashmina and Kashmiri shawls using traditional methods. Our gentle approach preserves the softness and luster of fine wool fibers.",
      image: washingImg,
    },
    {
      title: "Premium Dry Cleaning",
      description: "For sensitive materials that require extra care, our premium dry cleaning service uses eco-friendly solvents. Perfect for antique silks and delicate wool blends.",
      image: washingImg,
    },
    {
      title: "Shawl Restoration",
      description: "Expert restoration of vintage shawls, repairing tears and reviving faded colors with authentic materials. We specialize in bringing heritage pieces back to life.",
      image: restorationImg,
    },
    {
      title: "Embroidery Repair",
      description: "Intricate embroidery work requires master craftsmanship. Our artisans carefully repair and restore embellished shawls, matching thread colors and stitching patterns perfectly.",
      image: repairImg,
    },
    {
      title: "Sell & Exchange Program",
      description: "Looking to upgrade your shawl collection? Our sell and exchange program offers fair valuations for quality pieces, connecting you with new treasures.",
      image: exchangeImg,
    },
    {
      title: "Preservation Services",
      description: "Professional preservation techniques to protect your valuable shawls from environmental damage, moths, and aging. Includes proper storage solutions and care guidance.",
      image: cleaningImg,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section with Background */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Our Premium Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brown/90 via-brown/80 to-brown/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-accent mb-6">
              Our Premium Services
            </h1>
            <p className="font-body text-xl text-accent/90 leading-relaxed">
              Comprehensive care solutions for your precious carpets and shawls. Each service combines 
              traditional craftsmanship with modern techniques to deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Carpet Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Carpet Care Services
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Expert care for your precious carpets and rugs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {carpetServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Shawl Services */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Shawl Care Services
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Specialized care for your treasured Pashmina and Kashmiri shawls
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shawlServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
              Why Choose Loom Tales?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Generations of Expertise",
                  description: "Our artisans bring decades of traditional knowledge and modern training to every project.",
                },
                {
                  title: "Premium Materials Only",
                  description: "We use only the finest cleaning products, threads, and restoration materials available.",
                },
                {
                  title: "Customized Care Plans",
                  description: "Every textile receives a personalized treatment plan based on its unique needs and condition.",
                },
                {
                  title: "Transparent Pricing",
                  description: "No hidden fees or surprises. We provide detailed quotes upfront and honor our commitments.",
                },
              ].map((item, index) => (
                <div key={index} className="p-6 bg-card rounded-lg shadow-[var(--shadow-soft)] animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <h3 className="font-display text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

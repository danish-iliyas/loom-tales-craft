import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import washingImg from "@/assets/service-washing.jpg";
import repairImg from "@/assets/service-repair.jpg";
import restorationImg from "@/assets/service-restoration.jpg";
import exchangeImg from "@/assets/service-exchange.jpg";
import cleaningImg from "@/assets/service-cleaning.jpg";

const Services = () => {
  const services = [
    {
      title: "Professional Washing",
      description: "We offer multiple washing techniques tailored to your textile's specific needs. From delicate hand-washing to specialized deep cleaning, each method preserves the fabric's integrity while removing years of accumulated dirt and grime. Our artisans use traditional soaps and modern cleaning solutions to ensure optimal results.",
      image: washingImg,
    },
    {
      title: "Premium Dry Cleaning",
      description: "For sensitive materials that require extra care, our premium dry cleaning service uses eco-friendly solvents that gently lift stains without water damage. Perfect for antique silks, delicate wool blends, and precious heritage pieces that cannot withstand traditional washing methods.",
      image: washingImg,
    },
    {
      title: "Steam Cleaning Treatment",
      description: "Our advanced steam cleaning technology penetrates deep into carpet fibers, eliminating allergens, dust mites, and embedded dirt particles. This method is especially effective for high-traffic carpets and provides a thorough sanitization that's safe for families and pets.",
      image: washingImg,
    },
    {
      title: "Expert Repairing",
      description: "Master craftsmen meticulously restore damaged areas using traditional hand-weaving techniques. We match original patterns, colors, and textures to seamlessly blend repairs with the existing fabric. From small frays to extensive damage, we handle all repair work with precision and care.",
      image: repairImg,
    },
    {
      title: "Complete Restoration",
      description: "Bring vintage and antique carpets back to their former glory through our comprehensive restoration service. We address structural damage, color fading, and pattern loss using authentic materials and time-honored restoration methods passed down through generations of artisans.",
      image: restorationImg,
    },
    {
      title: "Sell & Exchange Program",
      description: "Looking to upgrade or part with your old carpets and shawls? Our sell and exchange program offers fair valuations for quality pieces. We connect sellers with collectors and enthusiasts, ensuring your textiles find appreciative new homes while you explore our curated collection.",
      image: exchangeImg,
    },
    {
      title: "Special Wall Hanging Care",
      description: "Wall hangings require specialized cleaning techniques due to their vertical display and unique mounting. Our experts carefully remove, clean, restore, and rehang decorative carpets and tapestries, ensuring they remain stunning focal points in your space for years to come.",
      image: cleaningImg,
    },
    {
      title: "Moth & Pest Treatment",
      description: "Protect your investment with our professional moth and pest treatment services. We use safe, effective solutions to eliminate existing infestations and prevent future damage, ensuring your carpets and shawls remain pristine for generations.",
      image: cleaningImg,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brown via-brown-light to-brown overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.3),transparent_50%)]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
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

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
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

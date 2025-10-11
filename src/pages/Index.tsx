import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-carpet.jpg";
import washingImg from "@/assets/service-washing.jpg";
import repairImg from "@/assets/service-repair.jpg";
import restorationImg from "@/assets/service-restoration.jpg";

const Index = () => {
  const whatsappNumber = "+911234567890";

  const features = [
    "Expert Artisan Care",
    "Heritage Preservation",
    "Premium Quality Service",
    "Trusted by Generations",
  ];

  const featuredServices = [
    {
      title: "Professional Washing",
      description: "Gentle yet thorough cleaning methods that preserve the integrity and beauty of your precious textiles.",
      image: washingImg,
    },
    {
      title: "Expert Repairing",
      description: "Master craftsmen restore damaged areas with traditional techniques, maintaining authentic patterns.",
      image: repairImg,
    },
    {
      title: "Complete Restoration",
      description: "Bringing vintage carpets and shawls back to their original glory with meticulous attention to detail.",
      image: restorationImg,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Traditional carpet craftsmanship"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brown/90 via-brown/70 to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl animate-fade-in">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="font-body text-accent uppercase tracking-wider text-sm">
                Premium Care Services
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-accent mb-6 leading-tight">
              Where Art Meets Care
            </h1>
            <p className="font-body text-lg md:text-xl text-accent/90 mb-8 leading-relaxed">
              Expert carpet and shawl care services that honor tradition while embracing excellence. 
              We preserve the stories woven into every thread.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary-dark text-primary-foreground text-lg h-14 px-8"
              >
                <Link to="/book-appointment">
                  Book Appointment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-accent bg-transparent text-accent hover:bg-accent hover:text-brown text-lg h-14 px-8"
              >
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-8 bg-secondary border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-body font-medium text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our Signature Services
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Each service is crafted with decades of expertise and a deep respect for traditional craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service, index) => (
              <div
                key={index}
                className="vintage-card group animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="vintage-overlay opacity-50 group-hover:opacity-30 transition-opacity duration-500" />
                </div>
                <div className="p-6 bg-card">
                  <h3 className="font-display text-2xl font-semibold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-in">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-dark">
              <Link to="/services">
                Explore All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brown via-brown-light to-brown">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-accent mb-6">
              Ready to Preserve Your Heirlooms?
            </h2>
            <p className="font-body text-lg text-accent/90 mb-8 leading-relaxed">
              Let our master craftsmen care for your precious carpets and shawls with the attention they deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent-dark text-brown"
              >
                <Link to="/book-appointment">Schedule Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-accent text-accent hover:bg-accent hover:text-brown"
              >
                <Link to="/collection">View Collection</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

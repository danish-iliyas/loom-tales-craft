import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import heroImage from "@/assets/hero-carpet.jpg";
import washingImg from "@/assets/service-washing.jpg";
import repairImg from "@/assets/service-repair.jpg";
import restorationImg from "@/assets/service-restoration.jpg";
import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";

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

  const collections = [
    { image: collection1, title: "Traditional Persian" },
    { image: collection2, title: "Vintage Restoration" },
    { image: collection3, title: "Contemporary Designs" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppFloat />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
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
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <div className="inline-block mb-4">
              <svg className="w-12 h-12 mx-auto text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Carpet Care Services
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Professional care for your precious carpets and rugs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredServices.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown via-brown/60 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />
                  
                  <div className="absolute inset-0 flex items-end p-6">
                    <div className="text-white">
                      <h3 className="font-display text-2xl font-bold mb-2">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="group relative overflow-hidden rounded-lg animate-scale-in cursor-pointer bg-primary/10 flex items-center justify-center" style={{ animationDelay: "0.4s" }}>
              <Link to="/services" className="text-center p-8">
                <h3 className="font-display text-2xl font-bold mb-3 text-primary">Wall Hanging Care</h3>
                <ArrowRight className="w-6 h-6 mx-auto text-primary" />
              </Link>
            </div>
          </div>

          <div className="text-center animate-fade-in">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-lg px-8">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <div className="inline-block mb-4">
              <svg className="w-12 h-12 mx-auto text-primary" viewBox="0 0 100 50" fill="none" stroke="currentColor">
                <path d="M20,25 Q30,10 50,25 T80,25" strokeWidth="2" strokeLinecap="round" fill="none"/>
              </svg>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Collections
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Beautifully crafted and ethically sourced, our handmade area rugs bring warmth, style, and authenticity to any space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {collections.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg animate-scale-in shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-all duration-500"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown/80 via-brown/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-in">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-lg px-8">
              <Link to="/collection">
                Explore Collection
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="py-24 bg-gradient-to-r from-primary via-primary-dark to-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)'
          }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                Book Your Free Design Consultation
              </h2>
              <p className="font-body text-lg text-white/90 mb-8 leading-relaxed">
                Come visit our beautiful showroom to see first hand our selection of beautiful rugs and carpets. Let our master craftsmen care for your precious textiles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white hover:bg-white/90 text-primary text-lg px-8"
                >
                  <Link to="/book-appointment">Book My Visit</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8"
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden animate-fade-in shadow-2xl">
              <img
                src={restorationImg}
                alt="Consultation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Index;

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
import exchangeImg from "@/assets/service-exchange.jpg";
import cleaningImg from "@/assets/service-cleaning.jpg";
import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";

// This is the SVG you provided, turned into a reusable component
const SectionIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    // Classes for sizing and layout are kept
    className="w-16 h-16 mx-auto mb-4" 
  >
    <defs>
      {/* Gradients for the petals */}
      <radialGradient id="frontPetalGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" style={{ stopColor: '#C39BD3' }} />
        <stop offset="100%" style={{ stopColor: '#8E44AD' }} />
      </radialGradient>
      <radialGradient id="backPetalGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" style={{ stopColor: '#8E44AD' }} />
        <stop offset="100%" style={{ stopColor: '#512E5F' }} />
      </radialGradient>
      
      {/* Filter for a subtle drop shadow effect */}
      <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1" />
        <feOffset dx="1" dy="1" result="offsetblur" />
        {/* NOTE: 'flood-color' is changed to 'floodColor' for JSX */}
        <feFlood floodColor="rgba(0,0,0,0.2)" />
        <feComposite in2="offsetblur" operator="in" />
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      {/* Reusable petal shape */}
      <path id="petal" d="M50 5 C 38 22, 35 40, 50 50 C 65 40, 62 22, 50 5 Z" />
    </defs>

    {/* Back petals with shadow */}
    {/* NOTE: The 'style' attribute is converted to a JSX style object */}
    <g fill="url(#backPetalGradient)" transform="rotate(45 50 50)" style={{ filter: 'url(#dropShadow)' }}>
      <use href="#petal" transform="scale(1.05)" />
      <use href="#petal" transform="scale(1.05) rotate(90 50 50)" />
      <use href="#petal" transform="scale(1.05) rotate(180 50 50)" />
      <use href="#petal" transform="scale(1.05) rotate(270 50 50)" />
    </g>
    
    {/* Front petals */}
    <g fill="url(#frontPetalGradient)">
      <use href="#petal" />
      <use href="#petal" transform="rotate(90 50 50)" />
      <use href="#petal" transform="rotate(180 50 50)" />
      <use href="#petal" transform="rotate(270 50 50)" />
    </g>
    
    {/* Detailed center design */}
    <g>
      <circle cx="50" cy="50" r="12" fill="white" style={{ filter: 'url(#dropShadow)' }} />
      <circle cx="50" cy="50" r="8" fill="#512E5F" />
      <circle cx="50" cy="50" r="3" fill="white" />
    </g>
  </svg>
);

const Index = () => {
  const whatsappNumber = "+911234567890";

  const features = [
    "Expert Artisan Care",
    "Heritage Preservation",
    "Premium Quality Service",
    "Trusted by Generations",
  ];

  const carpetServices = [
    {
      title: "Professional Washing",
      description:
        "Gentle yet thorough cleaning methods that preserve the integrity and beauty of your precious carpets.",
      image: washingImg,
    },
    {
      title: "Professional Washing",
      description:
        "Gentle yet thorough cleaning methods that preserve the integrity and beauty of your precious carpets.",
      image: washingImg,
    },
    {
      title: "Professional Washing",
      description:
        "Gentle yet thorough cleaning methods that preserve the integrity and beauty of your precious carpets.",
      image: washingImg,
    },
    {
      title: "Professional Washing",
      description:
        "Gentle yet thorough cleaning methods that preserve the integrity and beauty of your precious carpets.",
      image: washingImg,
    },
    {
      title: "Professional Washing",
      description:
        "Gentle yet thorough cleaning methods that preserve the integrity and beauty of your precious carpets.",
      image: washingImg,
    },
    {
      title: "Expert Repairing",
      description:
        "Master craftsmen restore damaged areas with traditional techniques, maintaining authentic patterns.",
      image: repairImg,
    },
    {
      title: "Complete Restoration",
      description:
        "Bringing vintage carpets back to their original glory with meticulous attention to detail.",
      image: restorationImg,
    },
    {
      title: "Wall Hanging Care",
      description:
        "Specialized cleaning and maintenance for decorative wall hangings, preserving their elegance and charm.",
      image: cleaningImg,
    },
  ];

  const shawlServices = [
    {
      title: "Delicate Shawl Washing",
      description:
        "Specialized hand-washing techniques for precious Pashmina and Kashmiri shawls using traditional methods.",
      image: washingImg,
    },
    {
      title: "Shawl Restoration",
      description:
        "Expert restoration of vintage shawls, repairing tears and reviving faded colors with authentic materials.",
      image: restorationImg,
    },
    {
      title: "Premium Dry Cleaning",
      description:
        "Eco-friendly dry cleaning for sensitive shawl materials that require extra care and gentle handling.",
      image: cleaningImg,
    },
    {
      title: "Sell & Exchange",
      description:
        "Trade your old shawls for new ones or get the best value with our fair exchange program.",
      image: exchangeImg,
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      review:
        "Loom Tales transformed my grandmother's antique carpet. The restoration work is exceptional, and it looks as beautiful as it did decades ago. Highly recommend their services!",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      review:
        "Professional, trustworthy, and skilled artisans. They handled my precious Pashmina shawl with such care. The cleaning results exceeded my expectations.",
      rating: 5,
    },
    {
      name: "Anita Desai",
      review:
        "I've been using Loom Tales for years. Their attention to detail and commitment to preserving the heritage of each piece is unmatched. A true gem in carpet care.",
      rating: 5,
    },
  ];

  const collections = [
    {
      image: collection1,
      title: "Traditional Persian Carpets",
      type: "Carpet",
    },
    { image: collection2, title: "Vintage Kashmiri Shawls", type: "Shawl" },
    { image: collection3, title: "Contemporary Designer Rugs", type: "Carpet" },
    { image: washingImg, title: "Heritage Pashmina Shawls", type: "Shawl" },
    { image: repairImg, title: "Antique Turkish Carpets", type: "Carpet" },
    { image: restorationImg, title: "Luxury Silk Shawls", type: "Shawl" },
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
          {/* MODIFIED: Gradient is now more transparent for a cleaner image */}
          <div className="absolute inset-0 bg-gradient-to-r from-brown/60 via-brown/40 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl animate-fade-in">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="font-body text-accent uppercase tracking-wider text-sm">
                Premium Care Services
              </span>
            </div>
            <h1 className="font-display text-white text-5xl md:text-6xl lg:text-7xl font-bold text-accent mb-6 leading-tight">
              Where Art Meets Care
            </h1>
            <p className="font-body text-lg md:text-xl text-accent/100 mb-8 leading-relaxed">
              Expert carpet and shawl care services that honor tradition while
              embracing excellence. We preserve the stories woven into every
              thread.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="
    relative overflow-hidden
    bg-primary text-primary-foreground
    text-lg font-serif tracking-wide
    h-14 px-10 rounded-2xl
    shadow-[inset_0_0_8px_rgba(255,255,255,0.15),0_3px_10px_rgba(0,0,0,0.35)]
    transition-all duration-500 ease-out
    hover:bg-primary-dark hover:shadow-[0_5px_20px_rgba(0,0,0,0.5)]
    before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-700
  "
              >
                <Link
                  to="/book-appointment"
                  className="flex items-center justify-center gap-3 z-10 relative"
                >
                  Book Appointment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="
    relative overflow-hidden
    font-serif tracking-wider text-[1.15rem]
    border-[1.8px] rounded-2xl
    border-[#c9a36a]
    text-[#c9a36a]
    bg-gradient-to-b from-[#1a1a1a] to-[#2a1f17]
    transition-all duration-500 ease-out
    hover:text-white
    hover:bg-[#c9a36a]
    shadow-[inset_0_0_10px_rgba(255,255,255,0.1),0_2px_8px_rgba(0,0,0,0.4)]
    hover:shadow-[0_4px_20px_rgba(201,163,106,0.5)]
    h-14 px-10
    before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-[#fff5e1]/20 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100
  "
              >
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 z-10 relative"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M12.04 2C6.49 2 2 6.27 2 11.5c0 2.01.75 3.87 2 5.36L2 22l5.41-1.72A10.2 10.2 0 0 0 12.04 21C17.6 21 22 16.73 22 11.5S17.6 2 12.04 2Zm0 17.5c-1.65 0-3.18-.51-4.46-1.37l-.32-.21-3.22.99.97-3.07-.21-.33A7.22 7.22 0 0 1 4.5 11.5c0-4 3.38-7.25 7.54-7.25s7.54 3.25 7.54 7.25-3.38 7.25-7.54 7.25Z" />
                  </svg>
                  WhatsApp&nbsp;Us
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
              <div
                key={index}
                className="flex items-center gap-3 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-body font-medium text-foreground">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carpet Care Services */}

     <section className="pt-16 pb-0 bg-white">
  <div className="container mx-auto px-2 sm:px-4">
    <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
      <div className="inline-block mb-[4px]">
        {/* Assume SectionIcon renders the purple flower/icon */}
        <SectionIcon />
      </div>

      {/* Updated colors/font to match the 'Collections' section: Muted Purple/Black */}
      <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-[#5A386D]">
       Carpet Care Services
      </h2>
      <p className="font-body text-lg text-neutral-500 leading-relaxed">
        Beautifully crafted and ethically sourced, our handmade area rugs bring warmth, style, and authenticity to any space. Expertly woven by skilled artisans, each rug tells a unique story of tradition and craftsmanship.
      </p>
    </div>

    {/* CARDS GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {/* Using placeholder data structure for the mapping */}
      {carpetServices.map((service, index) => (
        <div
          key={index}
          className="
            group relative overflow-hidden rounded-md
            bg-white
            border border-gray-200
            cursor-pointer
            animate-scale-in transition-all duration-300
            
            /* VINTAGE GLOW EFFECT (Approximation using default classes) */
           shadow-lg
hover:shadow-xl
hover:shadow-purple-600/60
hover:border-gray-600/40
transform hover:scale-[1.02]
          "
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {/* IMAGE CONTAINER (Kept height/transition) */}
          <div className="relative h-72 overflow-hidden">
            {/* Added Sepia filter for extra vintage feel, which was recommended earlier */}
            <img
              src={service.image}
              alt={service.title}
              className=" w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter group-hover:sepia-0 sepia-50"
            />
          </div>

          {/* TEXT CONTENT (Moved out of the overlay/image container) */}
          <div className="p-5 text-center">
            {/* Title: Muted black/brown color, slightly larger font */}
            <h3 className="font-display text-2xl font-semibold mb-2 text-[#723983]">
              {service.title}
            </h3>

            {/* Description: Subtler text color and size */}
            <p className="font-body text-sm text-neutral-600 leading-relaxed mb-4">
              {service.description}
            </p>

            {/* View All Link: Prominent text color matching the headline purple */}
            <a
                href="#"
                className="
                    inline-flex items-center
                    text-[#5A386D] font-medium
                    hover:text-[#5A386D]
                    transition-colors text-base
                "
            >
              View All
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* Shawl Care Services */}

      <section className="pt-4 pb-0 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <div className="inline-block mb-[4px]">
              <SectionIcon />
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Shawl Care Services
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Specialized care for your treasured Pashmina and Kashmiri shawls
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {shawlServices.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded animate-scale-in cursor-pointer shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown via-brown/60 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />

                  <div className="absolute inset-0 flex flex-col items-start justify-end p-6 transition-all duration-500">
                    <div className="text-white transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                      <h3 className="font-display text-2xl font-bold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-in">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary-dark text-lg px-8"
            >
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
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <div className="inline-block mb-4">
              <SectionIcon />
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Collections
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Beautifully crafted and ethically sourced, our handmade area rugs
              bring warmth, style, and authenticity to any space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {collections.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg animate-scale-in shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown/80 via-brown/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                  <div className="absolute inset-0 flex flex-col items-start justify-end p-6 transition-all duration-500">
                    <div className="text-white transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                      <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs mb-2">
                        {item.type}
                      </span>
                      <h3 className="font-display text-2xl font-bold">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-in">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary-dark text-lg px-8"
            >
              <Link to="/collection">
                Explore Collection
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-foreground">
              What Our Customers Say
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Real experiences from our valued clients who trust us with their
              precious textiles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-lg shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-primary fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="font-body text-muted-foreground italic mb-6 leading-relaxed">
                  "{testimonial.review}"
                </p>
                <p className="font-display text-lg font-semibold text-foreground">
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-secondary rounded-full">
              <svg
                className="w-5 h-5 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
              <span className="font-body text-muted-foreground">
                Watch customer testimonial videos on our social media
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="py-24 bg-gradient-to-r from-primary via-primary-dark to-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)",
            }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                Book Your Free Design Consultation
              </h2>
              <p className="font-body text-lg text-white/90 mb-8 leading-relaxed">
                Come visit our beautiful showroom to see first hand our
                selection of beautiful rugs and carpets. Let our master
                craftsmen care for your precious textiles.
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

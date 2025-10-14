import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Heart, Users, Shield } from "lucide-react";
import aboutImage from "@/assets/about-heritage.jpg";
import heroImage from "@/assets/hero-carpet.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Craft",
      description: "Every thread, every pattern, every repair is handled with deep respect for the artisans who created these masterpieces.",
    },
    {
      icon: Award,
      title: "Excellence in Service",
      description: "We maintain the highest standards in every aspect of our work, from initial consultation to final delivery.",
    },
    {
      icon: Users,
      title: "Community Heritage",
      description: "Supporting local artisan communities and preserving traditional techniques for future generations.",
    },
    {
      icon: Shield,
      title: "Trust & Integrity",
      description: "Building lasting relationships through honest communication, transparent pricing, and reliable service.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section with Background */}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Our Story"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brown/90 via-brown/80 to-brown/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-accent mb-6">
              Our Story
            </h1>
            <p className="font-body text-xl text-accent/90 leading-relaxed">
              A legacy of craftsmanship, care, and dedication to preserving textile heritage
            </p>
          </div>
        </div>
      </section>

      {/* Heritage Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <img
                src={aboutImage}
                alt="Traditional carpet weaving heritage"
                className="w-full h-auto rounded-lg shadow-[var(--shadow-elegant)]"
              />
            </div>
            <div className="animate-fade-in">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Where Tradition Meets Excellence
              </h2>
              <div className="space-y-4 font-body text-lg text-muted-foreground leading-relaxed">
                <p>
                  Loom Tales began with a simple belief: every carpet and shawl carries within it the stories 
                  of countless hands, generations of knowledge, and irreplaceable cultural heritage. What started 
                  as a small family workshop has grown into a trusted name in premium textile care.
                </p>
                <p>
                  For over three decades, we've dedicated ourselves to mastering the delicate art of carpet and 
                  shawl restoration. Our team of master craftsmen combines time-honored techniques passed down 
                  through generations with modern conservation methods to provide unparalleled care for your 
                  precious textiles.
                </p>
                <p>
                  We understand that the carpets and shawls entrusted to us are more than mere objects—they're 
                  family heirlooms, artistic treasures, and tangible connections to cultural traditions. This 
                  understanding guides every decision we make and every service we provide.
                </p>
                <p>
                  Today, Loom Tales stands as a bridge between past and present, ensuring that the artistry of 
                  traditional textile craft continues to inspire and beautify homes for generations to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our Core Values
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              The principles that guide everything we do at Loom Tales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-card rounded-lg shadow-[var(--shadow-soft)] text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                    {value.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
              Master Craftsmen
            </h2>
            <div className="space-y-6 font-body text-lg text-muted-foreground leading-relaxed">
              <p>
                Our team comprises skilled artisans who have dedicated their lives to perfecting the ancient crafts 
                of carpet weaving, dyeing, and restoration. Many of our master weavers learned their trade from 
                their parents and grandparents, carrying forward techniques that date back centuries.
              </p>
              <p>
                Each member of our team undergoes continuous training to stay current with modern conservation 
                methods while maintaining the traditional skills that make our work exceptional. This combination 
                of old and new ensures that we can handle everything from contemporary pieces to priceless antiques 
                with equal expertise.
              </p>
              <p>
                We take pride in creating an environment where traditional knowledge thrives, where master artisans 
                mentor the next generation, and where every team member shares our commitment to preserving textile 
                heritage for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

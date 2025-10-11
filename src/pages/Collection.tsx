import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CollectionCard from "@/components/CollectionCard";
import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";

const Collection = () => {
  const collections = [
    {
      title: "Imperial Medallion Carpet",
      description: "Exquisite handwoven carpet featuring intricate geometric medallion patterns in rich terracotta and gold. Perfect for grand living spaces. Approximately 8x10 feet.",
      image: collection1,
    },
    {
      title: "Kashmiri Paisley Shawl",
      description: "Luxurious handcrafted shawl with traditional paisley motifs. Made from premium wool with silk accents. A timeless piece of wearable art.",
      image: collection2,
    },
    {
      title: "Persian Garden Runner",
      description: "Elegant carpet runner with classical Persian garden design. Features floral borders and medallion center in warm earth tones. Ideal for hallways.",
      image: collection3,
    },
    {
      title: "Vintage Floral Carpet",
      description: "Authentic vintage carpet with elaborate floral patterns and ornate borders. Museum-quality piece showcasing master craftsmanship from the early 20th century.",
      image: collection1,
    },
    {
      title: "Heritage Pashmina Shawl",
      description: "Ultra-soft pashmina shawl with hand-embroidered botanical motifs. Lightweight yet warm, perfect for any season. A treasured heirloom piece.",
      image: collection2,
    },
    {
      title: "Royal Medallion Carpet",
      description: "Grand statement carpet with symmetrical medallion design and intricate borders. Hand-knotted with premium wool in traditional colors. Approximately 10x14 feet.",
      image: collection3,
    },
    {
      title: "Artisan Woven Runner",
      description: "Contemporary runner carpet blending traditional patterns with modern aesthetics. Perfect for adding character to contemporary interiors.",
      image: collection1,
    },
    {
      title: "Silk Blend Luxury Shawl",
      description: "Premium silk-wool blend shawl with subtle geometric patterns. Incredibly soft texture with a lustrous finish. An elegant accessory for special occasions.",
      image: collection2,
    },
    {
      title: "Heirloom Oriental Carpet",
      description: "Authentic oriental carpet with complex floral and vine patterns. Rich color palette and exceptional knot density. A true collector's piece.",
      image: collection3,
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
              Our Curated Collection
            </h1>
            <p className="font-body text-xl text-accent/90 leading-relaxed">
              Explore our handpicked selection of exquisite carpets and shawls. Each piece tells a unique 
              story of artistry and tradition. Contact us via WhatsApp for inquiries and availability.
            </p>
          </div>
        </div>
      </section>

      {/* Collection Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((item, index) => (
              <CollectionCard
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Interested in a Piece?
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
              Each item in our collection is available for purchase or can inspire your next custom commission. 
              Contact us to discuss pricing, customization options, or to schedule a private viewing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/+911234567890?text=Hi, I'm interested in your collection"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary-dark text-primary-foreground font-body font-medium rounded-lg transition-all shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)]"
              >
                Contact via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Collection;

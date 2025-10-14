import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import washingImg from "@/assets/service-washing.jpg";
import repairImg from "@/assets/service-repair.jpg";
import restorationImg from "@/assets/service-restoration.jpg";
import heroImage from "@/assets/hero-carpet.jpg";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Art of Traditional Carpet Weaving",
      excerpt: "Discover the ancient techniques and craftsmanship that go into creating each masterpiece. From selecting the finest materials to the intricate patterns that tell stories of heritage.",
      image: washingImg,
      date: "March 15, 2024",
      category: "Craftsmanship",
      readTime: "5 min read",
    },
    {
      title: "How to Care for Your Persian Carpet",
      excerpt: "Essential maintenance tips to preserve the beauty and longevity of your precious textiles. Learn the dos and don'ts of carpet care from our expert artisans.",
      image: repairImg,
      date: "March 10, 2024",
      category: "Care Tips",
      readTime: "7 min read",
    },
    {
      title: "Understanding Carpet Restoration",
      excerpt: "A deep dive into the restoration process and how we bring vintage carpets back to life. Explore the techniques that have been perfected over generations.",
      image: restorationImg,
      date: "March 5, 2024",
      category: "Restoration",
      readTime: "6 min read",
    },
    {
      title: "The Heritage of Kashmiri Shawls",
      excerpt: "Exploring the rich history and cultural significance of traditional Kashmiri shawls. These treasures represent centuries of artisan excellence and cultural storytelling.",
      image: washingImg,
      date: "February 28, 2024",
      category: "Heritage",
      readTime: "8 min read",
    },
    {
      title: "Choosing the Perfect Carpet for Your Space",
      excerpt: "A comprehensive guide to selecting carpets that complement your interior design. From color palettes to pattern matching, make informed decisions.",
      image: repairImg,
      date: "February 20, 2024",
      category: "Design Guide",
      readTime: "6 min read",
    },
    {
      title: "Sustainable Practices in Textile Care",
      excerpt: "Our commitment to eco-friendly cleaning and restoration methods. Learn how we protect both your textiles and the environment.",
      image: restorationImg,
      date: "February 15, 2024",
      category: "Sustainability",
      readTime: "5 min read",
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
            alt="Blog"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brown/90 via-brown/80 to-brown/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-accent mb-6">
              Stories & Insights
            </h1>
            <p className="font-body text-xl text-accent/90 leading-relaxed">
              Explore the art, heritage, and craftsmanship behind every thread. 
              From care tips to cultural stories, discover the world of fine textiles.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="group bg-card rounded-lg overflow-hidden shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/90 backdrop-blur-sm rounded-full text-xs font-medium text-primary-foreground">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="font-display text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <Button
                    variant="ghost"
                    className="text-primary hover:text-primary-dark p-0 h-auto group-hover:gap-2 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary-dark to-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Connected
            </h2>
            <p className="font-body text-lg text-white/90 mb-8">
              Subscribe to receive the latest stories, care tips, and exclusive insights from our artisans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg font-body text-foreground focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white hover:bg-white/90 text-primary px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;

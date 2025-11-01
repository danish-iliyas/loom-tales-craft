import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header"; // This will now import your new header
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import heroImage from "@/assets/hero-carpet.jpg"; // Slide 1
import washingImg from "@/assets/service-washing.jpg";
import repairImg from "@/assets/service-repair.jpg";
import restorationImg from "@/assets/service-restoration.jpg";
import exchangeImg from "@/assets/service-exchange.jpg";
import cleaningImg from "@/assets/service-cleaning.jpg";
import collection1 from "@/assets/collection-1.jpg"; // Slide 2
import collection2 from "@/assets/collection-2.jpg"; // Slide 3
import collection3 from "@/assets/collection-3.jpg";
import { InView } from "react-intersection-observer";

// ✅ 1. Import Embla Carousel hooks
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

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
      <radialGradient
        id="frontPetalGradient"
        cx="50%"
        cy="50%"
        r="50%"
        fx="50%"
        fy="50%"
      >
        <stop offset="0%" style={{ stopColor: "#C39BD3" }} />
        <stop offset="100%" style={{ stopColor: "#8E44AD" }} />
      </radialGradient>
      <radialGradient
        id="backPetalGradient"
        cx="50%"
        cy="50%"
        r="50%"
        fx="50%"
        fy="50%"
      >
        <stop offset="0%" style={{ stopColor: "#8E44AD" }} />
        <stop offset="100%" style={{ stopColor: "#512E5F" }} />
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
    <g
      fill="url(#backPetalGradient)"
      transform="rotate(45 50 50)"
      style={{ filter: "url(#dropShadow)" }}
    >
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
      <circle
        cx="50"
        cy="50"
        r="12"
        fill="white"
        style={{ filter: "url(#dropShadow)" }}
      />
      <circle cx="50" cy="50" r="8" fill="#512E5F" />
      <circle cx="50" cy="50" r="3" fill="white" />
    </g>
  </svg>
);

const Index = () => {
  const whatsappNumber = "+911234567890";

  // ✅ 2. Setup Embla Carousel
  // This will autoplay, loop, and not stop when you hover/click it
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: false }),
  ]);

  // ✅ 3. Define slides (using your imported images + a video example)
  const carouselSlides = [
    {
      type: "image",
      src: heroImage, // From your imports
      alt: "Handcrafted masterpieces",
    },
    {
      type: "image",
      src: collection1, // From your imports
      alt: "Traditional Persian Carpets",
    },
    {
      type: "image",
      src: collection2, // From your imports
      alt: "Vintage Kashmiri Shawls",
    },
    // As you requested, here is how you would add a video:
    {
      type: "video",
      // You must provide your own video file URL here
      src: "https://videos.pexels.com/video-files/3840810/3840810-hd_1920_1080_25fps.mp4",
      alt: "Carpet weaving process",
    },
  ];

  // const features = [
  //   "Expert Artisan Care",
  //   "Heritage Preservation",
  //   "Premium Quality Service",
  //   "Trusted by Generations",
  // ];

  // --- MODIFIED: Added 'type' and 'linkTo' ---
  const carpetServices = [
    {
      title: "Professional Washing",
      description:
        "Gentle yet thorough cleaning methods that preserve the integrity and beauty of your precious carpets.",
      image: washingImg,
      type: "Carpet",
      linkTo: "/services/carpet-washing",
    },
    {
      title: "Expert Repairing",
      description:
        "Master craftsmen restore damaged areas with traditional techniques, maintaining authentic patterns.",
      image: repairImg,
      type: "Carpet",
      linkTo: "/services/carpet-repairing",
    },
    {
      title: "Complete Restoration",
      description:
        "Bringing vintage carpets back to their original glory with meticulous attention to detail.",
      image: restorationImg,
      type: "Carpet",
      linkTo: "/services/carpet-restoration",
    },
    {
      title: "Wall Hanging Care",
      description:
        "Specialized cleaning and maintenance for decorative wall hangings, preserving their elegance and charm.",
      image: cleaningImg,
      type: "Carpet",
      linkTo: "/services/wall-hanging-care",
    },
  ];

  // --- MODIFIED: Added 'type' ---
  const shawlServices = [
    {
      title: "Delicate Shawl Washing",
      description:
        "Specialized hand-washing techniques for precious Pashmina and Kashmiri shawls using traditional methods.",
      image: washingImg,
      type: "Shawl",
      linkTo: "/services/shawl-washing",
    },
    {
      title: "Shawl Restoration",
      description:
        "Expert restoration of vintage shawls, repairing tears and reviving faded colors with authentic materials.",
      image: restorationImg,
      type: "Shawl",
      linkTo: "/services/shawl-restoration",
    },
    {
      title: "Premium Dry Cleaning",
      description:
        "Eco-friendly dry cleaning for sensitive shawl materials that require extra care and gentle handling.",
      image: cleaningImg,
      type: "Shawl",
      linkTo: "/services/shawl-cleaning",
    },
    {
      title: "Sell & Exchange",
      description:
        "Trade your old shawls for new ones or get the best value with our fair exchange program.",
      image: exchangeImg,
      type: "Shawl",
      linkTo: "/services/sell-exchange",
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
      <Header /> {/* ✅ This now renders your new header */}
      <WhatsAppFloat />

      {/* --- ✅ REPLACED: Hero Section (now a Carousel) --- */}
      {/* --- ✅ REPLACED: Hero Section (Carousel size decreased) --- */}
      <section className="relative h-[75vh] min-h-[550px] flex items-center overflow-hidden">
        {/* Embla Carousel Viewport */}
        <div className="absolute inset-0" ref={emblaRef}>
          <div className="flex h-full">
            {/* Map through carousel slides */}
            {carouselSlides.map((slide, index) => (
              <div
                className="relative flex-[0_0_100%] h-full"
                key={index}
              >
                {slide.type === "image" ? (
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video
                    src={slide.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
                {/* Dark overlay for text readability on all slides */}
                <div className="absolute inset-0 bg-black/40" />
              </div>
            ))}
          </div>
        </div>

        {/* Static Content Overlay (Text + Button) - as seen in screenshot */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-xl animate-fade-in">
            {/* Text from the screenshot */}
            <h1 className="font-serif text-white text-5xl md:text-6xl lg:text-5xl font-normal mb-8 leading-tight">
              Handcrafted masterpieces from the world's finest looms
            </h1>

            {/* Button from the screenshot */}
            <Button
              asChild
              size="lg"
              // Simple white button styling from screenshot
              className="
                bg-white text-gray-900 font-serif text-lg h-14 px-10 rounded-none
                hover:bg-gray-200 transition-colors
              "
            >
              <Link to="/shop">Shop Now</Link>
            </Button>
          </div>
        </div>
      </section>
      {/* --- END: Hero Section --- */}
      {/* --- END: Hero Section --- */}

      {/* Features Bar */}
      {/* <section className="py-8 bg-secondary border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="w-5 h-5 text-[#794299] flex-shrink-0" />
                <span className="font-body font-medium text-foreground">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

     {/* --- ✅ MODIFIED: Dual Care Services Section --- */}
 {/* --- ✅ MODIFIED: Dual Care Services Section --- */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          
          {/* 1. Main "SERVICES" Title */}
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-gray-800 uppercase tracking-wider">
              Services
            </h2>
          </div>

          {/* 2. Main 2-column grid (Carpet vs Shawl) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12 gap-y-16">
            
            {/* --- 3. CARPETS COLUMN (Left) --- */}
            <div>
              {/* Carpet Column Title */}
              <h3 className="font-serif text-3xl text-center font-medium text-gray-700 uppercase tracking-widest mb-8">
                Carpet
              </h3>
              
              {/* ✅ CHANGED: Carpet Main Image (rounded-2xl) */}
              <div className="relative h-96 w-full overflow-hidden rounded-2xl shadow-xl mb-12 animate-fade-in">
                <img
                  src={repairImg} // You can change this to your main carpet image
                  alt="Carpet Care"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Carpet Services Grid (2x2) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {carpetServices.map((service, index) => (
                  <InView
                    key={index}
                    triggerOnce
                    threshold={0.1}
                    rootMargin="0px 0px -50px 0px"
                  >
                    {({ ref, inView }) => (
                      // --- ✅ CHANGED: Card style (rounded-2xl) ---
                      <div
                        ref={ref}
                        className={`
                          group relative h-80 w-full overflow-hidden rounded-2xl shadow-lg cursor-pointer
                          transition-all duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
                          ${
                            inView
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-12"
                          }
                        `}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        {/* 1. Image (as background) */}
                        <img
                          src={service.image}
                          alt={service.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                        />
                        
                        {/* 2. Dark Overlay (for text readability) */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                        {/* 3. Content (relative to position elements) */}
                        <div className="relative z-10 flex flex-col justify-between h-full p-6">
                          {/* Badge (Top-left) - Styled like screenshot */}
                          {service.type && (
                            <div>
                              <span className="inline-block bg-[#794299] text-white px-4 py-1.5 rounded-full font-serif text-sm font-medium">
                                {service.type}
                              </span>
                            </div>
                          )}

                          {/* Title & Link (Bottom-left) - Styled like screenshot */}
                          <div className="transition-transform duration-500 group-hover:-translate-y-1">
                            <h3 className="font-serif text-3xl font-bold text-white mb-1 drop-shadow-md">
                              {service.title}
                            </h3>
                            
                            {/* Kept your original "View Details" link, appears on hover */}
                            <Link
                              to={service.linkTo}
                              className="inline-flex items-center text-accent hover:text-white font-medium transition-all duration-300 text-sm group-hover:gap-1 mt-0 opacity-0 group-hover:opacity-100"
                            >
                              View Details
                              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      // --- END NEW CARD STYLE ---
                    )}
                  </InView>
                ))}
              </div>
            </div> {/* End carpet column */}

            {/* --- 4. SHAWLS COLUMN (Right) --- */}
            <div>
              {/* Shawl Column Title */}
              <h3 className="font-serif text-3xl text-center font-medium text-gray-700 uppercase tracking-widest mb-8">
                Shawl
              </h3>
              
              {/* ✅ CHANGED: Shawl Main Image (rounded-2xl) */}
              <div className="relative h-96 w-full overflow-hidden rounded-2xl shadow-xl mb-12 animate-fade-in">
                <img
                  src={exchangeImg} // You can change this to your main shawl image
                  alt="Shawl Care"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Shawl Services Grid (2x2) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {shawlServices.map((service, index) => (
                  <InView
                    key={index}
                    triggerOnce
                    threshold={0.1}
                    rootMargin="0px 0px -50px 0px"
                  >
                    {({ ref, inView }) => (
                      // --- ✅ CHANGED: Card style (rounded-2xl) ---
                      <div
                        ref={ref}
                        className={`
                          group relative h-80 w-full overflow-hidden rounded-2xl shadow-lg cursor-pointer
                          transition-all duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
                          ${
                            inView
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-12"
                          }
                        `}
                        style={{
                          transitionDelay: `${
                            (carpetServices.length + index) * 100
                          }ms`,
                        }}
                      >
                        {/* 1. Image (as background) */}
                        <img
                          src={service.image}
                          alt={service.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                        />
                        
                        {/* 2. Dark Overlay (for text readability) */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                        {/* 3. Content (relative to position elements) */}
                        <div className="relative z-10 flex flex-col justify-between h-full p-6">
                          {/* Badge (Top-left) - Styled like screenshot */}
                          {service.type && (
                            <div>
                              <span className="inline-block bg-[#794299] text-white px-4 py-1.5 rounded-full font-serif text-sm font-medium">
                                {service.type}
                              </span>
                            </div>
                          )}

                          {/* Title & Link (Bottom-left) - Styled like screenshot */}
                          <div className="transition-transform duration-500 group-hover:-translate-y-1">
                            <h3 className="font-serif text-3xl font-bold text-white mb-1 drop-shadow-md">
                              {service.title}
                            </h3>
                            
                            {/* Kept your original "View Details" link, appears on hover */}
                            <Link
                              to={service.linkTo}
                              className="inline-flex items-center text-accent hover:text-white font-medium transition-all duration-300 text-sm group-hover:gap-1 mt-0 opacity-0 group-hover:opacity-100"
                            >
                              View Details
                              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      // --- END NEW CARD STYLE ---
                    )}
                  </InView>
                ))}
              </div>
            </div> {/* End shawl column */}
            
          </div> {/* End 2-column grid */}

          {/* 5. "View All" Button */}
          <div className="text-center mt-20 animate-fade-in">
            <Button
              asChild
              size="lg"
              className="bg-[#5A386D] hover:bg-[#62009b] text-lg px-8 mb-9 transition-all duration-200 ease-out transform hover:scale-[1.02]"
            >
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div> {/* End container */}
      </section>
      {/* --- END: Dual Care Services Section --- */}
      {/* --- END: Dual Care Services Section --- */}

      {/* Collections Section */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-2 sm:px-4 ">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <div className="inline-block mb-4">
              <SectionIcon />
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-[#5A386D]">
              Collections
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Beautifully crafted and ethically sourced, our handmade area rugs
              bring warmth, style, and authenticity to any space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* 2. Update Collections Section Card Mapping */}
            {collections.map((item, index) => (
              <InView
                key={index}
                triggerOnce
                threshold={0.1}
                rootMargin="0px 0px -50px 0px"
              >
                {({ ref, inView }) => (
                  <div
                    ref={ref}
                    className={`
                      group relative overflow-hidden rounded-lg cursor-pointer bg-card
                      shadow-soft hover:shadow-hover
                      transition-all duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] // Animation
                      ${
                        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                      } // Conditional animation styles
                    `}
                    style={{ transitionDelay: `${index * 100}ms` }} // Optional staggered delay
                  >
                    <div className="relative h-96 overflow-hidden">
                      {" "}
                      {/* Adjusted height */}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Darker gradient applied always for readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent pointer-events-none" />
                      {/* Text content absolutely positioned */}
                      <div className="absolute bottom-0 left-0 p-5 text-white w-full transition-transform duration-500 group-hover:-translate-y-1">
                        {/* Optional: Type Badge if needed */}
                        {item.type && (
                          <span className="inline-block px-3 py-1 bg-[#62009b]/80 backdrop-blur-sm rounded-full text-xs mb-2">
                            {item.type}
                          </span>
                        )}
                        <h3 className="font-display text-2xl font-bold drop-shadow-md">
                          {item.title}
                        </h3>
                        {/* Added WhatsApp link similar to CollectionCard */}
                        <a
                          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                            `Hi, I'm interested in ${item.title}. Can you provide more details?`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-accent hover:text-white font-medium transition-all duration-300 text-sm group-hover:gap-1 mt-2 opacity-0 group-hover:opacity-100"
                        >
                          View Details
                          <MessageCircle className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </InView>
            ))}
          </div>

          <div className="text-center animate-fade-in">
            <Button
              asChild
              size="lg"
              className="bg-[#5A386D] hover:bg-[#62009b] text-lg px-8 transition-all duration-200 ease-out transform hover:scale-[1.02]"
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
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-[#5A386D]">
              What Our Customers Say
            </h2>
            <p className="font-body text-lg text-[#7A4B7A] leading-relaxed">
              Real experiences from our valued clients who trust us with their
              precious textiles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* 2. Update Testimonials Section Card Mapping */}
            {testimonials.map((testimonial, index) => (
              <InView
                key={index}
                triggerOnce
                threshold={0.1}
                rootMargin="0px 0px -50px 0px"
              >
                {({ ref, inView }) => (
                  <div
                    ref={ref}
                    className={`
                      bg-card p-8 rounded-lg 
                      shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)]
                      transition-all duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] // Animation
                      ${
                        inView
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-12"
                      } // Conditional animation styles
                    `}
                    style={{ transitionDelay: `${index * 100}ms` }} // Optional staggered delay
                  >
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-[#794299] fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <p className="font-body text-foreground italic mb-6 leading-relaxed">
                      "{testimonial.review}"
                    </p>
                    <p className="font-display text-lg font-semibold text-[#8637b4]">
                      - {testimonial.name}
                    </p>
                  </div>
                )}
              </InView>
            ))}
          </div>

          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-secondary rounded-full">
              <svg
                className="w-5 h-5 text-[#794299]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
              <span className="font-body text-[#794299]">
                Watch customer testimonial videos on our social media
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="py-24 bg-white from-primary via-primary-dark to-primary relative overflow-hidden">
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
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#794299] mb-6">
                Book Your Free Design Consultation
              </h2>
              <p className="font-body text-lg text-[#7A4B7A]/90 mb-8 leading-relaxed">
                Come visit our beautiful showroom to see first hand our
                selection of beautiful rugs and carpets. Let our master
                craftsmen care for your precious textiles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#794299] hover:bg-[#62009b]/90 text-white text-lg px-8 transition-all duration-200 ease-out transform hover:scale-[1.02]"
                >
                  <Link to="/book-appointment">Book My Visit</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-[#794299] hover:bg-[#62009b]/90 text-white text-lg px-8 transition-all duration-200 ease-out transform hover:scale-[1.02]"
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
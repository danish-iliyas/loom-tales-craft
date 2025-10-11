import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  const faqs = [
    {
      question: "How often should I have my carpet professionally cleaned?",
      answer: "For most carpets in regular use, we recommend professional cleaning every 12-18 months. High-traffic areas or homes with pets may benefit from cleaning every 6-12 months. Antique or delicate carpets should be assessed individually, as over-cleaning can cause damage.",
    },
    {
      question: "What's the difference between your washing services?",
      answer: "We offer three main washing types: Hand Washing (gentle, traditional method ideal for delicate and antique pieces), Steam Cleaning (deep cleaning using hot water extraction, perfect for removing allergens and deep-seated dirt), and Dry Cleaning (chemical-based cleaning for sensitive materials that cannot tolerate water). Our experts will recommend the best method for your specific piece.",
    },
    {
      question: "Can you repair moth damage to my carpet?",
      answer: "Yes, we specialize in repairing moth damage. Our artisans can reweave damaged areas, matching the original pattern, color, and pile height. The extent of repair depends on the severity of the damage. We'll provide a detailed assessment and quote after examining your carpet.",
    },
    {
      question: "How long does the restoration process take?",
      answer: "Timeline varies based on the project's complexity. Simple cleaning typically takes 5-7 days. Minor repairs may require 2-3 weeks. Extensive restoration projects can take 4-8 weeks or longer. We'll provide an estimated timeline after assessing your piece and will keep you updated throughout the process.",
    },
    {
      question: "Do you offer pickup and delivery services?",
      answer: "Yes, we provide convenient pickup and delivery services within Jaipur and surrounding areas. For carpets and shawls outside our service area, we can arrange secure shipping. All items are carefully packaged and insured during transport.",
    },
    {
      question: "What should I do if I spill something on my carpet?",
      answer: "Act quickly! Blot (don't rub) the spill with a clean, white cloth to absorb as much liquid as possible. Avoid using harsh chemicals or colored cloths that might transfer dye. For valuable or antique pieces, contact us immediately for guidance. Some stains require professional treatment to prevent permanent damage.",
    },
    {
      question: "Can you match the original colors when repairing faded areas?",
      answer: "Our master dyers use traditional and modern techniques to achieve precise color matches. We maintain an extensive library of dye formulas and can recreate most colors accurately. In cases where exact matching is challenging, we can provide options for complementary repairs that maintain the piece's integrity.",
    },
    {
      question: "How do you determine the value of carpets for your sell/exchange program?",
      answer: "We consider multiple factors: age, origin, condition, materials, knot density, design complexity, and current market demand. Our experts provide fair, transparent valuations based on extensive market knowledge. We'll explain our assessment in detail and answer any questions about the valuation process.",
    },
    {
      question: "What's included in your wall hanging cleaning service?",
      answer: "Our specialized wall hanging service includes: safe removal from the wall, thorough cleaning using appropriate methods, treatment for any damage or wear, professional pressing, and expert re-hanging with proper mounting techniques. We ensure your wall hangings are securely displayed to prevent future damage.",
    },
    {
      question: "Do you work with insurance companies for damaged carpets?",
      answer: "Yes, we regularly work with insurance companies and can provide detailed documentation for claims, including photographs, condition reports, and itemized repair estimates. We're experienced in the insurance process and can help facilitate your claim.",
    },
    {
      question: "Can you clean carpets with pet stains and odors?",
      answer: "Absolutely. We use specialized enzymatic treatments and cleaning methods specifically designed to eliminate pet stains and odors. Our process doesn't just mask odors—it removes the source, preventing pets from remarking the same spot.",
    },
    {
      question: "What makes your restoration different from regular carpet cleaning?",
      answer: "Restoration goes far beyond cleaning. It involves structural repairs, reweaving damaged areas, color restoration, fringe repair or replacement, and sometimes complete reconstruction of damaged sections. Our artisans use traditional hand techniques and authentic materials to preserve the carpet's historical integrity and value.",
    },
    {
      question: "Do you offer custom carpet and shawl design services?",
      answer: "Yes! We work with master weavers who can create custom pieces based on your specifications. Whether you want to recreate a family heirloom, design something entirely new, or modify an existing pattern, we can bring your vision to life using traditional crafting techniques.",
    },
    {
      question: "How should I store my carpets and shawls when not in use?",
      answer: "Store carpets rolled (never folded) with acid-free tissue paper, wrapped in cotton sheets, in a cool, dry, dark place. Shawls should be stored flat or loosely folded with acid-free tissue between folds. Avoid plastic bags, as they trap moisture. Consider professional storage for valuable pieces.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, all major credit and debit cards, bank transfers, and digital payment methods including UPI, Google Pay, and PhonePe. For large restoration projects, we can discuss flexible payment plans.",
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
              Frequently Asked Questions
            </h1>
            <p className="font-body text-xl text-accent/90 leading-relaxed">
              Find answers to common questions about our services, processes, and carpet care best practices.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-lg shadow-[var(--shadow-soft)] px-6 border-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <AccordionTrigger className="font-display text-lg font-semibold text-foreground hover:text-primary py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Still Have Questions */}
            <div className="mt-16 p-8 bg-secondary rounded-lg text-center">
              <h2 className="font-display text-3xl font-bold mb-4 text-foreground">
                Still Have Questions?
              </h2>
              <p className="font-body text-lg text-muted-foreground mb-6 leading-relaxed">
                Can't find the answer you're looking for? Our team is here to help with personalized guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/+911234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary-dark text-primary-foreground font-body font-medium rounded-lg transition-all shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)]"
                >
                  WhatsApp Us
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body font-medium rounded-lg transition-all"
                >
                  Contact Form
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQs;

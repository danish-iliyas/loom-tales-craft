import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CollectionCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

const CollectionCard = ({ title, description, image, index }: CollectionCardProps) => {
  const whatsappNumber = "+911234567890";
  const message = encodeURIComponent(`Hi, I'm interested in ${title}. Can you provide more details?`);

  return (
    <div
      className="vintage-card group animate-fade-in"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="vintage-overlay opacity-50 group-hover:opacity-30 transition-opacity duration-500" />
        <Button
          asChild
          size="icon"
          className="absolute top-4 right-4 bg-accent hover:bg-accent-dark text-brown shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <a
            href={`https://wa.me/${whatsappNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact via WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
        </Button>
      </div>
      <div className="p-5 bg-card">
        <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
          {title}
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CollectionCard;

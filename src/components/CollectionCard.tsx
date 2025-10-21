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
      className="group animate-fade-in  overflow-hidden bg-stone-50 shadow-xl border border-stone-300"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden p-[10px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold mb-3 text-[#794299]">
          {title}
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>
        <a
          href={`https://wa.me/${whatsappNumber}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-[#794299] hover:text-[#62009b] font-medium transition-colors text-sm"
        >
          View Details
          <MessageCircle className="w-4 h-4 ml-2 " />
        </a>
      </div>
    </div>
  );
};

export default CollectionCard;

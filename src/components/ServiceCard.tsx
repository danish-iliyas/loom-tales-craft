import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

const ServiceCard = ({ title, description, image, index }: ServiceCardProps) => {
  return (
    <div
      className="group animate-fade-in bg-secondary/50 overflow-hidden"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold mb-3 text-primary">
          {title}
        </h3>
        <p className="font-body text-muted-foreground leading-relaxed mb-4 text-sm">
          {description}
        </p>
        <Link 
          to="/book-appointment" 
          className="inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors text-sm"
        >
          Book Now
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;

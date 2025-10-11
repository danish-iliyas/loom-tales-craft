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
      className="vintage-card group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="vintage-overlay opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
      </div>
      <div className="p-6 bg-card">
        <h3 className="font-display text-2xl font-semibold mb-3 text-foreground">
          {title}
        </h3>
        <p className="font-body text-muted-foreground leading-relaxed mb-6">
          {description}
        </p>
        <Button
          asChild
          variant="ghost"
          className="group/btn text-primary hover:text-primary-dark hover:bg-primary/5 p-0"
        >
          <Link to="/book-appointment" className="flex items-center gap-2">
            Book This Service
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;

import { Heart, MessageCircle, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PetCardProps {
  name: string;
  breed: string;
  species: string;
  age: string;
  traits: string[];
  imageUrl: string;
  ownerName: string;
  ownerAvatar: string;
  likes: number;
  comments: number;
}

const PetCard = ({
  name,
  breed,
  species,
  age,
  traits,
  imageUrl,
  ownerName,
  ownerAvatar,
  likes,
  comments,
}: PetCardProps) => {
  return (
    <article className="group rounded-2xl bg-card shadow-card overflow-hidden transition-all duration-300 hover:shadow-elevated hover:-translate-y-1">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
        
        {/* Pet Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-sm opacity-90">{breed} · {age}</p>
        </div>

        {/* Species Badge */}
        <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground border-0">
          {species}
        </Badge>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Personality Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {traits.map((trait) => (
            <Badge key={trait} variant="secondary" className="rounded-full text-xs">
              {trait}
            </Badge>
          ))}
        </div>

        {/* Owner & Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={ownerAvatar}
              alt={ownerName}
              className="h-8 w-8 rounded-full object-cover ring-2 ring-border"
            />
            <span className="text-sm font-medium text-muted-foreground">{ownerName}</span>
          </div>

          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" className="h-8 gap-1 px-2 text-muted-foreground hover:text-primary">
              <Heart className="h-4 w-4" />
              <span className="text-xs">{likes}</span>
            </Button>
            <Button variant="ghost" size="sm" className="h-8 gap-1 px-2 text-muted-foreground hover:text-primary">
              <MessageCircle className="h-4 w-4" />
              <span className="text-xs">{comments}</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PetCard;

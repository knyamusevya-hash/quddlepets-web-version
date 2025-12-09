import { Trophy, Clock, Users, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ChallengeCardProps {
  title: string;
  description: string;
  participants: number;
  daysLeft: number;
  imageUrl: string;
  isActive?: boolean;
}

const ChallengeCard = ({
  title,
  description,
  participants,
  daysLeft,
  imageUrl,
  isActive = false,
}: ChallengeCardProps) => {
  return (
    <div className="group relative rounded-2xl bg-card shadow-card overflow-hidden transition-all duration-300 hover:shadow-elevated">
      <div className="flex flex-col sm:flex-row">
        {/* Image */}
        <div className="relative w-full sm:w-40 h-40 sm:h-auto overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {isActive && (
            <Badge className="absolute top-3 left-3 bg-green-500 text-primary-foreground border-0 animate-pulse">
              <span className="mr-1 h-2 w-2 rounded-full bg-primary-foreground inline-block" />
              Live
            </Badge>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 p-4 sm:p-5">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-primary" />
              <h3 className="font-bold text-lg">{title}</h3>
            </div>
          </div>

          <p className="text-muted-foreground text-sm mb-4">{description}</p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{participants.toLocaleString()} participating</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{daysLeft} days left</span>
            </div>
          </div>

          <Button variant="default" size="sm" className="gap-1">
            Join Challenge
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;

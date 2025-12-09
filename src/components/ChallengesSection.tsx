import ChallengeCard from "./ChallengeCard";
import { Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const SAMPLE_CHALLENGES = [
  {
    id: 1,
    title: "Silly Sleepers",
    description: "Capture your pet's funniest sleeping positions! The most creative poses win special badges.",
    participants: 2341,
    daysLeft: 5,
    imageUrl: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=400&h=300&fit=crop",
    isActive: true,
  },
  {
    id: 2,
    title: "Zoomie Moments",
    description: "Show us your pet's craziest zoomies! Videos of pets running around like crazy welcome.",
    participants: 1856,
    daysLeft: 12,
    imageUrl: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop",
    isActive: true,
  },
  {
    id: 3,
    title: "Best Trick",
    description: "What's the coolest trick your pet can do? Share a video and amaze the community!",
    participants: 987,
    daysLeft: 3,
    imageUrl: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop",
    isActive: false,
  },
];

const ChallengesSection = () => {
  return (
    <section className="py-12 md:py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground flex items-center gap-2">
              <Trophy className="h-6 w-6 text-primary" />
              Pet Challenges
            </h2>
            <p className="text-muted-foreground mt-1">Join weekly themed challenges and win badges!</p>
          </div>
          <Button variant="outline" className="hidden sm:flex">
            All Challenges
          </Button>
        </div>

        {/* Challenges List */}
        <div className="grid gap-4">
          {SAMPLE_CHALLENGES.map((challenge, index) => (
            <div
              key={challenge.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ChallengeCard {...challenge} />
            </div>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-8 text-center sm:hidden">
          <Button variant="outline" className="w-full">
            View All Challenges
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;

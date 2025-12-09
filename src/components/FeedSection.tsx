import PetCard from "./PetCard";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const SAMPLE_PETS = [
  {
    id: 1,
    name: "Finn",
    breed: "Australian Shepherd",
    species: "Dog",
    age: "4 years old",
    traits: ["Playful", "Energetic", "Snow Lover"],
    imageUrl: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=600&fit=crop",
    ownerName: "Sarah M.",
    ownerAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    likes: 234,
    comments: 45,
  },
  {
    id: 2,
    name: "Whiskers",
    breed: "Maine Coon",
    species: "Cat",
    age: "3 years old",
    traits: ["Lazy", "Fluffy", "Curious"],
    imageUrl: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=600&fit=crop",
    ownerName: "Mike T.",
    ownerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    likes: 189,
    comments: 32,
  },
  {
    id: 3,
    name: "Benny",
    breed: "Holland Lop",
    species: "Rabbit",
    age: "2 years old",
    traits: ["Hoppy", "Gentle", "Treats Lover"],
    imageUrl: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=600&h=600&fit=crop",
    ownerName: "Emma L.",
    ownerAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    likes: 156,
    comments: 28,
  },
  {
    id: 4,
    name: "Max",
    breed: "Golden Retriever",
    species: "Dog",
    age: "5 years old",
    traits: ["Friendly", "Loyal", "Swimmer"],
    imageUrl: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&h=600&fit=crop",
    ownerName: "James K.",
    ownerAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    likes: 312,
    comments: 67,
  },
  {
    id: 5,
    name: "Luna",
    breed: "Siamese",
    species: "Cat",
    age: "1 year old",
    traits: ["Vocal", "Elegant", "Attention Seeker"],
    imageUrl: "https://images.unsplash.com/photo-1513245543132-31f507417b26?w=600&h=600&fit=crop",
    ownerName: "Anna P.",
    ownerAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    likes: 278,
    comments: 54,
  },
  {
    id: 6,
    name: "Charlie",
    breed: "Cockatiel",
    species: "Bird",
    age: "2 years old",
    traits: ["Singer", "Cheerful", "Cuddly"],
    imageUrl: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=600&h=600&fit=crop",
    ownerName: "David R.",
    ownerAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    likes: 145,
    comments: 23,
  },
];

const FeedSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              Trending Pets
            </h2>
            <p className="text-muted-foreground mt-1">Discover the cutest pets in our community</p>
          </div>
          <Button variant="outline" className="hidden sm:flex">
            View All
          </Button>
        </div>

        {/* Pet Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLE_PETS.map((pet, index) => (
            <div
              key={pet.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <PetCard {...pet} />
            </div>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-8 text-center sm:hidden">
          <Button variant="outline" className="w-full">
            View All Pets
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeedSection;

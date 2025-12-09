import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Dog, Cat, Bird, Rabbit } from "lucide-react";
import PetCard from "@/components/PetCard";

const SPECIES_FILTERS = [
  { name: "All Pets", icon: null, active: true },
  { name: "Dogs", icon: Dog, active: false },
  { name: "Cats", icon: Cat, active: false },
  { name: "Birds", icon: Bird, active: false },
  { name: "Rabbits", icon: Rabbit, active: false },
];

const SAMPLE_PETS = [
  {
    id: 1,
    name: "Buddy",
    breed: "Labrador",
    species: "Dog",
    age: "3 years old",
    traits: ["Friendly", "Active", "Ball Lover"],
    imageUrl: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=600&h=600&fit=crop",
    ownerName: "Tom H.",
    ownerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    likes: 445,
    comments: 89,
  },
  {
    id: 2,
    name: "Mochi",
    breed: "Scottish Fold",
    species: "Cat",
    age: "2 years old",
    traits: ["Sleepy", "Cuddly", "Food Obsessed"],
    imageUrl: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&h=600&fit=crop",
    ownerName: "Lisa C.",
    ownerAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    likes: 567,
    comments: 123,
  },
  {
    id: 3,
    name: "Rio",
    breed: "Blue & Gold Macaw",
    species: "Bird",
    age: "8 years old",
    traits: ["Talkative", "Colorful", "Dancer"],
    imageUrl: "https://images.unsplash.com/photo-1544923408-75c5cef46f14?w=600&h=600&fit=crop",
    ownerName: "Carlos M.",
    ownerAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    likes: 234,
    comments: 45,
  },
  {
    id: 4,
    name: "Cinnamon",
    breed: "Netherland Dwarf",
    species: "Rabbit",
    age: "1 year old",
    traits: ["Tiny", "Adorable", "Binky Expert"],
    imageUrl: "https://images.unsplash.com/photo-1535241749838-299c4c29b5d8?w=600&h=600&fit=crop",
    ownerName: "Mia K.",
    ownerAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    likes: 189,
    comments: 34,
  },
];

const Explore = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Search Section */}
        <section className="bg-secondary/30 py-8 md:py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-6">
              Explore Pets
            </h1>
            <div className="max-w-2xl mx-auto flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search by pet name, breed, or trait..."
                  className="pl-10 h-12 rounded-xl"
                />
              </div>
              <Button variant="outline" size="icon" className="h-12 w-12 rounded-xl">
                <Filter className="h-5 w-5" />
              </Button>
            </div>

            {/* Species Filters */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {SPECIES_FILTERS.map((filter) => (
                <Badge
                  key={filter.name}
                  variant={filter.active ? "default" : "secondary"}
                  className={`px-4 py-2 cursor-pointer rounded-full text-sm font-medium transition-all ${
                    filter.active ? "bg-primary text-primary-foreground" : "hover:bg-secondary/80"
                  }`}
                >
                  {filter.icon && <filter.icon className="h-4 w-4 mr-1" />}
                  {filter.name}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Explore;

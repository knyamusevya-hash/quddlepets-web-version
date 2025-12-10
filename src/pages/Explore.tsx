import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Dog, Cat, Bird, Rabbit, Fish, Turtle, Squirrel } from "lucide-react";
import PetCard from "@/components/PetCard";

const SPECIES_FILTERS = [
  { name: "All Pets", icon: null, key: "all" },
  { name: "Dogs", icon: Dog, key: "Dog" },
  { name: "Cats", icon: Cat, key: "Cat" },
  { name: "Birds", icon: Bird, key: "Bird" },
  { name: "Rabbits", icon: Rabbit, key: "Rabbit" },
  { name: "Fish", icon: Fish, key: "Fish" },
  { name: "Reptiles", icon: Turtle, key: "Reptile" },
  { name: "Small Pets", icon: Squirrel, key: "Small" },
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
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPets = SAMPLE_PETS.filter(pet => {
    const matchesFilter = activeFilter === "all" || pet.species === activeFilter;
    const matchesSearch = pet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          pet.breed.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          pet.traits.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" size="icon" className="h-12 w-12 rounded-xl">
                <Filter className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {SPECIES_FILTERS.map((filter) => {
                const IconComponent = filter.icon;
                return (
                  <Badge
                    key={filter.key}
                    variant={activeFilter === filter.key ? "default" : "secondary"}
                    className={`px-4 py-2 cursor-pointer rounded-full text-sm font-medium transition-all ${
                      activeFilter === filter.key ? "bg-primary text-primary-foreground" : "hover:bg-secondary/80"
                    }`}
                    onClick={() => setActiveFilter(filter.key)}
                  >
                    {IconComponent && <IconComponent className="h-4 w-4 mr-1" />}
                    {filter.name}
                  </Badge>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <p className="text-sm text-muted-foreground mb-4">{filteredPets.length} pets found</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredPets.map((pet, index) => (
                <div
                  key={pet.id}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <PetCard {...pet} />
                </div>
              ))}
            </div>
            {filteredPets.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                <p>No pets found matching your criteria</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Explore;
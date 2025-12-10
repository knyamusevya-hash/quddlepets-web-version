import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Camera, Edit, MapPin, Calendar, MessageCircle, Heart, 
  PlusCircle, Dog, Cat, Bird, Flower2, Settings, User
} from "lucide-react";
import { toast } from "sonner";

const MY_PETS = [
  {
    id: 1,
    name: "Finn",
    breed: "Australian Shepherd",
    age: "4 years old",
    imageUrl: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop",
    species: "Dog",
  },
  {
    id: 2,
    name: "Whiskers",
    breed: "Maine Coon",
    age: "3 years old",
    imageUrl: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=400&h=400&fit=crop",
    species: "Cat",
  },
];

const REMEMBERED_PETS = [
  {
    id: 1,
    name: "Max",
    breed: "Golden Retriever",
    years: "2008 - 2022",
    imageUrl: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop",
    tribute: "Forever in our hearts. The best boy who loved belly rubs and chasing squirrels.",
  },
];

const PetParent = () => {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isAddPetDialogOpen, setIsAddPetDialogOpen] = useState(false);
  const [ownerName, setOwnerName] = useState("Sarah Mitchell");
  const [location, setLocation] = useState("Colorado, USA");
  const [bio, setBio] = useState("Pet mom of 2 fur babies 🐾 Nature lover and weekend hiker. Always looking for new dog parks to explore!");

  const handleSaveProfile = () => {
    toast.success("Profile updated successfully!");
    setIsEditDialogOpen(false);
  };

  const handleAddPet = () => {
    toast.success("Pet added successfully!");
    setIsAddPetDialogOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Profile Header */}
        <section className="relative">
          <div className="h-48 md:h-64 bg-gradient-to-r from-accent to-primary relative">
            <Button variant="ghost" size="icon" className="absolute bottom-4 right-4 bg-card/80 hover:bg-card">
              <Camera className="h-5 w-5" />
            </Button>
          </div>

          <div className="container mx-auto px-4">
            <div className="relative -mt-16 md:-mt-20 flex flex-col md:flex-row items-start md:items-end gap-4 pb-6">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
                  alt={ownerName}
                  className="h-32 w-32 md:h-40 md:w-40 rounded-full border-4 border-card object-cover shadow-elevated"
                />
                <Button variant="default" size="icon" className="absolute bottom-2 right-2 h-8 w-8 rounded-full">
                  <Camera className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="text-3xl font-extrabold">{ownerName}</h1>
                  <Badge variant="secondary" className="rounded-full">Pet Parent</Badge>
                </div>
                <p className="text-muted-foreground mt-1">{bio}</p>
                
                <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Joined Jan 2020
                  </span>
                  <span className="flex items-center gap-1">
                    <Dog className="h-4 w-4" />
                    {MY_PETS.length} Pets
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <Link to="/quddlebuddy">
                  <Button variant="default" size="sm">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    QuddleBuddy
                  </Button>
                </Link>
                <Button variant="outline" size="sm" onClick={() => setIsEditDialogOpen(true)}>
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
                <Button variant="ghost" size="icon">
                  <Settings className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-6">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="pets" className="w-full">
              <TabsList className="w-full justify-start bg-transparent border-b border-border rounded-none h-auto p-0 mb-6">
                <TabsTrigger value="pets" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3 gap-2">
                  <Dog className="h-4 w-4" />
                  My Pets
                </TabsTrigger>
                <TabsTrigger value="remembrance" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3 gap-2">
                  <Flower2 className="h-4 w-4" />
                  Remembrance
                </TabsTrigger>
                <TabsTrigger value="likes" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3 gap-2">
                  <Heart className="h-4 w-4" />
                  Likes
                </TabsTrigger>
              </TabsList>

              <TabsContent value="pets">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {MY_PETS.map((pet, index) => (
                    <Link to="/profile" key={pet.id}>
                      <Card className="group cursor-pointer overflow-hidden hover:shadow-elevated transition-all duration-300 animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                        <div className="aspect-square overflow-hidden">
                          <img
                            src={pet.imageUrl}
                            alt={pet.name}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <CardContent className="p-4">
                          <div className="flex items-center gap-2">
                            <h3 className="font-bold text-lg">{pet.name}</h3>
                            <Badge variant="secondary" className="rounded-full text-xs">
                              {pet.species}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{pet.breed} · {pet.age}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                  
                  {/* Add Pet Card */}
                  <Card 
                    className="group cursor-pointer border-dashed hover:border-primary transition-all duration-300 animate-fade-up" 
                    style={{ animationDelay: `${MY_PETS.length * 100}ms` }}
                    onClick={() => setIsAddPetDialogOpen(true)}
                  >
                    <div className="aspect-square flex flex-col items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">
                      <PlusCircle className="h-16 w-16 mb-4" />
                      <span className="font-medium">Add New Pet</span>
                    </div>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="remembrance">
                <div className="max-w-3xl mx-auto">
                  <div className="text-center mb-8">
                    <Flower2 className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h2 className="text-2xl font-bold mb-2">In Loving Memory</h2>
                    <p className="text-muted-foreground">A place to honor and remember our beloved companions who have crossed the rainbow bridge.</p>
                  </div>

                  <div className="space-y-6">
                    {REMEMBERED_PETS.map((pet, index) => (
                      <Card key={pet.id} className="overflow-hidden animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-48 h-48 md:h-auto overflow-hidden">
                            <img
                              src={pet.imageUrl}
                              alt={pet.name}
                              className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                          </div>
                          <CardContent className="flex-1 p-6">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-xl font-bold">{pet.name}</h3>
                              <Heart className="h-5 w-5 text-primary fill-primary" />
                            </div>
                            <p className="text-muted-foreground mb-2">{pet.breed} · {pet.years}</p>
                            <p className="italic text-muted-foreground">"{pet.tribute}"</p>
                          </CardContent>
                        </div>
                      </Card>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full mt-6">
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Add Remembrance
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="likes">
                <div className="text-center py-12 text-muted-foreground">
                  <Heart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Posts you've liked will appear here</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />

      {/* Edit Profile Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>Update your pet parent profile information.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={ownerName} onChange={(e) => setOwnerName(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" value={location} onChange={(e) => setLocation(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea id="bio" value={bio} onChange={(e) => setBio(e.target.value)} rows={3} />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSaveProfile}>Save Changes</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add Pet Dialog */}
      <Dialog open={isAddPetDialogOpen} onOpenChange={setIsAddPetDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Pet</DialogTitle>
            <DialogDescription>Add a new pet to your profile.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="petName">Pet Name</Label>
              <Input id="petName" placeholder="Enter pet name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="species">Species</Label>
              <Input id="species" placeholder="Dog, Cat, Bird, etc." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="breed">Breed</Label>
              <Input id="breed" placeholder="Enter breed" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input id="age" placeholder="e.g., 2 years old" />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsAddPetDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleAddPet}>Add Pet</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PetParent;
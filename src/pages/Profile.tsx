import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Edit, MapPin, Calendar, Award, Heart, Image, Video, Settings } from "lucide-react";

const MILESTONES = [
  { id: 1, title: "First Birthday", date: "March 15, 2021", icon: "🎂" },
  { id: 2, title: "Adoption Day", date: "January 10, 2020", icon: "🏠" },
  { id: 3, title: "Learned Sit", date: "February 20, 2020", icon: "🏆" },
  { id: 4, title: "First Snow Day", date: "December 5, 2020", icon: "❄️" },
];

const PHOTOS = [
  "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?w=400&h=400&fit=crop",
];

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Profile Header */}
        <section className="relative">
          {/* Cover Image */}
          <div className="h-48 md:h-64 bg-gradient-to-r from-primary to-accent relative">
            <Button variant="ghost" size="icon" className="absolute bottom-4 right-4 bg-card/80 hover:bg-card">
              <Camera className="h-5 w-5" />
            </Button>
          </div>

          <div className="container mx-auto px-4">
            <div className="relative -mt-16 md:-mt-20 flex flex-col md:flex-row items-start md:items-end gap-4 pb-6">
              {/* Pet Avatar */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=200&h=200&fit=crop"
                  alt="Finn"
                  className="h-32 w-32 md:h-40 md:w-40 rounded-full border-4 border-card object-cover shadow-elevated"
                />
                <Button variant="default" size="icon" className="absolute bottom-2 right-2 h-8 w-8 rounded-full">
                  <Camera className="h-4 w-4" />
                </Button>
              </div>

              {/* Pet Info */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="text-3xl font-extrabold">Finn</h1>
                  <Badge variant="secondary" className="rounded-full">Dog</Badge>
                </div>
                <p className="text-muted-foreground mt-1">Australian Shepherd · 4 years old</p>
                
                <div className="flex flex-wrap gap-2 mt-3">
                  {["Playful", "Energetic", "Snow Lover", "Zoomie King"].map((trait) => (
                    <Badge key={trait} className="bg-primary/10 text-primary border-0 rounded-full">
                      {trait}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
                <Button variant="ghost" size="icon">
                  <Settings className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Owner Info */}
            <div className="flex items-center gap-4 pb-6 border-b border-border">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                alt="Sarah"
                className="h-10 w-10 rounded-full object-cover ring-2 ring-border"
              />
              <div>
                <p className="font-medium">Pet Parent: Sarah M.</p>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    Colorado, USA
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    Joined Jan 2020
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Tabs */}
        <section className="py-6">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="photos" className="w-full">
              <TabsList className="w-full justify-start bg-transparent border-b border-border rounded-none h-auto p-0 mb-6">
                <TabsTrigger value="photos" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3 gap-2">
                  <Image className="h-4 w-4" />
                  Photos
                </TabsTrigger>
                <TabsTrigger value="videos" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3 gap-2">
                  <Video className="h-4 w-4" />
                  Videos
                </TabsTrigger>
                <TabsTrigger value="milestones" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3 gap-2">
                  <Award className="h-4 w-4" />
                  Milestones
                </TabsTrigger>
                <TabsTrigger value="likes" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3 gap-2">
                  <Heart className="h-4 w-4" />
                  Likes
                </TabsTrigger>
              </TabsList>

              <TabsContent value="photos">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {PHOTOS.map((photo, index) => (
                    <div
                      key={index}
                      className="aspect-square rounded-xl overflow-hidden group cursor-pointer animate-fade-up"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <img
                        src={photo}
                        alt={`Finn photo ${index + 1}`}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="videos">
                <div className="text-center py-12 text-muted-foreground">
                  <Video className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No videos uploaded yet</p>
                  <Button variant="default" className="mt-4">
                    Upload Video
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="milestones">
                <div className="max-w-2xl mx-auto">
                  <div className="relative">
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
                    {MILESTONES.map((milestone, index) => (
                      <div
                        key={milestone.id}
                        className="relative pl-16 pb-8 animate-fade-up"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="absolute left-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-2xl">
                          {milestone.icon}
                        </div>
                        <div className="bg-card rounded-xl p-4 shadow-card">
                          <h4 className="font-bold">{milestone.title}</h4>
                          <p className="text-sm text-muted-foreground">{milestone.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full">
                    Add Milestone
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
    </div>
  );
};

export default Profile;

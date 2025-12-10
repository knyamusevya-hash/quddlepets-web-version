import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, Send, Phone, Video, MapPin, Dog, Cat, Bird, 
  Filter, MessageCircle, Users, Heart, Smile
} from "lucide-react";
import { toast } from "sonner";

const USERS = [
  {
    id: 1,
    name: "Tom Henderson",
    location: "Denver, CO",
    pets: ["Buddy - Labrador"],
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    lastMessage: "Would love to set up a playdate!",
    online: true,
  },
  {
    id: 2,
    name: "Lisa Chen",
    location: "Boulder, CO",
    pets: ["Mochi - Scottish Fold"],
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    lastMessage: "Thanks for the cat cafe recommendation!",
    online: true,
  },
  {
    id: 3,
    name: "Carlos Martinez",
    location: "Aurora, CO",
    pets: ["Rio - Macaw"],
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    lastMessage: "Rio learned a new word today!",
    online: false,
  },
  {
    id: 4,
    name: "Mia Kim",
    location: "Fort Collins, CO",
    pets: ["Cinnamon - Dwarf Rabbit"],
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    lastMessage: "The bunny meetup was so fun!",
    online: false,
  },
];

const MESSAGES = [
  { id: 1, sender: "them", text: "Hey! I saw your post about Finn's hiking adventure!", time: "10:30 AM" },
  { id: 2, sender: "me", text: "Yes! He loved the mountain trail. Where do you usually take Buddy?", time: "10:32 AM" },
  { id: 3, sender: "them", text: "We usually go to Cherry Creek Dog Park. It's great for labs!", time: "10:35 AM" },
  { id: 4, sender: "me", text: "Oh nice! We should set up a playdate sometime 🐕", time: "10:36 AM" },
  { id: 5, sender: "them", text: "Would love to set up a playdate!", time: "10:38 AM" },
];

const PET_EMOJIS = ["🐕", "🐈", "🐦", "🐰", "🐾", "🦮", "🐕‍🦺", "🐩", "🐈‍⬛", "🦜", "❤️", "😊", "😂", "🥰", "👋"];

const QuddleBuddy = () => {
  const [selectedUser, setSelectedUser] = useState(USERS[0]);
  const [message, setMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showEmojis, setShowEmojis] = useState(false);

  const handleSendMessage = () => {
    if (message.trim()) {
      toast.success("Message sent!");
      setMessage("");
    }
  };

  const filteredUsers = USERS.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.pets.some(pet => pet.toLowerCase().includes(searchQuery.toLowerCase())) ||
    user.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-extrabold">QuddleBuddy</h1>
            <p className="text-muted-foreground">Connect with fellow pet parents</p>
          </div>
          <Button variant="outline">
            <MapPin className="h-4 w-4 mr-2" />
            Find Playdates
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-280px)]">
          {/* Users List */}
          <Card className="lg:col-span-1 overflow-hidden">
            <div className="p-4 border-b border-border">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, pet, breed, location..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-2 mt-3">
                <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
                  <Dog className="h-3 w-3 mr-1" /> Dogs
                </Badge>
                <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
                  <Cat className="h-3 w-3 mr-1" /> Cats
                </Badge>
                <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
                  <Bird className="h-3 w-3 mr-1" /> Birds
                </Badge>
              </div>
            </div>
            <ScrollArea className="h-[calc(100%-120px)]">
              {filteredUsers.map((user) => (
                <div
                  key={user.id}
                  className={`flex items-center gap-3 p-4 cursor-pointer transition-colors hover:bg-secondary/50 ${
                    selectedUser.id === user.id ? "bg-secondary" : ""
                  }`}
                  onClick={() => setSelectedUser(user)}
                >
                  <div className="relative">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>
                    {user.online && (
                      <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-card" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold truncate">{user.name}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground truncate">{user.pets[0]}</p>
                    <p className="text-sm text-muted-foreground truncate">{user.lastMessage}</p>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </Card>

          {/* Chat Area */}
          <Card className="lg:col-span-2 flex flex-col overflow-hidden">
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={selectedUser.avatar} alt={selectedUser.name} />
                  <AvatarFallback>{selectedUser.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{selectedUser.name}</h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {selectedUser.location}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <Phone className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Video className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {MESSAGES.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                        msg.sender === "me"
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary"
                      }`}
                    >
                      <p>{msg.text}</p>
                      <p className={`text-xs mt-1 ${
                        msg.sender === "me" ? "text-primary-foreground/70" : "text-muted-foreground"
                      }`}>
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Emoji Picker */}
            {showEmojis && (
              <div className="p-2 border-t border-border flex flex-wrap gap-2">
                {PET_EMOJIS.map((emoji) => (
                  <button
                    key={emoji}
                    className="text-2xl hover:scale-125 transition-transform"
                    onClick={() => {
                      setMessage(prev => prev + emoji);
                      setShowEmojis(false);
                    }}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowEmojis(!showEmojis)}
                >
                  <Smile className="h-5 w-5" />
                </Button>
                <Input
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default QuddleBuddy;
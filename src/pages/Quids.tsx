import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  Heart, MessageCircle, Share2, Bookmark, Play, Pause, 
  Volume2, VolumeX, ChevronUp, ChevronDown, Plus
} from "lucide-react";
import { toast } from "sonner";

const REELS = [
  {
    id: 1,
    videoUrl: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=1000&fit=crop",
    petName: "Finn",
    ownerName: "Sarah M.",
    ownerAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    caption: "Finn's first snow day! ❄️🐕 #ZoomieKing #SnowDay",
    likes: 2345,
    comments: 189,
    shares: 45,
    isLiked: false,
    isBookmarked: false,
  },
  {
    id: 2,
    videoUrl: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&h=1000&fit=crop",
    petName: "Mochi",
    ownerName: "Lisa C.",
    ownerAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    caption: "When the treats come out 😸 #CatLife #Treats",
    likes: 5678,
    comments: 423,
    shares: 112,
    isLiked: true,
    isBookmarked: false,
  },
  {
    id: 3,
    videoUrl: "https://images.unsplash.com/photo-1544923408-75c5cef46f14?w=600&h=1000&fit=crop",
    petName: "Rio",
    ownerName: "Carlos M.",
    ownerAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    caption: "Rio singing his morning song 🎵🦜 #ParrotLife #MorningVibes",
    likes: 3421,
    comments: 234,
    shares: 89,
    isLiked: false,
    isBookmarked: true,
  },
  {
    id: 4,
    videoUrl: "https://images.unsplash.com/photo-1535241749838-299c4c29b5d8?w=600&h=1000&fit=crop",
    petName: "Cinnamon",
    ownerName: "Mia K.",
    ownerAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    caption: "Binky time! 🐰✨ #BunnyBinkies #HappyBunny",
    likes: 4532,
    comments: 312,
    shares: 67,
    isLiked: false,
    isBookmarked: false,
  },
];

const Quids = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [reels, setReels] = useState(REELS);

  const currentReel = reels[currentIndex];

  const goToNext = () => {
    if (currentIndex < reels.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const toggleLike = () => {
    setReels(prev => prev.map((reel, i) => 
      i === currentIndex 
        ? { ...reel, isLiked: !reel.isLiked, likes: reel.isLiked ? reel.likes - 1 : reel.likes + 1 }
        : reel
    ));
  };

  const toggleBookmark = () => {
    setReels(prev => prev.map((reel, i) => 
      i === currentIndex ? { ...reel, isBookmarked: !reel.isBookmarked } : reel
    ));
    toast.success(currentReel.isBookmarked ? "Removed from saved" : "Saved!");
  };

  const handleShare = () => {
    toast.success("Share link copied!");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center py-6">
        <div className="relative w-full max-w-md mx-auto">
          {/* Title */}
          <div className="text-center mb-4">
            <h1 className="text-2xl font-extrabold flex items-center justify-center gap-2">
              <span className="text-primary">Quids</span>
              <Badge variant="secondary" className="rounded-full">Video Reels</Badge>
            </h1>
          </div>

          {/* Reel Container */}
          <div className="relative aspect-[9/16] rounded-3xl overflow-hidden bg-secondary shadow-elevated">
            {/* Video/Image */}
            <img
              src={currentReel.videoUrl}
              alt={currentReel.petName}
              className="h-full w-full object-cover"
            />

            {/* Play/Pause Overlay */}
            <button
              className="absolute inset-0 flex items-center justify-center"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {!isPlaying && (
                <div className="h-20 w-20 rounded-full bg-background/30 backdrop-blur-sm flex items-center justify-center">
                  <Play className="h-10 w-10 text-primary-foreground fill-primary-foreground ml-1" />
                </div>
              )}
            </button>

            {/* Bottom Gradient */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background/90 to-transparent" />

            {/* Content Overlay */}
            <div className="absolute inset-x-0 bottom-0 p-4">
              {/* Owner Info */}
              <div className="flex items-center gap-3 mb-3">
                <Avatar className="h-10 w-10 ring-2 ring-primary">
                  <AvatarImage src={currentReel.ownerAvatar} alt={currentReel.ownerName} />
                  <AvatarFallback>{currentReel.ownerName[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-semibold text-primary-foreground">{currentReel.ownerName}</p>
                  <p className="text-sm text-primary-foreground/80">{currentReel.petName}</p>
                </div>
                <Button size="sm" variant="default">
                  <Plus className="h-4 w-4 mr-1" /> Follow
                </Button>
              </div>

              {/* Caption */}
              <p className="text-sm text-primary-foreground mb-2">{currentReel.caption}</p>

              {/* Progress Indicators */}
              <div className="flex gap-1 mb-2">
                {reels.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1 flex-1 rounded-full transition-all ${
                      idx === currentIndex ? "bg-primary" : idx < currentIndex ? "bg-primary/50" : "bg-primary-foreground/30"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Side Actions */}
            <div className="absolute right-4 bottom-1/3 flex flex-col gap-4">
              <button 
                className="flex flex-col items-center gap-1"
                onClick={toggleLike}
              >
                <div className={`h-12 w-12 rounded-full bg-background/30 backdrop-blur-sm flex items-center justify-center ${
                  currentReel.isLiked ? "text-red-500" : "text-primary-foreground"
                }`}>
                  <Heart className={`h-6 w-6 ${currentReel.isLiked ? "fill-current" : ""}`} />
                </div>
                <span className="text-xs text-primary-foreground font-medium">
                  {currentReel.likes.toLocaleString()}
                </span>
              </button>

              <button className="flex flex-col items-center gap-1">
                <div className="h-12 w-12 rounded-full bg-background/30 backdrop-blur-sm flex items-center justify-center text-primary-foreground">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <span className="text-xs text-primary-foreground font-medium">
                  {currentReel.comments}
                </span>
              </button>

              <button 
                className="flex flex-col items-center gap-1"
                onClick={handleShare}
              >
                <div className="h-12 w-12 rounded-full bg-background/30 backdrop-blur-sm flex items-center justify-center text-primary-foreground">
                  <Share2 className="h-6 w-6" />
                </div>
                <span className="text-xs text-primary-foreground font-medium">
                  {currentReel.shares}
                </span>
              </button>

              <button 
                className="flex flex-col items-center gap-1"
                onClick={toggleBookmark}
              >
                <div className={`h-12 w-12 rounded-full bg-background/30 backdrop-blur-sm flex items-center justify-center ${
                  currentReel.isBookmarked ? "text-primary" : "text-primary-foreground"
                }`}>
                  <Bookmark className={`h-6 w-6 ${currentReel.isBookmarked ? "fill-current" : ""}`} />
                </div>
              </button>

              <button onClick={() => setIsMuted(!isMuted)}>
                <div className="h-12 w-12 rounded-full bg-background/30 backdrop-blur-sm flex items-center justify-center text-primary-foreground">
                  {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
                </div>
              </button>
            </div>

            {/* Navigation */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full bg-background/30 backdrop-blur-sm text-primary-foreground hover:bg-background/50"
                onClick={goToPrev}
                disabled={currentIndex === 0}
              >
                <ChevronUp className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full bg-background/30 backdrop-blur-sm text-primary-foreground hover:bg-background/50"
                onClick={goToNext}
                disabled={currentIndex === reels.length - 1}
              >
                <ChevronDown className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Upload Button */}
          <div className="text-center mt-4">
            <Button variant="hero" size="lg">
              <Plus className="h-5 w-5 mr-2" />
              Upload Your Quid
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Quids;
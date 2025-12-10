import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface PhotoCarouselProps {
  photos: string[];
  petName: string;
}

const PhotoCarousel = ({ photos, petName }: PhotoCarouselProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openLightbox = (photo: string, index: number) => {
    setSelectedPhoto(photo);
    setSelectedIndex(index);
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    const newIndex = direction === "prev" 
      ? (selectedIndex - 1 + photos.length) % photos.length
      : (selectedIndex + 1) % photos.length;
    setSelectedIndex(newIndex);
    setSelectedPhoto(photos[newIndex]);
  };

  return (
    <>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {photos.map((photo, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3">
              <div
                className="aspect-square rounded-xl overflow-hidden group cursor-pointer"
                onClick={() => openLightbox(photo, index)}
              >
                <img
                  src={photo}
                  alt={`${petName} photo ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
          <div className="relative">
            <button
              className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors"
              onClick={() => setSelectedPhoto(null)}
            >
              <X className="h-5 w-5" />
            </button>
            
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors"
              onClick={() => navigateLightbox("prev")}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors"
              onClick={() => navigateLightbox("next")}
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <img
              src={selectedPhoto || ""}
              alt={`${petName} photo ${selectedIndex + 1}`}
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
            />

            {/* Thumbnail Strip */}
            <div className="flex justify-center gap-2 mt-4 px-4">
              {photos.map((photo, index) => (
                <button
                  key={index}
                  className={`h-12 w-12 rounded-lg overflow-hidden transition-all ${
                    index === selectedIndex ? "ring-2 ring-primary scale-110" : "opacity-60 hover:opacity-100"
                  }`}
                  onClick={() => {
                    setSelectedIndex(index);
                    setSelectedPhoto(photo);
                  }}
                >
                  <img
                    src={photo}
                    alt={`Thumbnail ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PhotoCarousel;
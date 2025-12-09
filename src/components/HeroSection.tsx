import { Button } from "@/components/ui/button";
import { Heart, Camera, Trophy, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden gradient-hero py-16 md:py-24">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/20 px-4 py-2 text-sm font-semibold text-primary-foreground backdrop-blur-sm animate-fade-up">
            <Heart className="h-4 w-4 fill-current" />
            <span>The Pet-Centric Social Network</span>
          </div>

          {/* Main Headline */}
          <h1 className="mb-6 text-4xl font-extrabold text-primary-foreground md:text-5xl lg:text-6xl animate-fade-up" style={{ animationDelay: "100ms" }}>
            Share & Celebrate
            <br />
            <span className="relative">
              Your Pet!
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 8C50 2 150 2 198 8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="opacity-50" />
              </svg>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mb-8 max-w-xl text-lg text-primary-foreground/90 animate-fade-up" style={{ animationDelay: "200ms" }}>
            Create pet-centric profiles, upload photos and videos, tag your pet's breed and personality, celebrate milestones, and join weekly challenges!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-up" style={{ animationDelay: "300ms" }}>
            <Button variant="warm" size="xl" className="shadow-elevated">
              <Camera className="mr-2 h-5 w-5" />
              Create Pet Profile
            </Button>
            <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              Explore Pets
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 text-primary-foreground animate-fade-up" style={{ animationDelay: "400ms" }}>
            <div className="text-center">
              <div className="text-3xl font-extrabold md:text-4xl">50K+</div>
              <div className="text-sm opacity-80">Happy Pets</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold md:text-4xl">120K</div>
              <div className="text-sm opacity-80">Pet Photos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold md:text-4xl">25K</div>
              <div className="text-sm opacity-80">Pet Parents</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating icons */}
      <div className="absolute top-20 left-10 hidden lg:block animate-float">
        <div className="rounded-2xl bg-primary-foreground/20 p-3 backdrop-blur-sm">
          <Trophy className="h-6 w-6 text-primary-foreground" />
        </div>
      </div>
      <div className="absolute bottom-20 right-10 hidden lg:block animate-float" style={{ animationDelay: "1s" }}>
        <div className="rounded-2xl bg-primary-foreground/20 p-3 backdrop-blur-sm">
          <Users className="h-6 w-6 text-primary-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

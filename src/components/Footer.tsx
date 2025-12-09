import { Heart } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="QuddlePets" className="h-10 w-10 rounded-full object-cover" />
              <span className="text-xl font-extrabold text-accent">QuddlePets</span>
            </div>
            <p className="text-muted-foreground text-sm">
              The pet-centric social network where your furry friends are the stars.
            </p>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Features</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">Pet Profiles</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Photo & Video Upload</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Pet Challenges</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Milestones</li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">QuddleBuddy</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Pet Playdates</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Remembrance</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Guidelines</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">Help Center</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Contact Us</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Terms of Service</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 QuddlePets. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-primary fill-primary" /> for pets everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

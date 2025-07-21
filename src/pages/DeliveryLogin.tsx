import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageAnimation } from "@/hooks/use-page-animation";
import deliveryPartnerHero from "@/assets/delivery-partner-hero.jpg";

// Preload the hero image for instant loading
const preloadImage = new Image();
preloadImage.src = deliveryPartnerHero;

const DeliveryLogin = () => {
  const isVisible = usePageAnimation(1000);

  return (
    <div 
      className={`min-h-screen relative flex items-center justify-center p-4 bg-cover bg-center transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${deliveryPartnerHero})`,
      }}
    >
      <div className="w-full max-w-md">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
        
        <div className="bg-card/90 backdrop-blur-sm rounded-lg shadow-elegant p-8 border border-white/20">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-foreground mb-2">Delivery Partner Login</h1>
            <p className="text-muted-foreground">Sign in to start delivering</p>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <Input
                type="email"
                placeholder="Enter your email address"
                className="transition-all duration-200 focus:scale-105"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Password
              </label>
              <Input
                type="password"
                placeholder="Enter your password"
                className="transition-all duration-200 focus:scale-105"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Partner Code
              </label>
              <Input
                type="text"
                placeholder="Enter your partner code"
                className="transition-all duration-200 focus:scale-105"
              />
            </div>
            
            <Link to="/delivery-dashboard">
              <Button variant="delivery" size="lg" className="w-full transition-all duration-200 hover:scale-105">
                Start Delivering
              </Button>
            </Link>
            
            <div className="text-center">
              <a href="#" className="text-sm text-secondary hover:underline">
                Forgot your password?
              </a>
            </div>
            
            <div className="text-center border-t pt-6">
              <p className="text-sm text-muted-foreground mb-4">
                Want to become a delivery partner?
              </p>
              <Button variant="outline" size="lg" className="w-full">
                Join Our Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryLogin;
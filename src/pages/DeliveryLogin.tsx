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
        
        <div className="bg-card/95 backdrop-blur-md rounded-xl shadow-elegant p-8 lg:p-10 border border-white/20 animate-scale-in">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-3">Delivery Partner Login</h1>
            <p className="text-muted-foreground text-lg">Sign in to start delivering</p>
          </div>
          
          <div className="space-y-6">
            <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
              <label className="block text-sm font-semibold text-foreground mb-3">
                Email Address
              </label>
              <Input
                type="email"
                placeholder="Enter your email address"
                className="transition-all duration-200 focus:scale-[1.02] h-12 text-base"
              />
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
              <label className="block text-sm font-semibold text-foreground mb-3">
                Password
              </label>
              <Input
                type="password"
                placeholder="Enter your password"
                className="transition-all duration-200 focus:scale-[1.02] h-12 text-base"
              />
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '400ms' }}>
              <label className="block text-sm font-semibold text-foreground mb-3">
                Partner Code
              </label>
              <Input
                type="text"
                placeholder="Enter your partner code"
                className="transition-all duration-200 focus:scale-[1.02] h-12 text-base"
              />
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '500ms' }}>
              <Link to="/delivery-dashboard">
                <Button variant="delivery" size="xl" className="w-full transition-all duration-300 hover:scale-[1.03] font-bold text-base">
                  Start Delivering
                </Button>
              </Link>
            </div>
            
            <div className="text-center animate-slide-up" style={{ animationDelay: '600ms' }}>
              <a href="#" className="text-sm text-secondary hover:underline font-medium transition-colors">
                Forgot your password?
              </a>
            </div>
            
            <div className="text-center border-t pt-6 animate-slide-up" style={{ animationDelay: '700ms' }}>
              <p className="text-sm text-muted-foreground mb-4 font-medium">
                Want to become a delivery partner?
              </p>
              <Button variant="outline" size="lg" className="w-full font-semibold hover:scale-[1.02] transition-all">
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
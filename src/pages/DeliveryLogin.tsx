import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const DeliveryLogin = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
        
        <div className="bg-card rounded-lg shadow-elegant p-8 border">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-foreground mb-2">Delivery Partner Login</h1>
            <p className="text-muted-foreground">Sign in to start delivering</p>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-secondary bg-background"
                placeholder="Enter your phone number"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-secondary bg-background"
                placeholder="Enter your password"
              />
            </div>
            
            <Button variant="delivery" size="lg" className="w-full">
              Start Delivering
            </Button>
            
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
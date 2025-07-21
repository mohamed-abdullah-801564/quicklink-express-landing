import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { usePageAnimation } from "@/hooks/use-page-animation";

const MerchantLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shopType, setShopType] = useState("");
  const [merchantCode, setMerchantCode] = useState("");
  const isVisible = usePageAnimation(1000);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (email && password && shopType && merchantCode) {
      navigate("/merchant-dashboard");
    }
  };

  return (
    <div className={`min-h-screen bg-background flex items-center justify-center p-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="w-full max-w-md">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
        
        <div className="bg-card rounded-lg shadow-elegant p-8 border">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-foreground mb-2">Merchant Login</h1>
            <p className="text-muted-foreground">Sign in to manage your store</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Password
              </label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Select Shop Type
              </label>
              <Select value={shopType} onValueChange={setShopType} required>
                <SelectTrigger>
                  <SelectValue placeholder="Choose your business type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="food-restaurant">Food Restaurant</SelectItem>
                  <SelectItem value="dress-shop">Dress Shop</SelectItem>
                  <SelectItem value="electronics-shop">Electronics Shop</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Merchant Code
              </label>
              <Input
                type="text"
                value={merchantCode}
                onChange={(e) => setMerchantCode(e.target.value)}
                placeholder="Enter your unique merchant code"
                required
              />
            </div>
            
            <Button 
              type="submit" 
              variant="merchant" 
              size="lg" 
              className="w-full"
              disabled={!email || !password || !shopType || !merchantCode}
            >
              Login to Dashboard
            </Button>
          </form>
            
          <div className="text-center mt-6">
            <a href="#" className="text-sm text-primary hover:underline">
              Forgot your password?
            </a>
          </div>
          
          <div className="text-center border-t pt-6 mt-6">
            <p className="text-sm text-muted-foreground mb-4">
              New to QuickLink?
            </p>
            <Button variant="outline" size="lg" className="w-full">
              Register Your Store
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantLogin;
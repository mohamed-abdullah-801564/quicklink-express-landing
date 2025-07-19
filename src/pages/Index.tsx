import { Button } from "@/components/ui/button";
import { ArrowRight, Store, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroBg})`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-scale-in">
              Quick<span className="text-primary">Link</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 text-gray-200 font-medium">
              Order Anything, Delivered Fast – Food, Clothes, and More
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
              <Link to="/merchant-login" className="w-full sm:w-auto">
                <Button 
                  variant="merchant" 
                  size="xl" 
                  className="w-full sm:w-auto min-w-64 animate-glow"
                >
                  <Store className="h-6 w-6" />
                  Merchant Login
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              
              <Link to="/delivery-login" className="w-full sm:w-auto">
                <Button 
                  variant="delivery" 
                  size="xl" 
                  className="w-full sm:w-auto min-w-64"
                >
                  <Truck className="h-6 w-6" />
                  Delivery Boy Login
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose QuickLink?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Fast, reliable delivery service connecting merchants and customers seamlessly
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6 bg-card rounded-xl shadow-md hover:shadow-elegant transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Store className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">For Merchants</h3>
              <p className="text-muted-foreground">
                Manage your store, track orders, and grow your business with our easy-to-use platform
              </p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-xl shadow-md hover:shadow-elegant transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">For Delivery Partners</h3>
              <p className="text-muted-foreground">
                Flexible working hours, competitive earnings, and real-time order tracking
              </p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-xl shadow-md hover:shadow-elegant transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Quick and reliable delivery service ensuring your orders reach customers on time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Quick<span className="text-primary">Link</span>
            </h3>
            <p className="text-muted-foreground">
              Your trusted delivery partner
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-center">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              About Us
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Privacy Policy
            </a>
          </div>
          
          <div className="text-center mt-8 pt-8 border-t">
            <p className="text-sm text-muted-foreground">
              © 2024 QuickLink. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import { Button } from "@/components/ui/button";
import { ArrowRight, Store, Truck, ShoppingBag, Utensils, Shirt, CreditCard, Clock, Shield, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageAnimation } from "@/hooks/use-page-animation";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const isVisible = usePageAnimation(1000);

  return (
    <div className={`min-h-screen bg-background transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(24, 95%, 53%, 0.85), rgba(39, 100%, 50%, 0.75)), url(${heroBg})`,
          backgroundAttachment: 'fixed',
          willChange: 'transform'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-scale-in">
              Quick<span className="text-yellow-300">Link</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 text-gray-100 font-medium leading-relaxed">
              Order Anything, Delivered Fast – Food, Clothes, and More
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
              <Link to="/merchant-login" className="w-full sm:w-auto">
                <Button 
                  size="lg"
                  className="w-full sm:w-auto min-w-64 bg-white text-primary hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg py-6"
                >
                  <Store className="h-6 w-6 mr-2" />
                  Merchant Login
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              
              <Link to="/delivery-login" className="w-full sm:w-auto">
                <Button 
                  size="lg"
                  className="w-full sm:w-auto min-w-64 bg-gray-900 text-white hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg py-6"
                >
                  <Truck className="h-6 w-6 mr-2" />
                  Delivery Partner
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From food to fashion, we deliver everything you need, right to your doorstep
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Food Delivery */}
            <div className="group text-center p-8 bg-card rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 border border-border">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Utensils className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Food Delivery</h3>
              <p className="text-muted-foreground leading-relaxed">
                Delicious meals from your favorite restaurants, delivered hot and fresh to your location in minutes.
              </p>
            </div>

            {/* Grocery Delivery */}
            <div className="group text-center p-8 bg-card rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 border border-border">
              <div className="w-20 h-20 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <ShoppingBag className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Grocery Shopping</h3>
              <p className="text-muted-foreground leading-relaxed">
                Fresh groceries and daily essentials delivered from local stores and supermarkets near you.
              </p>
            </div>

            {/* Fashion & Clothing */}
            <div className="group text-center p-8 bg-card rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 border border-border">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shirt className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Fashion & Clothing</h3>
              <p className="text-muted-foreground leading-relaxed">
                Latest fashion trends and clothing items from top brands, delivered with style and care.
              </p>
            </div>

            {/* Electronics */}
            <div className="group text-center p-8 bg-card rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 border border-border">
              <div className="w-20 h-20 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Store className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Electronics</h3>
              <p className="text-muted-foreground leading-relaxed">
                Latest gadgets, smartphones, and electronics from trusted retailers with secure delivery.
              </p>
            </div>

            {/* Pharmacy */}
            <div className="group text-center p-8 bg-card rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 border border-border">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Pharmacy</h3>
              <p className="text-muted-foreground leading-relaxed">
                Medicines and healthcare products delivered safely with prescription verification.
              </p>
            </div>

            {/* Express Delivery */}
            <div className="group text-center p-8 bg-card rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 border border-border">
              <div className="w-20 h-20 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Express Delivery</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ultra-fast delivery within 30 minutes for urgent needs and emergency requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose QuickLink?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience the fastest, most reliable delivery service with unmatched quality and customer satisfaction
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Lightning Fast */}
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Clock className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Lightning Fast</h3>
              <p className="text-muted-foreground leading-relaxed">
                Average delivery time under 30 minutes with real-time tracking for all orders.
              </p>
            </div>

            {/* Secure Payment */}
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <CreditCard className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Secure Payments</h3>
              <p className="text-muted-foreground leading-relaxed">
                Multiple payment options with bank-level security and instant transaction processing.
              </p>
            </div>

            {/* 24/7 Support */}
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Users className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">24/7 Support</h3>
              <p className="text-muted-foreground leading-relaxed">
                Round-the-clock customer support to assist you with any queries or concerns.
              </p>
            </div>

            {/* Quality Assured */}
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Award className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Quality Assured</h3>
              <p className="text-muted-foreground leading-relaxed">
                Rigorous quality checks and verified partners ensure you get the best products every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">
              Quick<span className="text-primary">Link</span>
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Your trusted delivery partner for everything you need, delivered with speed and care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-4 text-primary">Company</h4>
              <div className="space-y-3">
                <a href="#" className="block text-gray-300 hover:text-primary transition-colors">About Us</a>
                <a href="#" className="block text-gray-300 hover:text-primary transition-colors">Careers</a>
                <a href="#" className="block text-gray-300 hover:text-primary transition-colors">Press</a>
              </div>
            </div>
            
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-4 text-primary">Support</h4>
              <div className="space-y-3">
                <a href="#" className="block text-gray-300 hover:text-primary transition-colors">Contact Us</a>
                <a href="#" className="block text-gray-300 hover:text-primary transition-colors">Help Center</a>
                <a href="#" className="block text-gray-300 hover:text-primary transition-colors">Terms of Service</a>
              </div>
            </div>
            
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-4 text-primary">Legal</h4>
              <div className="space-y-3">
                <a href="#" className="block text-gray-300 hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="block text-gray-300 hover:text-primary transition-colors">Cookie Policy</a>
                <a href="#" className="block text-gray-300 hover:text-primary transition-colors">Data Protection</a>
              </div>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-gray-700">
            <p className="text-gray-400">
              © 2024 QuickLink. All rights reserved. | Delivering happiness since 2024
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
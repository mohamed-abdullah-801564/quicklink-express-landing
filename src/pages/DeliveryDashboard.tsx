import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageAnimation } from "@/hooks/use-page-animation";

const DeliveryDashboard = () => {
  const isVisible = usePageAnimation(1000);

  return (
    <div className={`min-h-screen bg-background transition-opacity duration-1000 ${
      isVisible ? "opacity-100" : "opacity-0"
    }`}>
      {/* Top Bar */}
      <header className="bg-card border-b border-border h-16 flex items-center justify-end px-4 lg:px-8 shadow-sm">
        <Link to="/delivery-login">
          <Button variant="ghost" size="sm" className="flex items-center gap-2 hover:scale-110 transition-all">
            <LogOut className="h-4 w-4" />
            <span className="hidden sm:inline">Logout</span>
          </Button>
        </Link>
      </header>

      {/* Main Content - Centered Message */}
      <main className="flex-1 flex items-center justify-center min-h-[calc(100vh-4rem)] p-4">
        <div className="text-center max-w-2xl mx-auto space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-relaxed">
              Thanks for logging in!
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed px-4">
              Please use our Delivery Partner App to view your orders and earnings.
            </p>
          </div>
          
          <Button 
            size="xl" 
            className="text-lg font-semibold px-8 py-4 h-auto transition-all duration-300 hover:scale-105"
          >
            Open App (Coming Soon)
          </Button>
        </div>
      </main>
    </div>
  );
};

export default DeliveryDashboard;
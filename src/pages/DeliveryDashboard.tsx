import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { LogOut, Menu, X, Package, DollarSign, User } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageAnimation } from "@/hooks/use-page-animation";
import ActiveOrders from "./delivery/ActiveOrders";
import Earnings from "./delivery/Earnings";
import Profile from "./delivery/Profile";

const DeliveryDashboard = () => {
  const [activeTab, setActiveTab] = useState("active-orders");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const isVisible = usePageAnimation(1000);

  const menuItems = [
    { id: "active-orders", label: "Active Orders", icon: Package },
    { id: "earnings", label: "Earnings", icon: DollarSign },
    { id: "profile", label: "Profile", icon: User },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "active-orders":
        return <ActiveOrders />;
      case "earnings":
        return <Earnings />;
      case "profile":
        return <Profile />;
      default:
        return <ActiveOrders />;
    }
  };

  return (
    <div className={`min-h-screen bg-background transition-opacity duration-1000 ${
      isVisible ? "opacity-100" : "opacity-0"
    }`}>
      {/* Top Bar */}
      <header className="bg-card border-b border-border h-16 flex items-center justify-between px-4 lg:px-8 shadow-sm">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden hover:scale-110 transition-transform"
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 ring-2 ring-primary/20">
              <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                DP
              </AvatarFallback>
            </Avatar>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-foreground">Hello, Rajesh Kumar</p>
              <p className="text-xs text-muted-foreground">Partner #DP001</p>
            </div>
          </div>
        </div>
        <Link to="/delivery-login">
          <Button variant="ghost" size="sm" className="flex items-center gap-2 hover:scale-110 transition-all">
            <LogOut className="h-4 w-4" />
            <span className="hidden sm:inline">Logout</span>
          </Button>
        </Link>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`bg-card border-r border-border transition-all duration-300 shadow-sm ${
          sidebarOpen ? "w-64" : "w-0 lg:w-16"
        } ${sidebarOpen ? "block" : "hidden lg:block"} lg:min-h-[calc(100vh-4rem)]`}>
          <nav className="p-4 lg:p-6 space-y-3">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <Button
                  key={item.id}
                  variant={isActive ? "secondary" : "ghost"}
                  className={`w-full justify-start transition-all duration-300 hover:scale-105 ${
                    sidebarOpen ? "px-4 py-3 h-12" : "px-2 lg:px-3 h-12"
                  } ${isActive ? "shadow-md" : ""}`}
                  onClick={() => {
                    setActiveTab(item.id);
                    if (window.innerWidth < 1024) setSidebarOpen(false);
                  }}
                >
                  <Icon className="h-5 w-5 lg:mr-3" />
                  {sidebarOpen && <span className="font-medium">{item.label}</span>}
                </Button>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-8 bg-muted/30 min-h-[calc(100vh-4rem)]">
          <div className="animate-fade-in max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DeliveryDashboard;
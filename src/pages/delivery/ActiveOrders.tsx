import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone } from "lucide-react";

const ActiveOrders = () => {
  const orders = [
    {
      id: "ORD001",
      customerName: "Priya Sharma",
      address: "123 MG Road, Bangalore - 560001",
      items: ["2x Chicken Biryani", "1x Raita", "1x Gulab Jamun"],
      status: "Pending Pickup",
      statusColor: "destructive",
      orderTime: "2:30 PM",
      phone: "+91 9876543210"
    },
    {
      id: "ORD002", 
      customerName: "Amit Patel",
      address: "456 Brigade Road, Bangalore - 560025",
      items: ["1x Margherita Pizza", "1x Garlic Bread", "2x Coke"],
      status: "In Transit",
      statusColor: "secondary",
      orderTime: "2:45 PM",
      phone: "+91 9876543211"
    },
    {
      id: "ORD003",
      customerName: "Sneha Reddy", 
      address: "789 Koramangala, Bangalore - 560034",
      items: ["1x Masala Dosa", "1x Filter Coffee", "1x Vada"],
      status: "Ready for Pickup",
      statusColor: "default",
      orderTime: "3:00 PM",
      phone: "+91 9876543212"
    },
    {
      id: "ORD004",
      customerName: "Rohit Kumar",
      address: "321 Indiranagar, Bangalore - 560038", 
      items: ["2x Burger", "1x French Fries", "2x Milkshake"],
      status: "Delivered",
      statusColor: "outline",
      orderTime: "1:15 PM",
      phone: "+91 9876543213"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="animate-slide-up">
        <h1 className="text-3xl font-bold text-foreground mb-3">Active Orders</h1>
        <p className="text-muted-foreground text-lg">Manage your current deliveries</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {orders.map((order, index) => (
          <Card key={order.id} className="hover:shadow-elegant transition-all duration-300 hover:scale-[1.03] animate-slide-up border-l-4 border-l-primary/20" style={{ animationDelay: `${index * 100}ms` }}>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="text-xl font-semibold">{order.customerName}</CardTitle>
                <Badge variant={order.statusColor as any} className="text-xs font-medium px-3 py-1">
                  {order.status}
                </Badge>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span className="font-medium">{order.orderTime}</span>
                <span className="text-xs bg-muted px-3 py-1 rounded-full font-semibold">
                  {order.id}
                </span>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-5">
              <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                <MapPin className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                <p className="text-sm text-foreground font-medium leading-relaxed">{order.address}</p>
              </div>
              
              <div className="space-y-3">
                <p className="text-sm font-semibold text-foreground">Order Items:</p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  {order.items.map((item, index) => (
                    <li key={index} className="flex items-center p-2 bg-background rounded-md border">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-3">
                <Button size="sm" className="flex-1 flex items-center gap-2 font-semibold hover:scale-105 transition-transform">
                  <Phone className="h-4 w-4" />
                  Call Customer
                </Button>
                {order.status === "Pending Pickup" && (
                  <Button variant="secondary" size="sm" className="flex-1 font-semibold hover:scale-105 transition-transform">
                    Mark Picked Up
                  </Button>
                )}
                {order.status === "In Transit" && (
                  <Button variant="secondary" size="sm" className="flex-1 font-semibold hover:scale-105 transition-transform">
                    Mark Delivered
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ActiveOrders;
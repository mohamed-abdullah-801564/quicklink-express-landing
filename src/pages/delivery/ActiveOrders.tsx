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
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Active Orders</h1>
        <p className="text-muted-foreground">Manage your current deliveries</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {orders.map((order) => (
          <Card key={order.id} className="hover:shadow-lg transition-all duration-200 hover:scale-[1.02]">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{order.customerName}</CardTitle>
                <Badge variant={order.statusColor as any} className="text-xs">
                  {order.status}
                </Badge>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{order.orderTime}</span>
                <span className="text-xs bg-muted px-2 py-1 rounded">
                  {order.id}
                </span>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-muted-foreground flex-shrink-0" />
                <p className="text-sm text-foreground">{order.address}</p>
              </div>
              
              <div>
                <p className="text-sm font-medium text-foreground mb-2">Order Items:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {order.items.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex gap-2 pt-2">
                <Button size="sm" className="flex-1 flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call Customer
                </Button>
                {order.status === "Pending Pickup" && (
                  <Button variant="secondary" size="sm" className="flex-1">
                    Mark Picked Up
                  </Button>
                )}
                {order.status === "In Transit" && (
                  <Button variant="secondary" size="sm" className="flex-1">
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
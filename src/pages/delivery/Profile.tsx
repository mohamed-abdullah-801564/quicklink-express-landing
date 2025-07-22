import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User, Phone, Mail, Bike, Calendar, Star, Edit2, Save, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "Rajesh Kumar",
    email: "rajesh.kumar@delivery.com",
    phone: "+91 9876543210",
    vehicleType: "Motorcycle",
    vehicleNumber: "KA 01 AB 1234",
    partnerCode: "DP001"
  });
  const { toast } = useToast();

  const profileStats = {
    joinDate: "January 2023",
    totalDeliveries: 1247,
    rating: 4.8,
    status: "Active"
  };

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your profile information has been saved successfully.",
    });
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset form data to original values
    setFormData({
      name: "Rajesh Kumar",
      email: "rajesh.kumar@delivery.com", 
      phone: "+91 9876543210",
      vehicleType: "Motorcycle",
      vehicleNumber: "KA 01 AB 1234",
      partnerCode: "DP001"
    });
  };

  return (
    <div className="space-y-8">
      <div className="animate-slide-up">
        <h1 className="text-3xl font-bold text-foreground mb-3">Profile</h1>
        <p className="text-muted-foreground text-lg">Manage your delivery partner information</p>
      </div>

      {/* Profile Header */}
      <Card className="hover:shadow-elegant transition-all duration-300 hover:scale-[1.01] animate-slide-up border-l-4 border-l-primary">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Avatar className="h-24 w-24">
              <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                RK
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-2xl font-bold text-foreground">{formData.name}</h2>
              <p className="text-muted-foreground">Partner ID: {formData.partnerCode}</p>
              <div className="flex flex-wrap items-center gap-2 mt-2 justify-center sm:justify-start">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Star className="h-3 w-3" />
                  {profileStats.rating} Rating
                </Badge>
                <Badge variant="default">
                  {profileStats.status}
                </Badge>
                <Badge variant="outline">
                  {profileStats.totalDeliveries} Deliveries
                </Badge>
              </div>
            </div>
            
            <div className="flex gap-2">
              {!isEditing ? (
                <Button 
                  onClick={() => setIsEditing(true)}
                  className="flex items-center gap-2"
                >
                  <Edit2 className="h-4 w-4" />
                  Edit Profile
                </Button>
              ) : (
                <div className="flex gap-2">
                  <Button onClick={handleSave} className="flex items-center gap-2">
                    <Save className="h-4 w-4" />
                    Save
                  </Button>
                  <Button variant="outline" onClick={handleCancel} className="flex items-center gap-2">
                    <X className="h-4 w-4" />
                    Cancel
                  </Button>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Personal Information */}
        <Card className="hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] animate-slide-up border-l-4 border-l-secondary" style={{ animationDelay: '100ms' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Full Name
              </label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                disabled={!isEditing}
                className={!isEditing ? "opacity-70" : ""}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <Input
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                disabled={!isEditing}
                className={!isEditing ? "opacity-70" : ""}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Phone Number
              </label>
              <Input
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                disabled={!isEditing}
                className={!isEditing ? "opacity-70" : ""}
              />
            </div>
          </CardContent>
        </Card>

        {/* Vehicle Information */}
        <Card className="hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] animate-slide-up border-l-4 border-l-accent" style={{ animationDelay: '200ms' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bike className="h-5 w-5" />
              Vehicle Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Vehicle Type
              </label>
              <Input
                value={formData.vehicleType}
                onChange={(e) => setFormData({...formData, vehicleType: e.target.value})}
                disabled={!isEditing}
                className={!isEditing ? "opacity-70" : ""}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Vehicle Number
              </label>
              <Input
                value={formData.vehicleNumber}
                onChange={(e) => setFormData({...formData, vehicleNumber: e.target.value})}
                disabled={!isEditing}
                className={!isEditing ? "opacity-70" : ""}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Partner Code
              </label>
              <Input
                value={formData.partnerCode}
                disabled
                className="opacity-70"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Partner code cannot be changed
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Statistics */}
      <Card className="hover:shadow-elegant transition-all duration-300 hover:scale-[1.01] animate-slide-up" style={{ animationDelay: '300ms' }}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl font-bold">
            <Calendar className="h-5 w-5" />
            Performance Statistics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="text-center p-6 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-200 border border-primary/20">
              <div className="text-3xl font-bold text-primary mb-2">{profileStats.totalDeliveries}</div>
              <p className="text-sm text-muted-foreground font-semibold">Total Deliveries</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-secondary/10 hover:bg-secondary/20 transition-all duration-200 border border-secondary/20">
              <div className="text-3xl font-bold text-secondary mb-2">{profileStats.rating}</div>
              <p className="text-sm text-muted-foreground font-semibold">Average Rating</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-accent/10 hover:bg-accent/20 transition-all duration-200 border border-accent/20">
              <div className="text-3xl font-bold text-accent mb-2">96%</div>
              <p className="text-sm text-muted-foreground font-semibold">On-Time Rate</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-muted/50 hover:bg-muted transition-all duration-200 border">
              <div className="text-3xl font-bold text-foreground mb-2">{profileStats.joinDate}</div>
              <p className="text-sm text-muted-foreground font-semibold">Partner Since</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
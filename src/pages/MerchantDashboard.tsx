import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowLeft, Store, Package, Settings, Edit, Trash2, Plus, User, LogOut, Eye, EyeOff } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  availability: boolean;
}

interface ShopDetails {
  name: string;
  type: string;
  location: string;
  contact: string;
}

const MerchantDashboard = () => {
  const location = useLocation();
  const merchantName = "John's Store"; // This would come from login state
  
  const [activeTab, setActiveTab] = useState("shop-details");
  const [products, setProducts] = useState<Product[]>([]);
  const [shopDetails, setShopDetails] = useState<ShopDetails>({
    name: "John's Food Restaurant",
    type: "Food Restaurant",
    location: "123 Main Street, City",
    contact: "+91 9876543210"
  });
  
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    category: "",
    availability: true
  });
  
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);
  const [isEditProductOpen, setIsEditProductOpen] = useState(false);
  const [shopEnabled, setShopEnabled] = useState(true);

  const sidebarItems = [
    { title: "Shop Details", id: "shop-details", icon: Store },
    { title: "Products", id: "products", icon: Package },
    { title: "Settings", id: "settings", icon: Settings },
  ];

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price > 0 && newProduct.category) {
      const product: Product = {
        id: Date.now().toString(),
        ...newProduct
      };
      setProducts([...products, product]);
      setNewProduct({ name: "", price: 0, category: "", availability: true });
      setIsAddProductOpen(false);
    }
  };

  const handleEditProduct = () => {
    if (editingProduct) {
      setProducts(products.map(p => p.id === editingProduct.id ? editingProduct : p));
      setEditingProduct(null);
      setIsEditProductOpen(false);
    }
  };

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const renderShopDetails = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Shop Details</h2>
      <Card>
        <CardHeader>
          <CardTitle>Business Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Shop Name</label>
            <Input
              value={shopDetails.name}
              onChange={(e) => setShopDetails({...shopDetails, name: e.target.value})}
              placeholder="Enter shop name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Shop Type</label>
            <Select value={shopDetails.type} onValueChange={(value) => setShopDetails({...shopDetails, type: value})}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Food Restaurant">Food Restaurant</SelectItem>
                <SelectItem value="Dress Shop">Dress Shop</SelectItem>
                <SelectItem value="Electronics Shop">Electronics Shop</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Location</label>
            <Input
              value={shopDetails.location}
              onChange={(e) => setShopDetails({...shopDetails, location: e.target.value})}
              placeholder="Enter shop location"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Contact</label>
            <Input
              value={shopDetails.contact}
              onChange={(e) => setShopDetails({...shopDetails, contact: e.target.value})}
              placeholder="Enter contact number"
            />
          </div>
          <Button variant="merchant" className="w-full">
            Save Changes
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  const renderProducts = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Products</h2>
        <Dialog open={isAddProductOpen} onOpenChange={setIsAddProductOpen}>
          <DialogTrigger asChild>
            <Button variant="merchant">
              <Plus className="mr-2 h-4 w-4" />
              Add Product
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Product</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Product Name</label>
                <Input
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                  placeholder="Enter product name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Price (₹)</label>
                <Input
                  type="number"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({...newProduct, price: Number(e.target.value)})}
                  placeholder="Enter price"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Category</label>
                <Input
                  value={newProduct.category}
                  onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                  placeholder="Enter category"
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="availability"
                  checked={newProduct.availability}
                  onChange={(e) => setNewProduct({...newProduct, availability: e.target.checked})}
                  className="rounded"
                />
                <label htmlFor="availability" className="text-sm font-medium text-foreground">Available</label>
              </div>
              <Button onClick={handleAddProduct} variant="merchant" className="w-full">
                Add Product
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {products.length === 0 ? (
        <Card>
          <CardContent className="py-8 text-center">
            <Package className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground">No products added yet. Click "Add Product" to get started.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-foreground">{product.name}</h3>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        setEditingProduct(product);
                        setIsEditProductOpen(true);
                      }}
                    >
                      <Edit className="h-3 w-3" />
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <p className="text-2xl font-bold text-primary mb-1">₹{product.price}</p>
                <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  product.availability 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                }`}>
                  {product.availability ? 'Available' : 'Out of Stock'}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Edit Product Dialog */}
      <Dialog open={isEditProductOpen} onOpenChange={setIsEditProductOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Product</DialogTitle>
          </DialogHeader>
          {editingProduct && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Product Name</label>
                <Input
                  value={editingProduct.name}
                  onChange={(e) => setEditingProduct({...editingProduct, name: e.target.value})}
                  placeholder="Enter product name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Price (₹)</label>
                <Input
                  type="number"
                  value={editingProduct.price}
                  onChange={(e) => setEditingProduct({...editingProduct, price: Number(e.target.value)})}
                  placeholder="Enter price"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Category</label>
                <Input
                  value={editingProduct.category}
                  onChange={(e) => setEditingProduct({...editingProduct, category: e.target.value})}
                  placeholder="Enter category"
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="edit-availability"
                  checked={editingProduct.availability}
                  onChange={(e) => setEditingProduct({...editingProduct, availability: e.target.checked})}
                  className="rounded"
                />
                <label htmlFor="edit-availability" className="text-sm font-medium text-foreground">Available</label>
              </div>
              <Button onClick={handleEditProduct} variant="merchant" className="w-full">
                Update Product
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Settings</h2>
      
      <Card>
        <CardHeader>
          <CardTitle>Shop Status</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">Shop Status</p>
              <p className="text-sm text-muted-foreground">Enable or disable your shop visibility</p>
            </div>
            <Button
              variant={shopEnabled ? "destructive" : "merchant"}
              onClick={() => setShopEnabled(!shopEnabled)}
              className="flex items-center gap-2"
            >
              {shopEnabled ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              {shopEnabled ? "Disable Shop" : "Enable Shop"}
            </Button>
          </div>
          <div className={`p-3 rounded-md ${shopEnabled ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20'}`}>
            <p className={`text-sm ${shopEnabled ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}`}>
              Your shop is currently <strong>{shopEnabled ? 'enabled' : 'disabled'}</strong>
              {shopEnabled ? ' and visible to customers.' : ' and not visible to customers.'}
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Current Password</label>
            <Input type="password" placeholder="Enter current password" />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">New Password</label>
            <Input type="password" placeholder="Enter new password" />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Confirm New Password</label>
            <Input type="password" placeholder="Confirm new password" />
          </div>
          <Button variant="merchant" className="w-full">
            Update Password
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Account Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <Link to="/merchant-login">
            <Button variant="destructive" className="w-full flex items-center gap-2">
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "shop-details":
        return renderShopDetails();
      case "products":
        return renderProducts();
      case "settings":
        return renderSettings();
      default:
        return renderShopDetails();
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar className="w-64">
          <SidebarContent>
            <div className="p-4 border-b">
              <Link to="/merchant-login" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Back to Login
              </Link>
            </div>
            
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {sidebarItems.map((item) => (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton 
                        onClick={() => setActiveTab(item.id)}
                        className={activeTab === item.id ? "bg-muted text-primary font-medium" : "hover:bg-muted/50"}
                      >
                        <item.icon className="mr-2 h-4 w-4" />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <main className="flex-1">
          <header className="bg-card border-b px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <div>
                <h1 className="text-2xl font-bold text-foreground">Hello, {merchantName}!</h1>
                <p className="text-sm text-muted-foreground">Welcome back to your dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-8 w-8 text-muted-foreground" />
            </div>
          </header>

          <div className="p-6">
            <div className="max-w-7xl mx-auto">
              {renderContent()}
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default MerchantDashboard;
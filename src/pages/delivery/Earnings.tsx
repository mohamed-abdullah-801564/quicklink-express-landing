import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, TrendingUp, Calendar, Award } from "lucide-react";

const Earnings = () => {
  const todayStats = {
    earnings: 750,
    deliveries: 12,
    hours: 8,
    rating: 4.8
  };

  const weeklyData = [
    { day: "Mon", earnings: 650, deliveries: 10 },
    { day: "Tue", earnings: 720, deliveries: 11 },
    { day: "Wed", earnings: 580, deliveries: 9 },
    { day: "Thu", earnings: 820, deliveries: 13 },
    { day: "Fri", earnings: 750, deliveries: 12 },
    { day: "Sat", earnings: 950, deliveries: 15 },
    { day: "Sun", earnings: 680, deliveries: 11 }
  ];

  const totalWeeklyEarnings = weeklyData.reduce((sum, day) => sum + day.earnings, 0);

  return (
    <div className="space-y-8">
      <div className="animate-slide-up">
        <h1 className="text-3xl font-bold text-foreground mb-3">Earnings</h1>
        <p className="text-muted-foreground text-lg">Track your delivery earnings and performance</p>
      </div>

      {/* Today's Stats */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-slide-up border-l-4 border-l-primary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-semibold">Today's Earnings</CardTitle>
            <div className="p-2 bg-primary/10 rounded-full">
              <DollarSign className="h-5 w-5 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary mb-1">₹{todayStats.earnings}</div>
            <p className="text-xs text-muted-foreground font-medium">
              +12% from yesterday
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-slide-up border-l-4 border-l-secondary" style={{ animationDelay: '100ms' }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-semibold">Deliveries</CardTitle>
            <div className="p-2 bg-secondary/10 rounded-full">
              <TrendingUp className="h-5 w-5 text-secondary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-secondary mb-1">{todayStats.deliveries}</div>
            <p className="text-xs text-muted-foreground font-medium">
              2 more than yesterday
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-slide-up border-l-4 border-l-accent" style={{ animationDelay: '200ms' }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-semibold">Hours Worked</CardTitle>
            <div className="p-2 bg-accent/10 rounded-full">
              <Calendar className="h-5 w-5 text-accent" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-accent mb-1">{todayStats.hours}h</div>
            <p className="text-xs text-muted-foreground font-medium">
              Standard shift
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-slide-up border-l-4 border-l-yellow-500" style={{ animationDelay: '300ms' }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-semibold">Rating</CardTitle>
            <div className="p-2 bg-yellow-50 rounded-full">
              <Award className="h-5 w-5 text-yellow-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-yellow-600 mb-1">{todayStats.rating}</div>
            <p className="text-xs text-muted-foreground font-medium">
              Excellent service!
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Summary */}
      <Card className="hover:shadow-elegant transition-all duration-300 hover:scale-[1.01] animate-slide-up" style={{ animationDelay: '400ms' }}>
        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-bold">Weekly Summary</CardTitle>
          <p className="text-sm text-muted-foreground font-medium">
            Total earnings: <span className="font-bold text-primary">₹{totalWeeklyEarnings}</span> • Total deliveries: <span className="font-bold text-secondary">{weeklyData.reduce((sum, day) => sum + day.deliveries, 0)}</span>
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {weeklyData.map((day, index) => (
              <div key={day.day} className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-200 hover:scale-[1.02] border border-border/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 text-sm font-bold text-foreground bg-primary/10 rounded-full flex items-center justify-center h-10">
                    {day.day}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground font-medium">{day.deliveries} deliveries</span>
                  </div>
                </div>
                <div className="text-xl font-bold text-primary">
                  ₹{day.earnings}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Insights */}
      <Card className="hover:shadow-elegant transition-all duration-300 hover:scale-[1.01] animate-slide-up" style={{ animationDelay: '500ms' }}>
        <CardHeader>
          <CardTitle className="text-xl font-bold">Performance Insights</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-200 border border-primary/20">
            <div>
              <p className="font-semibold text-foreground">Peak Hours Performance</p>
              <p className="text-sm text-muted-foreground font-medium">You earn 23% more during 7-9 PM</p>
            </div>
            <div className="text-primary font-bold text-xl">+23%</div>
          </div>
          
          <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/10 hover:bg-secondary/20 transition-all duration-200 border border-secondary/20">
            <div>
              <p className="font-semibold text-foreground">Customer Satisfaction</p>
              <p className="text-sm text-muted-foreground font-medium">96% positive feedback this week</p>
            </div>
            <div className="text-secondary font-bold text-xl">96%</div>
          </div>
          
          <div className="flex items-center justify-between p-4 rounded-lg bg-accent/10 hover:bg-accent/20 transition-all duration-200 border border-accent/20">
            <div>
              <p className="font-semibold text-foreground">On-Time Delivery</p>
              <p className="text-sm text-muted-foreground font-medium">Delivered 94% orders on time</p>
            </div>
            <div className="text-accent font-bold text-xl">94%</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Earnings;
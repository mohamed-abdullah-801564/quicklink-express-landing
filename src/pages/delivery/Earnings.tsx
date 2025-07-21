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
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Earnings</h1>
        <p className="text-muted-foreground">Track your delivery earnings and performance</p>
      </div>

      {/* Today's Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="hover:shadow-lg transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Earnings</CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">₹{todayStats.earnings}</div>
            <p className="text-xs text-muted-foreground">
              +12% from yesterday
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Deliveries</CardTitle>
            <TrendingUp className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary">{todayStats.deliveries}</div>
            <p className="text-xs text-muted-foreground">
              2 more than yesterday
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Hours Worked</CardTitle>
            <Calendar className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">{todayStats.hours}h</div>
            <p className="text-xs text-muted-foreground">
              Standard shift
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rating</CardTitle>
            <Award className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{todayStats.rating}</div>
            <p className="text-xs text-muted-foreground">
              Excellent service!
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Summary */}
      <Card className="hover:shadow-lg transition-all duration-200">
        <CardHeader>
          <CardTitle className="text-lg">Weekly Summary</CardTitle>
          <p className="text-sm text-muted-foreground">
            Total earnings: ₹{totalWeeklyEarnings} • Total deliveries: {weeklyData.reduce((sum, day) => sum + day.deliveries, 0)}
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {weeklyData.map((day) => (
              <div key={day.day} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 text-sm font-medium text-foreground">
                    {day.day}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">{day.deliveries} deliveries</span>
                  </div>
                </div>
                <div className="text-lg font-semibold text-primary">
                  ₹{day.earnings}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Insights */}
      <Card className="hover:shadow-lg transition-all duration-200">
        <CardHeader>
          <CardTitle className="text-lg">Performance Insights</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-lg bg-primary/10">
            <div>
              <p className="font-medium text-foreground">Peak Hours Performance</p>
              <p className="text-sm text-muted-foreground">You earn 23% more during 7-9 PM</p>
            </div>
            <div className="text-primary font-semibold">+23%</div>
          </div>
          
          <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/10">
            <div>
              <p className="font-medium text-foreground">Customer Satisfaction</p>
              <p className="text-sm text-muted-foreground">96% positive feedback this week</p>
            </div>
            <div className="text-secondary font-semibold">96%</div>
          </div>
          
          <div className="flex items-center justify-between p-3 rounded-lg bg-accent/10">
            <div>
              <p className="font-medium text-foreground">On-Time Delivery</p>
              <p className="text-sm text-muted-foreground">Delivered 94% orders on time</p>
            </div>
            <div className="text-accent font-semibold">94%</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Earnings;
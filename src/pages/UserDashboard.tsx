import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  MapPin, 
  Briefcase, 
  Heart,
  Search,
  Filter,
  Building2,
  DollarSign,
  Clock,
  Star,
  Coffee,
  UtensilsCrossed,
  Home as HomeIcon
} from "lucide-react";

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("jobs");

  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      salary: "$90k - $120k",
      type: "Full-time",
      match: 95,
      posted: "2 days ago",
      verified: true,
    },
    {
      id: 2,
      title: "Product Designer",
      company: "Design Studio",
      location: "Remote",
      salary: "$70k - $90k",
      type: "Full-time",
      match: 88,
      posted: "1 week ago",
      verified: true,
    },
    {
      id: 3,
      title: "Full Stack Engineer",
      company: "StartupXYZ",
      location: "New York, NY",
      salary: "$85k - $110k",
      type: "Full-time",
      match: 82,
      posted: "3 days ago",
      verified: true,
    },
  ];

  const communityServices = [
    { name: "Local Cafe", type: "Coffee", distance: "0.3 mi", icon: Coffee },
    { name: "Community Kitchen", type: "Food", distance: "0.5 mi", icon: UtensilsCrossed },
    { name: "Co-working Space", type: "Workspace", distance: "0.7 mi", icon: HomeIcon },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="h-8 w-8 text-secondary" />
            <div>
              <h1 className="text-xl font-bold">Welcome back, John!</h1>
              <p className="text-xs text-muted-foreground">Your personalized job discovery</p>
            </div>
          </div>
          <Button variant="outline">
            <Heart className="h-4 w-4 mr-2" />
            Saved Jobs (5)
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Profile Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Profile Match", value: "85%", icon: Star, color: "text-accent" },
            { label: "Applications", value: "12", icon: Briefcase, color: "text-primary" },
            { label: "Interviews", value: "3", icon: Clock, color: "text-secondary" },
            { label: "Saved Jobs", value: "5", icon: Heart, color: "text-destructive" },
          ].map((stat, index) => (
            <Card key={index} className="p-6 hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <stat.icon className={`h-8 w-8 ${stat.color} mb-2`} />
              <p className="text-3xl font-bold mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-card">
            <TabsTrigger value="jobs">Job Matches</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
            <TabsTrigger value="applications">My Applications</TabsTrigger>
          </TabsList>

          <TabsContent value="jobs" className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search jobs..." className="pl-9" />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-4">
                {jobs.map((job) => (
                  <Card key={job.id} className="p-6 hover-lift">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-semibold">{job.title}</h3>
                          {job.verified && (
                            <Badge className="bg-success/10 text-success hover:bg-success/20">
                              Verified
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Building2 className="h-4 w-4" />
                            {job.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign className="h-4 w-4" />
                            {job.salary}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 mb-1">
                          <Star className="h-4 w-4 text-accent fill-accent" />
                          <span className="text-lg font-bold text-accent">{job.match}%</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Match</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{job.type}</Badge>
                        <span className="text-xs text-muted-foreground">{job.posted}</span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline">Save</Button>
                        <Button className="gradient-secondary">Apply Now</Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="community" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Map Placeholder */}
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-secondary" />
                  Local Services
                </h2>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                  <p className="text-muted-foreground">Interactive Map View</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Discover nearby services, cafes, and community spaces while you search for jobs
                </p>
              </Card>

              {/* Services List */}
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4">Nearby Services</h2>
                <div className="space-y-4">
                  {communityServices.map((service, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-smooth">
                      <div className="w-12 h-12 rounded-full gradient-warm flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-secondary-foreground" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{service.name}</p>
                        <p className="text-sm text-muted-foreground">{service.type}</p>
                      </div>
                      <Badge variant="outline">{service.distance}</Badge>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="applications" className="space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">My Applications</h2>
              <p className="text-muted-foreground">Track the status of your job applications</p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UserDashboard;

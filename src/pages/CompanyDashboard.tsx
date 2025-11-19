import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Building2, 
  Plus, 
  Users, 
  CheckCircle2, 
  Shield, 
  Filter,
  Search,
  Briefcase,
  TrendingUp
} from "lucide-react";

const CompanyDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    { label: "Active Jobs", value: "12", icon: Briefcase, color: "text-primary" },
    { label: "Total Applicants", value: "248", icon: Users, color: "text-secondary" },
    { label: "Verified", value: "186", icon: Shield, color: "text-success" },
    { label: "Shortlisted", value: "32", icon: CheckCircle2, color: "text-accent" },
  ];

  const jobListings = [
    { id: 1, title: "Senior Developer", applicants: 45, verified: 38, shortlisted: 8, status: "active" },
    { id: 2, title: "Product Manager", applicants: 32, verified: 28, shortlisted: 6, status: "active" },
    { id: 3, title: "UX Designer", applicants: 28, verified: 24, shortlisted: 5, status: "active" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold">Acme Corporation</h1>
              <p className="text-xs text-muted-foreground">Company Dashboard</p>
            </div>
          </div>
          <Button className="gradient-primary">
            <Plus className="h-4 w-4 mr-2" />
            Post New Job
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center justify-between mb-2">
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
                <TrendingUp className="h-4 w-4 text-success" />
              </div>
              <p className="text-3xl font-bold mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-card">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="jobs">Job Listings</TabsTrigger>
            <TabsTrigger value="applicants">All Applicants</TabsTrigger>
            <TabsTrigger value="verified">Verified</TabsTrigger>
            <TabsTrigger value="shortlisted">Shortlisted</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {[
                  { action: "New application received", job: "Senior Developer", time: "2 hours ago", type: "application" },
                  { action: "Candidate verified", job: "Product Manager", time: "4 hours ago", type: "verified" },
                  { action: "Candidate shortlisted", job: "UX Designer", time: "6 hours ago", type: "shortlisted" },
                ].map((activity, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-smooth">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.type === 'verified' ? 'bg-success' : 
                      activity.type === 'shortlisted' ? 'bg-accent' : 'bg-primary'
                    }`} />
                    <div className="flex-1">
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">{activity.job}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="jobs" className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Active Job Listings</h2>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search jobs..." className="pl-9 w-64" />
                  </div>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                {jobListings.map((job) => (
                  <Card key={job.id} className="p-6 hover-lift">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                        <Badge className="bg-success/10 text-success hover:bg-success/20">
                          {job.status}
                        </Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-3 rounded-lg bg-muted/50">
                        <p className="text-2xl font-bold text-primary">{job.applicants}</p>
                        <p className="text-xs text-muted-foreground">Applicants</p>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-muted/50">
                        <p className="text-2xl font-bold text-success">{job.verified}</p>
                        <p className="text-xs text-muted-foreground">Verified</p>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-muted/50">
                        <p className="text-2xl font-bold text-accent">{job.shortlisted}</p>
                        <p className="text-xs text-muted-foreground">Shortlisted</p>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                      <Button variant="outline" className="flex-1">View Details</Button>
                      <Button className="flex-1 gradient-primary">Review Applicants</Button>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="applicants" className="space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">All Applicants</h2>
              <p className="text-muted-foreground">View and manage all job applicants</p>
            </Card>
          </TabsContent>

          <TabsContent value="verified" className="space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Verified Candidates</h2>
              <p className="text-muted-foreground">Candidates who have completed verification</p>
            </Card>
          </TabsContent>

          <TabsContent value="shortlisted" className="space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Shortlisted Candidates</h2>
              <p className="text-muted-foreground">Your top picks for each position</p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CompanyDashboard;

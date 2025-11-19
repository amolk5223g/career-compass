import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building2, Users, Shield, MapPin, Briefcase, Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold gradient-hero bg-clip-text text-transparent">
              TrustConnect
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
              Features
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
              About
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Trusted Discovery for
            <span className="gradient-hero bg-clip-text text-transparent"> Everyone</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Connect verified companies with talented individuals in a safe, community-focused platform. 
            Build trust, discover opportunities, and grow together.
          </p>
        </div>

        {/* Dual Login Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Company Login Card */}
          <Card className="p-8 hover-lift shadow-lg hover:shadow-glow group animate-fade-in-up">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-4 shadow-glow group-hover:animate-pulse-glow">
                <Building2 className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-2">For Companies</h3>
              <p className="text-muted-foreground">
                Post jobs, find verified talent, and build your team with confidence
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Verified Identity</p>
                  <p className="text-sm text-muted-foreground">Face authentication for secure access</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Briefcase className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Smart Matching</p>
                  <p className="text-sm text-muted-foreground">AI-powered candidate recommendations</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Link to="/company/login" className="block">
                <Button className="w-full gradient-primary hover:opacity-90 shadow-md">
                  Company Login
                </Button>
              </Link>
              <Link to="/company/register" className="block">
                <Button variant="outline" className="w-full">
                  Register Your Company
                </Button>
              </Link>
            </div>
          </Card>

          {/* User Login Card */}
          <Card className="p-8 hover-lift shadow-lg hover:shadow-warm-glow group animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="mb-6">
              <div className="w-16 h-16 rounded-2xl gradient-secondary flex items-center justify-center mb-4 shadow-warm-glow group-hover:animate-pulse-glow">
                <Users className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-2">For Job Seekers</h3>
              <p className="text-muted-foreground">
                Discover opportunities tailored to your skills and connect with your community
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Heart className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Personalized Matches</p>
                  <p className="text-sm text-muted-foreground">Jobs tailored to your profile</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Community Connect</p>
                  <p className="text-sm text-muted-foreground">Local services and support nearby</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Link to="/user/login" className="block">
                <Button className="w-full gradient-secondary hover:opacity-90 shadow-md">
                  User Login
                </Button>
              </Link>
              <Link to="/user/register" className="block">
                <Button variant="outline" className="w-full">
                  Create Account
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Built on Trust</h3>
            <p className="text-muted-foreground">
              Our platform combines cutting-edge security with community-focused features
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Verified Users",
                description: "Face authentication and identity verification for all companies",
              },
              {
                icon: Briefcase,
                title: "Smart Matching",
                description: "AI-powered job recommendations based on skills and preferences",
              },
              {
                icon: MapPin,
                title: "Community Integration",
                description: "Discover local services and support in your area",
              },
            ].map((feature, index) => (
              <Card key={index} className="p-6 hover-lift" style={{ animationDelay: `${index * 0.1}s` }}>
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 TrustConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

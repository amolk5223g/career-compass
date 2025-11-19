import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Users, ArrowLeft, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const UserRegister = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    skills: "",
    interests: "",
    salary: "",
    location: "",
    experience: "",
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleBasicInfo = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.password) {
      setStep(2);
    }
  };

  const handleProfileInfo = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.skills && formData.interests && formData.salary) {
      toast({
        title: "Registration complete",
        description: "Welcome to TrustConnect!",
      });
      navigate("/user/dashboard");
    } else {
      toast({
        title: "Please complete all fields",
        description: "We need this information to match you with the right opportunities",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl p-8 shadow-lg animate-scale-in">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-smooth">
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <div className="mb-8">
          <div className="w-16 h-16 rounded-2xl gradient-secondary flex items-center justify-center mb-4 shadow-warm-glow">
            <Users className="h-8 w-8 text-secondary-foreground" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Create Your Account</h1>
          <p className="text-muted-foreground">
            {step === 1 ? "Let's start with the basics" : "Tell us about your preferences"}
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center gap-2 mb-8">
          <div className={`flex-1 h-2 rounded-full ${step >= 1 ? 'gradient-secondary' : 'bg-muted'}`} />
          <div className={`flex-1 h-2 rounded-full ${step >= 2 ? 'gradient-secondary' : 'bg-muted'}`} />
        </div>

        {step === 1 ? (
          <form onSubmit={handleBasicInfo} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </div>

            <Button type="submit" className="w-full gradient-secondary">
              Continue
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </form>
        ) : (
          <form onSubmit={handleProfileInfo} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="skills">Skills</Label>
                <Textarea
                  id="skills"
                  placeholder="e.g., JavaScript, React, Node.js"
                  value={formData.skills}
                  onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                  required
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="interests">Interests</Label>
                <Textarea
                  id="interests"
                  placeholder="e.g., Web Development, AI, Design"
                  value={formData.interests}
                  onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                  required
                  rows={3}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="salary">Expected Salary</Label>
                <Input
                  id="salary"
                  type="text"
                  placeholder="e.g., $60,000 - $80,000"
                  value={formData.salary}
                  onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Preferred Location</Label>
                <Input
                  id="location"
                  type="text"
                  placeholder="e.g., San Francisco, Remote"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Years of Experience</Label>
              <Input
                id="experience"
                type="text"
                placeholder="e.g., 3 years"
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              />
            </div>

            <div className="flex gap-4">
              <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <Button type="submit" className="flex-1 gradient-secondary">
                Complete Registration
              </Button>
            </div>
          </form>
        )}

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/user/login" className="text-secondary hover:underline">
              Login
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default UserRegister;

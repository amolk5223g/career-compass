import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Building2, ArrowLeft, Camera, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CompanyRegister = () => {
  const [step, setStep] = useState(1);
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [faceVerified, setFaceVerified] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleBasicInfo = (e: React.FormEvent) => {
    e.preventDefault();
    if (companyName && email && password) {
      setStep(2);
    }
  };

  const handleFaceVerification = () => {
    // Simulate face verification
    setFaceVerified(true);
    toast({
      title: "Face verification successful",
      description: "Your identity has been verified",
    });
    
    setTimeout(() => {
      toast({
        title: "Registration complete",
        description: "Redirecting to your dashboard...",
      });
      navigate("/company/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 shadow-lg animate-scale-in">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-smooth">
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <div className="mb-8">
          <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-4 shadow-glow">
            <Building2 className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Register Company</h1>
          <p className="text-muted-foreground">
            {step === 1 ? "Enter your company details" : "Verify your identity"}
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center gap-2 mb-8">
          <div className={`flex-1 h-2 rounded-full ${step >= 1 ? 'gradient-primary' : 'bg-muted'}`} />
          <div className={`flex-1 h-2 rounded-full ${step >= 2 ? 'gradient-primary' : 'bg-muted'}`} />
        </div>

        {step === 1 ? (
          <form onSubmit={handleBasicInfo} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name</Label>
              <Input
                id="companyName"
                type="text"
                placeholder="Acme Corporation"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Company Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="company@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full gradient-primary">
              Continue to Verification
            </Button>
          </form>
        ) : (
          <div className="space-y-6">
            <div className="bg-muted/50 rounded-lg p-8 text-center">
              {!faceVerified ? (
                <>
                  <Camera className="h-24 w-24 mx-auto text-muted-foreground mb-4" />
                  <p className="text-sm text-muted-foreground mb-6">
                    Position your face within the frame for verification
                  </p>
                  <Button onClick={handleFaceVerification} className="gradient-primary">
                    Start Face Verification
                  </Button>
                </>
              ) : (
                <div className="animate-scale-in">
                  <CheckCircle2 className="h-24 w-24 mx-auto text-success mb-4" />
                  <p className="text-lg font-semibold text-success">Verification Complete!</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Redirecting to dashboard...
                  </p>
                </div>
              )}
            </div>

            <p className="text-xs text-center text-muted-foreground">
              Face verification ensures platform security and builds trust with job seekers
            </p>
          </div>
        )}

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/company/login" className="text-primary hover:underline">
              Login
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default CompanyRegister;

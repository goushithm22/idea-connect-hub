
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

// Mock data for startups
const mockStartups = [
  {
    id: 1,
    name: "TechInnovate",
    description: "AI-powered solution for small businesses",
    fundingGoal: 500000,
    currentFunding: 125000,
    sector: "Tech"
  },
  {
    id: 2,
    name: "GreenEnergy",
    description: "Sustainable energy solutions for residential buildings",
    fundingGoal: 750000,
    currentFunding: 300000,
    sector: "Energy"
  },
  {
    id: 3,
    name: "HealthTrack",
    description: "Medical monitoring devices for remote patient care",
    fundingGoal: 1000000,
    currentFunding: 450000,
    sector: "Healthcare"
  }
];

const FounderDashboard = () => {
  const [selectedStartup, setSelectedStartup] = useState<number | null>(null);
  const [isCompanyFormOpen, setIsCompanyFormOpen] = useState(false);
  const userName = "Founder"; // This would come from authentication context
  const { toast } = useToast();

  const handleShowDetails = (id: number) => {
    setSelectedStartup(id);
    toast({
      title: "Startup Details",
      description: `Viewing details for startup ID: ${id}`,
      variant: "default",
    });
  };

  const handleConnect = () => {
    toast({
      title: "Connection Request",
      description: "Your connection request has been sent.",
      variant: "default",
    });
  };

  const handleSubmitCompany = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCompanyFormOpen(false);
    toast({
      title: "Company Listed",
      description: "Your company has been successfully listed.",
      variant: "default",
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-idea">Welcome, {userName}!</h1>
        <Button 
          className="bg-idea hover:bg-idea-dark"
          onClick={() => setIsCompanyFormOpen(true)}
        >
          List a Company
        </Button>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockStartups.map(startup => (
          <Card key={startup.id} className="bg-gray-100 border-gray-300 hover:border-idea transition-colors">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-2 text-gray-800">{startup.name}</h2>
              <p className="text-gray-600 mb-4">{startup.description}</p>
              <p className="text-gray-700"><strong>Sector:</strong> {startup.sector}</p>
              <p className="text-gray-700"><strong>Funding Goal:</strong> ${startup.fundingGoal.toLocaleString()}</p>
              <p className="mb-4 text-gray-700"><strong>Current Funding:</strong> ${startup.currentFunding.toLocaleString()}</p>
              <div className="flex gap-2">
                <Button 
                  className="bg-idea hover:bg-idea-dark" 
                  onClick={() => handleShowDetails(startup.id)}
                >
                  More Details
                </Button>
                <Button 
                  variant="outline" 
                  className="border-idea text-idea hover:bg-idea hover:text-white"
                  onClick={handleConnect}
                >
                  Connect
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Company Listing Dialog */}
      <Dialog open={isCompanyFormOpen} onOpenChange={setIsCompanyFormOpen}>
        <DialogContent className="bg-white text-gray-800 border-gray-300 sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">List Your Company</DialogTitle>
          </DialogHeader>
          <form className="space-y-4" onSubmit={handleSubmitCompany}>
            <div className="space-y-2">
              <Label htmlFor="company-name">Company Name</Label>
              <Input id="company-name" className="bg-gray-50 border-gray-300" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company-description">Description</Label>
              <Textarea id="company-description" className="bg-gray-50 border-gray-300" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company-sector">Sector</Label>
              <Input id="company-sector" className="bg-gray-50 border-gray-300" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="funding-required">Funding Required ($)</Label>
              <Input id="funding-required" type="number" className="bg-gray-50 border-gray-300" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="founder-details">Founder Details</Label>
              <Textarea id="founder-details" className="bg-gray-50 border-gray-300" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="education">Education/Credentials</Label>
              <Textarea id="education" className="bg-gray-50 border-gray-300" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="existing-funding">Existing Funding Acquired (if any)</Label>
              <Input id="existing-funding" type="number" className="bg-gray-50 border-gray-300" />
            </div>

            <div className="flex justify-end gap-3">
              <DialogClose asChild>
                <Button variant="outline" className="border-gray-300">Cancel</Button>
              </DialogClose>
              <Button type="submit" className="bg-idea hover:bg-idea-dark">List Company</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FounderDashboard;

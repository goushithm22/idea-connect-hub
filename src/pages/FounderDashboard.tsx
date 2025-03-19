
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
    <div className="bg-white p-6 rounded-lg text-gray-800">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Welcome, <span className="text-blue-600">Founder</span>!
        </h1>
        <Button 
          className="bg-blue-600 hover:bg-blue-700 text-white"
          onClick={() => setIsCompanyFormOpen(true)}
        >
          List a Company
        </Button>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockStartups.map(startup => (
          <Card key={startup.id} className="bg-white border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all duration-300">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-blue-600">{startup.name}</h2>
              <p className="text-gray-700 mb-4">{startup.description}</p>
              <p className="text-gray-800"><strong>Sector:</strong> {startup.sector}</p>
              <p className="text-gray-800"><strong>Funding Goal:</strong> ${startup.fundingGoal.toLocaleString()}</p>
              
              <div className="mt-3 mb-4 bg-gray-200 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-blue-600 h-full" 
                  style={{ width: `${(startup.currentFunding / startup.fundingGoal) * 100}%` }}
                ></div>
              </div>
              
              <p className="mb-4 text-gray-800">
                <strong>Current Funding:</strong> ${startup.currentFunding.toLocaleString()} 
                <span className="text-gray-600 text-sm ml-1">
                  ({Math.round((startup.currentFunding / startup.fundingGoal) * 100)}%)
                </span>
              </p>
              
              <div className="flex gap-2">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white" 
                  onClick={() => handleShowDetails(startup.id)}
                >
                  More Details
                </Button>
                <Button 
                  variant="outline" 
                  className="border-gray-300 text-gray-800 hover:bg-gray-100 hover:text-blue-600"
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
        <DialogContent className="bg-white text-gray-800 border-gray-200 sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-blue-600">List Your Company</DialogTitle>
          </DialogHeader>
          <form className="space-y-4" onSubmit={handleSubmitCompany}>
            <div className="space-y-2">
              <Label htmlFor="company-name" className="text-gray-800">Company Name</Label>
              <Input id="company-name" className="border-gray-300 bg-white text-gray-800 focus-visible:ring-blue-500" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company-description" className="text-gray-800">Description</Label>
              <Textarea id="company-description" className="border-gray-300 bg-white text-gray-800 focus-visible:ring-blue-500" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company-sector" className="text-gray-800">Sector</Label>
              <Input id="company-sector" className="border-gray-300 bg-white text-gray-800 focus-visible:ring-blue-500" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="funding-required" className="text-gray-800">Funding Required ($)</Label>
              <Input id="funding-required" type="number" className="border-gray-300 bg-white text-gray-800 focus-visible:ring-blue-500" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="founder-details" className="text-gray-800">Founder Details</Label>
              <Textarea id="founder-details" className="border-gray-300 bg-white text-gray-800 focus-visible:ring-blue-500" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="education" className="text-gray-800">Education/Credentials</Label>
              <Textarea id="education" className="border-gray-300 bg-white text-gray-800 focus-visible:ring-blue-500" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="existing-funding" className="text-gray-800">Existing Funding Acquired (if any)</Label>
              <Input id="existing-funding" type="number" className="border-gray-300 bg-white text-gray-800 focus-visible:ring-blue-500" />
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <DialogClose asChild>
                <Button variant="outline" className="border-gray-300 text-gray-800 hover:bg-gray-100">Cancel</Button>
              </DialogClose>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">List Company</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FounderDashboard;

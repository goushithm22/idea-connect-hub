
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
    <div className="bg-black p-6 rounded-lg text-white">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Welcome, <span className="text-red-500">Founder</span>!
        </h1>
        <Button 
          className="bg-red-500 hover:bg-red-600 text-white"
          onClick={() => setIsCompanyFormOpen(true)}
        >
          List a Company
        </Button>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockStartups.map(startup => (
          <Card key={startup.id} className="bg-zinc-900 border border-zinc-800 hover:border-red-500 hover:shadow-md transition-all duration-300">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-red-500">{startup.name}</h2>
              <p className="text-gray-300 mb-4">{startup.description}</p>
              <p className="text-gray-200"><strong>Sector:</strong> {startup.sector}</p>
              <p className="text-gray-200"><strong>Funding Goal:</strong> ${startup.fundingGoal.toLocaleString()}</p>
              
              <div className="mt-3 mb-4 bg-zinc-800 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-red-500 h-full" 
                  style={{ width: `${(startup.currentFunding / startup.fundingGoal) * 100}%` }}
                ></div>
              </div>
              
              <p className="mb-4 text-gray-200">
                <strong>Current Funding:</strong> ${startup.currentFunding.toLocaleString()} 
                <span className="text-gray-400 text-sm ml-1">
                  ({Math.round((startup.currentFunding / startup.fundingGoal) * 100)}%)
                </span>
              </p>
              
              <div className="flex gap-2">
                <Button 
                  className="bg-red-500 hover:bg-red-600 text-white" 
                  onClick={() => handleShowDetails(startup.id)}
                >
                  More Details
                </Button>
                <Button 
                  variant="outline" 
                  className="border-zinc-700 text-gray-200 hover:bg-zinc-800 hover:text-white"
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
        <DialogContent className="bg-zinc-900 text-white border-zinc-800 sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-red-500">List Your Company</DialogTitle>
          </DialogHeader>
          <form className="space-y-4" onSubmit={handleSubmitCompany}>
            <div className="space-y-2">
              <Label htmlFor="company-name" className="text-gray-200">Company Name</Label>
              <Input id="company-name" className="border-zinc-700 bg-zinc-800 text-white focus-visible:ring-red-500" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company-description" className="text-gray-200">Description</Label>
              <Textarea id="company-description" className="border-zinc-700 bg-zinc-800 text-white focus-visible:ring-red-500" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company-sector" className="text-gray-200">Sector</Label>
              <Input id="company-sector" className="border-zinc-700 bg-zinc-800 text-white focus-visible:ring-red-500" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="funding-required" className="text-gray-200">Funding Required ($)</Label>
              <Input id="funding-required" type="number" className="border-zinc-700 bg-zinc-800 text-white focus-visible:ring-red-500" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="founder-details" className="text-gray-200">Founder Details</Label>
              <Textarea id="founder-details" className="border-zinc-700 bg-zinc-800 text-white focus-visible:ring-red-500" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="education" className="text-gray-200">Education/Credentials</Label>
              <Textarea id="education" className="border-zinc-700 bg-zinc-800 text-white focus-visible:ring-red-500" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="existing-funding" className="text-gray-200">Existing Funding Acquired (if any)</Label>
              <Input id="existing-funding" type="number" className="border-zinc-700 bg-zinc-800 text-white focus-visible:ring-red-500" />
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <DialogClose asChild>
                <Button variant="outline" className="border-zinc-700 text-gray-200 hover:bg-zinc-800">Cancel</Button>
              </DialogClose>
              <Button type="submit" className="bg-red-500 hover:bg-red-600 text-white">List Company</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FounderDashboard;


import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { LineChart, BarChart } from 'lucide-react';

// Mock data for startups
const mockStartups = [
  {
    id: 1,
    name: "TechInnovate",
    description: "AI-powered solution for small businesses",
    fundingGoal: 500000,
    currentFunding: 125000,
    sector: "Tech",
    roi: "15-20%",
    risk: "Medium"
  },
  {
    id: 2,
    name: "GreenEnergy",
    description: "Sustainable energy solutions for residential buildings",
    fundingGoal: 750000,
    currentFunding: 300000,
    sector: "Energy",
    roi: "12-18%",
    risk: "Medium-High"
  },
  {
    id: 3,
    name: "HealthTrack",
    description: "Medical monitoring devices for remote patient care",
    fundingGoal: 1000000,
    currentFunding: 450000,
    sector: "Healthcare",
    roi: "20-25%",
    risk: "Low"
  }
];

const InvestorDashboard = () => {
  const [selectedStartup, setSelectedStartup] = useState<number | null>(null);
  const [isInvestFormOpen, setIsInvestFormOpen] = useState(false);
  const userName = "Investor"; // This would come from authentication context
  const { toast } = useToast();

  const handleShowDetails = (id: number) => {
    setSelectedStartup(id);
    toast({
      title: "Startup Details",
      description: `Viewing details for startup ID: ${id}`,
      variant: "default",
    });
  };

  const handleInvest = (id: number) => {
    setSelectedStartup(id);
    setIsInvestFormOpen(true);
  };

  const handleSubmitInvestment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsInvestFormOpen(false);
    toast({
      title: "Investment Submitted",
      description: "Your investment has been successfully submitted.",
      variant: "default",
    });
  };

  return (
    <div className="bg-blue-50 p-6 rounded-lg min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-blue-600">Welcome, {userName}!</h1>
        <div className="flex gap-2">
          <Button className="bg-idea hover:bg-idea-dark text-white">
            <LineChart className="mr-2 h-4 w-4" /> Portfolio Analysis
          </Button>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockStartups.map(startup => (
          <Card key={startup.id} className="bg-white border-blue-200 hover:border-blue-400 transition-colors shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-2 text-blue-700">{startup.name}</h2>
              <p className="text-gray-600 mb-4">{startup.description}</p>
              <p className="text-blue-600"><strong>Sector:</strong> {startup.sector}</p>
              <p className="text-blue-600"><strong>Funding Goal:</strong> ${startup.fundingGoal.toLocaleString()}</p>
              <p className="text-blue-600"><strong>Current Funding:</strong> ${startup.currentFunding.toLocaleString()}</p>
              <p className="text-blue-600"><strong>Expected ROI:</strong> {startup.roi}</p>
              <p className="mb-4 text-blue-600"><strong>Risk Level:</strong> {startup.risk}</p>
              <div className="flex gap-2">
                <Button 
                  className="bg-idea hover:bg-idea-dark text-white" 
                  onClick={() => handleShowDetails(startup.id)}
                >
                  More Details
                </Button>
                <Button 
                  variant="outline" 
                  className="border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white"
                  onClick={() => handleInvest(startup.id)}
                >
                  Invest
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Investment Dialog */}
      <Dialog open={isInvestFormOpen} onOpenChange={setIsInvestFormOpen}>
        <DialogContent className="bg-white text-gray-800 border-blue-200 sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-blue-700">Invest in {selectedStartup ? mockStartups.find(s => s.id === selectedStartup)?.name : ''}</DialogTitle>
          </DialogHeader>
          <form className="space-y-4" onSubmit={handleSubmitInvestment}>
            <div className="space-y-2">
              <Label htmlFor="investment-amount">Investment Amount ($)</Label>
              <Input id="investment-amount" type="number" className="bg-blue-50 border-blue-200" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="investment-notes">Notes</Label>
              <Textarea id="investment-notes" className="bg-blue-50 border-blue-200" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="investment-terms">Investment Terms</Label>
              <select id="investment-terms" className="w-full bg-blue-50 border border-blue-200 rounded-md px-4 py-2">
                <option value="equity">Equity</option>
                <option value="loan">Loan</option>
                <option value="convertible-note">Convertible Note</option>
              </select>
            </div>

            <div className="flex justify-end gap-3">
              <DialogClose asChild>
                <Button variant="outline" className="border-blue-300">Cancel</Button>
              </DialogClose>
              <Button type="submit" className="bg-idea hover:bg-idea-dark text-white">Submit Investment</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default InvestorDashboard;

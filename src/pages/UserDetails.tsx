
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Mock data for user
const mockUser = {
  name: "John Doe",
  email: "john.doe@example.com"
};

// Mock data for startups
const mockUserStartups = [
  {
    id: 1,
    name: "TechInnovate",
    description: "AI-powered solution for small businesses",
    fundingGoal: 500000,
    sector: "Tech"
  },
  {
    id: 2,
    name: "GreenEnergy",
    description: "Sustainable energy solutions for residential buildings",
    fundingGoal: 750000,
    sector: "Energy"
  }
];

const UserDetails = () => {
  const [isCompanyFormOpen, setIsCompanyFormOpen] = useState(false);

  return (
    <div>
      <Card className="bg-gray-800 border-gray-700 mb-8">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-idea">User Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p><strong>Name:</strong> {mockUser.name}</p>
          <p><strong>Email:</strong> {mockUser.email}</p>
          <Button 
            className="mt-4 bg-idea hover:bg-idea-dark"
            onClick={() => setIsCompanyFormOpen(true)}
          >
            List a Company
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-idea">Existing Listed Companies</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {mockUserStartups.map(startup => (
              <li key={startup.id} className="border-b border-gray-700 pb-4">
                <strong>{startup.name}</strong> - {startup.description}
                <br />
                <span className="text-sm text-gray-400">
                  (Funding Goal: ${startup.fundingGoal.toLocaleString()}, Sector: {startup.sector})
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Company Listing Dialog */}
      <Dialog open={isCompanyFormOpen} onOpenChange={setIsCompanyFormOpen}>
        <DialogContent className="bg-gray-800 text-white border-gray-700 sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">List Your Company</DialogTitle>
          </DialogHeader>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <Label htmlFor="company-name">Company Name</Label>
              <Input id="company-name" className="bg-gray-700 border-gray-600" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="sector">Sector</Label>
              <Select>
                <SelectTrigger className="bg-gray-700 border-gray-600">
                  <SelectValue placeholder="Select Sector" />
                </SelectTrigger>
                <SelectContent className="bg-gray-700 border-gray-600">
                  <SelectItem value="tech">Tech</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="funding-goal">Funding Goal ($)</Label>
              <Input id="funding-goal" type="number" className="bg-gray-700 border-gray-600" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="founder-details">Founder Details</Label>
              <Textarea id="founder-details" className="bg-gray-700 border-gray-600" />
            </div>

            <div className="flex justify-end gap-3">
              <DialogClose asChild>
                <Button variant="outline" className="border-gray-600">Cancel</Button>
              </DialogClose>
              <Button className="bg-idea hover:bg-idea-dark">List Company</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UserDetails;


import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface StartupDetailsProps {
  startup: {
    name: string;
    description: string;
    fundingGoal: number;
    currentFunding: number;
    investors: number;
    pitchViews: number;
  };
}

const StartupDetails = ({ startup }: StartupDetailsProps) => {
  const getProgressColor = (percentage: number) => {
    if (percentage < 30) return "bg-red-500";
    if (percentage < 70) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <Card className="bg-white border-gray-200">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-xl text-gray-900">{startup.name}</CardTitle>
            <CardDescription>{startup.description}</CardDescription>
          </div>
          <Button 
            variant="outline" 
            className="border-blue-200 text-blue-600 hover:bg-blue-50"
          >
            Edit Details
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-600">Funding Goal</p>
              <p className="text-xl font-bold text-gray-900">${startup.fundingGoal.toLocaleString()}</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-600">Current Funding</p>
              <p className="text-xl font-bold text-green-600">${startup.currentFunding.toLocaleString()}</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-600">Investors</p>
              <p className="text-xl font-bold text-blue-600">{startup.investors}</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-600">Pitch Views</p>
              <p className="text-xl font-bold text-purple-600">{startup.pitchViews}</p>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Funding Progress</span>
              <span>${startup.currentFunding.toLocaleString()} of ${startup.fundingGoal.toLocaleString()} ({Math.round((startup.currentFunding / startup.fundingGoal) * 100)}%)</span>
            </div>
            <Progress 
              value={(startup.currentFunding / startup.fundingGoal) * 100} 
              className="h-3 bg-gray-100"
              indicatorClassName={getProgressColor(
                (startup.currentFunding / startup.fundingGoal) * 100
              )}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StartupDetails;

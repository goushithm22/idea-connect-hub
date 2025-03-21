
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface Startup {
  id: number;
  name: string;
  description: string;
  fundingGoal: number;
  currentFunding: number;
  sector: string;
  investors: number;
  connections: number;
  meetings: number;
  pitchViews: number;
  stage: string;
}

interface StartupSelectorProps {
  startups: Startup[];
  activeStartupId: number;
  onStartupSelect: (id: number) => void;
}

const StartupSelector = ({ startups, activeStartupId, onStartupSelect }: StartupSelectorProps) => {
  const getProgressColor = (percentage: number) => {
    if (percentage < 30) return "bg-red-500";
    if (percentage < 70) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <Card className="bg-white border-gray-200">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-gray-900">My Startups</CardTitle>
      </CardHeader>
      <CardContent className="p-4 space-y-3">
        {startups.map(startup => (
          <div 
            key={startup.id} 
            className={`p-3 rounded-lg cursor-pointer transition-all duration-300 ${
              startup.id === activeStartupId 
                ? 'bg-blue-50 border-l-4 border-blue-600' 
                : 'hover:bg-gray-50 border-l-4 border-transparent'
            }`}
            onClick={() => onStartupSelect(startup.id)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-medium text-gray-900">{startup.name}</h3>
              <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">{startup.stage}</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">{startup.sector}</p>
            <div className="mt-2">
              <div className="flex justify-between text-xs text-gray-600 mb-1">
                <span>Funding Progress</span>
                <span>{Math.round((startup.currentFunding / startup.fundingGoal) * 100)}%</span>
              </div>
              <Progress 
                value={(startup.currentFunding / startup.fundingGoal) * 100} 
                className="h-2 bg-gray-100"
                indicatorClassName={getProgressColor(
                  (startup.currentFunding / startup.fundingGoal) * 100
                )}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default StartupSelector;

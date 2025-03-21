
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gauge, TrendingUp, Activity, Target } from 'lucide-react';

const InsightsTab = () => {
  return (
    <div className="space-y-4">
      <Card className="bg-white border-gray-200">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg text-gray-900">Performance Metrics</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-blue-50 p-2 rounded-full">
                <Gauge className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Investor Interest</p>
                <p className="text-lg font-bold text-gray-900">High</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-green-50 p-2 rounded-full">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Engagement Rate</p>
                <p className="text-lg font-bold text-gray-900">68%</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-purple-50 p-2 rounded-full">
                <Activity className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Profile Views</p>
                <p className="text-lg font-bold text-gray-900">+24% <span className="text-xs text-gray-500">vs last month</span></p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-orange-50 p-2 rounded-full">
                <Target className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Funding Velocity</p>
                <p className="text-lg font-bold text-gray-900">$45K <span className="text-xs text-gray-500">per month</span></p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-white border-gray-200">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg text-gray-900">Investor Match Recommendations</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="space-y-3">
            {[1, 2, 3].map((item, index) => (
              <div key={index} className="flex justify-between items-center p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{["Tech Angels", "Growth Capital", "SV Ventures"][index]}</p>
                    <p className="text-xs text-gray-600">{["Seed Stage Specialist", "Series A Focus", "Tech Investor"][index]}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-green-600 font-medium">{["94%", "87%", "82%"][index]} match</span>
                  <Button size="sm" variant="outline" className="text-xs">Connect</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InsightsTab;

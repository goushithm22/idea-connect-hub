
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const InvestorsTab = () => {
  return (
    <Card className="bg-white border-gray-200">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg text-gray-900">Interested Investors</CardTitle>
          <Select defaultValue="all">
            <SelectTrigger className="w-[120px] text-xs h-8">
              <SelectValue placeholder="Filter by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Investors</SelectItem>
              <SelectItem value="recent">Recent Interest</SelectItem>
              <SelectItem value="engaged">Most Engaged</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-3">
          {[1, 2, 3, 4].map((item, index) => (
            <div key={index} className="flex justify-between items-center p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 font-bold">
                  {String.fromCharCode(65 + index)}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{["Angel Investor", "VC Fund", "Corporate Investor", "Private Equity"][index]}</p>
                  <p className="text-xs text-gray-600">{["Viewed pitch 3 days ago", "Requested documents", "Scheduled call", "New connection"][index]}</p>
                </div>
              </div>
              <Button size="sm" className="text-xs bg-blue-600">Respond</Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default InvestorsTab;

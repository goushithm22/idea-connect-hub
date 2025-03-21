
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, ArrowRight } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const InvestorsTab = () => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
          <Input 
            placeholder="Search investors..." 
            className="pl-9 bg-white border-gray-200"
          />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[140px] text-xs h-9 bg-white border-gray-200">
            <SelectValue placeholder="Filter by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Investors</SelectItem>
            <SelectItem value="recent">Recent Interest</SelectItem>
            <SelectItem value="engaged">Most Engaged</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Card className="bg-white border-gray-200 shadow-sm hover:shadow-md transition-all">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg text-gray-900">Interested Investors</CardTitle>
            <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50">
              Browse Network <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
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
                <Button size="sm" className="text-xs bg-blue-600 hover:bg-blue-700">Respond</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InvestorsTab;


import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Video, MapPin, Plus, ArrowRight } from 'lucide-react';

interface MeetingsTabProps {
  meetings: Array<{
    investor: string;
    date: string;
    type: string;
  }>;
}

const MeetingsTab = ({ meetings }: MeetingsTabProps) => {
  return (
    <Card className="bg-white border-gray-200 shadow-sm hover:shadow-md transition-all">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg text-gray-900">Upcoming Investor Meetings</CardTitle>
          <div className="flex gap-2">
            <Button 
              size="sm" 
              variant="ghost" 
              className="text-blue-600 hover:bg-blue-50 text-xs flex items-center"
            >
              View All <ArrowRight className="ml-1 h-3 w-3" />
            </Button>
            <Button 
              size="sm" 
              variant="outline" 
              className="text-xs flex items-center gap-1 border-blue-200 text-blue-600 hover:bg-blue-50"
            >
              <Plus className="h-3 w-3" />
              Schedule
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-3">
          {meetings.map((meeting, index) => (
            <div key={index} className="flex justify-between items-center p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
              <div>
                <p className="font-medium text-gray-900">{meeting.investor}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Calendar className="h-3 w-3 text-gray-500" />
                  <p className="text-xs text-gray-600">{meeting.date}</p>
                  {meeting.type === "Virtual" 
                    ? <Video className="h-3 w-3 text-blue-500 ml-2" /> 
                    : <MapPin className="h-3 w-3 text-green-500 ml-2" />
                  }
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  meeting.type === "Virtual" 
                    ? "bg-blue-100 text-blue-800" 
                    : "bg-green-100 text-green-800"
                }`}>
                  {meeting.type}
                </span>
                <Button size="sm" variant="outline" className="text-xs">Details</Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MeetingsTab;


import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ActivityItem {
  action: string;
  time: string;
  icon: React.ReactNode;
}

interface ActivityFeedProps {
  activities: ActivityItem[];
}

const ActivityFeed = ({ activities }: ActivityFeedProps) => {
  return (
    <Card className="bg-white border-gray-200">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-gray-900">Activity Feed</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="bg-blue-50 p-2 rounded-full">
                {activity.icon}
              </div>
              <div>
                <p className="text-sm text-gray-800">{activity.action}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityFeed;

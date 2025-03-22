
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
}

const StatCard = ({ title, value, icon, change, changeType = 'neutral' }: StatCardProps) => {
  const getChangeColor = () => {
    switch (changeType) {
      case 'positive':
        return 'text-green-600';
      case 'negative':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <Card className="bg-white border-gray-200 hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-md">
      <CardContent className="p-6 flex items-center gap-4">
        <div className="bg-blue-50 p-3 rounded-lg">
          {icon}
        </div>
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <div className="flex items-end gap-2">
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            {change && (
              <span className={`text-xs ${getChangeColor()}`}>{change}</span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface StatsOverviewProps {
  statsData: Array<{
    title: string;
    value: string;
    icon: React.ReactNode;
    change?: string;
    changeType?: 'positive' | 'negative' | 'neutral';
  }>;
}

const StatsOverview = ({ statsData }: StatsOverviewProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {statsData.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default StatsOverview;

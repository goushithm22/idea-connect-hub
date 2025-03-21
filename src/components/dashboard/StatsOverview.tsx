
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, LineChart, Users, TrendingUp } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const StatCard = ({ title, value, icon }: StatCardProps) => (
  <Card className="bg-white border-gray-200 hover:border-blue-500 transition-all duration-300">
    <CardContent className="p-6 flex items-center gap-4">
      <div className="bg-blue-50 p-3 rounded-lg">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </CardContent>
  </Card>
);

interface StatsOverviewProps {
  statsData: Array<{
    title: string;
    value: string;
    icon: React.ReactNode;
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

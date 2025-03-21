
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { Bell, Briefcase, Calendar, LineChart, Mail, Target, TrendingUp, Users } from 'lucide-react';

// Import dashboard components
import StatsOverview from '@/components/dashboard/StatsOverview';
import ActivityFeed from '@/components/dashboard/ActivityFeed';
import StartupSelector from '@/components/dashboard/StartupSelector';
import StartupDetails from '@/components/dashboard/StartupDetails';
import InsightsTab from '@/components/dashboard/InsightsTab';
import MeetingsTab from '@/components/dashboard/MeetingsTab';
import InvestorsTab from '@/components/dashboard/InvestorsTab';
import CompanyForm from '@/components/dashboard/CompanyForm';

const FounderDashboard = () => {
  const [isCompanyFormOpen, setIsCompanyFormOpen] = useState(false);
  const [activeStartupId, setActiveStartupId] = useState(1);
  const { toast } = useToast();

  // Mock data for startups
  const mockStartups = [
    {
      id: 1,
      name: "TechInnovate",
      description: "AI-powered solution for small businesses",
      fundingGoal: 500000,
      currentFunding: 125000,
      sector: "Tech",
      investors: 18,
      connections: 32,
      meetings: 8,
      pitchViews: 156,
      stage: "Seed"
    },
    {
      id: 2,
      name: "GreenEnergy",
      description: "Sustainable energy solutions for residential buildings",
      fundingGoal: 750000,
      currentFunding: 300000,
      sector: "Energy",
      investors: 24,
      connections: 56,
      meetings: 12,
      pitchViews: 203,
      stage: "Series A"
    },
    {
      id: 3,
      name: "HealthTrack",
      description: "Medical monitoring devices for remote patient care",
      fundingGoal: 1000000,
      currentFunding: 450000,
      sector: "Healthcare",
      investors: 30,
      connections: 41,
      meetings: 15,
      pitchViews: 178,
      stage: "Seed"
    }
  ];

  const activeStartup = mockStartups.find(s => s.id === activeStartupId) || mockStartups[0];

  // Stats data
  const statsData = [
    { title: "Active Listings", value: "3", icon: <Briefcase className="w-5 h-5 text-blue-600" /> },
    { title: "Total Funding", value: "$875K", icon: <LineChart className="w-5 h-5 text-green-600" /> },
    { title: "Investor Connects", value: "129", icon: <Users className="w-5 h-5 text-purple-600" /> },
    { title: "Growth Rate", value: "+28%", icon: <TrendingUp className="w-5 h-5 text-orange-600" /> }
  ];

  // Recent activities
  const recentActivities = [
    { action: "New investor viewed your profile", time: "Just now", icon: <Users className="w-4 h-4 text-blue-600" /> },
    { action: "Meeting scheduled with SV Capital", time: "2 hours ago", icon: <Calendar className="w-4 h-4 text-green-600" /> },
    { action: "Funding milestone reached for HealthTrack", time: "Yesterday", icon: <Target className="w-4 h-4 text-purple-600" /> },
    { action: "New message from potential investor", time: "2 days ago", icon: <Mail className="w-4 h-4 text-orange-600" /> }
  ];

  // Upcoming meetings
  const upcomingMeetings = [
    { investor: "SV Capital", date: "Tomorrow, 10:00 AM", type: "Virtual" },
    { investor: "GrowthFund Partners", date: "Oct 15, 2:30 PM", type: "In-person" },
    { investor: "TechVentures Inc.", date: "Oct 18, 11:00 AM", type: "Virtual" }
  ];

  const handleCompanySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCompanyFormOpen(false);
    toast({
      title: "Company Listed",
      description: "Your company has been successfully listed.",
      variant: "default",
    });
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header with welcome message and buttons */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome, <span className="text-blue-600">Founder</span>!
          </h1>
          <p className="text-gray-600 mt-1">Manage your startups and connect with investors</p>
        </div>
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            className="flex items-center gap-2 border-blue-200 text-blue-600 hover:bg-blue-50"
          >
            <Bell className="h-4 w-4" />
            <span className="hidden sm:inline">Notifications</span>
            <span className="inline-block bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
          </Button>
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
            onClick={() => setIsCompanyFormOpen(true)}
          >
            <Briefcase className="h-4 w-4" />
            List a Company
          </Button>
        </div>
      </div>
      
      {/* Stats Overview */}
      <StatsOverview statsData={statsData} />
      
      {/* Main content with startup selection and details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column - Startup Selector and Activity Feed */}
        <div className="lg:col-span-1 space-y-6">
          <StartupSelector 
            startups={mockStartups} 
            activeStartupId={activeStartupId} 
            onStartupSelect={setActiveStartupId} 
          />
          
          <ActivityFeed activities={recentActivities} />
        </div>
        
        {/* Right columns - Active Startup Details */}
        <div className="lg:col-span-2 space-y-6">
          <StartupDetails startup={activeStartup} />
          
          <Tabs defaultValue="insights">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="insights">Insights</TabsTrigger>
              <TabsTrigger value="meetings">Meetings</TabsTrigger>
              <TabsTrigger value="investors">Potential Investors</TabsTrigger>
            </TabsList>
            
            <TabsContent value="insights">
              <InsightsTab />
            </TabsContent>
            
            <TabsContent value="meetings">
              <MeetingsTab meetings={upcomingMeetings} />
            </TabsContent>
            
            <TabsContent value="investors">
              <InvestorsTab />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      {/* Company Listing Dialog */}
      <CompanyForm 
        open={isCompanyFormOpen} 
        onOpenChange={setIsCompanyFormOpen} 
        onSubmit={handleCompanySubmit} 
      />
    </div>
  );
};

export default FounderDashboard;

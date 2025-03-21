
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { 
  LineChart, Users, Target, Briefcase, Activity, 
  TrendingUp, Calendar, Bell, Mail, Gauge 
} from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

  const getProgressColor = (percentage: number) => {
    if (percentage < 30) return "bg-red-500";
    if (percentage < 70) return "bg-yellow-500";
    return "bg-green-500";
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsData.map((stat, index) => (
          <Card key={index} className="bg-white border-gray-200 hover:border-blue-500 transition-all duration-300">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="bg-blue-50 p-3 rounded-lg">
                {stat.icon}
              </div>
              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Main content with startup selection and details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column - Startup Selector */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-white border-gray-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl text-gray-900">My Startups</CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-3">
              {mockStartups.map(startup => (
                <div 
                  key={startup.id} 
                  className={`p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                    startup.id === activeStartupId 
                      ? 'bg-blue-50 border-l-4 border-blue-600' 
                      : 'hover:bg-gray-50 border-l-4 border-transparent'
                  }`}
                  onClick={() => setActiveStartupId(startup.id)}
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
          
          <Card className="bg-white border-gray-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl text-gray-900">Activity Feed</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
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
        </div>
        
        {/* Right columns - Active Startup Details */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-white border-gray-200">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-xl text-gray-900">{activeStartup.name}</CardTitle>
                  <CardDescription>{activeStartup.description}</CardDescription>
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
                    <p className="text-xl font-bold text-gray-900">${activeStartup.fundingGoal.toLocaleString()}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600">Current Funding</p>
                    <p className="text-xl font-bold text-green-600">${activeStartup.currentFunding.toLocaleString()}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600">Investors</p>
                    <p className="text-xl font-bold text-blue-600">{activeStartup.investors}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600">Pitch Views</p>
                    <p className="text-xl font-bold text-purple-600">{activeStartup.pitchViews}</p>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Funding Progress</span>
                    <span>${activeStartup.currentFunding.toLocaleString()} of ${activeStartup.fundingGoal.toLocaleString()} ({Math.round((activeStartup.currentFunding / activeStartup.fundingGoal) * 100)}%)</span>
                  </div>
                  <Progress 
                    value={(activeStartup.currentFunding / activeStartup.fundingGoal) * 100} 
                    className="h-3 bg-gray-100"
                    indicatorClassName={getProgressColor(
                      (activeStartup.currentFunding / activeStartup.fundingGoal) * 100
                    )}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Tabs defaultValue="insights">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="insights">Insights</TabsTrigger>
              <TabsTrigger value="meetings">Meetings</TabsTrigger>
              <TabsTrigger value="investors">Potential Investors</TabsTrigger>
            </TabsList>
            
            <TabsContent value="insights" className="space-y-4">
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
            </TabsContent>
            
            <TabsContent value="meetings">
              <Card className="bg-white border-gray-200">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg text-gray-900">Upcoming Investor Meetings</CardTitle>
                    <Button size="sm" variant="outline" className="text-xs flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      Schedule
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    {upcomingMeetings.map((meeting, index) => (
                      <div key={index} className="flex justify-between items-center p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
                        <div>
                          <p className="font-medium text-gray-900">{meeting.investor}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Calendar className="h-3 w-3 text-gray-500" />
                            <p className="text-xs text-gray-600">{meeting.date}</p>
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
            </TabsContent>
            
            <TabsContent value="investors">
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
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      {/* Company Listing Dialog */}
      <Dialog open={isCompanyFormOpen} onOpenChange={setIsCompanyFormOpen}>
        <DialogContent className="bg-white text-gray-800 border-gray-200 sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-blue-600">List Your Company</DialogTitle>
          </DialogHeader>
          <form className="space-y-4" onSubmit={handleCompanySubmit}>
            <div className="space-y-2">
              <Label htmlFor="company-name" className="text-gray-800">Company Name</Label>
              <Input id="company-name" className="border-gray-300 bg-white text-gray-800 focus-visible:ring-blue-500" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company-description" className="text-gray-800">Description</Label>
              <Textarea id="company-description" className="border-gray-300 bg-white text-gray-800 focus-visible:ring-blue-500" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company-sector" className="text-gray-800">Sector</Label>
              <Select>
                <SelectTrigger className="border-gray-300 bg-white text-gray-800">
                  <SelectValue placeholder="Select Sector" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Tech">Technology</SelectItem>
                  <SelectItem value="Healthcare">Healthcare</SelectItem>
                  <SelectItem value="Energy">Energy</SelectItem>
                  <SelectItem value="Finance">Finance</SelectItem>
                  <SelectItem value="Education">Education</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="funding-required" className="text-gray-800">Funding Required ($)</Label>
              <Input id="funding-required" type="number" className="border-gray-300 bg-white text-gray-800 focus-visible:ring-blue-500" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="funding-stage" className="text-gray-800">Funding Stage</Label>
              <Select>
                <SelectTrigger className="border-gray-300 bg-white text-gray-800">
                  <SelectValue placeholder="Select Stage" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Pre-Seed">Pre-Seed</SelectItem>
                  <SelectItem value="Seed">Seed</SelectItem>
                  <SelectItem value="Series A">Series A</SelectItem>
                  <SelectItem value="Series B">Series B</SelectItem>
                  <SelectItem value="Series C">Series C+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="existing-funding" className="text-gray-800">Existing Funding Acquired (if any)</Label>
              <Input id="existing-funding" type="number" className="border-gray-300 bg-white text-gray-800 focus-visible:ring-blue-500" />
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <DialogClose asChild>
                <Button variant="outline" className="border-gray-300 text-gray-800 hover:bg-gray-100">Cancel</Button>
              </DialogClose>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">List Company</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FounderDashboard;

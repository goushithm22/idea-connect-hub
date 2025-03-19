
import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ChevronRight, Home, User, LogOut, LineChart } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    // In a real app, this would clear auth state
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
      variant: "default",
    });
    navigate('/signin');
  };

  return (
    <div className="flex h-screen bg-gray-50 text-gray-800">
      {/* Mobile sidebar */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className="fixed z-50 left-4 top-4 md:hidden">
          <Button variant="outline" size="icon" className="bg-white border-gray-200">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[250px] bg-white border-gray-200 p-0">
          <div className="py-6 px-4">
            <h2 className="text-xl font-light tracking-tight mb-6 text-center">
              idea<span className="font-semibold">Sync</span>
            </h2>
            <nav className="space-y-2">
              <Link 
                to="/dashboard" 
                className="flex items-center gap-2 p-3 rounded-md hover:bg-idea hover:text-white transition-colors duration-200"
                onClick={() => setOpen(false)}
              >
                <Home size={20} />
                <span>Home</span>
              </Link>
              <Link 
                to="/dashboard/user" 
                className="flex items-center gap-2 p-3 rounded-md hover:bg-idea hover:text-white transition-colors duration-200"
                onClick={() => setOpen(false)}
              >
                <User size={20} />
                <span>User</span>
              </Link>
              <Link 
                to="/dashboard/investor" 
                className="flex items-center gap-2 p-3 rounded-md hover:bg-idea hover:text-white transition-colors duration-200"
                onClick={() => setOpen(false)}
              >
                <LineChart size={20} />
                <span>Investor View</span>
              </Link>
              <Button 
                variant="ghost" 
                className="w-full flex items-center justify-start gap-2 p-3 rounded-md hover:bg-idea hover:text-white transition-colors duration-200"
                onClick={() => {
                  setOpen(false);
                  handleLogout();
                }}
              >
                <LogOut size={20} />
                <span>Logout</span>
              </Button>
            </nav>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop sidebar */}
      <aside className="hidden md:block w-[250px] bg-white border-r border-gray-200 p-6 shadow-sm">
        <h2 className="text-xl font-light tracking-tight mb-8 text-center">
          idea<span className="font-semibold">Sync</span>
        </h2>
        <nav className="space-y-2">
          <Link 
            to="/dashboard" 
            className="flex items-center gap-2 p-3 rounded-md hover:bg-idea hover:text-white transition-colors duration-200"
          >
            <Home size={20} />
            <span>Home</span>
          </Link>
          <Link 
            to="/dashboard/user" 
            className="flex items-center gap-2 p-3 rounded-md hover:bg-idea hover:text-white transition-colors duration-200"
          >
            <User size={20} />
            <span>User</span>
          </Link>
          <Link 
            to="/dashboard/investor" 
            className="flex items-center gap-2 p-3 rounded-md hover:bg-idea hover:text-white transition-colors duration-200"
          >
            <LineChart size={20} />
            <span>Investor View</span>
          </Link>
          <Button 
            variant="ghost" 
            className="w-full flex items-center justify-start gap-2 p-3 rounded-md hover:bg-idea hover:text-white transition-colors duration-200"
            onClick={handleLogout}
          >
            <LogOut size={20} />
            <span>Logout</span>
          </Button>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto bg-gray-50 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;

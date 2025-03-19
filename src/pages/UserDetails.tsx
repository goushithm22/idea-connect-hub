
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const UserDetails = () => {
  // Mock user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    username: "johndoe",
    role: "Founder",
    joinDate: "January 15, 2023",
    companies: [
      {
        name: "TechInnovate",
        description: "AI-powered solution for small businesses",
        fundingGoal: 500000,
        sector: "Tech"
      },
      {
        name: "GreenEnergy",
        description: "Sustainable energy solutions for residential buildings",
        fundingGoal: 750000,
        sector: "Energy"
      }
    ]
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-white">
        User <span className="text-red-500">Profile</span>
      </h1>
      
      <Card className="bg-zinc-900 border-zinc-800 shadow-sm hover:shadow-md transition-all duration-300">
        <CardHeader className="border-b border-zinc-800 pb-4">
          <CardTitle className="text-xl font-semibold text-red-500">User Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 pt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-400">Name</p>
              <p className="text-gray-200 font-medium">{user.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="text-gray-200 font-medium">{user.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Username</p>
              <p className="text-gray-200 font-medium">{user.username}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Role</p>
              <p className="text-gray-200 font-medium">{user.role}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Member Since</p>
              <p className="text-gray-200 font-medium">{user.joinDate}</p>
            </div>
          </div>
          
          <div className="pt-4">
            <Button 
              className="bg-red-500 hover:bg-red-600 text-white"
            >
              Edit Profile
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-zinc-900 border-zinc-800 shadow-sm hover:shadow-md transition-all duration-300">
        <CardHeader className="border-b border-zinc-800 pb-4">
          <CardTitle className="text-xl font-semibold text-red-500">Listed Companies</CardTitle>
        </CardHeader>
        <CardContent className="pt-5">
          {user.companies.length > 0 ? (
            <ul className="space-y-4">
              {user.companies.map((company, index) => (
                <li key={index} className="p-4 border border-zinc-800 rounded-md hover:border-red-500 hover:shadow-sm transition-all duration-300">
                  <h3 className="text-lg font-semibold text-red-500">{company.name}</h3>
                  <p className="text-gray-300 my-2">{company.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-3 py-1 bg-zinc-800 text-gray-300 rounded-full text-xs font-medium">
                      {company.sector}
                    </span>
                    <span className="px-3 py-1 bg-zinc-800 text-gray-300 rounded-full text-xs font-medium">
                      ${company.fundingGoal.toLocaleString()}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400">No companies listed yet.</p>
          )}
          
          <div className="mt-6">
            <Link to="/dashboard">
              <Button 
                className="bg-red-500 hover:bg-red-600 text-white"
              >
                List a New Company
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserDetails;

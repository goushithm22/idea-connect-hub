
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
      <h1 className="text-3xl font-light tracking-tight text-gray-800">
        User <span className="font-semibold">Profile</span>
      </h1>
      
      <Card className="bg-white border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
        <CardHeader className="border-b border-gray-100 pb-4">
          <CardTitle className="text-xl font-semibold text-idea">User Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 pt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="text-gray-800 font-medium">{user.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-gray-800 font-medium">{user.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Username</p>
              <p className="text-gray-800 font-medium">{user.username}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Role</p>
              <p className="text-gray-800 font-medium">{user.role}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Member Since</p>
              <p className="text-gray-800 font-medium">{user.joinDate}</p>
            </div>
          </div>
          
          <div className="pt-4">
            <Button 
              className="bg-idea hover:bg-idea-dark text-white"
            >
              Edit Profile
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-white border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
        <CardHeader className="border-b border-gray-100 pb-4">
          <CardTitle className="text-xl font-semibold text-idea">Listed Companies</CardTitle>
        </CardHeader>
        <CardContent className="pt-5">
          {user.companies.length > 0 ? (
            <ul className="space-y-4">
              {user.companies.map((company, index) => (
                <li key={index} className="p-4 border border-gray-100 rounded-md hover:border-idea hover:shadow-sm transition-all duration-300">
                  <h3 className="text-lg font-semibold text-idea">{company.name}</h3>
                  <p className="text-gray-600 my-2">{company.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      {company.sector}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      ${company.fundingGoal.toLocaleString()}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No companies listed yet.</p>
          )}
          
          <div className="mt-6">
            <Link to="/dashboard">
              <Button 
                className="bg-idea hover:bg-idea-dark text-white"
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

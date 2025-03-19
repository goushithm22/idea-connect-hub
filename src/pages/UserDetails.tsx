
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
      <h1 className="text-3xl font-bold text-blue-600">User Profile</h1>
      
      <Card className="bg-white border-blue-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-blue-700">User Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Role:</strong> {user.role}</p>
          <p><strong>Member Since:</strong> {user.joinDate}</p>
          
          <div className="pt-4">
            <Button 
              className="bg-idea hover:bg-idea-dark text-white"
            >
              Edit Profile
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-white border-blue-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-blue-700">Listed Companies</CardTitle>
        </CardHeader>
        <CardContent>
          {user.companies.length > 0 ? (
            <ul className="space-y-4">
              {user.companies.map((company, index) => (
                <li key={index} className="p-4 border border-blue-100 rounded-md">
                  <h3 className="text-lg font-semibold text-blue-700">{company.name}</h3>
                  <p className="text-gray-600">{company.description}</p>
                  <p className="text-blue-600 mt-2">
                    <strong>Sector:</strong> {company.sector} | 
                    <strong> Funding Goal:</strong> ${company.fundingGoal.toLocaleString()}
                  </p>
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


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from "@/components/ui/use-toast";

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Founder'); // Default role
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, simulate successful login with any credentials
    console.log('Login attempt with:', { username, password, role });
    
    // Show success toast
    toast({
      title: "Successfully signed in",
      description: "You have been logged in successfully.",
      variant: "default",
    });
    
    // Navigate to the appropriate dashboard based on role
    setTimeout(() => {
      if (role === 'Investor') {
        navigate('/dashboard/investor');
      } else {
        navigate('/dashboard'); // Default to founder dashboard
      }
      console.log(`Navigating to ${role.toLowerCase()} dashboard...`);
    }, 500);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-white to-lightgrey">
      <div className="bg-lightgrey-100 p-8 rounded-xl shadow-lg w-full max-w-md border border-lightgrey-300">
        <div className="text-center mb-6">
          <Link to="/" className="inline-block">
            <h1 className="text-3xl font-light tracking-tight">
              idea<span className="font-semibold">sync</span>
            </h1>
          </Link>
          <h2 className="text-2xl font-medium mt-6 text-gray-800">Sign in</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input 
              id="username"
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              placeholder="Username" 
              required 
              className="border-gray-300"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input 
              id="password"
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Password" 
              required 
              className="border-gray-300"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="role">Sign in as</Label>
            <div className="flex gap-4">
              <label className="flex items-center space-x-2">
                <input 
                  type="radio" 
                  name="role" 
                  value="Founder" 
                  checked={role === 'Founder'}
                  onChange={() => setRole('Founder')}
                  className="h-4 w-4 accent-idea"
                />
                <span>Founder</span>
              </label>
              <label className="flex items-center space-x-2">
                <input 
                  type="radio" 
                  name="role" 
                  value="Investor" 
                  checked={role === 'Investor'}
                  onChange={() => setRole('Investor')}
                  className="h-4 w-4 accent-idea"
                />
                <span>Investor</span>
              </label>
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-idea hover:bg-idea-dark text-white font-medium transition-all hover:scale-[1.02] duration-300"
          >
            Sign in
          </Button>
        </form>
        
        <div className="text-center mt-6">
          <p className="text-gray-600">
            Not an existing user?{' '}
            <Link to="/register" className="font-medium text-gray-800 hover:text-idea transition-colors">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

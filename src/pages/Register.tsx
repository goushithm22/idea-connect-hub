
import React, { useState, useEffect, useLocation } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from "@/components/ui/use-toast";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  
  // Set default role if specified in location state
  useEffect(() => {
    if (location.state?.role) {
      setRole(location.state.role);
    }
  }, [location.state]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, simulate successful registration with any data
    console.log('Register attempt with:', { name, email, username, role, password });
    
    // Show success toast
    toast({
      title: "Successfully registered",
      description: "Your account has been created. You can now log in.",
      variant: "default",
    });
    
    // Navigate to the dashboard directly after registration
    // Adding a small delay to ensure the toast is visible
    setTimeout(() => {
      navigate('/dashboard');
      console.log('Navigating to dashboard...');
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
          <h2 className="text-2xl font-medium mt-6 text-gray-800">Create an account</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input 
              id="name"
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Full Name" 
              required 
              className="border-gray-300"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email"
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Email" 
              required 
              className="border-gray-300"
            />
          </div>
          
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
            <Label htmlFor="role">Role</Label>
            <Select value={role} onValueChange={setRole} required>
              <SelectTrigger className="border-gray-300 bg-white">
                <SelectValue placeholder="Select Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Founder">Founder</SelectItem>
                <SelectItem value="Investor">Investor</SelectItem>
              </SelectContent>
            </Select>
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
          
          <Button 
            type="submit" 
            className="w-full bg-idea hover:bg-idea-dark text-white font-medium transition-all hover:scale-[1.02] duration-300"
          >
            Register
          </Button>
        </form>
        
        <div className="text-center mt-6">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link to="/signin" className="font-medium text-gray-800 hover:text-idea transition-colors">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

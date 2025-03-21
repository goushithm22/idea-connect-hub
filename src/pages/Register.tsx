
import React, { useState, useEffect } from 'react';
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
import { Briefcase, TrendingUp } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// Create schema for form validation
const registerSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  username: z.string().min(3, { message: "Username must be at least 3 characters." }),
  role: z.string().min(1, { message: "Please select a role." }),
  password: z.string()
    .min(8, { message: "Password must be at least 8 characters." })
    .regex(/[A-Za-z]/, { message: "Password must contain at least one letter." })
    .regex(/[0-9]/, { message: "Password must contain at least one number." })
    .regex(/[^A-Za-z0-9]/, { message: "Password must contain at least one special character." })
});

type RegisterFormValues = z.infer<typeof registerSchema>;

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  
  // Initialize form with react-hook-form and zod validation
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      username: "",
      role: location.state?.role || "",
      password: ""
    }
  });

  // Update role if it's passed via location state
  useEffect(() => {
    if (location.state?.role) {
      form.setValue("role", location.state.role);
    }
  }, [location.state, form]);

  const onSubmit = (data: RegisterFormValues) => {
    console.log('Register data:', data);
    
    toast({
      title: "Successfully registered",
      description: "Your account has been created. You can now log in.",
      variant: "default",
    });
    
    setTimeout(() => {
      if (data.role === 'Investor') {
        navigate('/dashboard/investor');
      } else {
        navigate('/dashboard');
      }
    }, 1000);
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

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Full Name" 
                      className="border-gray-300"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Email" 
                      type="email"
                      className="border-gray-300"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Username" 
                      className="border-gray-300"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-gray-300 bg-white">
                        <SelectValue placeholder="Select Role" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Founder">
                        <div className="flex items-center">
                          <Briefcase className="mr-2 h-4 w-4" />
                          Founder
                        </div>
                      </SelectItem>
                      <SelectItem value="Investor">
                        <div className="flex items-center">
                          <TrendingUp className="mr-2 h-4 w-4" />
                          Investor
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Password" 
                      type="password"
                      className="border-gray-300"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                  <p className="text-xs text-gray-500 mt-1">
                    Must be at least 8 characters with letters, numbers, and special characters.
                  </p>
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              className="w-full bg-idea hover:bg-idea-dark text-white font-medium transition-all hover:scale-[1.02] duration-300 mt-4"
            >
              Register
            </Button>
          </form>
        </Form>
        
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

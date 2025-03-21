
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from "@/components/ui/use-toast";
import { Progress } from '@/components/ui/progress';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Briefcase, TrendingUp, UserPlus, Mail, User, Lock } from 'lucide-react';
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
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  
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
    setIsLoading(true);
    
    // Simulate loading progress
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 25;
      setProgress(currentProgress);
      if (currentProgress >= 100) {
        clearInterval(interval);
        
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
        }, 500);
      }
    }, 400);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-white to-lightgrey">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-lightgrey-200">
        <div className="text-center mb-6">
          <Link to="/" className="inline-block">
            <h1 className="text-3xl font-light tracking-tight">
              idea<span className="font-semibold">sync</span>
            </h1>
          </Link>
          <h2 className="text-2xl font-medium mt-6 text-gray-800">Create an account</h2>
          <p className="text-gray-500 mt-2">Fill in your details to join IdeaSync</p>
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
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                      <Input 
                        placeholder="Full Name" 
                        className="border-gray-300 pl-9"
                        {...field}
                        disabled={isLoading}
                      />
                    </div>
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
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                      <Input 
                        placeholder="Email" 
                        type="email"
                        className="border-gray-300 pl-9"
                        {...field}
                        disabled={isLoading}
                      />
                    </div>
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
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                      <Input 
                        placeholder="Username" 
                        className="border-gray-300 pl-9"
                        {...field}
                        disabled={isLoading}
                      />
                    </div>
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
                  <div className="grid grid-cols-2 gap-4">
                    <label className={`flex items-center gap-2 p-2.5 rounded-md border ${field.value === 'Founder' ? 'border-idea bg-blue-50' : 'border-gray-200'} cursor-pointer transition-all`}>
                      <input 
                        type="radio" 
                        value="Founder" 
                        checked={field.value === 'Founder'}
                        onChange={() => form.setValue('role', 'Founder')}
                        className="h-4 w-4 accent-idea"
                        disabled={isLoading}
                      />
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="h-4 w-4 text-idea" /> 
                        <span>Founder</span>
                      </div>
                    </label>
                    <label className={`flex items-center gap-2 p-2.5 rounded-md border ${field.value === 'Investor' ? 'border-idea bg-blue-50' : 'border-gray-200'} cursor-pointer transition-all`}>
                      <input 
                        type="radio" 
                        value="Investor" 
                        checked={field.value === 'Investor'}
                        onChange={() => form.setValue('role', 'Investor')}
                        className="h-4 w-4 accent-idea"
                        disabled={isLoading}
                      />
                      <div className="flex items-center gap-1.5">
                        <TrendingUp className="h-4 w-4 text-idea" />
                        <span>Investor</span>
                      </div>
                    </label>
                  </div>
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
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                      <Input 
                        placeholder="Password" 
                        type="password"
                        className="border-gray-300 pl-9"
                        {...field}
                        disabled={isLoading}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                  <p className="text-xs text-gray-500 mt-1">
                    Must be at least 8 characters with letters, numbers, and special characters.
                  </p>
                </FormItem>
              )}
            />
            
            {isLoading && (
              <div className="py-2">
                <Progress value={progress} indicatorClassName="bg-idea" />
              </div>
            )}
            
            <Button 
              type="submit" 
              className="w-full bg-idea hover:bg-idea-dark text-white font-medium transition-all hover:scale-[1.02] duration-300 mt-4"
              disabled={isLoading}
            >
              {isLoading ? 'Creating account...' : (
                <>
                  <UserPlus className="h-4 w-4" />
                  Register
                </>
              )}
            </Button>
          </form>
        </Form>
        
        <div className="text-center mt-6">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link to="/signin" className="font-medium text-idea hover:text-idea-dark transition-colors">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

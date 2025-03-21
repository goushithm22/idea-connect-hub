
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from "@/components/ui/use-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

// Create schema for form validation
const signInSchema = z.object({
  username: z.string().min(1, { message: "Username is required." }),
  password: z.string().min(1, { message: "Password is required." }),
  role: z.string().min(1, { message: "Please select a role." })
});

type SignInFormValues = z.infer<typeof signInSchema>;

const SignIn = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Initialize form with react-hook-form and zod validation
  const form = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      username: "",
      password: "",
      role: "Founder"
    }
  });

  const onSubmit = (data: SignInFormValues) => {
    console.log('Login data:', data);
    
    toast({
      title: "Successfully signed in",
      description: "You have been logged in successfully.",
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
          <h2 className="text-2xl font-medium mt-6 text-gray-800">Sign in</h2>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sign in as</FormLabel>
                  <div className="flex gap-4">
                    <label className="flex items-center space-x-2">
                      <input 
                        type="radio" 
                        value="Founder" 
                        checked={field.value === 'Founder'}
                        onChange={() => form.setValue('role', 'Founder')}
                        className="h-4 w-4 accent-idea"
                      />
                      <span>Founder</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input 
                        type="radio" 
                        value="Investor" 
                        checked={field.value === 'Investor'}
                        onChange={() => form.setValue('role', 'Investor')}
                        className="h-4 w-4 accent-idea"
                      />
                      <span>Investor</span>
                    </label>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              className="w-full bg-idea hover:bg-idea-dark text-white font-medium transition-all hover:scale-[1.02] duration-300 mt-4"
            >
              Sign in
            </Button>
          </form>
        </Form>
        
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

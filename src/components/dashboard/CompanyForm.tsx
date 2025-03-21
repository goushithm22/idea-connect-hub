
import React from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CompanyFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const CompanyForm = ({ open, onOpenChange, onSubmit }: CompanyFormProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white text-gray-800 border-gray-200 sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-blue-600">List Your Company</DialogTitle>
        </DialogHeader>
        <form className="space-y-4" onSubmit={onSubmit}>
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
  );
};

export default CompanyForm;

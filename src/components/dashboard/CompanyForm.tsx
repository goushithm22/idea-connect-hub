
import React from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Briefcase, Upload } from 'lucide-react';
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
          <DialogTitle className="text-xl font-semibold text-blue-600 flex items-center gap-2">
            <Briefcase className="h-5 w-5" />
            List Your Company
          </DialogTitle>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          </div>

          <div className="space-y-2">
            <Label htmlFor="existing-funding" className="text-gray-800">Existing Funding Acquired (if any)</Label>
            <Input id="existing-funding" type="number" className="border-gray-300 bg-white text-gray-800 focus-visible:ring-blue-500" />
          </div>

          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 cursor-pointer transition-colors">
            <Upload className="h-6 w-6 mx-auto text-gray-500" />
            <p className="text-sm text-gray-700 mt-2">Upload pitch deck or company presentation</p>
            <p className="text-xs text-gray-500">PDF, PPTX or DOC (max 10MB)</p>
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

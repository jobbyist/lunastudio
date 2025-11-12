import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface LegalDialogProps {
  title: string;
  content: React.ReactNode;
  children: React.ReactNode;
}

export const LegalDialog = ({ title, content, children }: LegalDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-muted-foreground hover:text-foreground transition-colors text-sm">
          {children}
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif">{title}</DialogTitle>
        </DialogHeader>
        <div className="prose prose-sm dark:prose-invert mt-4">
          {content}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export const TermsContent = () => (
  <div className="space-y-4 text-foreground">
    <h3 className="font-semibold">Terms of Service</h3>
    <p>By accessing and using Luna Studio's website and services, you agree to be bound by these Terms of Service.</p>
    
    <h4 className="font-semibold mt-4">Product Information</h4>
    <p>All products are made from premium quality hair. Colors and textures may vary slightly from images shown.</p>
    
    <h4 className="font-semibold mt-4">Orders and Payments</h4>
    <p>All orders are subject to availability. Payment must be received before items are dispatched.</p>
    
    <h4 className="font-semibold mt-4">Intellectual Property</h4>
    <p>All content on this website is the property of Luna Studio and protected by copyright law.</p>
  </div>
);

export const PrivacyContent = () => (
  <div className="space-y-4 text-foreground">
    <h3 className="font-semibold">Privacy Policy</h3>
    <p>Luna Studio is committed to protecting your privacy and personal information.</p>
    
    <h4 className="font-semibold mt-4">Information We Collect</h4>
    <p>We collect information you provide when creating an account, placing orders, or contacting us.</p>
    
    <h4 className="font-semibold mt-4">How We Use Your Information</h4>
    <p>Your information is used to process orders, improve our services, and communicate with you about your purchases.</p>
    
    <h4 className="font-semibold mt-4">Data Security</h4>
    <p>We implement security measures to protect your personal information.</p>
  </div>
);

export const RefundsContent = () => (
  <div className="space-y-4 text-foreground">
    <h3 className="font-semibold">Refund Policy</h3>
    <p>At Luna Studio, we are confident in the quality of our products. If you're unhappy with your purchase, let us know and we'll refund you or replace your item with another product or service of the same value.</p>
    
    <h4 className="font-semibold mt-4">Eligibility</h4>
    <p>Products must be unused, in original packaging, and returned within 14 days of receipt.</p>
    
    <h4 className="font-semibold mt-4">Process</h4>
    <p>Contact us at hi@lunaluxhair.com to initiate a return. Refunds are processed within 5-7 business days.</p>
    
    <h4 className="font-semibold mt-4">Exceptions</h4>
    <p>Custom wigs and installed services are non-refundable.</p>
  </div>
);

export const ShippingContent = () => (
  <div className="space-y-4 text-foreground">
    <h3 className="font-semibold">Shipping Information</h3>
    <p>We offer shipping across South Africa and internationally.</p>
    
    <h4 className="font-semibold mt-4">Shipping Times</h4>
    <p>South Africa: 3-5 business days<br/>International: 7-14 business days</p>
    
    <h4 className="font-semibold mt-4">Free Shipping</h4>
    <p>Enjoy free shipping on orders above $100 with code NEWLUNA25.</p>
    
    <h4 className="font-semibold mt-4">Tracking</h4>
    <p>You'll receive tracking information once your order ships.</p>
  </div>
);

export const ContactContent = () => (
  <div className="space-y-4 text-foreground">
    <h3 className="font-semibold">Contact Us</h3>
    <p>We'd love to hear from you!</p>
    
    <h4 className="font-semibold mt-4">Email</h4>
    <p>hi@lunaluxhair.com</p>
    
    <h4 className="font-semibold mt-4">Phone</h4>
    <p>+27 12 880 6560</p>
    
    <h4 className="font-semibold mt-4">WhatsApp Business</h4>
    <p>+27 66 286 9181</p>
    
    <h4 className="font-semibold mt-4">Business Hours</h4>
    <p>Monday - Friday: 9:00 AM - 6:00 PM (SAST)<br/>Saturday: 10:00 AM - 4:00 PM<br/>Sunday: Closed</p>
  </div>
);

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar } from "lucide-react";

const Booking = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">
              Book Your <span className="text-primary">Appointment</span>
            </h1>
            <p className="text-muted-foreground">
              Schedule a consultation or installation service with our expert stylists
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-lg">
            <div className="flex items-center justify-center py-12">
              <div className="text-center space-y-4">
                <Calendar className="h-16 w-16 text-primary mx-auto" />
                <h3 className="text-xl font-semibold">Coming Soon</h3>
                <p className="text-muted-foreground max-w-md">
                  Our online booking system will be integrated with Cal.com or Calendly soon.
                  In the meantime, please contact us directly to schedule your appointment.
                </p>
                <div className="pt-6 space-y-2">
                  <p className="text-sm">
                    <span className="font-semibold">Phone:</span> +27 12 880 6560
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">WhatsApp:</span> +27 66 286 9181
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Email:</span> hi@lunaluxhair.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;

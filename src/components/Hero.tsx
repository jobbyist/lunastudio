import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-card">
      
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Small caption */}
          <div className="space-y-4">
            <p className="text-primary text-sm md:text-base tracking-[0.3em] uppercase">
              Where Quality Hair Resides
            </p>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight">
              THE NEW HOME OF <span className="text-primary">LUXURY HAIR</span>
            </h1>
            <p className="text-2xl md:text-3xl font-serif italic text-muted-foreground">
              TRUSTED SINCE 2021
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
            >
              <Link to="/shop">DISCOVER OUR CATALOG</Link>
            </Button>
          </div>


          {/* CTA Button */}
          <div className="pt-8">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
            >
              <Link to="/shop">BOOK YOUR EXPERIENCE</Link>
            </Button>
          </div>

          {/* Feature Text */}
          <div className="pt-12">
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              From our exclusive line of ethically sourced hair to our personalized in-studio styling and maintenance treatments, every Luna experience is crafted with care, quality, and a touch of celestial grace.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

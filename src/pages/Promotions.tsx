import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { Tag, Bell, ArrowRight, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CountdownTimer } from "@/components/CountdownTimer";

const Promotions = () => {
  // Valentine's Day 2026 - February 14, 2026
  const valentinesDay = new Date("2026-02-14T00:00:00");
  
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Tag className="h-4 w-4" />
              <span className="text-sm font-medium">Special Offers</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
              Promotions & Specials
            </h1>
            
            {/* Valentine's Day Countdown */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-rose-500/10 via-primary/5 to-pink-500/10 border-2 border-rose-500/20 rounded-3xl p-8 md:p-12 mt-8 relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-500/5 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Heart className="h-6 w-6 text-rose-500 animate-pulse" />
                  <Sparkles className="h-5 w-5 text-pink-500" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-serif mb-3 bg-gradient-to-r from-rose-500 via-primary to-pink-500 bg-clip-text text-transparent">
                  Valentine's Day Special
                </h2>
                
                <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
                  The Café De Luna Collection - A Love Letter to Your Hair
                </p>
                
                <div className="mb-8">
                  <CountdownTimer targetDate={valentinesDay} />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="gap-2 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700">
                    <Link to="/valentinesday">
                      Shop Valentine's Collection
                      <Heart className="h-4 w-4" />
                    </Link>
                  </Button>
                  
                  <Button asChild variant="outline" size="lg">
                    <Link to="/explore" className="gap-2">
                      Browse All Products
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                
                <p className="text-sm text-muted-foreground mt-6">
                  Fast shipping across South Africa • Ethically sourced premium hair • Ready for date night
                </p>
              </div>
            </motion.div>

            <p className="text-sm text-muted-foreground mt-8">
              Want to be the first to know about new promotions?{" "}
              <Link to="/loyalty" className="text-primary hover:underline">
                Join The Lux Club
              </Link>{" "}
              for exclusive member-only offers.
            </p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Promotions;

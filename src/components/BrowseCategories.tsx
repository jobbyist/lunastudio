import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const collections = [
  {
    title: "Boss Babe Essentials",
    description: "Power pieces for the modern woman",
    link: "/collections/boss-babe"
  },
  {
    title: "The Eros Collection",
    description: "Romantic and luxurious styles",
    link: "/collections/eros"
  },
  {
    title: "The Luna Wig Collection",
    description: "Premium ready-to-wear wigs",
    link: "/collections/wigs"
  },
  {
    title: "Hair Extensions",
    description: "Quality bundles, closures & frontals",
    link: "/collections/extensions"
  },
  {
    title: "Premium Accessories",
    description: "Essential hair care and styling tools",
    link: "/collections/accessories"
  },
  {
    title: "Lux Glueless Frontals",
    description: "Easy install, natural look",
    link: "/collections/glueless"
  }
];

export const BrowseCategories = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-primary" />
            <h2 className="text-3xl md:text-4xl font-serif tracking-wider text-primary">
              Browse by Category
            </h2>
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <p className="text-muted-foreground">Discover our curated collections</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection, index) => (
            <div 
              key={index} 
              className="group bg-background border border-border rounded-lg p-6 hover:border-primary transition-all duration-300"
            >
              <h3 className="text-xl font-serif mb-2 text-foreground group-hover:text-primary transition-colors">
                {collection.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {collection.description}
              </p>
              <Button 
                asChild 
                variant="ghost" 
                className="text-primary hover:text-primary/80 p-0 h-auto font-normal"
              >
                <Link to={collection.link}>
                  Explore Collection →
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

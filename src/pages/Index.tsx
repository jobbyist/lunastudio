import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { ProductGrid } from "@/components/ProductGrid";
import { InstagramReels } from "@/components/InstagramReels";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32">
        <Hero />
        
        <section className="py-16 text-center bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-serif mb-4 tracking-wider">
              TREAT YOURSELF TO TRUE LUXURY
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our luxury hair extensions have the best quality, you can't deserve any other. 
              Unbeatable and durable. Verified by notable hair stylists and celebrities.
            </p>
          </div>
        </section>

        <ProductGrid />
        <Categories />
        <InstagramReels />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

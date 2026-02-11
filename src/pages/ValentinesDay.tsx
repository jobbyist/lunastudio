import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { Heart, Sparkles, Shield, Palette, Package, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CountdownTimer } from "@/components/CountdownTimer";

const ValentinesDay = () => {
  const valentinesDay = new Date("2026-02-14T00:00:00");

  const collections = [
    {
      name: "Vanilla Bean",
      tagline: "The Crème de la Crème",
      description: "A breathtaking blend of icy pearl and creamy neutral blondes. Vanilla Bean is designed for the muse who wants high-impact brightness without losing that soft, sophisticated edge. It's light, airy, and effortlessly chic.",
      image: "/placeholder.svg",
      gradient: "from-amber-100 to-yellow-50",
      textColor: "text-amber-900",
    },
    {
      name: "Mocha Swirl",
      tagline: "The Perfect Pour",
      description: "Can't decide between dark and light? Mocha Swirl offers the best of both worlds. Featuring a rich, roasted coffee base with ribbons of golden honey highlights, this style creates a multi-tonal movement that mimics the way light hits a morning latte.",
      image: "/placeholder.svg",
      gradient: "from-amber-800 to-yellow-700",
      textColor: "text-amber-50",
    },
    {
      name: "Chocolate Ganache",
      tagline: "Deep. Dark. Divine.",
      description: "For the lover of all things sultry. Chocolate Ganache is a luxurious melt of deep cocoa tones and velvety mahogany undertones. It's a subtle, \"expensive-looking\" highlight that adds incredible depth and shine, making your hair look healthy, hydrated, and hearth-warm.",
      image: "/placeholder.svg",
      gradient: "from-rose-900 to-pink-800",
      textColor: "text-rose-50",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "The Luxury Standard",
      description: "South Africa's premier destination for ethically sourced, long-lasting hair.",
    },
    {
      icon: Palette,
      title: "The Café Palette",
      description: "Colors designed specifically to complement a wide range of skin tones with warmth and vibrancy.",
    },
    {
      icon: Package,
      title: "Valentine's Ready",
      description: "Fast shipping across SA to ensure you're glowing by date night.",
    },
  ];

  const testimonials = [
    {
      name: "Thandi M.",
      text: "The Mocha Swirl completely transformed my look! The blend is so natural and the quality is exceptional.",
      rating: 5,
    },
    {
      name: "Sarah K.",
      text: "I've never felt more confident. The Vanilla Bean is exactly what I was looking for - elegant and stunning!",
      rating: 5,
    },
    {
      name: "Lerato P.",
      text: "Chocolate Ganache is pure luxury. The depth and shine are incredible. Worth every cent!",
      rating: 5,
    },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-primary/5 to-pink-500/10" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        {/* Floating hearts decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Heart className="absolute top-20 left-10 w-8 h-8 text-rose-500/20 animate-pulse" />
          <Heart className="absolute top-40 right-20 w-6 h-6 text-pink-500/20 animate-pulse" style={{ animationDelay: "1s" }} />
          <Heart className="absolute bottom-32 left-1/4 w-10 h-10 text-rose-400/15 animate-pulse" style={{ animationDelay: "2s" }} />
          <Heart className="absolute bottom-20 right-1/3 w-7 h-7 text-pink-400/15 animate-pulse" style={{ animationDelay: "1.5s" }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500/10 to-pink-500/10 backdrop-blur-sm border border-rose-500/20 px-6 py-3 rounded-full mb-8"
            >
              <Heart className="h-5 w-5 text-rose-500 animate-pulse" />
              <span className="text-sm font-medium bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                Valentine's Day 2026 Special Collection
              </span>
              <Sparkles className="h-4 w-4 text-pink-500" />
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-rose-600 via-primary to-pink-600 bg-clip-text text-transparent">
                A Love Letter to Your Hair
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Experience the art of the highlight. The Café De Luna collection combines our premium 100% human hair with expert color-blending to ensure your Valentine's look is nothing short of iconic.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-12"
            >
              <p className="text-sm font-medium text-muted-foreground mb-4">Collection launches in:</p>
              <CountdownTimer targetDate={valentinesDay} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="gap-2 text-lg px-8 py-6 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700">
                <Link to="/explore" className="flex items-center gap-2">
                  Secure My Style
                  <Heart className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-lg px-8 py-6">
                <Link to="/contact" className="flex items-center gap-2">
                  Book Consultation
                  <Sparkles className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Collection Grid */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-4">
              The Café De Luna Collection
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Three signature styles, each a masterpiece of color artistry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/50">
                  <div className={`relative aspect-[3/4] bg-gradient-to-br ${collection.gradient} overflow-hidden`}>
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className={`absolute bottom-0 left-0 right-0 p-6 ${collection.textColor}`}>
                      <h3 className="text-3xl font-serif mb-1">{collection.name}</h3>
                      <p className="text-sm font-medium opacity-90">{collection.tagline}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {collection.description}
                    </p>
                    <Button className="w-full mt-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Explore {collection.name}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-4">
              The Luna Difference
            </h2>
            <p className="text-muted-foreground text-lg">
              Premium quality, ethical sourcing, exceptional service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30 h-full">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-4">
              Love from Our Customers
            </h2>
            <p className="text-muted-foreground text-lg">
              See why thousands trust Luna for their hair transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-all duration-300 h-full">
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold text-sm">— {testimonial.name}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 text-center">
            <div className="flex flex-col items-center">
              <Shield className="h-8 w-8 text-primary mb-2" />
              <p className="text-sm font-medium">Ethically Sourced</p>
            </div>
            <div className="flex flex-col items-center">
              <Sparkles className="h-8 w-8 text-primary mb-2" />
              <p className="text-sm font-medium">100% Human Hair</p>
            </div>
            <div className="flex flex-col items-center">
              <Package className="h-8 w-8 text-primary mb-2" />
              <p className="text-sm font-medium">Fast SA Shipping</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="h-8 w-8 text-primary mb-2" />
              <p className="text-sm font-medium">5-Star Rated</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-gradient-to-br from-rose-500/10 via-primary/5 to-pink-500/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Heart className="h-16 w-16 mx-auto mb-6 text-rose-500 animate-pulse" />
            
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Ready for Your Valentine's Transformation?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform your look this Valentine's Day with the Café De Luna Collection. 
              Limited availability - secure your style before they're gone.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="gap-2 text-lg px-8 py-6 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700">
                <Link to="/explore" className="flex items-center gap-2">
                  Secure My Style
                  <Heart className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-lg px-8 py-6">
                <Link to="/loyalty" className="flex items-center gap-2">
                  Join The Lux Club
                  <Sparkles className="h-5 w-5" />
                </Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Questions? <Link to="/contact" className="text-primary hover:underline">Contact our style experts</Link> for personalized recommendations
            </p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ValentinesDay;

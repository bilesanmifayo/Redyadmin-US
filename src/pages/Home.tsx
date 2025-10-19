import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, Clock, Shield } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroBookkeeping from "@/assets/hero-bookkeeping.jpg";
import heroBacklog from "@/assets/hero-backlog.jpg";
import peaceOfMind from "@/assets/peace-of-mind.jpg";
import clarity from "@/assets/clarity.jpg";

const Home = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Peace of Mind You Can Count On",
      description: "No more late nights wondering if your books are correct or compliant. RedyAdmin ensures your financials are accurate, compliant, and always up to date.",
    },
    {
      icon: TrendingUp,
      title: "Clarity That Drives Better Decisions",
      description: "RedyAdmin equips you with the information to make smarter, faster, and more confident choices for your business.",
    },
    {
      icon: Clock,
      title: "Time Back to Focus on Growth",
      description: "Bookkeeping takes your time away from what matters, RedyAdmin gives it back to you.",
    },
    {
      icon: CheckCircle2,
      title: "More Than Bookkeeping—Real Value",
      description: "RedyAdmin doesn't just track the past; it helps you prepare for the future.",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation />
      
      {/* Hero Section - Bookkeeping */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30 z-0" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
              <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Free your mind.<br />
                <span className="text-primary">Free your time</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Stop guessing about your business finances and start knowing. With clean, compliant and accurate books, RedyAdmin gives you the peace of mind, saves time, and strategic insight you need to grow.
              </p>
              <Button asChild size="lg" className="font-inter">
                <Link to="/services/bookkeeping">Discover Bookkeeping</Link>
              </Button>
            </div>
            <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-300">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroBookkeeping} 
                  alt="Professional bookkeeping workspace" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section - Backlog */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1 animate-in fade-in slide-in-from-left duration-700">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroBacklog} 
                  alt="Organized financial documents" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="space-y-6 order-1 md:order-2 animate-in fade-in slide-in-from-right duration-700">
              <h2 className="font-playfair text-5xl md:text-6xl font-bold text-foreground leading-tight">
                From chaos<br />
                <span className="text-primary">to control</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Messy books don't have to hold you back. RedyAdmin untangles your backlog, fixes errors, gives you control of your finances and restores order—so you can finally move forward with confidence.
              </p>
              <Button asChild size="lg" className="font-inter">
                <Link to="/services/backlog">Clean Up My Books</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose RedyAdmin */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-in fade-in duration-700">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose RedyAdmin
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="border-border hover:shadow-lg transition-all duration-300 animate-in fade-in duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="font-inter">
              <Link to="/contact">Want to Know More?</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

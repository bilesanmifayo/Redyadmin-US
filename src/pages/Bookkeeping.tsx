import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroBookkeeping from "@/assets/hero-bookkeeping.jpg";

const Bookkeeping = () => {
  const benefits = [
    "Deliver clean, accurate, and compliant financial records",
    "Reconcile every account and track every transaction",
    "Provide clear, reliable reports so you always know where you stand",
    "Free up your time by taking bookkeeping off your plate",
    "Give you peace of mind, confidence, and freedom to focus on growing your business",
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30 z-0" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in duration-700">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Compliance brings<br />
              <span className="text-primary">peace of mind</span>
            </h1>
            <p className="text-xl text-muted-foreground italic">
              Trust your bookkeeping to us
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="border-border shadow-lg">
              <CardContent className="p-10 space-y-6">
                <h2 className="font-playfair text-3xl font-bold text-foreground">
                  The Problem
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Running a business should feel empowering—but messy financials can make it feel like driving blind. The uncertainty creeps in: <span className="italic">Am I really profitable? Did I miss a bill? Can I afford to invest? Am I even compliant with tax requirements?</span> That constant second-guessing drains energy and clouds decisions.
                  </p>
                  <p className="font-semibold text-foreground">
                    Now imagine the opposite. Imagine waking up knowing exactly where your business stands, that's what RedyAdmin delivers.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* RedyAdmin Will */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
                RedyAdmin Will
              </h2>
            </div>
            
            <div className="grid gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex gap-4 items-start p-6 rounded-xl bg-card border border-border hover:shadow-md transition-all duration-300 animate-in fade-in slide-in-from-left"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-10 text-center space-y-6">
              <p className="text-xl text-foreground font-medium">
                Buy back your time and peace of mind, let RedyAdmin handle your bookkeeping for you.
              </p>
              <Button asChild size="lg" className="font-inter">
                <Link to="/pricing">Let's Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={heroBookkeeping} 
              alt="Professional bookkeeping services" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Bookkeeping;

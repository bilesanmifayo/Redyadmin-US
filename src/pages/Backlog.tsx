import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroBacklog from "@/assets/hero-backlog.jpg";

const Backlog = () => {
  const benefits = [
    "Reconcile every account and categorize every transaction",
    "Identify and fix discrepancies, ensuring accuracy and compliance",
    "Uncover hidden deductions and correct costly errors",
    "Restore clarity, order, and confidence in your financial records",
    "Build a clean foundation so you can move forward without being stuck in 'catch-up mode'",
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
              Peace of mind begins when<br />
              <span className="text-primary">the past no longer weighs you down</span>
            </h1>
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
                    Messy books, unreconciled accounts, and piles of receipts don't just create stress—they quietly hold your business back. The longer the backlog lingers, the heavier it feels, and the more it costs you in missed opportunities, hidden risks, and potential compliance issues.
                  </p>
                  <p className="font-semibold text-foreground">
                    Now picture the relief of seeing everything in order. RedyAdmin restores clarity and control over your finances.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* RedyAdmin Helps To */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
                RedyAdmin Helps To
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
                Don't let the past hold your business back. Schedule your backlog clean-up with RedyAdmin today, and clear the path for your growth.
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
              src={heroBacklog} 
              alt="Organized financial records" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Backlog;

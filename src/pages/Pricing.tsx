import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Pricing = () => {
  const plans = [
    {
      name: "Bookkeeping",
      description: "Ongoing financial management for your business",
      price: "Custom",
      features: [
        "Monthly financial reconciliation",
        "Transaction categorization",
        "Financial reports & insights",
        "Tax-ready documentation",
        "Compliance assurance",
        "Dedicated bookkeeper",
      ],
      cta: "Get a Quote",
      highlighted: false,
    },
    {
      name: "Backlog Clean-Up",
      description: "One-time restoration of your financial records",
      price: "Custom",
      features: [
        "Complete account reconciliation",
        "Error identification & correction",
        "Historical data organization",
        "Compliance gap closure",
        "Detailed financial summary",
        "Future-ready foundation",
      ],
      cta: "Get a Quote",
      highlighted: true,
    },
  ];

  const aboutContent = [
    {
      text: "At the heart of every business is a story—and behind that story are numbers that can either empower it or hold it back. With over 2 decades of experience, RedyAdmin exists to make sure your numbers work for you, not against you, by turning messy records compliant, giving you clarity and control.",
    },
    {
      text: "RedyAdmin specializes in Bookkeeping and Backlog Clean-Up, not just to record transactions, but to restore order, close compliance gaps, reduce risk, and uncover hidden value. Every service is designed to lift the burden of financial disorganization, giving business owners the peace of mind and time, they need to focus on growth.",
    },
    {
      text: "The promise is simple: control over chaos, peace of mind over confusion, and compliance over risk. With RedyAdmin, you gain accurate books, reliable financial insights, informed decision making and a trusted partner committed to helping your business thrive.",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30 z-0" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-in fade-in duration-700">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Simple, Transparent <span className="text-primary">Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Choose the service that best fits your needs. Every package is customized to your business.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`border-border hover:shadow-xl transition-all duration-300 animate-in fade-in ${
                  plan.highlighted ? "ring-2 ring-primary shadow-lg scale-105" : ""
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="text-center pb-8">
                  <CardTitle className="font-playfair text-3xl font-bold text-foreground mb-2">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {plan.description}
                  </CardDescription>
                  <div className="pt-6">
                    <span className="font-playfair text-4xl font-bold text-primary">
                      {plan.price}
                    </span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4 pb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </CardContent>
                
                <CardFooter>
                  <Button 
                    asChild 
                    className="w-full font-inter" 
                    variant={plan.highlighted ? "default" : "outline"}
                    size="lg"
                  >
                    <Link to="/contact">{plan.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About RedyAdmin */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
                About RedyAdmin
              </h2>
            </div>
            
            <div className="space-y-6">
              {aboutContent.map((item, index) => (
                <Card 
                  key={index}
                  className="border-border animate-in fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-8">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {item.text}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center pt-6">
              <Button asChild size="lg" className="font-inter">
                <Link to="/contact">Let's Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;

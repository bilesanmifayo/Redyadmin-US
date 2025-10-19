import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background font-inter flex flex-col">
      <Navigation />
      <div className="flex-1 flex items-center justify-center px-6 pt-24 pb-16">
        <div className="text-center space-y-6 max-w-2xl animate-in fade-in duration-700">
          <h1 className="font-playfair text-9xl font-bold text-primary">404</h1>
          <h2 className="font-playfair text-4xl font-bold text-foreground">Page Not Found</h2>
          <p className="text-xl text-muted-foreground">
            Sorry, we couldn't find the page you're looking for. Let's get you back on track.
          </p>
          <div className="pt-6">
            <Button asChild size="lg" className="font-inter">
              <Link to="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold">
            Every Day Counts
          </h2>
          <p className="text-lg text-primary-foreground/90 leading-relaxed">
            Every day your books stay disorganized, you lose more than numbers—you lose time, clarity, risk of not being compliant and peace of mind. RedyAdmin replaces that stress with order and confidence, giving you the freedom to focus on growth.
          </p>
          <div className="pt-8 flex flex-col items-center gap-6">
            <div className="flex gap-8 text-sm">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <Link to="/services/bookkeeping" className="hover:text-accent transition-colors">Bookkeeping</Link>
              <Link to="/services/backlog" className="hover:text-accent transition-colors">Backlog Clean-Up</Link>
              <Link to="/pricing" className="hover:text-accent transition-colors">Pricing</Link>
              <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
            </div>
            <div className="text-sm text-primary-foreground/70">
              © {new Date().getFullYear()} RedyAdmin. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

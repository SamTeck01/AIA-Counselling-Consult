import { Brain, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-foreground flex items-center justify-center">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <span className="text-2xl font-bold">Truemo</span>
            </div>
            <p className="text-primary-foreground/80">
              Professional psychology and counseling services focusing on mental health and wellness.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</a></li>
              <li><a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About</a></li>
              <li><a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Services</a></li>
              <li><a href="#pricing" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Services</h3>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80">Relationship Dating</li>
              <li className="text-primary-foreground/80">Life Counseling</li>
              <li className="text-primary-foreground/80">Self Esteem</li>
              <li className="text-primary-foreground/80">Anxiety Therapy</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2025 Truemo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

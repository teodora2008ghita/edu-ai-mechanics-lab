import { Brain } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t bg-card/50 mt-auto">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-primary" />
            <span className="font-semibold text-foreground">Edu AI</span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Aplicație creată de Ghita Teodora.
          </p>
          
          <div className="flex gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Contact
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Despre
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

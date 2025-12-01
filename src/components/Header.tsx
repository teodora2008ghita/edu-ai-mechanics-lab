import { Link, useLocation } from "react-router-dom";
import { Brain } from "lucide-react";
import { Button } from "./ui/button";
import logo from "@/assets/logo.png";

export const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img src={logo} alt="Edu AI" className="h-10 w-10" />
          <span className="font-bold text-xl text-foreground">Edu AI</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/">
            <Button 
              variant={isActive("/") ? "default" : "ghost"}
              className="font-medium"
            >
              Acasă
            </Button>
          </Link>
          <Link to="/asistent">
            <Button 
              variant={isActive("/asistent") ? "default" : "ghost"}
              className="font-medium"
            >
              <Brain className="w-4 h-4 mr-2" />
              Asistent AI
            </Button>
          </Link>
          <Link to="/simulare">
            <Button 
              variant={isActive("/simulare") ? "default" : "ghost"}
              className="font-medium"
            >
              Simulare
            </Button>
          </Link>
          <Link to="/lectii">
            <Button 
              variant={isActive("/lectii") ? "default" : "ghost"}
              className="font-medium"
            >
              Lecții
            </Button>
          </Link>
        </nav>
        
        <nav className="flex md:hidden">
          <Link to="/asistent">
            <Button size="sm" className="gap-2">
              <Brain className="w-4 h-4" />
              AI
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

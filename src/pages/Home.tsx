import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Zap, BookOpen, Rocket } from "lucide-react";
import heroImage from "@/assets/hero-physics.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15
          }}
        />
        <div className="relative z-10 container py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground animate-fade-in">
              Învață Fizica cu{" "}
              <span className="text-primary">Inteligență Artificială</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-in">
              Platformă educațională modernă pentru elevii care vor să înțeleagă fizica prin simulări interactive și asistent AI personalizat
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Link to="/asistent">
                <Button size="lg" className="gap-2 w-full sm:w-auto">
                  <Brain className="w-5 h-5" />
                  Întreabă AI
                </Button>
              </Link>
              <Link to="/simulare">
                <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                  <Zap className="w-5 h-5" />
                  Explorează Simulări
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Ce oferă Edu AI?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Asistent AI</h3>
                <p className="text-muted-foreground">
                  Pune întrebări despre fizică și primește explicații clare, cu exemple și formule. Asistentul înțelege contextul și te ajută să înveți eficient.
                </p>
                <Link to="/asistent">
                  <Button variant="link" className="p-0">
                    Începe conversația →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Simulări Interactive</h3>
                <p className="text-muted-foreground">
                  Experimentează cu forțe, mase și accelerații în timp real. Vizualizează conceptele abstracte și înțelege cum funcționează fizica.
                </p>
                <Link to="/simulare">
                  <Button variant="link" className="p-0">
                    Explorează simulările →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Lecții Structurate</h3>
                <p className="text-muted-foreground">
                  Învață legile lui Newton, mișcarea și energia mecanică prin lecții clare și bine organizate, cu ilustrații și exemple practice.
                </p>
                <Link to="/lectii">
                  <Button variant="link" className="p-0">
                    Vezi lecțiile →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="py-12 text-center space-y-6">
              <Rocket className="w-16 h-16 mx-auto text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Gata să începi?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Descoperă o nouă modalitate de a învăța fizica - interactivă, inteligentă și personalizată pentru tine
              </p>
              <Link to="/asistent">
                <Button size="lg" className="gap-2">
                  <Brain className="w-5 h-5" />
                  Începe acum
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;

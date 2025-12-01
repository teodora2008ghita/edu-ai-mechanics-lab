import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, Zap, Activity } from "lucide-react";

const Lectii = () => {
  return (
    <div className="container py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Lecții de Fizică
        </h1>
        <p className="text-muted-foreground">
          Învață conceptele fundamentale ale mecanicii clasice
        </p>
      </div>

      <div className="space-y-6">
        {/* Legile lui Newton */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <CardTitle>Legile lui Newton</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  <span className="font-semibold">Legea I - Legea Inerției</span>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 text-muted-foreground">
                  <p>
                    <strong>Enunț:</strong> Un corp rămâne în repaus sau în mișcare rectilinie uniformă 
                    atâta timp cât forțele care acționează asupra lui se echilibrează (suma lor este zero).
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm">
                      <strong>Exemplu:</strong> O minge pe o masă va rămâne nemișcată până când cineva 
                      o împinge. În spațiu, un satelit continuă să se miște cu aceeași viteză dacă nu 
                      acționează alte forțe.
                    </p>
                  </div>
                  <p>
                    <strong>Conceptul de inerție:</strong> Tendința unui corp de a-și menține starea de 
                    mișcare sau repaus. Cu cât masa este mai mare, cu atât inerția este mai mare.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  <span className="font-semibold">Legea a II-a - Legea Fundamentală</span>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 text-muted-foreground">
                  <p>
                    <strong>Enunț:</strong> Accelerația unui corp este direct proporțională cu forța 
                    rezultantă care acționează asupra lui și invers proporțională cu masa sa.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                    <p className="text-lg font-mono text-foreground text-center">
                      F = m × a
                    </p>
                    <p className="text-sm mt-2 text-center">
                      unde F = forța (N), m = masa (kg), a = accelerația (m/s²)
                    </p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm">
                      <strong>Exemplu:</strong> Pentru a accelera o mașină mai grea (masă mare) cu 
                      aceeași accelerație ca o mașină mică, motorul trebuie să exercite o forță mai mare.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  <span className="font-semibold">Legea a III-a - Acțiune și Reacțiune</span>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 text-muted-foreground">
                  <p>
                    <strong>Enunț:</strong> Când un corp exercită o forță asupra altui corp, 
                    cel de-al doilea corp exercită o forță egală ca mărime și de sens opus asupra primului.
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm">
                      <strong>Exemplu:</strong> Când împingi un perete, peretele te împinge înapoi cu 
                      aceeași forță. Când o rachetă expulzează gaze în jos, gazele împing racheta în sus.
                    </p>
                  </div>
                  <p>
                    <strong>Important:</strong> Forțele de acțiune și reacțiune acționează întotdeauna 
                    pe corpuri diferite, nu pe același corp!
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Mișcarea */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Activity className="w-5 h-5 text-accent" />
              </div>
              <CardTitle>Tipuri de Mișcare</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  <span className="font-semibold">Mișcarea Rectilinie Uniformă (MRU)</span>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 text-muted-foreground">
                  <p>
                    Un corp se mișcă cu <strong>viteza constantă</strong> pe o traiectorie dreaptă.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                    <p className="text-lg font-mono text-foreground">v = constant</p>
                    <p className="text-lg font-mono text-foreground mt-2">x = x₀ + v × t</p>
                    <p className="text-sm mt-2">
                      unde x = poziția, x₀ = poziția inițială, v = viteza, t = timpul
                    </p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm">
                      <strong>Exemplu:</strong> O mașină care merge cu 90 km/h constant pe autostradă.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  <span className="font-semibold">Mișcarea Rectilinie Uniform Variată (MRUV)</span>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 text-muted-foreground">
                  <p>
                    Un corp se mișcă cu <strong>accelerație constantă</strong> pe o traiectorie dreaptă.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                    <p className="text-lg font-mono text-foreground">a = constant</p>
                    <p className="text-lg font-mono text-foreground mt-2">v = v₀ + a × t</p>
                    <p className="text-lg font-mono text-foreground mt-2">x = x₀ + v₀ × t + (a × t²) / 2</p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm">
                      <strong>Exemplu:</strong> O mașină care accelerează de la 0 la 100 km/h, 
                      sau un obiect care cade liber sub acțiunea gravitației.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Energia */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-secondary" />
              </div>
              <CardTitle>Energia Mecanică</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  <span className="font-semibold">Energia Cinetică (Ec)</span>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 text-muted-foreground">
                  <p>
                    Energia pe care o are un corp datorită <strong>mișcării sale</strong>.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                    <p className="text-lg font-mono text-foreground text-center">
                      Ec = (m × v²) / 2
                    </p>
                    <p className="text-sm mt-2 text-center">
                      unde m = masa (kg), v = viteza (m/s), Ec = energia (J - jouli)
                    </p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm">
                      <strong>Observație:</strong> Energia cinetică crește cu pătratul vitezei. 
                      De aceea, dacă dublezi viteza, energia cinetică devine de 4 ori mai mare!
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  <span className="font-semibold">Energia Potențială Gravitațională (Ep)</span>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 text-muted-foreground">
                  <p>
                    Energia pe care o are un corp datorită <strong>poziției sale în câmpul gravitațional</strong>.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                    <p className="text-lg font-mono text-foreground text-center">
                      Ep = m × g × h
                    </p>
                    <p className="text-sm mt-2 text-center">
                      unde m = masa (kg), g = 9.8 m/s² (accelerația gravitațională), h = înălțimea (m)
                    </p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm">
                      <strong>Exemplu:</strong> O carte pe un raft are energie potențială. 
                      Cu cât raftul e mai înalt, cu atât energia este mai mare.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  <span className="font-semibold">Conservarea Energiei Mecanice</span>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 text-muted-foreground">
                  <p>
                    Într-un sistem izolat (fără frecare), <strong>energia mecanică totală 
                    rămâne constantă</strong>.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                    <p className="text-lg font-mono text-foreground text-center">
                      Em = Ec + Ep = constant
                    </p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm">
                      <strong>Exemplu:</strong> Când un pendul se mișcă, energia se transformă 
                      continuu între cinetică și potențială, dar suma lor rămâne aceeași 
                      (dacă ignorăm frecarea cu aerul).
                    </p>
                  </div>
                  <p>
                    Când un obiect cade, energia potențială se transformă în energie cinetică. 
                    La impact, energia se poate transforma în căldură, sunet și deformare.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Tips */}
        <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-lg mb-3 text-foreground">💡 Sfaturi pentru Învățare</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <span>•</span>
                <span>Folosește simularea interactivă pentru a vizualiza conceptele</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>Pune întrebări asistentului AI dacă ceva nu e clar</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>Încearcă să rezolvi probleme practice pentru a consolida cunoștințele</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>Observă cum se aplică legile fizicii în viața de zi cu zi</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Lectii;

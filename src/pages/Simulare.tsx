import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw } from "lucide-react";

const Simulare = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [force, setForce] = useState([50]);
  const [mass, setMass] = useState([10]);
  const [friction, setFriction] = useState([0.1]);
  const animationRef = useRef<number>();
  const [position, setPosition] = useState(50);
  const [velocity, setVelocity] = useState(0);

  const acceleration = (force[0] - friction[0] * velocity * 10) / mass[0];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw ground
      ctx.fillStyle = "#e5e7eb";
      ctx.fillRect(0, canvas.height - 40, canvas.width, 40);

      // Draw grid
      ctx.strokeStyle = "#d1d5db";
      ctx.lineWidth = 1;
      for (let i = 0; i < canvas.width; i += 50) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height - 40);
        ctx.stroke();
      }

      // Draw object (box)
      const boxSize = Math.max(20, mass[0] * 2);
      const boxX = position;
      const boxY = canvas.height - 40 - boxSize;

      ctx.fillStyle = "hsl(215, 80%, 50%)";
      ctx.fillRect(boxX, boxY, boxSize, boxSize);
      ctx.strokeStyle = "hsl(215, 80%, 40%)";
      ctx.lineWidth = 2;
      ctx.strokeRect(boxX, boxY, boxSize, boxSize);

      // Draw force arrow
      if (force[0] > 0) {
        const arrowLength = force[0] * 1.5;
        const arrowY = boxY + boxSize / 2;
        
        ctx.strokeStyle = "hsl(0, 72%, 50%)";
        ctx.fillStyle = "hsl(0, 72%, 50%)";
        ctx.lineWidth = 3;
        
        // Arrow line
        ctx.beginPath();
        ctx.moveTo(boxX + boxSize, arrowY);
        ctx.lineTo(boxX + boxSize + arrowLength, arrowY);
        ctx.stroke();
        
        // Arrow head
        ctx.beginPath();
        ctx.moveTo(boxX + boxSize + arrowLength, arrowY);
        ctx.lineTo(boxX + boxSize + arrowLength - 10, arrowY - 5);
        ctx.lineTo(boxX + boxSize + arrowLength - 10, arrowY + 5);
        ctx.closePath();
        ctx.fill();

        // Force label
        ctx.fillStyle = "hsl(0, 72%, 50%)";
        ctx.font = "14px sans-serif";
        ctx.fillText(`F = ${force[0]}N`, boxX + boxSize + 10, arrowY - 10);
      }

      // Draw velocity vector
      if (velocity !== 0) {
        const velLength = Math.abs(velocity) * 20;
        const velY = boxY - 20;
        
        ctx.strokeStyle = "hsl(120, 60%, 50%)";
        ctx.fillStyle = "hsl(120, 60%, 50%)";
        ctx.lineWidth = 2;
        
        ctx.beginPath();
        ctx.moveTo(boxX + boxSize / 2, velY);
        ctx.lineTo(boxX + boxSize / 2 + (velocity > 0 ? velLength : -velLength), velY);
        ctx.stroke();
        
        // Velocity label
        ctx.font = "12px sans-serif";
        ctx.fillText(`v = ${velocity.toFixed(1)} m/s`, boxX + boxSize / 2 - 30, velY - 5);
      }
    };

    draw();
  }, [position, velocity, force, mass, friction]);

  useEffect(() => {
    if (isPlaying) {
      const animate = () => {
        setVelocity(v => {
          const newV = v + acceleration * 0.016; // 60fps
          return Math.max(-20, Math.min(20, newV));
        });
        
        setPosition(p => {
          const canvas = canvasRef.current;
          if (!canvas) return p;
          
          const boxSize = Math.max(20, mass[0] * 2);
          const newP = p + velocity * 2;
          
          // Bounce at walls
          if (newP < 0) {
            setVelocity(v => Math.abs(v) * 0.7);
            return 0;
          }
          if (newP > canvas.width - boxSize) {
            setVelocity(v => -Math.abs(v) * 0.7);
            return canvas.width - boxSize;
          }
          
          return newP;
        });

        animationRef.current = requestAnimationFrame(animate);
      };

      animationRef.current = requestAnimationFrame(animate);
      
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, [isPlaying, velocity, acceleration, mass]);

  const handleReset = () => {
    setIsPlaying(false);
    setPosition(50);
    setVelocity(0);
  };

  return (
    <div className="container py-8 max-w-6xl">
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Simulare Interactivă
        </h1>
        <p className="text-muted-foreground">
          Experimentează cu forțe, mase și frecare pentru a vedea cum se mișcă obiectele
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Canvas */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Zona de Simulare</CardTitle>
          </CardHeader>
          <CardContent>
            <canvas
              ref={canvasRef}
              width={800}
              height={400}
              className="w-full border rounded-lg bg-background"
            />
            <div className="flex gap-2 mt-4">
              <Button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex-1"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4 mr-2" />
                    Pauză
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Pornește
                  </>
                )}
              </Button>
              <Button onClick={handleReset} variant="outline">
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Controls */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Forța Aplicată</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Forță (F)</span>
                  <span className="text-sm font-semibold">{force[0]} N</span>
                </div>
                <Slider
                  value={force}
                  onValueChange={setForce}
                  max={100}
                  min={0}
                  step={1}
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Forța care împinge obiectul spre dreapta
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Masa Obiectului</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Masă (m)</span>
                  <span className="text-sm font-semibold">{mass[0]} kg</span>
                </div>
                <Slider
                  value={mass}
                  onValueChange={setMass}
                  max={50}
                  min={1}
                  step={1}
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Obiecte mai grele au inerție mai mare
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Frecare</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Coeficient (μ)</span>
                  <span className="text-sm font-semibold">{friction[0].toFixed(2)}</span>
                </div>
                <Slider
                  value={friction}
                  onValueChange={setFriction}
                  max={1}
                  min={0}
                  step={0.01}
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Frecarea încetinește mișcarea
              </p>
            </CardContent>
          </Card>

          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-lg">Rezultate</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Accelerație:</span>
                <span className="text-sm font-semibold">{acceleration.toFixed(2)} m/s²</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Viteză:</span>
                <span className="text-sm font-semibold">{velocity.toFixed(2)} m/s</span>
              </div>
              <div className="mt-4 p-3 bg-background rounded-lg">
                <p className="text-xs text-muted-foreground mb-1">Formula:</p>
                <p className="text-sm font-mono">a = F / m</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Accelerația crește cu forța și scade cu masa
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Simulare;

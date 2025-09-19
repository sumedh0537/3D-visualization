import { ArrowLeft, Camera, Maximize, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import preview360 from "@/assets/360-preview.jpg";

const VirtualTour = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="p-6 border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="icon" className="hover:bg-accent/10">
                <ArrowLeft className="h-5 w-5 text-accent" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-accent">Virtual Tour</h1>
              <p className="text-sm text-muted-foreground">
                Immersive 360° monastery experiences
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="btn-monastery">
              <Volume2 className="h-4 w-4 mr-2" />
              Audio Guide
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Virtual Tour Viewer */}
          <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl border border-border">
            <div
              className="h-96 bg-cover bg-center relative"
              style={{ backgroundImage: `url(${preview360})` }}
            >
              <div className="absolute inset-0 bg-black/20" />
              
              {/* 360° Controls Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 monastery-glow cursor-pointer hover:scale-110 transition-transform">
                    <Camera className="h-8 w-8 text-accent" />
                  </div>
                  <p className="text-white font-semibold text-lg drop-shadow-lg">
                    Click and drag to explore 360°
                  </p>
                  <p className="text-white/80 text-sm drop-shadow-lg">
                    Use mouse wheel to zoom
                  </p>
                </div>
              </div>

              {/* Fullscreen Button */}
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 bg-card/80 backdrop-blur-sm"
              >
                <Maximize className="h-4 w-4" />
              </Button>

              {/* Navigation Hotspots */}
              <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2">
                <div className="w-8 h-8 bg-accent/80 rounded-full flex items-center justify-center cursor-pointer animate-monastery-pulse">
                  <div className="w-3 h-3 bg-card rounded-full" />
                </div>
              </div>
              <div className="absolute top-1/3 right-1/3 transform -translate-y-1/2">
                <div className="w-8 h-8 bg-primary/80 rounded-full flex items-center justify-center cursor-pointer animate-monastery-pulse">
                  <div className="w-3 h-3 bg-card rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Tour Information */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-accent mb-4">
                Rumtek Monastery Interior
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Step inside the largest monastery in Sikkim with our immersive 360° tour. 
                Experience the ornate prayer halls, intricate murals, and sacred artifacts 
                that have been preserved for centuries. This virtual tour allows you to 
                explore areas typically restricted to visitors while maintaining the 
                sanctity of this spiritual space.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <h3 className="font-semibold text-primary mb-2">Main Prayer Hall</h3>
                  <p className="text-sm text-muted-foreground">
                    360° view of the central worship space
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
                  <h3 className="font-semibold text-accent mb-2">Golden Stupa</h3>
                  <p className="text-sm text-muted-foreground">
                    Sacred reliquary chamber tour
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20">
                  <h3 className="font-semibold text-secondary mb-2">Meditation Rooms</h3>
                  <p className="text-sm text-muted-foreground">
                    Private spaces for contemplation
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-muted/50 border border-border">
                  <h3 className="font-semibold text-foreground mb-2">Courtyard View</h3>
                  <p className="text-sm text-muted-foreground">
                    Panoramic monastery grounds
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-accent mb-3">Tour Features</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    High-resolution 360° photography
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    Interactive hotspot navigation
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    Audio commentary available
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full" />
                    Mobile-friendly interface
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                <h3 className="font-semibold text-primary mb-2">Coming Soon</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  VR headset compatibility for fully immersive experiences
                </p>
                <Button size="sm" variant="outline" className="w-full btn-heritage">
                  Request VR Access
                </Button>
              </div>
            </div>
          </div>

          {/* Placeholder for actual 360° integration */}
          <div className="text-center text-muted-foreground text-sm border-t border-border pt-6">
            <p>
              <strong>Developer Note:</strong> This is a prototype interface. 
              In production, integrate with 360° photography platforms like 
              Pannellum, Krpano, or A-Frame for actual panoramic tours.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VirtualTour;
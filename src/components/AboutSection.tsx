import MonasteryMap from "./MonasteryMap";
import artifactsImg from "@/assets/artifacts.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Project Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-accent mb-6">
                About Monastery360
              </h2>
              
              {/* Problem Statement */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Problem Statement
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Sikkim's ancient monasteries, steeped in centuries of Buddhist heritage, 
                  face the challenge of preservation in our rapidly digitalizing world. Many 
                  of these sacred spaces contain priceless artifacts, intricate architecture, 
                  and spiritual practices that risk being lost to time.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Monastery360 addresses this critical need by creating comprehensive 
                  digital archives that preserve, document, and share Sikkim's monastic 
                  heritage with global audiences while respecting the sacred nature of 
                  these spiritual centers.
                </p>
              </div>

              {/* Project Summary */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Project Summary
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our digital heritage platform combines cutting-edge 360° photography, 
                  interactive mapping, and cultural documentation to create immersive 
                  experiences of Sikkim's monastery network.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Through virtual tours, artifact galleries, and educational resources, 
                  we bridge the gap between ancient wisdom and modern accessibility, 
                  ensuring these cultural treasures remain available for future generations.
                </p>
              </div>

              {/* Features Summary */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Virtual Tours</h4>
                  <p className="text-sm text-muted-foreground">
                    360° immersive experiences of monastery interiors
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
                  <h4 className="font-semibold text-accent mb-2">Digital Archives</h4>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive artifact and manuscript collections
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Map and Image */}
          <div className="space-y-6">
            {/* Interactive Map */}
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Monastery Locations
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Explore the sacred sites across Sikkim's mountainous landscape
              </p>
              <MonasteryMap />
            </div>

            {/* Heritage Card */}
            <div className="rounded-lg overflow-hidden shadow-lg border border-border">
              <div
                className="h-32 bg-cover bg-center"
                style={{ backgroundImage: `url(${artifactsImg})` }}
              >
                <div className="h-full bg-gradient-to-t from-card/90 to-transparent flex items-end">
                  <div className="p-4">
                    <h4 className="text-sm font-semibold text-accent">
                      Sacred Artifacts
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Preserving centuries of cultural heritage
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Stack */}
            <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20">
              <h4 className="font-semibold text-secondary mb-3">Technology Stack</h4>
              <div className="flex flex-wrap gap-2">
                {["360° Photography", "Interactive Maps", "Digital Archives", "Virtual Reality", "AI Search"].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-muted/50 rounded text-xs text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
import { ArrowLeft, Calendar, MapPin, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import artifactsImg from "@/assets/artifacts.jpg";
import monasteryHero from "@/assets/monastery-hero.jpg";
import sikkimHeritage from "@/assets/sikkim-heritage.jpg";

const Artifacts = () => {
  const artifacts = [
    {
      id: 1,
      title: "Ancient Buddhist Manuscript",
      description: "Palm leaf manuscript from the 12th century containing Buddhist teachings",
      image: artifactsImg,
      monastery: "Rumtek Monastery",
      period: "12th Century",
      material: "Palm Leaves, Gold Ink",
      significance: "Contains rare Vajrayana Buddhist texts",
    },
    {
      id: 2,
      title: "Golden Prayer Wheel",
      description: "Ornate prayer wheel with intricate engravings of mantras",
      image: monasteryHero,
      monastery: "Pemayangtse Monastery",
      period: "16th Century", 
      material: "Gold, Silver, Copper",
      significance: "Used in daily prayer rituals",
    },
    {
      id: 3,
      title: "Ritual Dorje (Vajra)",
      description: "Sacred thunderbolt symbol used in Tibetan Buddhist ceremonies",
      image: sikkimHeritage,
      monastery: "Enchey Monastery",
      period: "15th Century",
      material: "Bronze, Turquoise",
      significance: "Represents indestructible spiritual power",
    },
    {
      id: 4,
      title: "Thangka Painting Collection",
      description: "Hand-painted religious scrolls depicting Buddhist deities",
      image: artifactsImg,
      monastery: "Tashiding Monastery",
      period: "17th Century",
      material: "Silk, Natural Pigments",
      significance: "Used for meditation and teaching",
    },
    {
      id: 5,
      title: "Singing Bowl Set",
      description: "Traditional metal bowls used for meditation and healing",
      image: monasteryHero,
      monastery: "Dubdi Monastery",
      period: "14th Century",
      material: "Seven Sacred Metals",
      significance: "Creates healing sound vibrations",
    },
    {
      id: 6,
      title: "Ceremonial Mask",
      description: "Ornate mask used in Cham dance ceremonies",
      image: sikkimHeritage,
      monastery: "Ralang Monastery",
      period: "18th Century", 
      material: "Wood, Gold Leaf, Gemstones",
      significance: "Represents protective Buddhist deities",
    },
  ];

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
              <h1 className="text-2xl font-bold text-accent">Sacred Artifacts</h1>
              <p className="text-sm text-muted-foreground">
                Historical treasures from Sikkim's monasteries
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-accent mb-4">
              Digital Artifact Collection
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore the sacred objects and historical treasures preserved within 
              Sikkim's ancient monasteries. Each artifact tells a story of spiritual 
              devotion and cultural heritage spanning centuries.
            </p>
          </div>

          {/* Artifacts Grid */}
          <div className="space-y-8">
            {artifacts.map((artifact, index) => (
              <div
                key={artifact.id}
                className={`grid lg:grid-cols-2 gap-8 p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-all hover:shadow-xl ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Image */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div
                    className="aspect-square rounded-lg bg-cover bg-center relative overflow-hidden"
                    style={{ backgroundImage: `url(${artifact.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4" />
                        {artifact.monastery}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-4 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {artifact.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {artifact.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-sm font-semibold text-primary">Period</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{artifact.period}</p>
                    </div>

                    <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                      <div className="flex items-center gap-2 mb-1">
                        <Info className="h-4 w-4 text-accent" />
                        <span className="text-sm font-semibold text-accent">Material</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{artifact.material}</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20">
                    <h4 className="font-semibold text-secondary mb-2">Cultural Significance</h4>
                    <p className="text-sm text-muted-foreground">
                      {artifact.significance}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="btn-monastery">
                      View in 3D
                    </Button>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 p-8 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Contribute to Digital Preservation
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Help us document and preserve more artifacts from Sikkim's monasteries. 
              Your contributions support the digital heritage initiative.
            </p>
            <Button className="btn-heritage px-8">
              Submit Artifact Information
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Artifacts;
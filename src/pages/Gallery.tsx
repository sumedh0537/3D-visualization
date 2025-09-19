import { ArrowLeft, Download, ZoomIn, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import monasteryHero from "@/assets/monastery-hero.jpg";
import sikkimHeritage from "@/assets/sikkim-heritage.jpg";
import artifactsImg from "@/assets/artifacts.jpg";
import preview360 from "@/assets/360-preview.jpg";

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      title: "Rumtek Monastery Main Hall",
      description: "Sacred prayer hall with golden Buddha statue",
      image: monasteryHero,
      category: "Interior",
    },
    {
      id: 2,
      title: "Pemayangtse Monastery",
      description: "Ancient three-story monastery complex",
      image: sikkimHeritage,
      category: "Exterior",
    },
    {
      id: 3,
      title: "Sacred Artifacts Collection",
      description: "Ancient manuscripts and ritual objects",
      image: artifactsImg,
      category: "Artifacts",
    },
    {
      id: 4,
      title: "Prayer Wheels Detail",
      description: "Intricate Buddhist prayer wheels",
      image: preview360,
      category: "Details",
    },
    {
      id: 5,
      title: "Monastery Gardens",
      description: "Peaceful meditation gardens",
      image: monasteryHero,
      category: "Exterior",
    },
    {
      id: 6,
      title: "Thangka Paintings",
      description: "Traditional Buddhist art collections",
      image: sikkimHeritage,
      category: "Art",
    },
  ];

  const categories = ["All", "Interior", "Exterior", "Artifacts", "Details", "Art"];

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
              <h1 className="text-2xl font-bold text-accent">Monastery Gallery</h1>
              <p className="text-sm text-muted-foreground">
                High-resolution photography collection
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="btn-monastery">
              <Camera className="h-4 w-4 mr-2" />
              Virtual Tour
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className={category === "All" ? "btn-monastery" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg bg-card border border-border hover:border-primary/30 transition-all hover:shadow-xl"
              >
                <div
                  className="aspect-square bg-cover bg-center relative cursor-pointer"
                  style={{ backgroundImage: `url(${image.image})` }}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="bg-card/80 backdrop-blur-sm">
                        <ZoomIn className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="bg-card/80 backdrop-blur-sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 text-xs bg-primary/80 text-primary-foreground rounded-full">
                      {image.category}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-2">
                    {image.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Section */}
          <div className="text-center mt-12">
            <Button variant="outline" className="btn-heritage px-8">
              Load More Images
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Showing {galleryImages.length} of 120+ monastery photographs
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Gallery;
import { ArrowLeft, Search, Filter, Archive, FileText, Image, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import artifactsImg from "@/assets/artifacts.jpg";

const archiveItems = [
  {
    id: 1,
    title: "Ancient Tibetan Manuscripts",
    type: "Manuscript",
    date: "15th Century",
    monastery: "Pemayangtse",
    description: "Rare Buddhist texts written on palm leaves",
    icon: FileText,
  },
  {
    id: 2,
    title: "Ritual Prayer Wheels",
    type: "Artifact",
    date: "17th Century",
    monastery: "Rumtek",
    description: "Hand-crafted copper prayer wheels with mantras",
    icon: Archive,
  },
  {
    id: 3,
    title: "Monastery Construction Photos",
    type: "Photography",
    date: "1960-1980",
    monastery: "Enchey",
    description: "Historical photographs of monastery construction",
    icon: Image,
  },
  {
    id: 4,
    title: "Chanting Audio Recordings",
    type: "Audio",
    date: "1990s",
    monastery: "Tashiding",
    description: "Traditional Buddhist chants and prayers",
    icon: Volume2,
  },
  {
    id: 5,
    title: "Sacred Thangka Paintings",
    type: "Artwork",
    date: "16th Century",
    monastery: "Phensang",
    description: "Intricate Buddhist scroll paintings on silk",
    icon: Image,
  },
  {
    id: 6,
    title: "Monastery Foundation Records",
    type: "Document",
    date: "Various",
    monastery: "Multiple",
    description: "Historical documents of monastery establishments",
    icon: FileText,
  },
];

const Archives = () => {
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
              <h1 className="text-2xl font-bold text-accent">Digital Archives</h1>
              <p className="text-sm text-muted-foreground">
                Preserving Sikkim's monastery heritage
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="btn-heritage">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Search and Overview */}
          <div className="mb-8">
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search archives by keyword, monastery, or time period..."
                  className="pl-10 py-3 text-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/20 text-center">
                <div className="text-2xl font-bold text-primary">847</div>
                <div className="text-sm text-muted-foreground">Total Items</div>
              </div>
              <div className="p-4 rounded-lg bg-accent/10 border border-accent/20 text-center">
                <div className="text-2xl font-bold text-accent">156</div>
                <div className="text-sm text-muted-foreground">Manuscripts</div>
              </div>
              <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20 text-center">
                <div className="text-2xl font-bold text-secondary">324</div>
                <div className="text-sm text-muted-foreground">Artifacts</div>
              </div>
              <div className="p-4 rounded-lg bg-muted/50 border border-border text-center">
                <div className="text-2xl font-bold text-foreground">367</div>
                <div className="text-sm text-muted-foreground">Photos</div>
              </div>
            </div>
          </div>

          {/* Featured Collection */}
          <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-accent mb-4">
                  Featured Collection
                </h2>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Sacred Manuscripts of Pemayangtse
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A digitized collection of 15th-century Buddhist texts, 
                  carefully preserved and made accessible through high-resolution 
                  scanning. These manuscripts contain ancient wisdom on meditation 
                  practices, philosophical teachings, and monastery rituals.
                </p>
                <Button className="btn-monastery">
                  Explore Collection
                </Button>
              </div>
              <div className="relative">
                <div
                  className="h-64 rounded-lg bg-cover bg-center"
                  style={{ backgroundImage: `url(${artifactsImg})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent rounded-lg" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white">
                      <span className="text-sm font-medium">Manuscript #001</span>
                      <span className="text-xs bg-primary/80 px-2 py-1 rounded">
                        High Resolution
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Archive Grid */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Archive Collection
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {archiveItems.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={item.id}
                    className="p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-all hover:shadow-lg cursor-pointer heritage-float"
                    style={{ animationDelay: `${item.id * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-lg ${
                        item.type === 'Manuscript' ? 'bg-primary/20 text-primary' :
                        item.type === 'Artifact' ? 'bg-accent/20 text-accent' :
                        item.type === 'Photography' || item.type === 'Artwork' ? 'bg-secondary/20 text-secondary' :
                        'bg-muted/50 text-muted-foreground'
                      }`}>
                        <ItemIcon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Type:</span>
                        <span className="text-foreground font-medium">{item.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Date:</span>
                        <span className="text-foreground">{item.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Location:</span>
                        <span className="text-accent">{item.monastery}</span>
                      </div>
                    </div>
                    
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full mt-4 btn-heritage"
                    >
                      View Details
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Preservation Info */}
          <div className="p-6 rounded-lg bg-muted/20 border border-border">
            <h3 className="text-xl font-semibold text-accent mb-4">
              Digital Preservation Initiative
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-primary mb-2">Digitization Process</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• High-resolution scanning (600+ DPI)</li>
                  <li>• Color-accurate reproduction</li>
                  <li>• Metadata documentation</li>
                  <li>• Climate-controlled storage</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-accent mb-2">Access Levels</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Public: General collections</li>
                  <li>• Research: Academic access</li>
                  <li>• Restricted: Sacred items</li>
                  <li>• Private: Monastery-only</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-2">Future Plans</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• AI-powered search</li>
                  <li>• 3D artifact modeling</li>
                  <li>• Multi-language support</li>
                  <li>• Interactive timelines</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Placeholder Note */}
          <div className="text-center text-muted-foreground text-sm border-t border-border pt-6 mt-8">
            <p>
              <strong>Developer Note:</strong> This is a prototype interface. 
              In production, integrate with digital asset management systems, 
              search engines, and authentication for restricted content access.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Archives;
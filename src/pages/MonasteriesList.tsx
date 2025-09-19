import { ArrowLeft, MapPin, Clock, Users, Star, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import monasteryHero from "@/assets/monastery-hero.jpg";
import sikkimHeritage from "@/assets/sikkim-heritage.jpg";

const monasteries = [
  {
    id: 1,
    name: "Rumtek Monastery",
    location: "Gangtok, East Sikkim",
    established: "1966",
    tradition: "Kagyu School",
    description: "The largest monastery in Sikkim, also known as the Dharmachakra Centre",
    visitors: "Open to visitors",
    timings: "6:00 AM - 5:00 PM",
    highlights: ["Golden Stupa", "Prayer Wheels", "Buddhist University"],
    image: monasteryHero,
    phone: "+91-3592-252533",
    website: "rumtek.org",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Pemayangtse Monastery",
    location: "Pelling, West Sikkim",
    established: "1705",
    tradition: "Nyingma School",
    description: "One of the oldest and most important monasteries in Sikkim",
    visitors: "Open to visitors",
    timings: "7:00 AM - 4:00 PM",
    highlights: ["Ancient Murals", "Wood Carvings", "Sacred Relics"],
    image: sikkimHeritage,
    phone: "+91-3595-250234",
    website: "pemayangtse.org",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Tashiding Monastery",
    location: "Tashiding, West Sikkim",
    established: "1641",
    tradition: "Nyingma School",
    description: "Sacred monastery on a hilltop between Rangit and Rathong rivers",
    visitors: "Limited access",
    timings: "8:00 AM - 3:00 PM",
    highlights: ["Sacred Stupa", "Holy Water", "Ritual Ceremonies"],
    image: monasteryHero,
    phone: "+91-3595-264011",
    website: "tashiding.org",
    rating: 4.6,
  },
  {
    id: 4,
    name: "Enchey Monastery",
    location: "Gangtok, East Sikkim",
    established: "1909",
    tradition: "Nyingma School",
    description: "Important monastery in Gangtok with beautiful architecture",
    visitors: "Open to visitors",
    timings: "6:30 AM - 5:30 PM",
    highlights: ["Religious Festivals", "City Views", "Prayer Flags"],
    image: sikkimHeritage,
    phone: "+91-3592-202637",
    website: "enchey.org",
    rating: 4.5,
  },
  {
    id: 5,
    name: "Phensang Monastery",
    location: "Kabi, North Sikkim",
    established: "1721",
    tradition: "Nyingma School",
    description: "Remote monastery in northern Sikkim with pristine mountain views",
    visitors: "Permit required",
    timings: "7:00 AM - 4:00 PM",
    highlights: ["Mountain Views", "Ancient Texts", "Meditation Retreats"],
    image: monasteryHero,
    phone: "+91-3592-234567",
    website: "phensang.org",
    rating: 4.9,
  },
];

const MonasteriesList = () => {
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
              <h1 className="text-2xl font-bold text-accent">Monasteries Directory</h1>
              <p className="text-sm text-muted-foreground">
                Complete guide to Sikkim's sacred sites
              </p>
            </div>
          </div>
          <Button variant="outline" className="btn-monastery">
            <MapPin className="h-4 w-4 mr-2" />
            View on Map
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Overview Stats */}
          <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
            <h2 className="text-3xl font-bold text-accent mb-4">
              Sikkim's Sacred Monasteries
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Discover the spiritual heart of Sikkim through its ancient monasteries. 
              Each monastery represents centuries of Buddhist tradition, architectural 
              beauty, and cultural preservation in the lap of the Himalayas.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">45+</div>
                <div className="text-sm text-muted-foreground">Total Monasteries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">3</div>
                <div className="text-sm text-muted-foreground">Buddhist Schools</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">400+</div>
                <div className="text-sm text-muted-foreground">Years of History</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">15</div>
                <div className="text-sm text-muted-foreground">Major Sites</div>
              </div>
            </div>
          </div>

          {/* Monasteries Grid */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground">
              Featured Monasteries
            </h3>
            
            {monasteries.map((monastery) => (
              <div
                key={monastery.id}
                className="grid md:grid-cols-3 gap-6 p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-all hover:shadow-lg heritage-float"
                style={{ animationDelay: `${monastery.id * 0.1}s` }}
              >
                {/* Image */}
                <div className="md:col-span-1">
                  <div
                    className="h-48 rounded-lg bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${monastery.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent rounded-lg" />
                    <div className="absolute top-3 right-3">
                      <div className="flex items-center gap-1 bg-card/90 backdrop-blur-sm px-2 py-1 rounded">
                        <Star className="h-3 w-3 text-accent fill-accent" />
                        <span className="text-xs font-medium">{monastery.rating}</span>
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <span className="text-xs bg-primary/80 text-primary-foreground px-2 py-1 rounded">
                        {monastery.tradition}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h4 className="text-2xl font-bold text-accent mb-2">
                      {monastery.name}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {monastery.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-secondary" />
                        <span className="text-muted-foreground">{monastery.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-accent" />
                        <span className="text-muted-foreground">{monastery.timings}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">{monastery.visitors}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div>
                        <span className="text-accent font-medium">Established: </span>
                        <span className="text-muted-foreground">{monastery.established}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-secondary" />
                        <span className="text-muted-foreground text-xs">{monastery.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-accent" />
                        <span className="text-muted-foreground text-xs">{monastery.website}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-primary mb-2">Key Highlights:</h5>
                    <div className="flex flex-wrap gap-2">
                      {monastery.highlights.map((highlight, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-accent/10 text-accent text-xs rounded border border-accent/20"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button size="sm" className="btn-monastery">
                      Virtual Tour
                    </Button>
                    <Button size="sm" variant="outline" className="btn-heritage">
                      View Details
                    </Button>
                    <Button size="sm" variant="ghost" className="text-accent">
                      Get Directions
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Visitor Information */}
          <div className="mt-12 p-6 rounded-lg bg-muted/20 border border-border">
            <h3 className="text-xl font-semibold text-accent mb-4">
              Visitor Information
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-primary mb-2">Before You Visit</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Check monastery timings and special events</li>
                  <li>• Some monasteries require permits</li>
                  <li>• Dress modestly and respectfully</li>
                  <li>• Carry valid identification</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-accent mb-2">Photography Rules</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Ask permission before taking photos</li>
                  <li>• Flash photography often prohibited</li>
                  <li>• Respect sacred spaces and ceremonies</li>
                  <li>• Some areas may be completely off-limits</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-2">Best Time to Visit</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• March to June: Clear mountain views</li>
                  <li>• September to November: Post-monsoon clarity</li>
                  <li>• Early morning: Peaceful atmosphere</li>
                  <li>• Festival times: Cultural experiences</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Placeholder Note */}
          <div className="text-center text-muted-foreground text-sm border-t border-border pt-6 mt-8">
            <p>
              <strong>Developer Note:</strong> This is a prototype interface. 
              In production, integrate with mapping services, real-time data updates, 
              and booking systems for guided tours and permits.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MonasteriesList;
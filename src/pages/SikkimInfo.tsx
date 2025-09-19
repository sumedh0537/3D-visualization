import { ArrowLeft, Users, Mountain, Calendar, MapPin, Book, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import sikkimHeritage from "@/assets/sikkim-heritage.jpg";
import monasteryHero from "@/assets/monastery-hero.jpg";

const SikkimInfo = () => {
  const statistics = [
    { label: "Population", value: "695,000", icon: Users },
    { label: "Monasteries", value: "200+", icon: Mountain },
    { label: "Founded", value: "1975", icon: Calendar },
    { label: "Capital", value: "Gangtok", icon: MapPin },
  ];

  const culturalAspects = [
    {
      title: "Buddhist Heritage",
      description: "Sikkim is home to over 200 Buddhist monasteries, representing various schools of Tibetan Buddhism including Nyingma, Kagyu, and Gelug traditions.",
      image: monasteryHero,
    },
    {
      title: "Cultural Diversity", 
      description: "The state celebrates a unique blend of Tibetan, Nepali, and indigenous Sikkimese cultures, with multiple festivals and traditions throughout the year.",
      image: sikkimHeritage,
    },
    {
      title: "Natural Beauty",
      description: "From the world's third-highest peak Kangchenjunga to pristine lakes and valleys, Sikkim's natural beauty is deeply intertwined with its spiritual heritage.",
      image: monasteryHero,
    },
  ];

  const monasterySchools = [
    {
      name: "Nyingma",
      description: "The oldest school of Tibetan Buddhism",
      monasteries: ["Pemayangtse", "Tashiding", "Dubdi"],
      color: "primary",
    },
    {
      name: "Kagyu", 
      description: "Known for meditation practices",
      monasteries: ["Rumtek", "Ralang", "Enchey"],
      color: "accent",
    },
    {
      name: "Gelug",
      description: "The school of the Dalai Lama",
      monasteries: ["Tsuklakhang", "Phodong"],
      color: "secondary",
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
              <h1 className="text-2xl font-bold text-accent">Sikkim Information</h1>
              <p className="text-sm text-muted-foreground">
                Land of monasteries and cultural heritage
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative py-20 px-6"
        style={{ 
          backgroundImage: `url(${sikkimHeritage})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6 drop-shadow-2xl">
            Sikkim
          </h2>
          <p className="text-xl text-white/90 drop-shadow-lg">
            India's smallest state with the richest Buddhist heritage
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="p-6">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Statistics */}
          <section>
            <h3 className="text-3xl font-bold text-accent mb-8 text-center">
              Sikkim at a Glance
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {statistics.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-all"
                >
                  <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-2xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Cultural Aspects */}
          <section>
            <h3 className="text-3xl font-bold text-accent mb-8 text-center">
              Cultural Heritage
            </h3>
            <div className="space-y-8">
              {culturalAspects.map((aspect, index) => (
                <div 
                  key={index}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div
                      className="aspect-video rounded-lg bg-cover bg-center"
                      style={{ backgroundImage: `url(${aspect.image})` }}
                    />
                  </div>
                  <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                    <h4 className="text-2xl font-bold text-foreground mb-4">
                      {aspect.title}
                    </h4>
                    <p className="text-muted-foreground text-lg">
                      {aspect.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Monastery Schools */}
          <section>
            <h3 className="text-3xl font-bold text-accent mb-8 text-center">
              Buddhist Schools in Sikkim
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {monasterySchools.map((school, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-lg border transition-all hover:shadow-lg bg-${school.color}/10 border-${school.color}/20 hover:border-${school.color}/50`}
                >
                  <h4 className={`text-xl font-bold text-${school.color} mb-3`}>
                    {school.name} School
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    {school.description}
                  </p>
                  <div className="space-y-2">
                    <div className={`text-sm font-semibold text-${school.color}`}>
                      Major Monasteries:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {school.monasteries.map((monastery, idx) => (
                        <span 
                          key={idx}
                          className={`px-2 py-1 text-xs bg-${school.color}/20 text-${school.color} rounded-full`}
                        >
                          {monastery}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Historical Timeline */}
          <section className="p-8 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
            <h3 className="text-3xl font-bold text-primary mb-8 text-center">
              Historical Timeline
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-foreground">1642</div>
                  <div className="text-muted-foreground">
                    Phuntsog Namgyal becomes the first Chogyal (king) of Sikkim
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-foreground">1705</div>
                  <div className="text-muted-foreground">
                    Pemayangtse Monastery established as the state monastery
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-secondary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-foreground">1975</div>
                  <div className="text-muted-foreground">
                    Sikkim becomes the 22nd state of India
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <h3 className="text-2xl font-bold text-accent mb-4">
              Explore Sikkim's Monasteries
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Discover the spiritual and cultural treasures of Sikkim through our 
              comprehensive digital heritage platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/virtual-tour" className="btn-monastery px-8 py-3 rounded-lg text-center">
                Virtual Tours
              </Link>
              <Link to="/monasteries-list" className="btn-heritage px-8 py-3 rounded-lg text-center">
                Monastery Directory
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default SikkimInfo;
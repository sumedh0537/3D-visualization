import { ArrowLeft, Calendar, MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Losar Festival",
    date: "Feb 14-16, 2024",
    location: "All Monasteries",
    description: "Tibetan New Year celebration with traditional dances and ceremonies",
    category: "Festival",
    attendees: "500+",
  },
  {
    id: 2,
    title: "Buddha Purnima",
    date: "May 23, 2024",
    location: "Rumtek Monastery",
    description: "Celebration of Buddha's birth, enlightenment, and death",
    category: "Religious",
    attendees: "1000+",
  },
  {
    id: 3,
    title: "Masked Dance Festival",
    date: "Jul 10-12, 2024",
    location: "Pemayangtse Monastery",
    description: "Traditional Cham dance performances by monastery monks",
    category: "Cultural",
    attendees: "300+",
  },
  {
    id: 4,
    title: "Drukpa Kunley Festival",
    date: "Sep 15, 2024",
    location: "Enchey Monastery",
    description: "Annual celebration honoring the Divine Madman",
    category: "Festival",
    attendees: "400+",
  },
];

const CulturalCalendar = () => {
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
              <h1 className="text-2xl font-bold text-accent">Cultural Calendar</h1>
              <p className="text-sm text-muted-foreground">
                Monastery festivals and cultural events
              </p>
            </div>
          </div>
          <Button variant="outline" className="btn-monastery">
            <Calendar className="h-4 w-4 mr-2" />
            Add to Calendar
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Calendar Overview */}
          <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
            <h2 className="text-3xl font-bold text-accent mb-4">
              Sikkim Monastery Events 2024
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Experience the rich cultural tapestry of Sikkim's monasteries through 
              traditional festivals, spiritual ceremonies, and cultural celebrations. 
              Each event offers a unique glimpse into centuries-old Buddhist traditions.
            </p>
            
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">12</div>
                <div className="text-sm text-muted-foreground">Festivals</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">25</div>
                <div className="text-sm text-muted-foreground">Ceremonies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">8</div>
                <div className="text-sm text-muted-foreground">Cultural Events</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">5</div>
                <div className="text-sm text-muted-foreground">Monasteries</div>
              </div>
            </div>
          </div>

          {/* Events List */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Upcoming Events
            </h3>
            
            {events.map((event) => (
              <div
                key={event.id}
                className="p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-all hover:shadow-lg heritage-float"
                style={{ animationDelay: `${event.id * 0.1}s` }}
              >
                <div className="grid md:grid-cols-4 gap-4 items-start">
                  <div className="md:col-span-2">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="mt-1">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-accent mb-1">
                          {event.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-accent" />
                      <span className="text-foreground">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-secondary" />
                      <span className="text-muted-foreground">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{event.attendees} expected</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      event.category === 'Festival' 
                        ? 'bg-primary/20 text-primary' 
                        : event.category === 'Religious'
                        ? 'bg-accent/20 text-accent'
                        : 'bg-secondary/20 text-secondary'
                    }`}>
                      {event.category}
                    </span>
                    <Button size="sm" variant="outline" className="btn-heritage">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cultural Notes */}
          <div className="mt-12 p-6 rounded-lg bg-muted/20 border border-border">
            <h3 className="text-xl font-semibold text-accent mb-4">
              Cultural Guidelines
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-primary mb-2">For Visitors</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Dress modestly and respectfully</li>
                  <li>• Remove shoes before entering prayer halls</li>
                  <li>• Photography may be restricted during ceremonies</li>
                  <li>• Maintain silence during meditation periods</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-accent mb-2">Event Types</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Festivals: Community celebrations with music and dance</li>
                  <li>• Religious: Sacred ceremonies and rituals</li>
                  <li>• Cultural: Educational and artistic events</li>
                  <li>• Seasonal: Annual observances tied to Buddhist calendar</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Placeholder Note */}
          <div className="text-center text-muted-foreground text-sm border-t border-border pt-6 mt-8">
            <p>
              <strong>Developer Note:</strong> This is a prototype interface. 
              In production, integrate with calendar APIs and event management systems 
              for real-time updates and registration functionality.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CulturalCalendar;
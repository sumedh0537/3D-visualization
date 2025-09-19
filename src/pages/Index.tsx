import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import SidePanel from "@/components/SidePanel";
import Carousel3D from "@/components/Carousel3D";
import AboutSection from "@/components/AboutSection";
import monasteryHero from "@/assets/monastery-hero.jpg";
import sikkimHeritage from "@/assets/sikkim-heritage.jpg";

const Index = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll effects for background parallax
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const togglePanel = () => setIsPanelOpen(!isPanelOpen);
  const closePanel = () => setIsPanelOpen(false);

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Fixed Background Images for Parallax Effect */}
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-30"
        style={{ 
          backgroundImage: `url(${monasteryHero})`,
          transform: `translateY(${scrollY * 0.5}px)`,
          zIndex: -2
        }}
      />
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
        style={{ 
          backgroundImage: `url(${sikkimHeritage})`,
          transform: `translateY(${scrollY * 0.3}px)`,
          zIndex: -1
        }}
      />

      {/* Header */}
      <Header onMenuToggle={togglePanel} />

      {/* Side Panel */}
      <SidePanel isOpen={isPanelOpen} onClose={closePanel} />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section with Static Background */}
        <section 
          className="heritage-section min-h-screen flex items-center justify-center relative"
          style={{ 
            backgroundImage: `url(${monasteryHero})`,
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="heritage-overlay absolute inset-0" />
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <h1 className="text-6xl md:text-8xl font-bold text-accent mb-6 drop-shadow-2xl">
                Monastery360
              </h1>
              <p className="text-xl md:text-2xl text-foreground/90 mb-8 drop-shadow-lg">
                Digital Heritage Platform for Sikkim's Sacred Monasteries
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/virtual-tour" className="btn-monastery px-8 py-4 rounded-xl text-lg font-semibold text-center">
                  Begin Virtual Journey
                </Link>
                <Link to="/archives" className="btn-heritage px-8 py-4 rounded-xl text-lg font-semibold text-center">
                  Explore Archives
                </Link>
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-heritage-float">
            <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
              <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-monastery-pulse" />
            </div>
            <p className="text-xs text-accent mt-2 text-center">Scroll to explore</p>
          </div>
        </section>

        {/* Static Image Background Section */}
        <section 
          className="heritage-section py-32 relative"
          style={{ 
            backgroundImage: `url(${sikkimHeritage})`,
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="heritage-overlay absolute inset-0" />
          <div className="relative z-10 text-center px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold text-accent mb-6 drop-shadow-2xl">
                STATIC IMAGE BACKGROUND
              </h2>
              <p className="text-lg text-foreground/90 drop-shadow-lg">
                This section demonstrates the static background image effect as it scrolls 
                behind the content, creating an immersive parallax experience that reveals 
                Sikkim's breathtaking monastery landscapes.
              </p>
            </div>
          </div>
        </section>

        {/* 3D Carousel Section */}
        <Carousel3D />

        {/* About Section with Map */}
        <AboutSection />

        {/* Additional Heritage Sections for Scrolling Effect */}
        <section className="py-20 px-6 bg-gradient-to-b from-background/90 to-muted/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-accent mb-8">
              Preserving Sacred Heritage
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg bg-card/80 backdrop-blur-sm border border-border hover:border-primary/30 transition-all heritage-float">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 monastery-glow">
                  <div className="w-8 h-8 bg-primary rounded-full" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Digital Preservation
                </h3>
                <p className="text-muted-foreground">
                  Advanced scanning and 3D modeling techniques preserve artifacts 
                  and architecture for future generations.
                </p>
              </div>
              
              <div className="p-6 rounded-lg bg-card/80 backdrop-blur-sm border border-border hover:border-accent/30 transition-all heritage-float" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 monastery-glow">
                  <div className="w-8 h-8 bg-accent rounded-full" />
                </div>
                <h3 className="text-xl font-semibold text-accent mb-3">
                  Cultural Education
                </h3>
                <p className="text-muted-foreground">
                  Interactive experiences teach Buddhist philosophy, 
                  architecture, and centuries-old traditions.
                </p>
              </div>
              
              <div className="p-6 rounded-lg bg-card/80 backdrop-blur-sm border border-border hover:border-secondary/30 transition-all heritage-float" style={{ animationDelay: '0.4s' }}>
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 monastery-glow">
                  <div className="w-8 h-8 bg-secondary rounded-full" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-3">
                  Global Access
                </h3>
                <p className="text-muted-foreground">
                  Virtual tours and digital archives make Sikkim's 
                  spiritual heritage accessible worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section 
          className="heritage-section py-32 relative"
          style={{ 
            backgroundImage: `url(${monasteryHero})`,
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="heritage-overlay absolute inset-0" />
          <div className="relative z-10 text-center px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold text-accent mb-6 drop-shadow-2xl">
                Begin Your Journey
              </h2>
              <p className="text-lg text-foreground/90 mb-8 drop-shadow-lg">
                Explore the spiritual heart of Sikkim through our immersive 
                digital platform. Every scroll reveals new wonders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/virtual-tour" className="btn-monastery px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-transform text-center">
                  Start Virtual Tour
                </Link>
                <Link to="/archives" className="btn-heritage px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-transform text-center">
                  Browse Archives
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Developer README in HTML comment */}
      {/* 
        MONASTERY360 - DEVELOPER README
        
        ## How to Run Locally
        1. npm install
        2. npm run dev
        3. Open http://localhost:8080
        
        ## Replacing Placeholders
        - Replace generated images in src/assets/ with actual monastery photos
        - Update MonasteryMap.tsx coordinates with real GPS data
        - Replace Leaflet placeholder with actual monastery mapping API
        - Integrate 360° viewer (Pannellum, Krpano, or A-Frame) in VirtualTour.tsx
        - Connect to real monastery database for dynamic content
        
        ## API Endpoints to Add
        - /api/monasteries - Monastery data and locations
        - /api/events - Cultural calendar events
        - /api/archives - Digital archive items
        - /api/tours - Virtual tour panoramas
        
        ## Production Considerations
        - Add real authentication for restricted content
        - Implement proper SEO meta tags
        - Add analytics tracking
        - Optimize images for web delivery
        - Add offline caching for mobile users
      */}
    </div>
  );
};

export default Index;
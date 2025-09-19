import { X, Camera, Calendar, Archive, MapPin, Eye, ImageIcon, Cpu, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface SidePanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigationItems = [
  { icon: Camera, label: "Virtual Tour", href: "/virtual-tour" },
  { icon: Calendar, label: "Cultural Calendar", href: "/cultural-calendar" },
  { icon: Archive, label: "Archives", href: "/archives" },
  { icon: MapPin, label: "Monasteries List", href: "/monasteries-list" },
];

const miniFeatures = [
  { icon: Eye, label: "360° View", color: "text-primary" },
  { icon: ImageIcon, label: "Gallery", color: "text-accent" },
  { icon: Archive, label: "Artifacts", color: "text-secondary" },
  { icon: Cpu, label: "Internal Informatics", color: "text-muted-foreground" },
];

const SidePanel = ({ isOpen, onClose }: SidePanelProps) => {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
          onClick={onClose}
        />
      )}

      {/* Side Panel */}
      <div
        className={`side-panel fixed left-0 top-0 h-full w-80 bg-card border-r border-border z-50 overflow-y-auto ${
          isOpen ? "open" : ""
        }`}
      >
        <div className="p-6 space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-accent">Monastery360</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-muted-foreground hover:text-accent"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-3">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Navigation
            </h3>
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors group"
                onClick={onClose}
              >
                <item.icon className="h-5 w-5 text-accent group-hover:text-primary" />
                <span className="text-foreground group-hover:text-primary">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Mini Feature Carousel */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Quick Access
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {miniFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-muted/50 hover:bg-accent/10 cursor-pointer transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <feature.icon className={`h-6 w-6 ${feature.color} mb-2`} />
                  <p className="text-xs text-muted-foreground font-medium">
                    {feature.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* AI Features Stub */}
          <div className="p-4 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
            <h4 className="text-sm font-semibold text-primary mb-2">AI Features</h4>
            <div className="space-y-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-monastery-pulse"></div>
                <span>Smart Search (Coming Soon)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Audio Guide Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span>Offline Mode Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidePanel;
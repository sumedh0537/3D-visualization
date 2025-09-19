import { Menu, Search, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onMenuToggle: () => void;
}

const Header = ({ onMenuToggle }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between h-full px-6">
        {/* Left: Hamburger Menu */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onMenuToggle}
          className="text-accent hover:bg-accent/10"
          aria-label="Open navigation menu"
        >
          <Menu className="h-6 w-6" />
        </Button>

        {/* Center: Quote of the Day */}
        <div className="flex-1 flex justify-center">
          <div className="quote-box px-6 py-2 rounded-lg text-center max-w-md">
            <h1 className="text-lg font-semibold text-accent tracking-wide">
              QUOTE OF THE DAY
            </h1>
            <p className="text-sm text-muted-foreground mt-1 italic">
              "The mind is everything. What you think you become." - Buddha
            </p>
          </div>
        </div>

        {/* Right: Action Icons */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-accent hover:bg-accent/10"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-accent hover:bg-accent/10"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-accent hover:bg-accent/10"
            aria-label="User profile"
          >
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
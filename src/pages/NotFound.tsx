import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="mb-8">
          <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 monastery-glow">
            <div className="text-4xl font-bold text-accent">404</div>
          </div>
          <h1 className="text-3xl font-bold text-accent mb-4">
            Sacred Path Not Found
          </h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            The spiritual journey you're seeking doesn't exist in our digital realm. 
            Perhaps the path you're looking for has been moved or renamed.
          </p>
        </div>
        
        <div className="space-y-4">
          <a 
            href="/" 
            className="btn-monastery inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
          >
            Return to Monastery360
          </a>
          
          <div className="text-sm text-muted-foreground">
            <p>Lost? Try these spiritual destinations:</p>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              <a href="/virtual-tour" className="text-accent hover:text-primary transition-colors">Virtual Tours</a>
              <span className="text-muted-foreground">•</span>
              <a href="/archives" className="text-accent hover:text-primary transition-colors">Archives</a>
              <span className="text-muted-foreground">•</span>
              <a href="/monasteries-list" className="text-accent hover:text-primary transition-colors">Monasteries</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

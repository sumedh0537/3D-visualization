import { useState, useEffect } from "react";
import { Eye, ImageIcon, Archive, Cpu, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import preview360 from "@/assets/360-preview.jpg";
import artifactsImg from "@/assets/artifacts.jpg";

const features = [
  {
    id: "360-view",
    icon: Eye,
    title: "360° Degree View",
    description: "Immersive virtual tours of monastery interiors",
    image: preview360,
    color: "primary",
    href: "/virtual-tour",
  },
  {
    id: "gallery",
    icon: ImageIcon,
    title: "Gallery",
    description: "High-resolution photography collection",
    image: artifactsImg,
    color: "accent",
    href: "/gallery",
  },
  {
    id: "artifacts",
    icon: Archive,
    title: "Artifacts",
    description: "Sacred objects and historical treasures",
    image: artifactsImg,
    color: "secondary",
    href: "/artifacts",
  },
  {
    id: "informatics",
    icon: Cpu,
    title: "Internal Informatics",
    description: "Digital archives and data visualization",
    image: preview360,
    color: "muted-foreground",
    href: "/sikkim-info",
  },
];

const Carousel3D = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Infinite carousel with auto-advance
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const getItemStyle = (index: number) => {
    const diff = (index - currentIndex + features.length) % features.length;
    const isActive = diff === 0;
    const isNext = diff === 1 || diff === -(features.length - 1);
    const isPrev = diff === features.length - 1 || diff === -1;

    if (isActive) {
      return {
        transform: "translateX(0) rotateY(0deg) scale(1.1)",
        zIndex: 3,
        opacity: 1,
      };
    } else if (isNext) {
      return {
        transform: "translateX(300px) rotateY(-45deg) scale(0.8)",
        zIndex: 2,
        opacity: 0.7,
      };
    } else if (isPrev) {
      return {
        transform: "translateX(-300px) rotateY(45deg) scale(0.8)",
        zIndex: 2,
        opacity: 0.7,
      };
    } else {
      return {
        transform: "translateX(0) rotateY(90deg) scale(0.6)",
        zIndex: 1,
        opacity: 0.3,
      };
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-accent mb-4">
            Digital Heritage Features
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore Sikkim's monasteries through immersive digital experiences
          </p>
        </div>

        {/* 3D Carousel Container */}
        <div className="relative carousel-3d h-96 flex items-center justify-center overflow-hidden">
          {features.map((feature, index) => {
            const ItemIcon = feature.icon;
            const isActive = index === currentIndex;

            return (
              <div
                key={feature.id}
                className="carousel-item absolute w-80 h-80 cursor-pointer"
                style={getItemStyle(index)}
                onClick={() => setCurrentIndex(index)}
              >
                <div
                  className={`w-full h-full rounded-2xl overflow-hidden shadow-2xl border-2 ${
                    isActive
                      ? "border-primary/50 monastery-glow"
                      : "border-border/30"
                  }`}
                >
                  <div
                    className="w-full h-48 bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${feature.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <ItemIcon
                        className={`h-8 w-8 text-${feature.color} drop-shadow-lg`}
                      />
                    </div>
                  </div>

                  <div className="p-6 bg-card">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                    {isActive && (
                      <Link to={feature.href}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-4 btn-monastery text-xs"
                        >
                          Explore Now
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Navigation Controls */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 z-10 bg-card/80 backdrop-blur-sm"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 z-10 bg-card/80 backdrop-blur-sm"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {features.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-primary"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        {isAutoPlaying && (
          <div className="flex justify-center mt-4">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="w-2 h-2 bg-accent rounded-full animate-monastery-pulse" />
              <span>Auto-advancing carousel</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Carousel3D;
"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const nextImage = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePos({ x, y });
  };

  return (
    <div className="flex flex-col-reverse gap-4 md:flex-row">
      {/* Thumbnails */}
      <div className="flex gap-4 overflow-x-auto md:flex-col md:overflow-y-auto">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 transition-all ${
              selectedIndex === index ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            <img src={img} alt={`Thumbnail ${index + 1}`} className="h-full w-full object-cover" />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="relative aspect-square flex-1 overflow-hidden rounded-2xl bg-muted">
        <div 
          className="absolute inset-0 cursor-zoom-in"
          onMouseEnter={() => setIsZoomed(true)}
          onMouseLeave={() => setIsZoomed(false)}
          onMouseMove={handleMouseMove}
          style={isZoomed ? {
            backgroundImage: `url(${images[selectedIndex]})`,
            backgroundPosition: `${mousePos.x}% ${mousePos.y}%`,
            backgroundSize: "200%",
            backgroundRepeat: "no-repeat"
          } : undefined}
        >
          <img
            src={images[selectedIndex]}
            alt="Produto"
            className={`h-full w-full object-cover transition-opacity duration-300 ${isZoomed ? "opacity-0" : "opacity-100"}`}
          />
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevImage}
          className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md transition-all hover:bg-black/40"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button 
          onClick={nextImage}
          className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md transition-all hover:bg-black/40"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
        
        {/* Zoom Indicator */}
        <div className="absolute right-4 top-4 rounded-full bg-black/20 p-2 text-white backdrop-blur-md pointer-events-none">
          <ZoomIn className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}

import { useEffect, useRef } from 'react';
import './HeroSection.css';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Trigger animation on mount
    if (heroRef.current) {
      heroRef.current.classList.add('animate-in');
    }
  }, []);

  return (
    <section ref={heroRef} className="hero-section">
      {/* Background Image with Overlay */}
      <div className="hero-background">
        <img 
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&h=900&fit=crop" 
          alt="Luxury Sports Car"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-brand">
          <span className="brand-text">APEX</span>
          <span className="brand-accent">GARAGE</span>
        </div>

        <h1 className="hero-headline">
          <span className="word">Where</span>
          <span className="word">Performance</span>
          <span className="word">Meets</span>
          <span className="word">Perfection</span>
        </h1>

        <p className="hero-subheading">
          Discover the finest collection of luxury, sports, and electric vehicles
        </p>

        <button className="cta-button primary">
          Explore Collection
          <span className="button-arrow">→</span>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-dot"></div>
      </div>
    </section>
  );
}

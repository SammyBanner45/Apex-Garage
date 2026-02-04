import { useEffect, useRef } from "react";
import "./FeaturedCars.css";

interface Car {
  id: string;
  model: string;
  category: string;
  specs: {
    speed: string;
    power: string;
    range?: string;
  };
  image: string;
  accent: "gold" | "blue" | "red";
}

const cars: Car[] = [
  {
    id: 1,
    model: "Apex Turbo V12",
    category: "Sports",
    specs: {
      speed: "220 mph",
      power: "730 HP",
    },
    image:
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&h=600&fit=crop",
    accent: "gold",
  },
  {
    id: 2,
    model: "Apex Electric Pro",
    category: "Electric",
    specs: {
      speed: "200 mph",
      power: "850 HP",
      range: "350 miles",
    },
    image:
      "https://images.unsplash.com/photo-1560958089-b8a46dd52956?w=800&h=600&fit=crop",
    accent: "blue",
  },
  {
    id: 3,
    model: "Apex Summit X",
    category: "SUV",
    specs: {
      speed: "190 mph",
      power: "650 HP",
    },
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop",
    accent: "red",
  },
];

export default function FeaturedCars() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="featured-cars-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Collection</h2>
          <p className="section-subtitle">
            Our most exclusive and prestigious vehicles
          </p>
        </div>

        <div className="cars-container">
          {cars.map((car, index) => (
            <div key={car.id} className={`car-card accent-${car.accent}`}>
              <div className="car-image-wrapper">
                <img src={car.image} alt={car.model} className="car-image" />
                <div className="car-image-overlay"></div>
              </div>

              <div className="car-info">
                <span className="car-category">{car.category}</span>
                <h3 className="car-model">{car.model}</h3>

                <div className="car-specs">
                  <div className="spec">
                    <span className="spec-label">Top Speed</span>
                    <span className="spec-value">{car.specs.speed}</span>
                  </div>
                  <div className="spec">
                    <span className="spec-label">Power</span>
                    <span className="spec-value">{car.specs.power}</span>
                  </div>
                  {car.specs.range && (
                    <div className="spec">
                      <span className="spec-label">Range</span>
                      <span className="spec-value">{car.specs.range}</span>
                    </div>
                  )}
                </div>

                <div className="spec-divider"></div>

                <button className="view-button">
                  View Details
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

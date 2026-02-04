import CarCard from "./CarCard";
import "./CarSection.css";

interface Car {
  id: string;
  name: string;
  model: string;
  specs: {
    topSpeed: string;
    horsepower: string;
    acceleration?: string;
    range?: string;
  };
  image: string;
  price?: string;
}

interface CarSectionProps {
  title: string;
  description?: string;
  accentColor?: "gold" | "blue" | "red";
  cars: Car[];
}

export default function CarSection({
  title,
  description,
  accentColor = "gold",
  cars,
}: CarSectionProps) {
  return (
    <section className={`car-section car-section--${accentColor}`}>
      <div className="container">
        <div className="car-section-header">
          <div>
            <h2 className="car-section-title">{title}</h2>
            {description && (
              <p className="car-section-description">{description}</p>
            )}
          </div>
        </div>

        <div className="car-grid">
          {cars.map((car) => (
            <CarCard key={car.id} {...car} />
          ))}
        </div>
      </div>
    </section>
  );
}

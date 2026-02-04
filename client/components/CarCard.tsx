import './CarCard.css';

interface CarCardProps {
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

export default function CarCard({ name, model, specs, image, price }: CarCardProps) {
  return (
    <div className="car-card">
      <div className="car-card-image-container">
        <img src={image} alt={`${name} ${model}`} className="car-card-image" />
        <div className="car-card-overlay"></div>
      </div>
      
      <div className="car-card-content">
        <div className="car-card-header">
          <div>
            <h3 className="car-card-brand">{name}</h3>
            <p className="car-card-model">{model}</p>
          </div>
          {price && <div className="car-card-price">{price}</div>}
        </div>
        
        <div className="car-card-specs">
          <div className="spec-item">
            <span className="spec-label">Top Speed</span>
            <span className="spec-value">{specs.topSpeed}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Power</span>
            <span className="spec-value">{specs.horsepower}</span>
          </div>
          {specs.acceleration && (
            <div className="spec-item">
              <span className="spec-label">0-60 mph</span>
              <span className="spec-value">{specs.acceleration}</span>
            </div>
          )}
          {specs.range && (
            <div className="spec-item">
              <span className="spec-label">Range</span>
              <span className="spec-value">{specs.range}</span>
            </div>
          )}
        </div>
        
        <button className="car-card-button">
          Learn More
          <span className="button-arrow">→</span>
        </button>
      </div>
    </div>
  );
}

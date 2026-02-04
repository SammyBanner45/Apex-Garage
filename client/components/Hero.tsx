import "./Hero.css";

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  specs: {
    topSpeed: string;
    horsepower: string;
    acceleration: string;
  };
}

export default function Hero({
  title,
  subtitle,
  description,
  image,
  specs,
}: HeroProps) {
  return (
    <section className="hero">
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <span className="hero-subtitle">{subtitle}</span>
            <h1 className="hero-title">{title}</h1>
            <p className="hero-description">{description}</p>

            <div className="hero-specs">
              <div className="hero-spec">
                <span className="spec-label">Top Speed</span>
                <span className="spec-value">{specs.topSpeed}</span>
              </div>
              <div className="hero-spec">
                <span className="spec-label">Power</span>
                <span className="spec-value">{specs.horsepower}</span>
              </div>
              <div className="hero-spec">
                <span className="spec-label">0-60 mph</span>
                <span className="spec-value">{specs.acceleration}</span>
              </div>
            </div>

            <div className="hero-actions">
              <button className="btn btn-primary">
                Explore Now
                <span className="arrow">→</span>
              </button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

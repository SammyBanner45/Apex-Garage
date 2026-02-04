import { useEffect, useRef } from "react";
import "./CallToAction.css";

export default function CallToAction() {
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
    <section ref={sectionRef} className="cta-section">
      <div className="cta-background">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&h=600&fit=crop"
          alt="Premium Background"
          className="cta-bg-image"
        />
        <div className="cta-overlay"></div>
      </div>

      <div className="cta-content">
        <h2 className="cta-heading">
          Experience the <span className="accent">Apex</span> of Automotive
          Excellence
        </h2>

        <p className="cta-subtext">
          Join an exclusive community of automotive enthusiasts and luxury
          vehicle collectors
        </p>

        <div className="cta-buttons">
          <button className="cta-button primary">
            Contact Us
            <span>→</span>
          </button>
          <button className="cta-button secondary">
            Schedule a Viewing
            <span>→</span>
          </button>
        </div>
      </div>

      <div className="cta-grid-bg"></div>
    </section>
  );
}

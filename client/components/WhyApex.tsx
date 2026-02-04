import { useEffect, useRef } from "react";
import "./WhyApex.css";

interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const benefits: Benefit[] = [
  {
    id: 1,
    title: "Handpicked Luxury Collection",
    description:
      "Every vehicle is meticulously selected and inspected to meet our premium standards.",
    icon: "💎",
  },
  {
    id: 2,
    title: "Elite Performance Vehicles",
    description:
      "Access to exclusive hypercars and limited-edition models from the world's finest manufacturers.",
    icon: "⚙️",
  },
  {
    id: 3,
    title: "Trusted Quality & Craftsmanship",
    description:
      "Certified authenticity and comprehensive ownership documentation for peace of mind.",
    icon: "✓",
  },
  {
    id: 4,
    title: "Future-Ready Electric Innovation",
    description:
      "Leading-edge electric vehicles combining sustainability with uncompromised performance.",
    icon: "⚡",
  },
];

export default function WhyApex() {
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
    <section ref={sectionRef} className="why-apex-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose Apex Garage</h2>
          <p className="section-subtitle">
            Experience the pinnacle of automotive excellence
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
              <div className="benefit-accent-line"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

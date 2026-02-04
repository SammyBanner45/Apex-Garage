import './CarCategories.css';

interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: string;
}

const categories: Category[] = [
  {
    id: 'suv',
    name: 'SUV',
    description: 'Premium performance and luxury combined',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&h=600&fit=crop',
    icon: '🏎️'
  },
  {
    id: 'sports',
    name: 'Sports',
    description: 'Pure speed and exhilarating power',
    image: 'https://images.unsplash.com/photo-1553882900-d174edf69a16?w=600&h=600&fit=crop',
    icon: '⚡'
  },
  {
    id: 'electric',
    name: 'Electric',
    description: 'Future of automotive innovation',
    image: 'https://images.unsplash.com/photo-1560958089-b8a46dd52956?w=600&h=600&fit=crop',
    icon: '🔋'
  }
];

export default function CarCategories() {
  return (
    <section className="categories-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Explore Collections</h2>
          <p className="section-subtitle">Discover our curated selection of premium vehicles</p>
        </div>

        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <div className="card-image-wrapper">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="card-image"
                />
                <div className="card-overlay"></div>
              </div>

              <div className="card-content">
                <div className="card-icon">{category.icon}</div>
                <h3 className="card-title">{category.name}</h3>
                <p className="card-description">{category.description}</p>
                <div className="card-accent-line"></div>
              </div>

              <div className="card-border"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Hero from "../components/Hero";
import CarSection from "../components/CarSection";

export default function Index() {
  // Car data organized by category
  const sedans = [
    {
      id: "bmw-m5",
      name: "BMW",
      model: "M5 Competition",
      price: "$117,550",
      specs: {
        topSpeed: "190 mph",
        horsepower: "625 hp",
        acceleration: "3.0s",
      },
      image:
        "https://images.unsplash.com/photo-1554744512-d2c5b86fbf90?w=800&q=80",
    },
    {
      id: "mercedes-amg",
      name: "Mercedes-AMG",
      model: "E63 S",
      price: "$109,900",
      specs: {
        topSpeed: "186 mph",
        horsepower: "603 hp",
        acceleration: "3.4s",
      },
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
    },
    {
      id: "audi-rs6",
      name: "Audi",
      model: "RS6 Avant",
      price: "$114,900",
      specs: {
        topSpeed: "190 mph",
        horsepower: "592 hp",
        acceleration: "3.5s",
      },
      image:
        "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=800&q=80",
    },
    {
      id: "porsche-panamera",
      name: "Porsche",
      model: "Panamera Turbo",
      price: "$109,250",
      specs: {
        topSpeed: "191 mph",
        horsepower: "550 hp",
        acceleration: "3.2s",
      },
      image:
        "https://images.unsplash.com/photo-1623869675781-80aa08061d59?w=800&q=80",
    },
  ];

  const suvs = [
    {
      id: "lamborghini-urus",
      name: "Lamborghini",
      model: "Urus S",
      price: "$222,612",
      specs: {
        topSpeed: "190 mph",
        horsepower: "657 hp",
        acceleration: "3.4s",
      },
      image:
        "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80",
    },
    {
      id: "ferrari-purosangue",
      name: "Ferrari",
      model: "Purosangue",
      price: "$390,000",
      specs: {
        topSpeed: "193 mph",
        horsepower: "715 hp",
        acceleration: "3.3s",
      },
      image:
        "https://images.unsplash.com/photo-1595282894343-ba64d13d4b5e?w=800&q=80",
    },
    {
      id: "rolls-royce-cullinan",
      name: "Rolls-Royce",
      model: "Cullinan",
      price: "$355,000",
      specs: {
        topSpeed: "155 mph",
        horsepower: "563 hp",
        acceleration: "5.1s",
      },
      image:
        "https://images.unsplash.com/photo-1549399542-7e3f8b83ad38?w=800&q=80",
    },
    {
      id: "bentley-bentayga",
      name: "Bentley",
      model: "Bentayga Speed",
      price: "$235,600",
      specs: {
        topSpeed: "190 mph",
        horsepower: "626 hp",
        acceleration: "3.8s",
      },
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    },
  ];

  const supercars = [
    {
      id: "ferrari-sf90",
      name: "Ferrari",
      model: "SF90 Stradale",
      price: "$400,000",
      specs: {
        topSpeed: "211 mph",
        horsepower: "986 hp",
        acceleration: "2.5s",
      },
      image:
        "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&q=80",
    },
    {
      id: "lamborghini-revuelto",
      name: "Lamborghini",
      model: "Revuelto",
      price: "$640,000",
      specs: {
        topSpeed: "217 mph",
        horsepower: "1001 hp",
        acceleration: "2.5s",
      },
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
    },
    {
      id: "bugatti-bolide",
      name: "Bugatti",
      model: "Bolide",
      price: "$5,000,000",
      specs: {
        topSpeed: "330 mph",
        horsepower: "1850 hp",
        acceleration: "2.17s",
      },
      image:
        "https://images.unsplash.com/photo-1597007881817-030d60b84dac?w=800&q=80",
    },
    {
      id: "mclaren-speedtail",
      name: "McLaren",
      model: "Speedtail",
      price: "$2,250,000",
      specs: {
        topSpeed: "250 mph",
        horsepower: "1035 hp",
        acceleration: "2.8s",
      },
      image:
        "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80",
    },
  ];

  const electricCars = [
    {
      id: "tesla-s-plaid",
      name: "Tesla",
      model: "Model S Plaid",
      price: "$108,990",
      specs: {
        topSpeed: "200 mph",
        horsepower: "1020 hp",
        range: "405 mi",
        acceleration: "1.99s",
      },
      image:
        "https://images.unsplash.com/photo-1597007881817-030d60b84dac?w=800&q=80",
    },
    {
      id: "porsche-taycan",
      name: "Porsche",
      model: "Taycan Turbo S",
      price: "$185,750",
      specs: {
        topSpeed: "161 mph",
        horsepower: "750 hp",
        range: "287 mi",
        acceleration: "2.6s",
      },
      image:
        "https://images.unsplash.com/photo-1595282894343-ba64d13d4b5e?w=800&q=80",
    },
    {
      id: "lotus-evija",
      name: "Lotus",
      model: "Evija",
      price: "$2,300,000",
      specs: {
        topSpeed: "200 mph",
        horsepower: "1972 hp",
        range: "250 mi",
        acceleration: "2.8s",
      },
      image:
        "https://images.unsplash.com/photo-1619405399517-d4dc2500ecf7?w=800&q=80",
    },
    {
      id: "audi-e-tron-gt",
      name: "Audi",
      model: "e-tron GT",
      price: "$106,500",
      specs: {
        topSpeed: "162 mph",
        horsepower: "637 hp",
        range: "248 mi",
        acceleration: "3.4s",
      },
      image:
        "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80",
    },
  ];

  return (
    <main className="apex-main">
      <Hero
        title="Bugatti Bolide"
        subtitle="Featured Hypercar"
        description="Experience the pinnacle of automotive engineering. The Bolide represents the ultimate expression of speed, power, and precision. With 1,850 horsepower and a 0-60 time of just 2.17 seconds, it's a masterpiece of French engineering."
        image="https://images.unsplash.com/photo-1597007881817-030d60b84dac?w=1600&q=80"
        specs={{
          topSpeed: "330 mph",
          horsepower: "1850 hp",
          acceleration: "2.17s",
        }}
      />

      <CarSection
        title="Luxury Sedans"
        description="Refined performance with sophisticated elegance"
        accentColor="gold"
        cars={sedans}
      />

      <CarSection
        title="Premium SUVs"
        description="Uncompromising luxury in an SUV form factor"
        accentColor="blue"
        cars={suvs}
      />

      <CarSection
        title="Supercars & Hypercars"
        description="The fastest and most exclusive vehicles in the world"
        accentColor="red"
        cars={supercars}
      />

      <CarSection
        title="Electric Performance"
        description="The future of high-performance driving"
        accentColor="gold"
        cars={electricCars}
      />
    </main>
  );
}

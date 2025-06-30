
import InfoCard from "./InfoCard";

interface CategorySectionProps {
  category: {
    id: string;
    title: string;
    icon: string;
    description: string;
    items: Array<{
      name: string;
      description: string;
      distance: string;
      rating: string;
    }>;
  };
}

const CategorySection = ({ category }: CategorySectionProps) => {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full text-4xl mb-4 shadow-lg">
          {category.icon}
        </div>
        <h3 className="text-3xl font-bold text-gray-800 mb-2">
          {category.title}
        </h3>
        <p className="text-lg text-gray-600 max-w-md mx-auto">
          {category.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {category.items.map((item, index) => (
          <InfoCard
            key={index}
            name={item.name}
            description={item.description}
            distance={item.distance}
            rating={item.rating}
          />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;

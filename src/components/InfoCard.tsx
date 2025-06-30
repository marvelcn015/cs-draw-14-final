
import { MapPin, Star } from "lucide-react";

interface InfoCardProps {
  name: string;
  description: string;
  distance: string;
  rating: string;
}

const InfoCard = ({ name, description, distance, rating }: InfoCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 hover:-translate-y-1">
      <div className="space-y-4">
        <div>
          <h4 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-1">
            {name}
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="flex items-center space-x-1 text-blue-600">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">{distance}</span>
          </div>
          
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-700">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;


import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
  rating?: string;
  distance?: string;
  price?: string;
}

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  details, 
  rating, 
  distance, 
  price 
}: FeatureCardProps) => {
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-amber-100 hover:border-amber-200 group">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-medium text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">{description}</p>
          
          <ul className="space-y-1 mb-4">
            {details.map((detail, index) => (
              <li key={index} className="text-sm text-gray-500 flex items-center">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2 flex-shrink-0"></span>
                {detail}
              </li>
            ))}
          </ul>
          
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div className="flex items-center space-x-4 text-xs">
              {distance && (
                <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                  {distance}
                </span>
              )}
              {price && (
                <span className="bg-green-50 text-green-700 px-2 py-1 rounded-full">
                  {price}
                </span>
              )}
            </div>
            
            {rating && (
              <div className="flex items-center space-x-1">
                <span className="text-yellow-500">★</span>
                <span className="text-sm font-medium text-gray-700">{rating}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;

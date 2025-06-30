
import { Link, useLocation } from "react-router-dom";
import { Home, Utensils, Building, Car, BookOpen, Coffee } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "首頁", icon: Home },
    { path: "/food", label: "食", icon: Utensils },
    { path: "/housing", label: "住", icon: Building },
    { path: "/transport", label: "行", icon: Car },
    { path: "/education", label: "育", icon: BookOpen },
    { path: "/entertainment", label: "樂", icon: Coffee },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-sm border-b border-amber-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">北</span>
            </div>
            <span className="text-xl font-medium text-gray-800">博愛校區指南</span>
          </Link>
          
          <div className="flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-amber-50 text-amber-700 border border-amber-200"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;


import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 via-orange-50 to-red-50">
      <div className="text-center bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-amber-100 shadow-lg">
        <div className="text-8xl mb-6">🏫</div>
        <h1 className="text-4xl font-light text-gray-800 mb-4">找不到頁面</h1>
        <p className="text-xl text-gray-600 mb-8">抱歉，您訪問的頁面不存在</p>
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-full hover:from-amber-500 hover:to-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          返回首頁
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

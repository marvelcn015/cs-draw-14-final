
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { Utensils, Building, Car, BookOpen, Coffee, MapPin } from "lucide-react";

const Index = () => {
  const categories = [
    {
      id: "food",
      title: "食",
      icon: Utensils,
      description: "品味周邊美食文化",
      path: "/food",
      color: "from-red-400 to-orange-500"
    },
    {
      id: "housing",
      title: "住",
      icon: Building,
      description: "尋找理想居住環境",
      path: "/housing",
      color: "from-blue-400 to-indigo-500"
    },
    {
      id: "transport",
      title: "行",
      icon: Car,
      description: "掌握交通便利資訊",
      path: "/transport",
      color: "from-green-400 to-emerald-500"
    },
    {
      id: "education",
      title: "育",
      icon: BookOpen,
      description: "探索學習成長資源",
      path: "/education",
      color: "from-purple-400 to-violet-500"
    },
    {
      id: "entertainment",
      title: "樂",
      icon: Coffee,
      description: "享受多彩休閒生活",
      path: "/entertainment",
      color: "from-pink-400 to-rose-500"
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full text-5xl mb-8 shadow-xl">
          🏫
        </div>
        <h1 className="text-5xl md:text-6xl font-light text-gray-800 mb-6 tracking-wide">
          臺北市立大學
        </h1>
        <h2 className="text-3xl md:text-4xl font-light text-amber-700 mb-8">
          博愛校區生活指南
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
          在這裡，我們為您精心整理了博愛校區周邊的生活資訊，
          從美食到住宿，從交通到娛樂，讓您的校園生活更加精彩充實。
        </p>
        
        <div className="flex items-center justify-center space-x-2 text-gray-500 mb-12">
          <MapPin className="w-5 h-5" />
          <span>台北市中正區愛國西路1號</span>
        </div>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {categories.slice(0, 3).map((category) => {
          const Icon = category.icon;
          return (
            <Link
              key={category.id}
              to={category.path}
              className="group bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-amber-100 hover:border-amber-200 hover:-translate-y-2"
            >
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-medium text-gray-800 mb-4">
                  {category.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {category.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {categories.slice(3).map((category) => {
          const Icon = category.icon;
          return (
            <Link
              key={category.id}
              to={category.path}
              className="group bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-amber-100 hover:border-amber-200 hover:-translate-y-2"
            >
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-medium text-gray-800 mb-4">
                  {category.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {category.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Welcome Message */}
      <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 border border-amber-100 text-center">
        <h2 className="text-3xl font-light text-gray-800 mb-6">
          歡迎來到博愛校區
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
          博愛校區不僅是學習的殿堂，更是生活的起點。在這個充滿活力的環境中，
          您將發現無數的可能性。從傳統的台灣小吃到現代的咖啡文化，
          從便利的交通網絡到豐富的文化資源，一切都在您的指尖。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-500">
          <div>
            <h4 className="font-medium text-gray-700 mb-2">便利生活</h4>
            <p>捷運、公車四通八達，生活機能完善便利</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 mb-2">文化薫陶</h4>
            <p>鄰近中正紀念堂，藝文活動豐富多彩</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 mb-2">學習資源</h4>
            <p>圖書館、書店林立，學習環境優質</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Index;


import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { Utensils, Building, Car, BookOpen, Coffee, MapPin } from "lucide-react";

const Index = () => {
  const categories = [
    {
      id: "food",
      title: "食",
      icon: Utensils,
      description: "從傳統市場到精致料理，跟隨味蚕的冒險地圖",
      path: "/food",
      color: "from-red-400 to-orange-500"
    },
    {
      id: "housing",
      title: "住",
      icon: Building,
      description: "在歷史與現代交匯的地方，找到屬於你的家",
      path: "/housing",
      color: "from-blue-400 to-indigo-500"
    },
    {
      id: "transport",
      title: "行",
      icon: Car,
      description: "縱橫台北的交通網絡，連接夢想與現實",
      path: "/transport",
      color: "from-green-400 to-emerald-500"
    },
    {
      id: "education",
      title: "育",
      icon: BookOpen,
      description: "百年樹人的教育大業，在這裡繼續發光發熱",
      path: "/education",
      color: "from-purple-400 to-violet-500"
    },
    {
      id: "entertainment",
      title: "樂",
      icon: Coffee,
      description: "文化與藝術的殿堂，為生活增添無限色彩",
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
          位於台北市中正區的教育重鎮，這裡不僅是重要的教育據點，更是結合歷史文化、現代便利與豐富生活機能的黃金區域。
          從清朝的古亭哨站到現代的博愛特區，見證台北城市的發展軌跡。
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

      {/* Story Section */}
      <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 border border-amber-100 text-center">
        <h2 className="text-3xl font-light text-gray-800 mb-6">
          歷史文化與現代生活的完美交融
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
          從鼓亭的哨站到博愛特區的政治心臟，從府城城門到現代文創園區，臺北市立大學附近不僅擁有完善的食住行育樂機能，
          更承載著豐富的歷史文化底蘊。這裡是學習的理想環境，也是體驗台北城市變遷與文化交融的最佳據點。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm text-gray-500">
          <div>
            <h4 className="font-medium text-gray-700 mb-2">交通樞紐</h4>
            <p>步行300公尺內三個捷運站，五個公車站點通往台北各區</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 mb-2">文化景點</h4>
            <p>中正紀念堂、植物園、華山1914等豐富文化資源</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 mb-2">美食天堂</h4>
            <p>金峰魯肉飯、南門市場到公館夜市的多元選擇</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 mb-2">教育重鎮</h4>
            <p>市立大學、北一女中等優質教育機構齊聚</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Index;

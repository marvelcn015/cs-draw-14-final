
import PageLayout from "@/components/PageLayout";
import FeatureCard from "@/components/FeatureCard";
import { Utensils, Coffee, Soup, Pizza } from "lucide-react";

const Food = () => {
  const restaurants = [
    {
      icon: Soup,
      title: "金峰魯肉飯",
      description: "台北在地人激推的名店，滷汁濃郁、肉燥肥瘦適中",
      details: [
        "招牌滷肉飯配半熟蛋，香濃不膩",
        "用餐時間大排長龍，建議避開尖峰",
        "營業時間：08:00-20:00",
        "台北傳統美食代表"
      ],
      rating: "4.8",
      distance: "步行15分鐘",
      price: "NT$40-80"
    },
    {
      icon: Coffee,
      title: "合興糕糰店（南門市場）",
      description: "傳統米糕和綠豆椪充滿古早味，下午茶絕佳選擇",
      details: [
        "手工製作傳統糕點",
        "綠豆椪、米糕是招牌商品",
        "營業時間：09:00-18:00",
        "南門市場內美食寶庫"
      ],
      rating: "4.6",
      distance: "步行12分鐘",
      price: "NT$30-60"
    },
    {
      icon: Pizza,
      title: "藍家割包（公館夜市）",
      description: "肥瘦自選，口感層次豐富的學生必吃美食",
      details: [
        "現做割包，肥瘦比例可自選",
        "配菜豐富，醬汁香甜",
        "營業時間：17:00-01:00",
        "公館夜市人氣小吃"
      ],
      rating: "4.7",
      distance: "步行20分鐘",
      price: "NT$50-80"
    },
    {
      icon: Utensils,
      title: "陳三鼎青蛙撞奶",
      description: "香甜有嚼勁的招牌飲料，公館必喝經典",
      details: [
        "獨特的青蛙撞奶口感",
        "現煮珍珠Q彈有嚼勁",
        "營業時間：14:00-23:00",
        "公館商圈知名飲品店"
      ],
      rating: "4.5",
      distance: "步行18分鐘",
      price: "NT$45-65"
    }
  ];

  return (
    <PageLayout 
      title="美食饗宴" 
      subtitle="探索博愛校區周邊的美味佳餚，從傳統小吃到現代餐飲，滿足您的味蕾需求"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {restaurants.map((restaurant, index) => (
          <FeatureCard key={index} {...restaurant} />
        ))}
      </div>
      
      <div className="mt-12 bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-amber-100">
        <h2 className="text-2xl font-medium text-gray-800 mb-6">美食區域指南</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-medium text-gray-700 mb-3">傳統台式美食</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 金峰魯肉飯：台北在地名店</li>
              <li>• 南門市場：美食寶庫</li>
              <li>• 小南門豆花：傳統甜品</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-3">公館夜市小吃</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 藍家割包：肥瘦自選</li>
              <li>• 陳三鼎青蛙撞奶：招牌飲料</li>
              <li>• 學生聚會熱門地點</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-3">異國料理選擇</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 泰式打拋飯：香辣開胃</li>
              <li>• 日式咖哩：溫和香濃</li>
              <li>• 韓式鍋物：價位親民</li>
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Food;

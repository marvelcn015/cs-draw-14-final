
import PageLayout from "@/components/PageLayout";
import FeatureCard from "@/components/FeatureCard";
import { Utensils, Coffee, Soup, Pizza } from "lucide-react";

const Food = () => {
  const restaurants = [
    {
      icon: Soup,
      title: "博愛路夜市",
      description: "傳統台灣小吃的天堂，每天傍晚開始熱鬧非凡",
      details: [
        "蚵仔煎、臭豆腐、鹽酥雞等經典小吃",
        "價格親民，學生族群最愛",
        "營業時間：17:00-23:00",
        "週末人潮較多，建議平日前往"
      ],
      rating: "4.5",
      distance: "步行3分鐘",
      price: "NT$50-150"
    },
    {
      icon: Coffee,
      title: "老張牛肉麵",
      description: "50年歷史的老店，紅燒牛肉麵是招牌",
      details: [
        "湯頭濃郁，牛肉軟嫩",
        "分量十足，CP值很高",
        "營業時間：11:00-21:00",
        "週一公休"
      ],
      rating: "4.7",
      distance: "步行8分鐘",
      price: "NT$120-200"
    },
    {
      icon: Pizza,
      title: "星巴克咖啡",
      description: "學習聚會的熱門選擇，提供舒適環境",
      details: [
        "免費WiFi和充電插座",
        "座位寬敞，適合讀書",
        "營業時間：07:00-22:00",
        "學生證有優惠"
      ],
      rating: "4.3",
      distance: "步行6分鐘",
      price: "NT$100-300"
    },
    {
      icon: Utensils,
      title: "麥當勞博愛店",
      description: "24小時營業，深夜覓食的好去處",
      details: [
        "全天候營業服務",
        "McCafé提供精品咖啡",
        "麥克雞塊買十送十常有優惠",
        "學生聚會首選地點"
      ],
      rating: "4.2",
      distance: "步行5分鐘",
      price: "NT$80-250"
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
        <h2 className="text-2xl font-medium text-gray-800 mb-6">用餐小貼士</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-700 mb-3">經濟實惠選擇</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 學校餐廳：平價美味，營養均衡</li>
              <li>• 博愛路夜市：多樣選擇，價格親民</li>
              <li>• 便當店：快速方便，分量足夠</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-3">聚會推薦</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 咖啡廳：適合討論功課</li>
              <li>• 火鍋店：朋友聚餐首選</li>
              <li>• 燒烤店：慶祝活動熱鬧</li>
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Food;


import PageLayout from "@/components/PageLayout";
import FeatureCard from "@/components/FeatureCard";
import { Train, Bus, Bike, Car } from "lucide-react";

const Transport = () => {
  const transportOptions = [
    {
      icon: Train,
      title: "古亭捷運站",
      description: "松山新店線與中和新蘆線交會站，交通樞紐",
      details: [
        "兩線交會，轉乘便利",
        "往台北車站僅需8分鐘",
        "首末班車時間：06:00-24:00",
        "出口3最靠近學校"
      ],
      rating: "4.6",
      distance: "步行8分鐘",
      price: "NT$20-50"
    },
    {
      icon: Bus,
      title: "公車路網",
      description: "多條公車路線經過，覆蓋台北各區域",
      details: [
        "15、18、52、253等主要路線",
        "班次密集，等車時間短",
        "可使用悠遊卡或一卡通",
        "校門口即有站牌"
      ],
      rating: "4.3",
      distance: "校門口",
      price: "NT$15"
    },
    {
      icon: Bike,
      title: "YouBike微笑單車",
      description: "綠色環保的短程交通選擇，健康又便利",
      details: [
        "校園周邊多個租借點",
        "前30分鐘免費（會員）",
        "24小時自助租還",
        "App即時查詢車位"
      ],
      rating: "4.4",
      distance: "步行2分鐘",
      price: "NT$5-10/30分鐘"
    },
    {
      icon: Car,
      title: "計程車服務",
      description: "便捷的點對點交通，雨天通勤首選",
      details: [
        "24小時服務，隨招隨停",
        "可使用車隊APP叫車",
        "起跳價85元，每200公尺5元",
        "校門口設有招呼站"
      ],
      rating: "4.2",
      distance: "校門口",
      price: "起跳NT$85"
    }
  ];

  return (
    <PageLayout 
      title="交通便利" 
      subtitle="博愛校區交通四通八達，捷運、公車、單車多元選擇，讓您的通勤更加便捷舒適"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {transportOptions.map((transport, index) => (
          <FeatureCard key={index} {...transport} />
        ))}
      </div>
      
      <div className="mt-12 bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-amber-100">
        <h2 className="text-2xl font-medium text-gray-800 mb-6">交通攻略</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-medium text-gray-700 mb-4">熱門路線推薦</h3>
            <div className="space-y-3">
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="font-medium text-blue-800">往台北車站</p>
                <p className="text-sm text-blue-600">捷運古亭站 → 台北車站（8分鐘）</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="font-medium text-green-800">往西門町</p>
                <p className="text-sm text-green-600">捷運古亭站 → 西門站（6分鐘）</p>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg">
                <p className="font-medium text-purple-800">往士林夜市</p>
                <p className="text-sm text-purple-600">捷運淡水信義線直達（20分鐘）</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-4">省錢小秘訣</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 申請學生悠遊卡享優惠票價</li>
              <li>• YouBike會員前30分鐘免費</li>
              <li>• 公車捷運轉乘有優惠</li>
              <li>• 避開尖峰時段搭乘計程車</li>
              <li>• 使用共乘APP分攤車資</li>
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Transport;

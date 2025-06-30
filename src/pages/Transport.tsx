
import PageLayout from "@/components/PageLayout";
import FeatureCard from "@/components/FeatureCard";
import { Train, Bus, Bike, Car } from "lucide-react";

const Transport = () => {
  const transportOptions = [
    {
      icon: Train,
      title: "捷運小南門站",
      description: "松山新店線，步行不到300公尺即可抵達",
      details: [
        "距離學校最近的捷運站",
        "可直達台北車站、新店、松山",
        "營運時間：06:00-24:00",
        "與中正紀念堂站相鄰"
      ],
      rating: "4.7",
      distance: "步行3分鐘",
      price: "NT$20-55"
    },
    {
      icon: Bus,
      title: "校園周邊公車站",
      description: "五個便利站點，涵蓋市立大學站、市立大學附小站、一女中站",
      details: [
        "5、241、243路線往中和",
        "235、663往國父紀念館",
        "251往深坑、270往中華科大",
        "644往新店青潭、706往三峽"
      ],
      rating: "4.5",
      distance: "校門口",
      price: "NT$15"
    },
    {
      icon: Train,
      title: "捷運中正紀念堂站",
      description: "松山新店線與淡水信義線交會，轉乘樞紐",
      details: [
        "雙線交會，轉乘便利",
        "可達淡水、象山、新店等地",
        "步行約300公尺可達",
        "連通地下街購物方便"
      ],
      rating: "4.8",
      distance: "步行4分鐘",
      price: "NT$20-65"
    },
    {
      icon: Train,
      title: "捷運西門站",
      description: "板南線與松山新店線交會，步行約1.2公里",
      details: [
        "西門町商圈核心",
        "板南線可達市政府、南港",
        "松山新店線直達松山機場",
        "多條公車路線匯集"
      ],
      rating: "4.6",
      distance: "步行15分鐘",
      price: "NT$20-65"
    }
  ];

  return (
    <PageLayout 
      title="交通便利" 
      subtitle="四通八達的交通網絡，步行300公尺內三個捷運站，五個公車站點通往台北各區"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {transportOptions.map((transport, index) => (
          <FeatureCard key={index} {...transport} />
        ))}
      </div>
      
      <div className="mt-12 bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-amber-100">
        <h2 className="text-2xl font-medium text-gray-800 mb-6">交通路線詳解</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-medium text-gray-700 mb-4">捷運網絡優勢</h3>
            <div className="space-y-3">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-medium text-blue-800 mb-2">小南門站（最近）</p>
                <p className="text-sm text-blue-600">松山新店線 • 步行300公尺內</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-medium text-green-800 mb-2">中正紀念堂站</p>
                <p className="text-sm text-green-600">雙線交會 • 轉乘樞紐 • 步行300公尺</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-medium text-purple-800 mb-2">西門站</p>
                <p className="text-sm text-purple-600">板南線交會 • 步行1.2公里</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-4">公車路線網絡</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="bg-amber-50 p-3 rounded-lg">
                <p className="font-medium text-amber-800">往中和方向</p>
                <p className="text-amber-600">5、241、243路線</p>
              </div>
              <div className="bg-orange-50 p-3 rounded-lg">
                <p className="font-medium text-orange-800">往國父紀念館</p>
                <p className="text-orange-600">235、663路線</p>
              </div>
              <div className="bg-red-50 p-3 rounded-lg">
                <p className="font-medium text-red-800">特色路線</p>
                <p className="text-red-600">251深坑、270中華科大、644新店青潭、706三峽</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Transport;

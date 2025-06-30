
import PageLayout from "@/components/PageLayout";
import FeatureCard from "@/components/FeatureCard";
import { Building, Home, Key, Users } from "lucide-react";

const Housing = () => {
  const accommodations = [
    {
      icon: Building,
      title: "學生宿舍",
      description: "校內安全舒適的住宿環境，設施完善",
      details: [
        "24小時門禁管制，安全無虞",
        "交誼廳、洗衣房、廚房等公共設施",
        "網路、水電費用包含在內",
        "申請需提早，競爭激烈"
      ],
      rating: "4.4",
      distance: "校內",
      price: "NT$8,000-12,000/月"
    },
    {
      icon: Home,
      title: "博愛套房",
      description: "鄰近學校的學生套房，生活機能便利",
      details: [
        "含基本傢俱和網路設備",
        "獨立衛浴，隱私性佳",
        "樓下就有便利商店",
        "房東友善，維修迅速"
      ],
      rating: "4.1",
      distance: "步行5分鐘",
      price: "NT$12,000-18,000/月"
    },
    {
      icon: Key,
      title: "和平東路公寓",
      description: "交通便利的分租套房，近捷運站",
      details: [
        "古亭捷運站步行10分鐘",
        "周邊餐廳商店林立",
        "房間空間較大",
        "可短期租賃"
      ],
      rating: "4.0",
      distance: "步行12分鐘",
      price: "NT$15,000-22,000/月"
    },
    {
      icon: Users,
      title: "青年旅館",
      description: "短期住宿的經濟選擇，適合交換學生",
      details: [
        "背包客友善環境",
        "共用廚房和交誼空間",
        "定期舉辦文化交流活動",
        "可日租或週租"
      ],
      rating: "4.2",
      distance: "步行10分鐘",
      price: "NT$800-1,200/日"
    }
  ];

  return (
    <PageLayout 
      title="安居樂業" 
      subtitle="台北市立大學周邊優越地理位置，結合中正區核心、古亭商圈，生活機能完善，交通便利"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {accommodations.map((accommodation, index) => (
          <FeatureCard key={index} {...accommodation} />
        ))}
      </div>
      
      <div className="mt-12 bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-amber-100">
        <h2 className="text-2xl font-medium text-gray-800 mb-6">居住環境特色</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-medium text-gray-700 mb-4">地理位置優勢</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>• <span className="font-medium">中正區核心</span>：位於台北市政治文化中心</li>
              <li>• <span className="font-medium">古亭商圈</span>：生活採買便利，商店林立</li>
              <li>• <span className="font-medium">交通樞紐</span>：捷運、公車網絡完善</li>
              <li>• <span className="font-medium">歷史文化</span>：從清朝鼓亭到現代博愛特區</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-4">生活機能完善</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>• <span className="font-medium">商業機能</span>：銀行、郵局、醫院齊全</li>
              <li>• <span className="font-medium">餐飲選擇</span>：從傳統小吃到異國料理</li>
              <li>• <span className="font-medium">文化景點</span>：中正紀念堂、植物園鄰近</li>
              <li>• <span className="font-medium">教育環境</span>：書香氣息濃厚，學習氛圍佳</li>
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-sm text-gray-600 leading-relaxed">
            無論是學生宿舍或周邊租屋選擇，都能享受便利的都市生活。這裡不僅是學習的理想環境，更是體驗台北城市變遷與文化交融的最佳據點。
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Housing;

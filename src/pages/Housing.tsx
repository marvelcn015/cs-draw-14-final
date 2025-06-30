
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
      subtitle="為您推薦博愛校區周邊優質住宿選擇，從校內宿舍到校外租屋，找到最適合的居住環境"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {accommodations.map((accommodation, index) => (
          <FeatureCard key={index} {...accommodation} />
        ))}
      </div>
      
      <div className="mt-12 bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-amber-100">
        <h2 className="text-2xl font-medium text-gray-800 mb-6">租屋指南</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-medium text-gray-700 mb-3">預算規劃</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 房租不超過月收入1/3</li>
              <li>• 預留押金和仲介費</li>
              <li>• 考慮水電網路費用</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-3">看房重點</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 檢查水電設施</li>
              <li>• 確認網路品質</li>
              <li>• 了解周邊環境</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-3">簽約注意</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 仔細閱讀合約條款</li>
              <li>• 拍照記錄房屋現況</li>
              <li>• 確認退租相關規定</li>
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Housing;

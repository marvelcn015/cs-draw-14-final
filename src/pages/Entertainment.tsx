
import PageLayout from "@/components/PageLayout";
import FeatureCard from "@/components/FeatureCard";
import { Camera, Music, Coffee, TreePine } from "lucide-react";

const Entertainment = () => {
  const entertainmentOptions = [
    {
      icon: Camera,
      title: "中正紀念堂",
      description: "台北知名地標，文化藝術的殿堂",
      details: [
        "壯麗的建築和廣場",
        "定期展覽和表演活動",
        "衛兵交接儀式",
        "櫻花季時景色迷人"
      ],
      rating: "4.7",
      distance: "步行15分鐘",
      price: "免費參觀"
    },
    {
      icon: Music,
      title: "國家戲劇院",
      description: "欣賞高品質表演藝術的殿堂",
      details: [
        "國際級表演團體演出",
        "歌劇、舞蹈、戲劇多元",
        "學生票價優惠方案",
        "世界級的音響設備"
      ],
      rating: "4.6",
      distance: "步行18分鐘",
      price: "NT$300-2,000"
    },
    {
      icon: Coffee,
      title: "華納威秀影城",
      description: "最新電影的觀賞首選，設備先進",
      details: [
        "IMAX和4DX特殊影廳",
        "最新院線電影首映",
        "學生優惠票價",
        "舒適的觀影環境"
      ],
      rating: "4.4",
      distance: "捷運10分鐘",
      price: "NT$180-350"
    },
    {
      icon: TreePine,
      title: "大安森林公園",
      description: "台北市之肺，運動休閒的綠色天堂",
      details: [
        "慢跑步道和運動設施",
        "生態池和野鳥觀察",
        "音樂會和戶外活動",
        "親子同樂的好去處"
      ],
      rating: "4.8",
      distance: "步行25分鐘",
      price: "免費"
    }
  ];

  return (
    <PageLayout 
      title="樂在其中" 
      subtitle="博愛校區周邊娛樂選擇豐富多元，從文化藝術到戶外休閒，豐富您的課餘生活"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {entertainmentOptions.map((option, index) => (
          <FeatureCard key={index} {...option} />
        ))}
      </div>
      
      <div className="mt-12 bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-amber-100">
        <h2 className="text-2xl font-medium text-gray-800 mb-6">娛樂生活指南</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-medium text-gray-700 mb-4">週末活動推薦</h3>
            <div className="space-y-3">
              <div className="bg-pink-50 p-3 rounded-lg">
                <p className="font-medium text-pink-800">文化藝術</p>
                <p className="text-sm text-pink-600">中正紀念堂展覽、國家戲劇院演出</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="font-medium text-blue-800">電影娛樂</p>
                <p className="text-sm text-blue-600">威秀影城看電影、學生優惠價</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="font-medium text-green-800">戶外活動</p>
                <p className="text-sm text-green-600">大安森林公園運動、野餐</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-4">省錢娛樂</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 申請學生證享各種優惠</li>
              <li>• 關注免費藝文活動資訊</li>
              <li>• 公園綠地免費運動休閒</li>
              <li>• 圖書館借閱DVD電影</li>
              <li>• 參加社團活動認識朋友</li>
              <li>• 夜市逛街品嚐小吃</li>
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Entertainment;

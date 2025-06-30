
import PageLayout from "@/components/PageLayout";
import FeatureCard from "@/components/FeatureCard";
import { Camera, Music, Building2, TreePine, MapPin, BookOpen } from "lucide-react";

const Entertainment = () => {
  const entertainmentOptions = [
    {
      icon: Camera,
      title: "中正紀念堂",
      description: "台北重要地標，白牆藍瓦的宏偉建築融合中國傳統風格",
      details: [
        "每天整點的衛兵交接儀式吸引眾多遊客",
        "國家戲劇院、音樂廳是文化藝術的重要場地",
        "寬散的花園和池塘適合散步拍照",
        "步行僅5分鐘可達"
      ],
      rating: "4.9",
      distance: "步行5分鐘",
      price: "免費參觀"
    },
    {
      icon: Building2,
      title: "總統府",
      description: "原日治時期的臺灣總督府（1919年完工），現為中華民國總統辦公場所",
      details: [
        "國家最高權力象徵與國定古蹟",
        "見證台灣歷史變遷的重要建築",
        "定期開放參觀，導覽服務完善",
        "台北政治文化中心"
      ],
      rating: "4.7",
      distance: "步行8分鐘",
      price: "免費參觀"
    },
    {
      icon: TreePine,
      title: "台北植物園",
      description: "歷史悠久，擁有超過兩千種植物，是都市中的綠色寶地",
      details: [
        "設有溫室和各種主題區",
        "園內保留「欽差行臺」等日治時期古蹟",
        "結合自然與歷史的經典景點",
        "適合親子同遊與生態教育"
      ],
      rating: "4.8",
      distance: "步行10分鐘",
      price: "免費"
    },
    {
      icon: MapPin,
      title: "郵政博物館",
      description: "介紹台灣郵政發展歷史，收藏眾多珍貴郵票",
      details: [
        "設有互動體驗區，富教育意義",
        "門票僅30元，適合親子同遊",
        "了解台灣郵政發展脈絡",
        "定期更換特展主題"
      ],
      rating: "4.5",
      distance: "步行12分鐘",
      price: "NT$30"
    },
    {
      icon: BookOpen,
      title: "南門館",
      description: "前身為濡腦和鴉片加工工廠，歷史超過百年",
      details: [
        "紅磚建築、小白宮等古蹟保存完整",
        "展示當時產業與生活樣貌的博物館",
        "老建築活化的成功範例",
        "台北產業文化遺產"
      ],
      rating: "4.6",
      distance: "步行15分鐘",
      price: "NT$20-50"
    },
    {
      icon: Music,
      title: "華山1914文創園區",
      description: "由清朝晚期酒廠改建而成，是老建築活化的典範",
      details: [
        "結合歷史保存與現代創意",
        "年輕人喜愛的展演和市集場所",
        "定期舉辦藝術展覽與文創市集",
        "古蹟與現代藝術的完美結合"
      ],
      rating: "4.7",
      distance: "步行18分鐘",
      price: "NT$50-200"
    }
  ];

  return (
    <PageLayout 
      title="樂在其中" 
      subtitle="豐富的文化休閒景點，從中正紀念堂到華山1914，承載豐富的歷史文化底蕴"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {entertainmentOptions.map((option, index) => (
          <FeatureCard key={index} {...option} />
        ))}
      </div>
      
      <div className="mt-12 bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-amber-100">
        <h2 className="text-2xl font-medium text-gray-800 mb-6">文化景點特色</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-medium text-gray-700 mb-4">歷史文化地標</h3>
            <div className="space-y-3">
              <div className="bg-amber-50 p-4 rounded-lg">
                <p className="font-medium text-amber-800 mb-2">中正紀念堂</p>
                <p className="text-sm text-amber-600">台北重要地標，文化藝術殿堂</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-medium text-blue-800 mb-2">總統府</p>
                <p className="text-sm text-blue-600">日治時期建築，見證歷史變遷</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="font-medium text-red-800 mb-2">古亭 & 景福門</p>
                <p className="text-sm text-red-600">清朝哨站到府城城門的歷史軌跡</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-4">自然生態與文創空間</h3>
            <div className="space-y-3">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-medium text-green-800 mb-2">台北植物園</p>
                <p className="text-sm text-green-600">都市綠寶，結合自然與歷史</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-medium text-purple-800 mb-2">華山1914</p>
                <p className="text-sm text-purple-600">老建築活化，現代文創藝術</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="font-medium text-orange-800 mb-2">博物館群</p>
                <p className="text-sm text-orange-600">郵政博物館、南門館等文化設施</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-sm text-gray-600 leading-relaxed">
            從鼓亭的哨站到博愛特區的政治心臟，從府城城門到現代文創園區，這裡不僅擁有豐富的文化休閒資源，更承載著豐富的歷史文化底蕴。
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Entertainment;

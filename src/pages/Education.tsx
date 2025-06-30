
import PageLayout from "@/components/PageLayout";
import FeatureCard from "@/components/FeatureCard";
import { BookOpen, GraduationCap, Library, Users } from "lucide-react";

const Education = () => {
  const educationResources = [
    {
      icon: Library,
      title: "市立圖書館總館",
      description: "豐富的館藏資源和優質的學習環境",
      details: [
        "超過100萬冊藏書",
        "數位資源和資料庫完整",
        "安靜的閱讀空間",
        "定期舉辦講座和展覽"
      ],
      rating: "4.8",
      distance: "步行15分鐘",
      price: "免費"
    },
    {
      icon: BookOpen,
      title: "誠品書店",
      description: "結合書店與咖啡廳的文化空間",
      details: [
        "精選書籍和雜誌",
        "舒適的閱讀環境",
        "定期辦理作家見面會",
        "學習討論的好去處"
      ],
      rating: "4.5",
      distance: "步行12分鐘",
      price: "消費制"
    },
    {
      icon: GraduationCap,
      title: "補習街",
      description: "各種語言學習班和證照補習班聚集地",
      details: [
        "英檢、多益、托福課程",
        "公職考試補習班",
        "電腦技能認證班",
        "小班制教學品質佳"
      ],
      rating: "4.2",
      distance: "步行10分鐘",
      price: "NT$3,000-15,000"
    },
    {
      icon: Users,
      title: "社區大學",
      description: "提供多元化課程的終身學習場所",
      details: [
        "藝術、音樂、語言課程",
        "生活技能和興趣培養",
        "學費便宜，門檻較低",
        "與社區居民互動交流"
      ],
      rating: "4.3",
      distance: "步行20分鐘",
      price: "NT$1,000-3,000"
    }
  ];

  return (
    <PageLayout 
      title="求知若渴" 
      subtitle="博愛校區周邊學習資源豐富，從圖書館到補習班，滿足您不同階段的學習需求"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {educationResources.map((resource, index) => (
          <FeatureCard key={index} {...resource} />
        ))}
      </div>
      
      <div className="mt-12 bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-amber-100">
        <h2 className="text-2xl font-medium text-gray-800 mb-6">學習資源整合</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-medium text-gray-700 mb-3">線上資源</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 國家圖書館數位典藏</li>
              <li>• Coursera線上課程</li>
              <li>• Khan Academy免費教學</li>
              <li>• YouTube教育頻道</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-3">學習團體</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 語言交換聚會</li>
              <li>• 讀書會組織</li>
              <li>• 學術研討社團</li>
              <li>• 考試準備小組</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-3">證照考試</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 多益、托福英檢</li>
              <li>• 電腦技能認證</li>
              <li>• 專業證照考試</li>
              <li>• 公務員考試</li>
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Education;

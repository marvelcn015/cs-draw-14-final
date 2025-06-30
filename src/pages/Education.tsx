
import PageLayout from "@/components/PageLayout";
import FeatureCard from "@/components/FeatureCard";
import { BookOpen, GraduationCap, Library, Users } from "lucide-react";

const Education = () => {
  const educationResources = [
    {
      icon: GraduationCap,
      title: "臺北市立大學",
      description: "擁有悠久歷史與豐富學術資源，致力於培養教育、運動與各領域專業人才",
      details: [
        "台北市重要的高等學府",
        "教育學院、人文藝術學院等多元系所",
        "師資培育與研習資源豐富",
        "運動科學及訓練設施完善"
      ],
      rating: "4.9",
      distance: "校園內",
      price: "學生身分"
    },
    {
      icon: BookOpen,
      title: "臺北市立大學附設實驗國民小學",
      description: "創立於1913年，著重創新教學與全人發展的實驗小學",
      details: [
        "超過百年歷史的知名小學",
        "在台北市教育界享有盛名",
        "創新教學法與實驗課程設計",
        "提供優質的基礎教育環境"
      ],
      rating: "4.8",
      distance: "鄰近校園",
      price: "公立小學"
    },
    {
      icon: Library,
      title: "臺北市立第一女子高級中學",
      description: "創校超過百年，以優異學風和卓越表現聞名全台",
      details: [
        "北一女中，台灣明星高中",
        "學術成績優異，升學率高",
        "多元社團活動與素養教育",
        "許多學子夢寄以求的學校"
      ],
      rating: "4.9",
      distance: "步行5分鐘",
      price: "公立高中"
    },
    {
      icon: Users,
      title: "臺北地方法院",
      description: "台北地區重要的司法機關，也是民眾認識法治教育的重要場所",
      details: [
        "司法機關重要學習場所",
        "法治教育與公民素養提升",
        "法庭旁聴與公開審理經驗",
        "民事、刑事等各類案件審理"
      ],
      rating: "4.7",
      distance: "步行10分鐘",
      price: "公共設施"
    }
  ];

  return (
    <PageLayout 
      title="求知若渴" 
      subtitle="優質教育環境，從台北市立大學到北一女中，書香氣息濃厚，學習氛圍佳"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {educationResources.map((resource, index) => (
          <FeatureCard key={index} {...resource} />
        ))}
      </div>
      
      <div className="mt-12 bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-amber-100">
        <h2 className="text-2xl font-medium text-gray-800 mb-6">教育特色與優勢</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-medium text-gray-700 mb-4">高等教育優勢</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>• <span className="font-medium">台北市立大學</span>：師資培育與運動科學的重鎮</li>
              <li>• <span className="font-medium">學術資源</span>：圖書館、實驗室、研習中心完善</li>
              <li>• <span className="font-medium">師資培育</span>：教育學系與師資班訓練優質</li>
              <li>• <span className="font-medium">研究導向</span>：提供多元研究與專業發展機會</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-4">基礎教育典範</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>• <span className="font-medium">北市大附小</span>：百年名校，創新教學</li>
              <li>• <span className="font-medium">北一女中</span>：明星高中，學術成就卓越</li>
              <li>• <span className="font-medium">教育環境</span>：多所優質學校聚集</li>
              <li>• <span className="font-medium">文化氛圍</span>：書香氣息濃厚，學習氛圍佳</li>
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-sm text-gray-600 leading-relaxed">
            從培養師資的台北市立大學，到百年名校北一女中，這裡不僅是學習的理想環境，更是求知与成長的最佳場域。
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Education;

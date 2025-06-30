import PageLayout from "@/components/PageLayout";
import { Users, GraduationCap, User } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      id: "U11216001",
      name: "葉聖羣",
      icon: User
    },
    {
      id: "U11216002",
      name: "黃瑞麟",
      icon: User
    },
    {
      id: "U11216009",
      name: "董姸亭",
      icon: User
    },
    {
      id: "U11216026",
      name: "黃瑀晨",
      icon: User
    },
    {
      id: "U11216036",
      name: "梁富鈞",
      icon: User
    }
  ];

  return (
    <PageLayout 
      title="關於我們" 
      subtitle="電腦地理製圖課程第14組專案團隊介紹"
    >
      {/* Course Info Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full mb-6 shadow-lg">
          <GraduationCap className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-3xl font-medium text-gray-800 mb-4">
          電腦地理製圖 - 第 14 組
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          本專案為電腦地理製圖課程的期末作品，以臺北市立大學博愛校區為中心，
          整合周邊的食住行育樂資訊，提供完整的校園生活指南。
        </p>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {teamMembers.map((member, index) => {
          const Icon = member.icon;
          return (
            <div
              key={member.id}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-amber-100 text-center hover:shadow-lg transition-shadow duration-200"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mb-4 shadow-md">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600 font-mono">
                {member.id}
              </p>
            </div>
          );
        })}
      </div>

      {/* Project Description */}
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-amber-100">
        <div className="flex items-center justify-center mb-6">
          <Users className="w-8 h-8 text-amber-600 mr-3" />
          <h2 className="text-2xl font-medium text-gray-800">專案概述</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-medium text-gray-700 mb-4">專案目標</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>• <span className="font-medium">資訊整合</span>：彙整校園周邊完整生活資訊</li>
              <li>• <span className="font-medium">使用者體驗</span>：提供直觀易用的資訊查詢介面</li>
              <li>• <span className="font-medium">實用價值</span>：協助學生和訪客了解校園環境</li>
              <li>• <span className="font-medium">技術應用</span>：結合地理資訊與網頁技術</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-700 mb-4">技術特色</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>• <span className="font-medium">現代化設計</span>：React + TypeScript + Tailwind CSS</li>
              <li>• <span className="font-medium">響應式布局</span>：支援各種裝置瀏覽體驗</li>
              <li>• <span className="font-medium">互動體驗</span>：流暢的動畫與視覺效果</li>
              <li>• <span className="font-medium">資訊分類</span>：清晰的食住行育樂五大主題</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-amber-100 text-center">
          <p className="text-sm text-gray-500">
            感謝您使用本系統，希望能為您的校園生活帶來便利！
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
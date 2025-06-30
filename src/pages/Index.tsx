
import Header from "@/components/Header";
import CategorySection from "@/components/CategorySection";

const Index = () => {
  const categories = [
    {
      id: "food",
      title: "食",
      icon: "🍜",
      description: "校園周邊美食推薦",
      items: [
        {
          name: "博愛路夜市",
          description: "傳統小吃聚集地，有臭豆腐、鹽酥雞、珍珠奶茶等道地台灣美食",
          distance: "步行3分鐘",
          rating: "4.5"
        },
        {
          name: "麥當勞博愛店",
          description: "24小時營業的速食餐廳，學生讀書聚會的熱門選擇",
          distance: "步行5分鐘",
          rating: "4.2"
        },
        {
          name: "老張牛肉麵",
          description: "50年老店，招牌紅燒牛肉麵深受學生喜愛",
          distance: "步行8分鐘",
          rating: "4.7"
        },
        {
          name: "星巴克咖啡",
          description: "舒適的學習環境，提供WiFi和充電插座",
          distance: "步行6分鐘",
          rating: "4.3"
        }
      ]
    },
    {
      id: "housing",
      title: "住",
      icon: "🏠",
      description: "住宿選擇與租屋資訊",
      items: [
        {
          name: "學生宿舍",
          description: "校內宿舍提供安全舒適的住宿環境，設有交誼廳和洗衣設備",
          distance: "校內",
          rating: "4.4"
        },
        {
          name: "博愛套雅房",
          description: "鄰近學校的學生套房，含基本傢俱和網路",
          distance: "步行5分鐘",
          rating: "4.1"
        },
        {
          name: "和平東路公寓",
          description: "交通便利的分租套房，近捷運站",
          distance: "步行12分鐘",
          rating: "4.0"
        },
        {
          name: "青年旅館",
          description: "短期住宿的經濟選擇，設施完善",
          distance: "步行10分鐘",
          rating: "4.2"
        }
      ]
    },
    {
      id: "transport",
      title: "行",
      icon: "🚌",
      description: "交通運輸資訊",
      items: [
        {
          name: "古亭捷運站",
          description: "松山新店線與中和新蘆線交會站，前往台北各地都很方便",
          distance: "步行8分鐘",
          rating: "4.6"
        },
        {
          name: "公車站牌",
          description: "多條公車路線經過，包含15、18、52、253等路線",
          distance: "校門口",
          rating: "4.3"
        },
        {
          name: "YouBike站點",
          description: "校園周邊設有多個YouBike租借點，騎行便利",
          distance: "步行2分鐘",
          rating: "4.4"
        },
        {
          name: "計程車招呼站",
          description: "24小時都有計程車服務，雨天通勤的好選擇",
          distance: "校門口",
          rating: "4.2"
        }
      ]
    },
    {
      id: "education",
      title: "育",
      icon: "📚",
      description: "教育學習資源",
      items: [
        {
          name: "市立圖書館總館",
          description: "豐富的藏書和安靜的閱讀環境，提供多媒體資源",
          distance: "步行15分鐘",
          rating: "4.8"
        },
        {
          name: "誠品書店",
          description: "結合書店與咖啡廳，學習討論的絕佳場所",
          distance: "步行12分鐘",
          rating: "4.5"
        },
        {
          name: "補習街",
          description: "各種語言學習班和證照補習班聚集地",
          distance: "步行10分鐘",
          rating: "4.2"
        },
        {
          name: "社區大學",
          description: "提供多元化課程，終身學習的好去處",
          distance: "步行20分鐘",
          rating: "4.3"
        }
      ]
    },
    {
      id: "entertainment",
      title: "樂",
      icon: "🎬",
      description: "休閒娛樂場所",
      items: [
        {
          name: "中正紀念堂",
          description: "知名觀光景點，常有藝文表演和展覽活動",
          distance: "步行15分鐘",
          rating: "4.7"
        },
        {
          name: "國家戲劇院",
          description: "欣賞高品質表演藝術的場所，學生票價優惠",
          distance: "步行18分鐘",
          rating: "4.6"
        },
        {
          name: "華納威秀影城",
          description: "最新電影首選，設備新穎觀影品質佳",
          distance: "捷運10分鐘",
          rating: "4.4"
        },
        {
          name: "大安森林公園",
          description: "台北市之肺，適合運動休閒和戶外活動",
          distance: "步行25分鐘",
          rating: "4.8"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            校園周邊生活指南
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            探索臺北市立大學博愛校區周邊的美好生活，從美食到住宿，從交通到娛樂，
            讓您的校園生活更加精彩充實。
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((category) => (
            <CategorySection
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-semibold mb-4">臺北市立大學博愛校區</h3>
          <p className="text-gray-300 mb-2">地址：台北市中正區愛國西路1號</p>
          <p className="text-gray-300 mb-4">電話：(02) 2311-3040</p>
          <div className="text-sm text-gray-400">
            © 2024 臺北市立大學博愛校區周邊生活指南 - 讓校園生活更美好
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

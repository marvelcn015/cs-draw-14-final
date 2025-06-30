
import Navigation from "./Navigation";

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

const PageLayout = ({ children, title, subtitle }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-red-50">
      <Navigation />
      
      {(title || subtitle) && (
        <div className="bg-white/80 backdrop-blur-sm border-b border-amber-100">
          <div className="container mx-auto px-4 py-12 text-center">
            {title && (
              <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-4 tracking-wide">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      )}
      
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      
      <footer className="bg-gray-800 text-white py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-light mb-4">臺北市立大學博愛校區</h3>
          <p className="text-gray-300 mb-2">地址：台北市中正區愛國西路1號</p>
          <p className="text-gray-300 mb-4">電話：(02) 2311-3040</p>
          <div className="text-sm text-gray-400">
            © 2024 臺北市立大學博愛校區周邊生活指南
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PageLayout;

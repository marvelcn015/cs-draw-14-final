
const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
            🏫 臺北市立大學博愛校區
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90">
            周邊生活資訊導覽
          </p>
          <div className="mt-4 flex justify-center space-x-8 text-sm md:text-base">
            <span className="flex items-center space-x-1">
              <span className="text-2xl">🍜</span>
              <span>美食</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="text-2xl">🏠</span>
              <span>住宿</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="text-2xl">🚌</span>
              <span>交通</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="text-2xl">📚</span>
              <span>學習</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="text-2xl">🎬</span>
              <span>娛樂</span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

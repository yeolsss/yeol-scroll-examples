import NavLink from "./components/NavLink";

const App = () => {
  return (
    <section className="min-h-screen bg-gray-100 rounded from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Scroll Event Practice
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            다양한 Scroll UI 컴포넌트와 인터랙션 예제
          </p>
        </header>

        <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <NavLink
            to="/scroll-snap"
            className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative z-10">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">
                🎯 Scroll Snap
              </h2>
              <p className="text-sm md:text-base text-gray-600 mt-2">
                스크롤 스냅 레이아웃
              </p>
            </div>
            <div className="absolute top-0 right-0 w-20 h-20 bg-orange-100 rounded-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500" />
          </NavLink>

          <NavLink
            to="/slice-slider"
            className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative z-10">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 group-hover:text-pink-600 transition-colors">
                🎨 Slice Slider
              </h2>
              <p className="text-sm md:text-base text-gray-600 mt-2">
                슬라이스 슬라이더 컴포넌트
              </p>
            </div>
            <div className="absolute top-0 right-0 w-20 h-20 bg-pink-100 rounded-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500" />
          </NavLink>
        </nav>
      </div>
    </section>
  );
};

export default App;

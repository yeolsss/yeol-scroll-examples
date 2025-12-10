import NavLinkCard from "./components/NavLinkCard";

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
          <NavLinkCard
            to="/scroll-snap"
            title="Scroll Snap"
            description="스크롤 스냅 레이아웃"
          />

          <NavLinkCard
            to="/slice-slider"
            title="Slice Slider"
            description="슬라이스 슬라이더 컴포넌트"
          />

          <NavLinkCard
            to={"/parallax-scroll"}
            title={"ParallaxScrollPage"}
            description={""}
          />
        </nav>
      </div>
    </section>
  );
};

export default App;

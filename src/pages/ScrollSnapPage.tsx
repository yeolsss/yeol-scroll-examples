import { classMerge } from "../lib/utils.ts";
import { useEffect, useRef, useState } from "react";

const pages = [
  {
    id: 1,
    title: "Page 1",
    bgColor: "bg-gradient-to-br from-blue-500 to-purple-600",
  },
  {
    id: 2,
    title: "Page 2",
    bgColor: "bg-gradient-to-br from-green-500 to-teal-600",
  },
  {
    id: 3,
    title: "Page 3",
    bgColor: "bg-gradient-to-br from-orange-500 to-red-600",
  },
  {
    id: 4,
    title: "Page 4",
    bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
  },
  {
    id: 5,
    title: "Page 5",
    bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600",
  },
];

const ScrollControlPage = () => {
  // 1. 현재 페이지 상태
  const [currentPage, setCurrentPage] = useState(0);

  // 2. 중요: 이벤트 리스너 내부에서 최신 state를 읽기 위한 Ref
  const pageRef = useRef(0);

  // 3. 애니메이션 중인지 체크하는 Ref
  const isAnimating = useRef(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // currentPage가 변할 때마다 pageRef도 업데이트해줍니다.
  useEffect(() => {
    pageRef.current = currentPage;
  }, [currentPage]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      // 애니메이션 중이면 즉시 리턴 (광클/광스크롤 방지)
      if (isAnimating.current) return;

      // 중요: state 대신 ref의 현재 값을 참조하여 계산
      const curr = pageRef.current;

      if (e.deltaY > 0) {
        // 아래로 스크롤 (다음 페이지)
        if (curr < pages.length - 1) {
          isAnimating.current = true;
          setCurrentPage(curr + 1); // 상태 업데이트
          // pageRef 업데이트는 useEffect가 처리함

          setTimeout(() => {
            isAnimating.current = false;
          }, 1000);
        }
      } else {
        // 위로 스크롤 (이전 페이지)
        if (curr > 0) {
          isAnimating.current = true;
          setCurrentPage(curr - 1);

          setTimeout(() => {
            isAnimating.current = false;
          }, 1000);
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      // passive: false 필수 (e.preventDefault() 사용 위해)
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    // 의존성 배열을 비워서 리스너가 마운트/언마운트 시에만 실행되도록 함
    // 이렇게 하면 리스너가 지워졌다 다시 생기는 틈이 사라짐
    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, []); // 의존성 배열 비움 (중요!)

  return (
    <div
      ref={containerRef}
      className="h-screen w-full overflow-hidden relative"
    >
      {/* 네비게이션 인디케이터 */}
      <div className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        {pages.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentPage === index ? "bg-white scale-125" : "bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* 페이지 컨테이너 */}
      <div
        className="w-full h-full transition-transform duration-[1000ms] ease-in-out"
        style={{ transform: `translateY(-${currentPage * 100}vh)` }}
      >
        {pages.map((page, index) => (
          <div
            key={page.id}
            className={classMerge(
              "flex w-full h-screen relative",
              page.bgColor,
            )}
          >
            <div
              className={`m-auto transition-all duration-1000 delay-500 ${
                currentPage === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
            >
              <p className="text-white text-6xl font-bold drop-shadow-md">
                page: {page.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollControlPage;

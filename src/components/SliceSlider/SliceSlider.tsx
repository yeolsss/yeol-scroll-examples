import React, { useCallback, useEffect, useRef, useState } from "react";
import { classMerge } from "../../lib/utils.ts";
import Slide from "./Slide.tsx";
import SliceSliderButton from "./SliceSliderButton.tsx";

interface SliceSliderProps {
  children: React.ReactNode;
  className?: string;
}

const SliceSlider = ({ children, className }: SliceSliderProps) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  // slidesRef는 이벤트 리스너 등록을 위해 필요하므로 유지
  const slidesRef = useRef<HTMLDivElement[]>([]);

  // 불필요한 배열 생성(slides) 대신 개수만 계산
  const totalSlides = React.Children.count(children);

  const showSlide = useCallback(
    (index: number) => {
      if (isSliding) return;

      setIsSliding(true);
      setCurrentSlideIndex(index);

      setTimeout(() => {
        setIsSliding(false);
      }, 1000);
    },
    [isSliding],
  );

  const nextSlide = useCallback(() => {
    const nextIndex = currentSlideIndex + 1;
    if (nextIndex >= totalSlides) {
      showSlide(0);
    } else {
      showSlide(nextIndex);
    }
  }, [currentSlideIndex, totalSlides, showSlide]);

  const prevSlide = useCallback(() => {
    const prevIndex = currentSlideIndex - 1;
    if (prevIndex < 0) {
      showSlide(totalSlides - 1);
    } else {
      showSlide(prevIndex);
    }
  }, [currentSlideIndex, totalSlides, showSlide]);

  const handleScroll = useCallback(
    (e: Event) => {
      e.preventDefault();

      const wheelEvent = e as WheelEvent;
      const deltaY = wheelEvent.deltaY;

      if (deltaY < 0) {
        prevSlide();
      } else if (deltaY > 0) {
        nextSlide();
      }
    },
    [nextSlide, prevSlide],
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const key = e.key;

      if (key === "ArrowLeft" || key === "ArrowUp") {
        prevSlide();
      }

      if (key === "ArrowRight" || key === "ArrowDown") {
        nextSlide();
      }
    },
    [nextSlide, prevSlide],
  );

  useEffect(() => {
    const slidesElements = slidesRef.current;

    slidesElements.forEach((slide) => {
      if (slide) {
        slide.addEventListener("wheel", handleScroll, { passive: false });
      }
    });

    return () => {
      slidesElements.forEach((slide) => {
        if (slide) {
          slide.removeEventListener("wheel", handleScroll);
        }
      });
    };
  }, [handleScroll]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div
      className={classMerge(
        "slice-slider relative w-full h-full overflow-hidden",
        className,
      )}
    >
      {React.Children.map(children, (child, index) => {
        const isActive = index === currentSlideIndex;

        return (
          <Slide
            ref={(el) => {
              if (el) slidesRef.current[index] = el;
            }}
            isActive={isActive}
          >
            {child}
          </Slide>
        );
      })}

      <nav className="fixed right-[2%] top-1/2 -translate-y-1/2 flex flex-col gap-5 z-50">
        <SliceSliderButton onClick={prevSlide}>Prev</SliceSliderButton>
        <SliceSliderButton onClick={nextSlide}>Next</SliceSliderButton>
      </nav>
    </div>
  );
};

export default SliceSlider;

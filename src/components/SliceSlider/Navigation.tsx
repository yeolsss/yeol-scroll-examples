import { classMerge } from "../../lib/utils.ts";
import SliceSliderButton from "./SliceSliderButton.tsx";

interface NavigationProps {
  onPrev: () => void;
  onNext: () => void;
  className?: string;
}

const Navigation = ({ onPrev, onNext, className }: NavigationProps) => {
  return (
    <nav
      className={classMerge(
        "fixed top-1/2 -translate-y-1/2 w-full flex justify-between px-8 z-50 pointer-events-none",
        className,
      )}
    >
      <SliceSliderButton
        onClick={onPrev}
        className="pointer-events-auto writing-mode-vertical-rl"
      >
        Prev
      </SliceSliderButton>
      <SliceSliderButton
        onClick={onNext}
        className="pointer-events-auto writing-mode-vertical-rl"
      >
        Next
      </SliceSliderButton>
    </nav>
  );
};

export default Navigation;

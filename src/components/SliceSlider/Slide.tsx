import { forwardRef } from "react";
import { classMerge } from "../../lib/utils.ts";

interface SlideProps {
  children: React.ReactNode;
  isActive?: boolean;
  className?: string;
}

const Slide = forwardRef<HTMLDivElement, SlideProps>(
  ({ children, isActive, className }, ref) => {
    return (
      <div
        ref={ref}
        className={classMerge(
          "slide absolute inset-0 w-full h-full",
          isActive && "group is-active",
          !isActive && "pointer-events-none",
          className,
        )}
      >
        {children}
      </div>
    );
  },
);

Slide.displayName = "Slide";

export default Slide;

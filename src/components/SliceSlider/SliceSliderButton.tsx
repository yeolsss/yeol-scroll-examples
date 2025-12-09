import type { ComponentProps, PropsWithChildren } from "react";
import { classMerge } from "../../lib/utils.ts";

const SliceSliderButton = ({
  children,
  className,
  ...props
}: PropsWithChildren<ComponentProps<"button">>) => {
  const styles = classMerge(
    "writing-vertical-rl cursor-pointer relative overflow-hidden group",
    className,
  );
  return (
    <button className={styles} {...props}>
      <span className="relative text-xl z-10">{children}</span>
      {/* Vertical line that appears on hover */}
      <div
        className="absolute left-1/2 top-0 w-0.5 h-full bg-current -translate-x-1/2 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
        style={{
          transformOrigin: "top center",
        }}
      ></div>
    </button>
  );
};

export default SliceSliderButton;

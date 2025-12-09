import type { ComponentProps, PropsWithChildren } from "react";
import { classMerge } from "../../lib/utils.ts";

const ContentText = ({
  children,
  className,
  ...props
}: PropsWithChildren<ComponentProps<"span">>) => {
  return (
    <span
      className={classMerge(
        `text-8xl font-bold inline-block overflow-hidden`,
        className,
      )}
    >
      <span
        className={classMerge(
          `block translate-y-[140%] opacity-0 transition-all duration-400 ease-out delay-150
          group-[.is-active]:translate-y-0 group-[.is-active]:opacity-100
          group-[.is-active]:duration-600 group-[.is-active]:ease-[cubic-bezier(0.77,0,0.175,1)]`,
          className,
        )}
        {...props}
      >
        {children}
      </span>
    </span>
  );
};

export default ContentText;

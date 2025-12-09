import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

export function classMerge(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

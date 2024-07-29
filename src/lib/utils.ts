import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export type NonEmptyArray<T> = [T, ...T[]];

/**
 * Helper function to make it easier to combine multiple Tailwind CSS classes.
 * @param inputs Tailwind CSS class string(s)
 * @returns Combined Tailwind CSS class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

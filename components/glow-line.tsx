import { cn } from "@/lib/utils";

export function GlowLine({ className }: { className: string }) {
  return (
    <span
      className={cn(
        "via-primary/60 absolute h-px w-1/2 bg-linear-to-r from-transparent to-transparent",
        className,
      )}
    />
  );
}
import { cn } from "@/lib/utils";

//sub heading
export function SubHeading({
  children,
  className,
}: {
  children: string | React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-muted-foreground text-md select-none tracking-tight", className)}>
      {children}
    </p>
  );
}

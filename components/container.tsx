import { cn } from "@/lib/utils";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <section className={cn(" md:mt-24 mt-16 ", className)}>{children}</section>;
};

export default Container;

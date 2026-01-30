"use client";

import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { AnimatedCard } from "@/components/animated-border";
import { MouseGlow } from "@/components/mouse-glow";
import { useMouseGlow } from "@/hooks/useMouseGlow";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const PageNotFound = () => {
  const router = useRouter();
  const { x, y, handleMouseMove } = useMouseGlow();

  const handleGoBack = () => {
    // If there's no meaningful history entry, fall back to home.
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
      return;
    }
    router.push("/");
  };

  return (
    <Container className="flex min-h-[60vh] items-center justify-center px-6 py-14 md:px-0 md:py-0">
      <AnimatedCard
        onMouseMove={handleMouseMove}
        initial={{ y: 40, opacity: 0.8, filter: "blur(8px)" }}
        whileInView={{
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          transition: {
            duration: 0.3,
            ease: "easeInOut",
          },
        }}
        viewport={{ once: true }}
        className="text-muted-foreground border-border max-w-md w-full rounded-2xl border shadow-lg hover:shadow-primary/40 backdrop-blur-sm z-0"
      >
        <div className="relative">
          <MouseGlow x={x} y={y} className="pointer-events-none -z-10" />

          <div className="relative z-10 flex flex-col items-center gap-6 px-8 py-10 text-center">
          {/* Illustration */}
          <div className="relative h-32 w-32 overflow-hidden rounded-full border border-border/70 shadow-lg">
            <Image
              src="/404.png"
              alt="Lost in the code illustration"
              fill
              sizes="128px"
              className="object-cover"
            />
          </div>

          {/* 404 text */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/70">
              Oops!
            </p>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-foreground">
              404
            </h1>
            <p className="mt-3 text-sm md:text-base">
              The page you are looking for doesn&apos;t exist or has moved.
            </p>
          </div>

          {/* Redirect actions */}
          <div className="mt-2 flex flex-wrap items-center justify-center gap-3 text-sm">
            <Button
              type="button"
              onClick={handleGoBack}
              className="px-5"
            >
              Go back
            </Button>

            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              or
            </span>

            <Button asChild variant="outline" className="px-5">
              <Link href="/projects">View projects</Link>
            </Button>
          </div>
        </div>
        </div>
      </AnimatedCard>
    </Container>
  );
};

export default PageNotFound;
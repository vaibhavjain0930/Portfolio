"use client";

import { ServicesData, servicesData } from "./services-data";
import { motion } from "motion/react";
import Heading from "@/components/heading";
import { SubHeading } from "@/components/sub-heading";

const OfferServices = () => {
  return (
    <>
      <motion.div
        className="grid w-full gap-2 sm:grid-cols-1 md:grid-cols-5"
        initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <ServicesIntro />
        {servicesData.map((service, index) => (
          <ServiceCard key={`service-${index}`} {...service} index={index} />
        ))}
      </motion.div>
    </>
  );
};

export default OfferServices;

//ServicesIntro card
function ServicesIntro() {
  return (
    <motion.div
      className="col-span-2 px-6 py-6 md:col-span-3 md:py-14"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
    >
      {[
        <Heading as="h4" className="leading-7 font-medium">
          Need more info?
        </Heading>,
        <Heading as="h4" className="text-primary mb-4 text-3xl font-medium">
          I got you
        </Heading>,
        <SubHeading>
          Here are some of the services I offer. If you have any questions, feel
          free to reach out.
        </SubHeading>,
      ].map((content, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: {
              opacity: 0,
              y: 24,
              filter: "blur(8px)",
            },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            },
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
        >
          {content}
        </motion.div>
      ))}
    </motion.div>
  );
}

//service card
import { useMouseGlow } from "@/hooks/useMouseGlow";
import { MouseGlow } from "@/components/mouse-glow";
import { AnimatedCard } from "@/components/animated-border";

function ServiceCard({
  title,
  Icon,
  description,
  index,
}: ServicesData & { index: number }) {
  const { x, y, handleMouseMove } = useMouseGlow();

  return (
    <AnimatedCard
      onMouseMove={handleMouseMove}
      initial={{ y: 50, opacity: 0.8, filter: "blur(8px)" }}
      whileInView={{
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: {
          duration: 0.2,
          delay: index * 0.05,
          ease: "easeInOut",
        },
      }}
      viewport={{ once: true }}
      className={`md:py-14 py-8 px-6 shadow-md ${
        index === 2 || index === 3 ? "md:col-span-3" : "col-span-2"
      } col-span-2`}
    >
      <Icon className="text-primary relative z-10 mb-4 h-6 w-6" />

      <Heading as="h5" className="mb-2">
        {title}
      </Heading>
      <SubHeading className="text-[0.9rem]">{description}</SubHeading>

      <MouseGlow x={x} y={y} />
    </AnimatedCard>
  );
}

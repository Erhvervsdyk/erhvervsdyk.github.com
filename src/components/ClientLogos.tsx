import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import logoFureso from "@/assets/logos/fureso-kommune.svg";
import logoZoo from "@/assets/logos/zoo.svg";
import logoTeknologisk from "@/assets/logos/teknologisk-institut.svg";
import logoGreve from "@/assets/logos/greve-kommnune.svg";
import logoGentofte from "@/assets/logos/gentofte-kommune.svg";
import logoHelsingor from "@/assets/logos/helsingor-kommune.svg";

const logos = [
  { src: logoFureso, alt: "Furesø Kommune", height: 50 },
  { src: logoZoo, alt: "Zoo", height: 50 },
  { src: logoTeknologisk, alt: "Teknologisk Institut", height: 40 },
  { src: logoGreve, alt: "Greve Kommune", height: 50 },
  { src: logoGentofte, alt: "Gentofte Kommune", height: 50 },
  { src: logoHelsingor, alt: "Helsingør Kommune", height: 50 },
];

const GAP = 48; // px, matches gap-x-12
const MARQUEE_SPEED = 40; // px per second

export function ClientLogos() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const [isCarousel, setIsCarousel] = useState(false);
  const [rowWidth, setRowWidth] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (!containerRef.current || !rowRef.current) return;
      const contentWidth = rowRef.current.scrollWidth;
      const availableWidth = containerRef.current.clientWidth;
      setRowWidth(contentWidth);
      setIsCarousel(contentWidth > availableWidth);
    };

    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(containerRef.current!);

    return () => resizeObserver.disconnect();
  }, []);

  const marqueeDistance = rowWidth + GAP;
  const marqueeDuration = marqueeDistance / MARQUEE_SPEED;

  return (
    <section className="w-full max-w-[1440px] px-8 pt-12 pb-4 md:pt-16 md:pb-6 flex flex-col gap-8 md:gap-10">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-[14px] md:text-[16px] font-medium text-muted text-center uppercase tracking-wide"
      >

      </motion.p>

      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`relative w-full overflow-hidden ${
          isCarousel
            ? "[mask-image:linear-gradient(to_right,transparent,black_48px,black_calc(100%-48px),transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_48px,black_calc(100%-48px),transparent)]"
            : ""
        }`}
      >
        {/* Hidden measuring row - determines whether the logos fit on one line */}
        <div
          ref={rowRef}
          className="invisible absolute top-0 left-0 flex flex-nowrap items-center gap-x-12 pointer-events-none"
          aria-hidden="true"
        >
          {logos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt=""
              style={{ height: logo.height }}
              className="w-auto shrink-0"
            />
          ))}
        </div>

        {isCarousel ? (
          <div
            className="flex flex-nowrap items-center gap-x-12 w-max animate-marquee"
            style={
              {
                "--marquee-distance": `-${marqueeDistance}px`,
                animationDuration: `${marqueeDuration}s`,
              } as React.CSSProperties
            }
          >
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={`${logo.alt}-${index}`}
                src={logo.src}
                alt={index < logos.length ? logo.alt : ""}
                aria-hidden={index >= logos.length}
                loading="lazy"
                style={{ height: logo.height }}
                className="w-auto shrink-0"
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {logos.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                style={{ height: logo.height }}
                className="w-auto shrink-0"
              />
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}

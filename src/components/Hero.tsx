import React from "react";
import { motion } from "motion/react";
import imgHeroHeaderSection from "@/assets/hero.avif";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <div className="relative w-full h-[816px] overflow-hidden flex flex-col items-center justify-center bg-base">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={imgHeroHeaderSection}
          alt="Professionel erhvervsdykker udfører præcisionsarbejde under vandet med skærebrænder. De skarpe gnister lyser op i det mørke vand og demonstrerer ekspertise inden for teknisk krævende undervandsopgaver."
          className="w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(269.827deg, rgba(0, 0, 0, 0) 52.05%, rgba(0, 0, 0, 0.6) 69.266%), linear-gradient(0deg, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.8) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1440px] px-8 flex flex-col gap-12 mt-20 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 max-w-[768px]"
        >
          <h1 className="font-medium text-[40px] leading-[1.1] md:text-[90px] md:leading-[1.05] md:tracking-[-4px]">
            Professionelle erhvervsdykkere til alle behov
          </h1>
          <p className="font-normal text-[18px] md:text-[20px] leading-[1.4] text-muted max-w-[560px]">
            Vi er beliggende i Hovedstadsområdet og tilbyder erhvervsdykning til
            erhverv såvel som private.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button
            className="bg-primary hover:bg-primary-hover text-on-color font-semibold text-[16px] rounded-[8px] px-6 py-3 h-auto shadow-sm"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            aria-label="Gå til kontaktformular"
          >
            Kontakt os
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

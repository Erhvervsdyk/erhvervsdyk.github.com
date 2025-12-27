import React from "react";
import { motion } from "motion/react";
import imgHeroHeaderSection from "../assets/ea6a9ac087d0c6fc6c683e8af186cf099e62f9c6.png";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <div className="relative w-full h-[816px] overflow-hidden flex flex-col items-center justify-center bg-[#101d36]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={imgHeroHeaderSection}
          alt="Hero Background"
          className="w-full h-full object-cover"
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
          <h1 className="font-['Outfit'] font-medium text-[40px] leading-[1.1] md:text-[100px] md:leading-[1.05] md:tracking-[-4px] text-white">
            Professionelle erhvervsdykkere til alle behov
          </h1>
          <p className="font-['Outfit'] font-normal text-[18px] md:text-[24px] leading-[1.4] text-[#cecfd2] max-w-[560px]">
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
            className="bg-[#00aaaa] hover:bg-[#008888] text-white font-semibold text-[16px] rounded-[8px] px-6 py-3 h-auto font-['Inter'] shadow-sm"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Kontakt os
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import imgCaseA01 from "@/assets/case-a-01.avif";
import imgCaseB01 from "@/assets/case-b-01.avif";
import imgCaseB02 from "@/assets/case-b-02.avif";
import imgCaseB03 from "@/assets/case-b-03.avif";
import imgCaseC01 from "@/assets/case-c-01.avif";
import imgCaseD01 from "@/assets/case-d-01.avif";
import imgCaseD02 from "@/assets/case-d-02.avif";
import imgCaseD03 from "@/assets/case-d-03.avif";
import svgPaths from "@/assets/case-d-03.avif";

function ArrowRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="#CECFD2"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5 icon icon-tabler"
    ></svg>
  );
}

export function Cases() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const cases = [
    {
      title: "Tilstandsrapport for Stigsnæs Havn",
      description:
        "Udearbejdet for Slagelse kommune, tilsyn WSP. Alle elementer i havnen er gennemgået, tykkelse målt og dokumenteret. Efterfølgende rapport med forslag til forbedringer.",
      images: [imgCaseA01],
    },
    {
      title: "Anoder i Helsingør Havn",
      description:
        "Opsætning af anoder i Helsingør Havn i samarbejde med Niras.",
      images: [imgCaseB01, imgCaseB02, imgCaseB03],
    },
    {
      title: "Københavns Kommune",
      description: "Udbedring af skader på badezone for Københavns Kommune.",
      images: [imgCaseC01],
    },
    {
      title: "Bjærgning af skib på Refshalevej",
      description:
        "Inspektion efter forlis, afpropning af skib og miljøhensyn. Efterfølgende bjærgning af skib. ",
      images: [imgCaseD01, imgCaseD02, imgCaseD03],
    },
  ];

  const handleCaseClick = (index: number) => {
    setActiveIndex(index);
    setActiveImageIndex(0);
  };

  const handleNextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const currentImages = cases[activeIndex].images;
    if (currentImages.length > 1) {
      setActiveImageIndex((prev) => (prev + 1) % currentImages.length);
    }
  };

  const handlePrevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const currentImages = cases[activeIndex].images;
    if (currentImages.length > 1) {
      setActiveImageIndex(
        (prev) => (prev - 1 + currentImages.length) % currentImages.length
      );
    }
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const threshold = 50;
    if (info.offset.x < -threshold) {
      handleNextImage();
    } else if (info.offset.x > threshold) {
      handlePrevImage();
    }
  };

  return (
    <section
      id="cases"
      className="w-full max-w-[1440px] px-8 py-24 flex flex-col gap-16 bg-[linear-gradient(180deg,#0A1F2F_0%,#09101E_100%)]"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-5 max-w-[768px]"
      >
        <div className="flex flex-col gap-3">
          <p className="font-['Inter'] font-semibold text-[16px] leading-[24px] text-[#00cece]">
            Projekter
          </p>
          <h2 className="font-['Outfit'] font-semibold text-[40px] md:text-[64px] leading-[1.05] tracking-[-1.28px] text-[#f5f5f6]">
            Seneste projekter
          </h2>
        </div>
        <p className="font-['Inter'] font-normal text-[18px] md:text-[20px] leading-[30px] text-[#94969c]">
          Fra komplekse inspektioner til akutte bjærgninger. Få et indblik i
          vores hverdag og se, hvordan vi løser krævende udfordringer for vores
          kunder.
        </p>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col lg:flex-row items-center gap-16"
      >
        {/* Image Side */}
        <div className="w-full lg:w-1/2 h-[400px] lg:h-[609px] relative group overflow-hidden rounded-lg">
          <AnimatePresence mode="popLayout">
            {cases.map((item, caseIndex) => {
              if (caseIndex !== activeIndex) return null;

              const currentImage = item.images[activeImageIndex];

              return (
                <motion.div
                  key={`${caseIndex}-${activeImageIndex}`}
                  className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                >
                  <img
                    src={currentImage}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-lg pointer-events-none" // pointer-events-none needed for drag to work smoothly
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Navigation Arrows - only if multiple images */}
          {cases[activeIndex].images.length > 1 && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Pagination Dots */}
          {cases[activeIndex].images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 p-2 bg-black/30 backdrop-blur-sm rounded-full z-10">
              {cases[activeIndex].images.map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImageIndex(dotIndex);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeImageIndex === dotIndex
                      ? "bg-white w-4"
                      : "bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Go to image ${dotIndex + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Tabs Side */}
        <div className="w-full lg:w-1/2 flex flex-col gap-0">
          {cases.map((item, index) => (
            <div
              key={index}
              onClick={() => handleCaseClick(index)}
              className={`relative pl-6 py-4 flex flex-col gap-5 border-l-4 border-[#1f242f] cursor-pointer transition-colors hover:bg-white/5 ${
                activeIndex === index ? "bg-white/5" : ""
              }`}
            >
              {activeIndex === index && (
                <motion.div
                  layoutId="active-case-border"
                  className="absolute left-[-4px] top-0 bottom-0 w-[4px] bg-[#00cece]"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <div className="flex flex-col gap-2">
                <h3 className="font-['Inter'] font-semibold text-[20px] leading-[30px] text-[#f5f5f6]">
                  {item.title}
                </h3>
                <p className="font-['Inter'] font-normal text-[16px] leading-[24px] text-[#94969c]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

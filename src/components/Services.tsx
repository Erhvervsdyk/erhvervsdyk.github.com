import React from "react";
import { motion } from "motion/react";
import imgServices from "@/assets/services.avif";

const servicesList = [
  "Udarbejdelse af tilstandsrapporter",
  "Inspektioner kaj / skib",
  "Inspektioner af sprinklertank",
  "Svømmehaller, fliser, hævesænkebroer, montage, rengøring",
  "Redningsstiger / Sikkerhedsliner",
  "Støbning",
  "Undervandsskæring",
  "Undervandssvejsning",
  "Undervandsboring / kerneboring",
  "Videoinspektion",
  "Højtryksspuling",
  "Tykkelsesmåling af spuns eller skibe",
  "Bjærgning af ting eller skibe",
  "Opsætning af anoder",
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <div className={`shrink-0 w-6 h-6 ${className || ""}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#00CECE"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="block w-full h-full icon icon-tabler"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 12l5 5l10 -10" />
      </svg>
    </div>
  );
}

export function Services() {
  return (
    <section
      id="services"
      className="w-full max-w-[1440px] px-8 py-24 flex flex-col gap-16"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-5 max-w-[768px] mx-auto text-center items-center"
      >
        <div className="flex flex-col gap-3 items-center w-full">
          <p className="font-semibold text-[16px] leading-[24px] text-primary">
            Vi tilbyder
          </p>
          <h2 className="font-semibold text-[40px] md:text-[56px] leading-[1.05] tracking-[-1.12px]">
            Komplette undervandsløsninger
          </h2>
        </div>
        <p className="font-normal text-[18px] md:text-[20px] leading-[30px] text-muted">
          Dykerhverv er specialiseret i en bred vifte af komplekse
          undervandsopgaver, fra tilstandsrapportering, inspektioner og
          undervandssvejsning, til kerneboring, specialmontage og bjærgning.
        </p>
      </motion.div>

      {/* Content Grid */}
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 relative h-[400px] lg:h-[754px] flex items-center justify-center"
        >
          <div className="relative w-full h-full overflow-hidden rounded-lg">
            <img
              src={imgServices}
              alt="En professionel erhvervsdykker udfører undervandssvejsning eller skæring på en stor metalpille. Dykkersættet er fuldt udstyret, og kraftige gnister lyser det mørke havvand op omkring arbejdsområdet."
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* List Side */}
        <div className="w-full lg:w-1/2 flex flex-col gap-5">
          {servicesList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex gap-3 items-start"
            >
              <CheckIcon className="mt-1" />
              <p
                className={`text-[18px] leading-[28px] ${
                  index < 4 ? "font-bold" : "font-normal text-subtle"
                }`}
              >
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

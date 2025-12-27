import React from "react";
import { motion } from "motion/react";
import svgPaths from "../imports/svg-wx2a8d09gh";
import imgImage1 from "figma:asset/6d611cb0914f2e7764fa469eddcff71eae147e06.png";

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

function CheckIcon() {
  return (
    <div className="relative shrink-0 w-7 h-7">
      <svg className="block w-full h-full" fill="none" viewBox="0 0 28 28">
        <path 
          d={svgPaths.p12dd8dc0} 
          stroke="#00CECE" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
        />
      </svg>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="w-full max-w-[1440px] px-8 py-24 flex flex-col gap-16">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-5 max-w-[768px] mx-auto text-center items-center"
      >
        <div className="flex flex-col gap-3 items-center w-full">
          <p className="font-['Inter'] font-semibold text-[16px] leading-[24px] text-[#00cece]">
            Vi tilbyder
          </p>
          <h2 className="font-['Outfit'] font-semibold text-[40px] md:text-[56px] leading-[1.05] tracking-[-1.12px] text-white">
            Komplette undervandsløsninger
          </h2>
        </div>
        <p className="font-['Inter'] font-normal text-[18px] md:text-[20px] leading-[30px] text-[#cecfd2]">
          Dykerhverv er specialiseret i en bred vifte af komplekse undervandsopgaver, fra tilstandsrapportering, inspektioner og undervandssvejsning, til kerneboring, specialmontage og bjærgning.
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
                    src={imgImage1} 
                    alt="Diver working" 
                    className="w-full h-full object-cover"
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
              <CheckIcon />
              <p className={`font-['Inter'] text-[18px] leading-[28px] ${index < 4 ? "font-bold text-white" : "font-normal text-[#98a2b3]"}`}>
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

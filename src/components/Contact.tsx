import React from "react";
import { motion } from "motion/react";
import imgContact from "@/assets/contact.avif";
import { MapPin, Phone, Mail, FileText, User } from "lucide-react";

export function Contact() {
  return (
    <section className="w-full max-w-[1280px] px-8 py-24 flex flex-col lg:flex-row items-start justify-center gap-16 lg:gap-24">
      {/* Info Side */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-[480px] flex flex-col gap-12"
      >
        <div className="flex flex-col gap-5">
          <h2 className="font-['Outfit'] font-semibold text-[40px] md:text-[64px] leading-[1.05] tracking-[-1.28px] text-[#f5f5f6]">
            Kontakt os
          </h2>
          <p className="font-['Inter'] font-normal text-[20px] leading-[30px] text-[#cecfd2]">
            Har du en undervandsopgave eller tekniske spørgsmål? Vi står klar
            med professionel rådgivning.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {/* Company / Name */}
          <div className="flex gap-5 items-start">
            <div className="w-12 h-12 rounded-full bg-[#00aaaa]/10 flex items-center justify-center shrink-0 mt-1">
              <User className="w-6 h-6 text-[#00aaaa]" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-white font-['Inter'] font-semibold text-lg">
                Dykerhverv v/Rune Teit Strøm
              </h3>
              <p className="text-[#cecfd2] font-['Inter'] text-base">
                Dykker Nr. 627
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex gap-5 items-start">
            <div className="w-12 h-12 rounded-full bg-[#00aaaa]/10 flex items-center justify-center shrink-0 mt-1">
              <Phone className="w-6 h-6 text-[#00aaaa]" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-white font-['Inter'] font-semibold text-lg">
                Kontakt
              </h3>
              <p className="text-[#cecfd2] font-['Inter'] text-base">
                Tlf. 22 11 62 17
              </p>
              <div
                onClick={() =>
                  (window.location.href =
                    "mailto:" + "runedykerhverv" + "@" + "gmail.com")
                }
                className="text-[#cecfd2] font-['Inter'] text-base hover:text-[#00aaaa] transition-colors flex items-center gap-2 cursor-pointer"
              >
                runedykerhverv@gmail.com
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="flex gap-5 items-start">
            <div className="w-12 h-12 rounded-full bg-[#00aaaa]/10 flex items-center justify-center shrink-0 mt-1">
              <MapPin className="w-6 h-6 text-[#00aaaa]" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-white font-['Inter'] font-semibold text-lg">
                Adresse
              </h3>
              <p className="text-[#cecfd2] font-['Inter'] text-base">
                Fæstevej 7
              </p>
              <p className="text-[#cecfd2] font-['Inter'] text-base">
                2820 Gentofte
              </p>
            </div>
          </div>

          {/* CVR */}
          <div className="flex gap-5 items-start">
            <div className="w-12 h-12 rounded-full bg-[#00aaaa]/10 flex items-center justify-center shrink-0 mt-1">
              <FileText className="w-6 h-6 text-[#00aaaa]" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-white font-['Inter'] font-semibold text-lg">
                Virksomhedsoplysninger
              </h3>
              <p className="text-[#cecfd2] font-['Inter'] text-base">
                CVR-nr. DK33099924
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Image Side */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full lg:w-[576px] h-[600px] lg:h-[826px] relative"
      >
        <div className="w-full h-full rounded-lg overflow-hidden">
          <img
            src={imgContact}
            alt="Erhvervsdykker Rune Teit Strøm står klar i vandet til rådgivning om din næste undervandsopgave."
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}

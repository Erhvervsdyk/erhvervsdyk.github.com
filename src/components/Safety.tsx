import React from "react";
import { motion } from "motion/react";
import imgSafety from "@/assets/safety.avif";

export function Safety() {
  return (
    <section className="w-full max-w-[1440px] px-8 pt-12 pb-24 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-1/2 flex flex-col gap-5"
      >
        <h2 className="font-semibold text-[30px] leading-[38px]">
          Sikkerhed og arbejdsmiljø
        </h2>
        <div className="font-normal text-[18px] leading-[28px] text-muted space-y-5">
          <p>
            Hos Dykerhverv er kompromisløs sikkerhed fundamentet for alle vores
            opgaver. Arbejde under vand indebærer altid risici, og derfor er
            vores procedurer og udstyr altid godkendt og regelmæssigt synet af
            Søfartsstyrelsen. Alt arbejde udføres i henhold til gældende dansk
            lovgivning og de højeste internationale standarder for
            erhvervsdykning. Vores dykkere er desuden rutineret i
            dykkerrelateret førstehjælp og er konstant trænet til at håndtere
            uforudsete situationer.
          </p>
          <p>
            Vi arbejder proaktivt for at sikre et trygt arbejdsmiljø – både over
            og under vand. Alle projekter starter med en detaljeret
            Arbejdspladsvurdering (APV) for at identificere og eliminere
            potentielle farer. Derudover afholdes der altid et "Toolbox-møde"
            før opstart, hvor alle involverede koordinerer arbejdsgange, risici
            og sikkerhedsprotokoller. Denne systematiske tilgang sikrer maksimal
            tryghed for vores medarbejdere og minimal risiko for vores kunder
            gennem hele opgaven.
          </p>
        </div>
      </motion.div>

      {/* Image Content */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full lg:w-1/2 relative h-[400px] lg:h-[512px]"
      >
        <div className="relative w-full h-full overflow-hidden rounded-lg">
          <img
            src={imgSafety}
            alt="Et industrielt havneområde ved solnedgang med store byggekraner og containere på en pram. Himlen er farvet i gyldne nuancer, hvilket skaber et overblik over en professionelt organiseret arbejdsplads ved vandet."
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </motion.div>
    </section>
  );
}

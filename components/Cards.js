import { motion } from "framer-motion";
import { useState } from "react";


export default function Cards() {
  const className = "";


  const cards = [
    {
      color: "bg-custYel",
      imageSrc: "/testing.svg",
      title: "1.Selgitame tiimi eelistused ja motivatsiooni",
      description: "Mets vs meri. Restoran vs ühine kokkamine. Kart vs bowling. Teemapidu vs gala, jne. Uurime plaani tegemiseks efektiivsel moel teie tiimi eelistusi ja mõõdame motivatsioonitaset.",
    },
    {
      color: "bg-custRose",
      imageSrc: "/planning.svg",
      title: "2.Korraldame ürituse!",
      description: "Ei mingit korraldusega kaasnevat stressi, topeltbuukinguid ja möödarääkimisi. Võtame enda kanda kogu planeerimise, suhluse ning saadame isegi tiimikutsed!",
    },
    {
      color: "bg-primary",
      imageSrc: "/invitation.svg",
      title: "3. Loome tiimi aastase üritusteplaani",
      description: "Arvestame meeskonna väljatoodud soove, ettevõtte plaane ning eelarvet. Kinnitame teiega loodud plaani ja konkreetsed üritused.",
    },
    {
      color: "bg-custPurp",
      imageSrc: "/hosting.svg",
      title: "4.Viime läbi meeldejääva tiimiürituse",
      description: "See lõbus osa tööst - loome mälestusi ja tõstame tiimi motivatsiooni. Teeme kõik suuremad üritused ja väiksed meelespidamised, mis kalendrisse said. 100% rahulolugarantii.",
    },
    {
      color: "bg-custGrey",
      imageSrc: "/measure.svg",
      title: "5.Mõõdame meeskonna motivatsiooni",
      description: "Teeme nii enne kui pärast üritust motivatsiooni tagasiside küsitluse. Nii saame näidata ürituse mõju meeskonna motivatsioonile",
    },
  ];
  
  const packages = [
    {
      imageSrc: "/lvl1.svg",
      title: "Happy",
      advantages: ['4 Season events', 'Tegevus juht', 'Event location', 'Snacks/Drinks'],
      price: '29',
      popular: false,
    },
    {
      imageSrc: "/lvl2.svg",
      title: "Happier",
      advantages: ['4 Season events', 'Tegevus juht', 'Event location', 'Snacks/Drinks', 'Merchandise'],
      price: '39',
      popular: false,
    },
    {
      imageSrc: "/lvl3.svg",
      title: "Happiest",
      advantages: ['4 Season events', 'Tegevus juht', 'Event location', 'Snacks/Drinks', 'Merchandise', 'Bus transfer', 'Public holidays gifts'],
      price: '59',
      popular: true,
    },
    {
      imageSrc: "/lvl4.svg",
      title: "Lux",
      advantages: ['4 Season events', 'Tegevus juht', 'Event location', 'Snacks/Drinks', 'Merchandise', 'Bus transfer', 'Public holidays gifts', 'Individual BD presents'],
      price: '129',
      popular: false,
    },
  ];

  return (
    <div className="w-full flex flex-wrap md:flex-row gap-20 justify-center items-stretch px-5 pt-7 text-center">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{}}
          transition={{ duration: 2, delay: index * 0.2 }}
          className={`relative text-left md:w-[35%] shadow-lg border rounded-xl flex flex-col p-8 `}
        >
          <motion.div className="flex flex-col h-full gap-4">
            <div>
              <motion.img
                src={card.imageSrc}
                width={80}
                height={80}
                alt="img"
                className="md:w-30 md:h-30 absolute top-[-30px] left-[-30px]"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.2 }} // Add scale animation on hover

              />
            </div>
            <motion.h1
              className="text-2xl font-bold mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {card.title}
            </motion.h1>
            <motion.p
              className="text-lg font-normal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {card.description}
            </motion.p>
          </motion.div>
        </motion.div>
      ))}
    </div>
    // <div className="w-full flex flex-wrap md:flex-row gap-8 justify-center items-center px-5 pt-7 text-center">
    //   {cards.map((card, index) => (
    //     <motion.div
    //       key={index}
    //       initial={{ opacity: 0, y: 300 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       whileHover={{
    //         scale: 1.1,
    //         transition: { duration: 0.2 },
    //         zIndex: 1,
    //       }}
    //       transition={{ duration: 0.5, delay: index * 0.2 }}
    //       className={`${card.color} border rounded-xl flex flex-col px-4 gap-4 ${className}`}
    //       style={{ width: "245px", height: "350px" }}
    //       onHoverStart={() => setHoveredCard(index)}
    //       onHoverEnd={() => setHoveredCard(null)}
    //     >
    //       <motion.div
    //         className="flex items-center flex-col h-full gap-4"
    //         animate={{
    //           filter:
    //             hoveredCard !== null && hoveredCard !== index ? "blur(3px)" : "none",
    //         }}
    //         transition={{ filter: { duration: 0.5 } }}
    //       >
    //         <div>
    //           <motion.img
    //             src={card.imageSrc}
    //             width={80}
    //             height={80}
    //             alt="img"
    //             className="md:w-30 md:h-30 mt-12"
    //             initial={{ opacity: 0, scale: 0.5 }}
    //             animate={{ opacity: 1, scale: 1 }}
    //             transition={{ duration: 0.5 }}
    //           />
    //         </div>
    //         <motion.h1
    //           className="text-3xl font-semibold"
    //           initial={{ opacity: 0 }}
    //           animate={{ opacity: 1 }}
    //           transition={{ duration: 0.5, delay: 0.3 }}
    //         >
    //           {card.title}
    //         </motion.h1>
    //         <motion.p
    //           className="text-xl"
    //           initial={{ opacity: 0 }}
    //           animate={{ opacity: 1 }}
    //           transition={{ duration: 0.5, delay: 0.5 }}
    //         >
    //           {card.description}
    //         </motion.p>
    //       </motion.div>
    //     </motion.div>
    //   ))}
    // </div>

  );
}
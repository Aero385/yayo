import { motion } from "framer-motion";

export default function Example(){

  const examples = [
    {
      name: "jan",
      color: "bg-jan",
      side:"left",
      description: "MEESKONNAÜRITUS - lõõgastav",
    },
    {
      name: "feb",
      color: "bg-feb",
    },
    {
      name: "mar",
      color: "bg-mar",
      side:"right",
      description: "sõbrapäeva kuu - cape cake igale tiimiliikmele",
    },
    {
      name: "apr",
      color: "bg-apr",
      side:"left",
      description: "MEESKONNAÜRITUS - intellektuaalne",
    },
    {
      name: "may",
      color: "bg-may",
      side:"right",
      description: "HEATEGEVUSLIK ÜRITUS",
    },
    {
      name: "jun",
      color: "bg-jun",
      side:"left",
      description: "Kontoripäev - vitaminipaus (vitamini üllatus)",
    },
    {
      name: "jul",
      color: "bg-jul",
    },
    {
      name: "aug",
      color: "bg-aug",
      side:"right",
      description: "MEESKONNAÜRITUS - loodusesliikumine",
    },
    {
      name: "sep",
      color: "bg-sep",
      side:"left",
      description: "IT day (13.09) - nimeline tass igale tiimiliikmele",
    },
    {
      name: "oct",
      color: "bg-oct",
      side:"right",
      description: "Helloween - magus-hirmus üllatus igale tiimiliikmele",
    },
    {
      name: "nov",
      color: "bg-nov",
      side:"left",
      description: "MEESKONNAÜRITUS - maitseelamus",
    },
    {
      name: "dec",
      color: "bg-dec",
      side:"left",
      description: "MEESKONNAÜRITUS - maitseelamus",
    },
    
  ];

  return (
    <div className="w-full bg-bgExp flex flex-col justify-center items-center">
      {examples.map((card, index) => (
        <div
          className="relative" 
          key={index}
        >
          <motion.div
            key={index}
            className={`${card.color} w-20 h-20 border rounded-full flex flex-col justify-center items-center`}
          >
            <div className="uppercase bg-ring flex justify-center items-center rounded-full text-white text-2xl">
              {card.name}
            </div>
          </motion.div>
          <div
            className="absolute"
          > {card.side && (
            <motion.div>
              {card.description}
            </motion.div>
          )}
          </div>
        </div>
      ))}
    </div>
  );
}
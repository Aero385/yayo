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
      side:"right",
      description: "MEESKONNAÜRITUS - maitseelamus",
    },
    
  ];

  return (
    <div className="w-full bg-bgExp flex flex-col justify-center gap-4 items-center">
  {examples.map((card, index) => (
    <div className="relative w-full" key={index}>
      <motion.div
        className={`${card.color} relative mx-auto w-16 h-16 rounded-full flex flex-col justify-center items-center`}
      >
        <div className="uppercase bg-ring flex justify-center items-center rounded-full text-black text-2xl">
          {card.name}
        </div>
        {card.side === "right" && (
          <motion.span
            className={`${card.color} absolute  w-8 h-3 top-1/2 left-[60px] transform -translate-y-1/2`}
          >
            <p className="text-white text-xs absolute top-1/2  left-[40px] transform -translate-y-1/2">
              {card.description}
            </p>
          </motion.span>
        )}
        {card.side === "left" && (
          <motion.span
            className={`${card.color} absolute  w-8 h-3 top-1/2 left-[60px] transform -translate-y-1/2`}
          >
            <p className="text-white text-xs absolute top-1/2  left-[40px] transform -translate-y-1/2">
              {card.description}
            </p>
          </motion.span>
        )}
      </motion.div>
    </div>
  ))}
</div>

);
}

import { TitleText, TypingText } from "@/components/Text";
import { fadeIn, rolling, staggerContainer } from "@/constants/motion";
import { motion } from "framer-motion";

export default function Example(){

  const examples = [
    {
      name: "jan",
      color: "bg-jan",
      side:"left",
      description: "ÜRITUS - lõõgastav",
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
      description: "ÜRITUS - intellektuaalne",
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
      description: "ÜRITUS - loodusesliikumine",
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
      description: "ÜRITUS - maitseelamus",
    },
    {
      name: "dec",
      color: "bg-dec",
      side:"right",
      description: "ÜRITUS - maitseelamus",
    },
  ];

  const halfwayIndex = Math.ceil(examples.length / 2);
  const firstHalf = examples.slice(0, halfwayIndex);
  const secondHalf = examples.slice(halfwayIndex);

    return (
      <>

        {/* MOBILE */}

        <div className="md:hidden w-full rounded-3xl bg-bgExp flex flex-col justify-center mt-10 gap-4 px-2 py-8 items-center">
          <TitleText 
            textStyles='text-center text-white uppercase'
            title='Example of Annual Team Events Programm'
          />
          {examples.map((card, index) => (
            <motion.div 
              className="relative w-full max-w-6xl mx-auto px-2" 
              key={index}
              variants={staggerContainer}
              initial='hidden'
              whileInView='show'
              viewport={{once: 'false', amount: 0.25}}
              
            >
              <motion.div
                className={`${card.color}  relative mx-auto w-16 h-16 rounded-full flex flex-col justify-center items-center`}
                variants={rolling(card.side)}
              >
                <div className="uppercase bg-ring flex justify-center items-center rounded-full text-black text-2xl">
                  {card.name}
                </div>
              </motion.div>
              {card.side === "right" && (
                <motion.span
                  className={`${card.color} absolute  w-8 h-2 top-7 left-[218px] transform -translate-y-1/2`}
                  variants={fadeIn('left', 'tween', 1, 2)}
                >
                  <p className="text-white text-xs absolute top-1/2  left-[40px] transform -translate-y-1/2">
                    {card.description}
                  </p>
                </motion.span>
              )}
              {card.side === "left" && (
                <motion.span
                  className={`${card.color} absolute w-8 h-2 top-7 right-[218px] transform -translate-y-1/2`}
                  variants={fadeIn('right', 'tween', 0.5, 3)}
                >
                  <p className="text-white text-xs absolute top-1/2  right-[40px] transform -translate-y-1/2">
                    {card.description}
                  </p>
                </motion.span>
              )}
            </motion.div>
          ))}
        </div>

        {/* DESKTOP */}
        <div className="flex justify-center md:flex items-center hidden min-h-screen px-4">
          <div className="max-w-6xl relative md:flex md:flex-col justify-center" >
            <TitleText 
              textStyles='leading-none text-center text-[64px] text-bgExp uppercase'
              title='Example of Annual Team Events Programm'
            />
            <div className="mx-auto h-[600px] grid grid-row-2 justify-center mt-10 px-[80px] py-6 rounded-3xl max-w-6xl bg-gradient-to-r from-bgExp via-blue-700 to-bgExp">
              <div className="flex items-center justify-center gap-[70px]">
                {firstHalf.map((card, index) => (
                  <motion.div 
                    className="relative" 
                    key={index}
                    variants={staggerContainer()}
                    initial='hidden'
                    whileInView='show'
                    viewport={{once: 'false', amount: 0.25}}
                  >
                    <motion.div
                      className={`${card.color} relative w-20 h-20 rounded-full flex justify-center items-center`}
                      variants={rolling('left', index * 0.2 )}
                    >
                      <div className="uppercase bg-ring flex justify-center items-center rounded-full text-black text-2xl">
                        {card.name}
                      </div>
                    </motion.div>
                    {card.side === "right" && (
                      <motion.span
                        className={`${card.color} absolute  w-4 h-6 top-[78px] left-8 transform -translate-y-1/2`}
                        variants={fadeIn('up', 'tween', 1, 2)}
                      >
                        <p className="w-[200px] text-center text-white text-md absolute top-8 left-1/2 transform -translate-x-1/2 flex justify-center items-center">
                          {card.description}
                        </p>
                      </motion.span>
                    )}
                    {card.side === "left" && (
                      <motion.span
                        className={`${card.color} absolute  w-4 h-6 bottom-[78px] left-8 transform -translate-y-1/2`}
                        variants={fadeIn('down', 'tween', 1, 2)}
                      >
                        <p className="w-[200px] text-center text-white text-md absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center items-center">
                          {card.description}
                        </p>
                      </motion.span>
                    )}
                  </motion.div>
                  
                ))}
              </div>
              <div className="flex items-center justify-center gap-[70px]">
                {secondHalf.map((card, index) => (
                  <motion.div 
                    className="relative" 
                    key={index}
                    variants={staggerContainer()}
                    initial='hidden'
                    whileInView='show'
                    viewport={{once: 'false', amount: 0.25}}
                  >
                    <motion.div
                      className={`${card.color} relative w-20 h-20 rounded-full flex justify-center items-center`}
                      variants={rolling('right', index * 0.2 )}
                    >
                      <div className="uppercase bg-ring flex justify-center items-center rounded-full text-black text-2xl">
                        {card.name}
                      </div>
                    </motion.div>
                    {card.side === "right" && (
                      <motion.span
                        className={`${card.color} absolute  w-4 h-6 top-[78px] left-8 transform -translate-y-1/2`}
                        variants={fadeIn('up', 'tween', 1, 2)}
                      >
                        <p className="w-[200px] text-center text-white text-md absolute top-8 left-1/2 transform -translate-x-1/2 flex justify-center items-center">
                          {card.description}
                        </p>
                      </motion.span>
                    )}
                    {card.side === "left" && (
                      <motion.span
                        className={`${card.color} absolute  w-4 h-6 bottom-[78px] left-8 transform -translate-y-1/2`}
                        variants={fadeIn('down', 'tween', 1, 2)}
                      >
                        <p className="w-[200px] text-center text-white text-md absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center items-center">
                          {card.description}
                        </p>
                      </motion.span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
  
  );
  }


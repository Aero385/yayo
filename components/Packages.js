import Image from "next/image";
import MyButton from "./MyButton";
import Toggle from "@/components/Toggle";
import { useState } from 'react';
import { motion } from "framer-motion";
import { TypingText } from "./Text";
import { staggerContainer } from "@/constants/motion";




export default function Packages() {

  const [isYearly, setIsYearly] = useState(false);

  
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
    <div className="max-w-[1440px] w-full flex flex-col items-center mt-8">
      <div className="flex items-center justify-center gap-8">
        <pan>Monthly</pan>
        <Toggle isYearly={isYearly} onToggle={setIsYearly} />
        <span>Yearly</span>
      </div>
      <div className="flex flex-wrap justify-center md:justify-evenly items-center w-full gap-8 mt-8">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="flex border overflow-hidden border-red-300 flex-col justify-between bg-white rounded-xl shadow-lg p-6 relative"
            style={{ width: "300px", height: "520px" }}
          >
            {pkg.popular && (
              <span className="absolute w-full md:top-[20px] md:right-[-110px] right-[-110px] transform rotate-45 bg-red-500 text-white py-1 px-3 text-md font-bold">
                Popular
              </span>
            )}
            <div>
              <div className="flex justify-center">
                <Image src={pkg.imageSrc} alt="Package" width="70" height="70" />
              </div>
              <h1 className="text-3xl font-semibold mt-4">{pkg.title}</h1>
              <ul className="mt-4 pt-4 border-t-2 border-red-300">
                {pkg.advantages.map((advantage, i) => (
                  <motion.div 
                  className="flex items-center space-x-4 mt-2 ml-8 text-md  text-base font-normal"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    key={i}
                  >
                    <svg
                      className="w-4 h-4 fill-current text-custOrang"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.293 4.293l-8.293 8.293-4.293-4.293-1.414 1.414 5 5 .707.707.707-.707 9-9z" />
                    </svg>
                    <TypingText title={advantage}/>
                  </motion.div>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <MyButton text={`${isYearly ? pkg.price * 12 : pkg.price} € / per Person`} className={`${isYearly ? pkg.price * 12 : pkg.price}`}/>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}

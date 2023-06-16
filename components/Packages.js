import Image from "next/image";
import MyButton from "./MyButton";
import Toggle from "@/components/Toggle";
import { useState } from 'react';



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
    <div className="flex flex-col items-center mt-8">
      <div className="flex items-center justify-center gap-8">
        <span>Monthly</span>
        <Toggle isYearly={isYearly} onToggle={setIsYearly} />
        <span>Yearly</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        {packages.map((pkg, index) => (
          <div key={index} className="flex border border-red-300 flex-col justify-between bg-white rounded-xl shadow-lg p-6 relative">
            {pkg.popular && (
              <span className="absolute right-0 transform rotate-45 bg-red-500 text-white py-1 px-3 text-xs font-semibold w-40">
                Popular
              </span>
            )}
            <div>
              <div className="flex justify-center">
                <Image src={pkg.imageSrc} alt="Package" width="50" height="50" />
              </div>
              <h1 className="text-2xl font-semibold mt-4">{pkg.title}</h1>
              <ul className="mt-4 border-t-2 border-red-300">
                {pkg.advantages.map((advantage, i) => (
                  <li key={i} className="flex items-center space-x-2 mt-2">
                    <svg className="w-4 h-4 fill-current text-custOrang" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M20.293 4.293l-8.293 8.293-4.293-4.293-1.414 1.414 5 5 .707.707.707-.707 9-9z" />
                    </svg>
                    <span>{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <MyButton text={`${isYearly ? pkg.price * 12 : pkg.price} € / per Person`} className="w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
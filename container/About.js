import Cards from "@/components/Cards";
import { fadeIn } from "@/constants/motion";
import { motion } from "framer-motion";


export default function About() {
  return (
    <div className="relative max-w-[1440] min-h-screen mx-auto flex justify-center flex-col items-center md:px-4 px-8 md:mt-[200px] mt-20">
      <div className="flex justify-center items-center ">
        <motion.h1 
          className="md:text-3xl text-xl text-4xl z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5 }}
        >
          5 lihtsat sammu meeskonnaürituste aastaplaanini
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5 }}
          className="absolute md:w-[30%] w-[45%] h-24 md:h-32 transform -translate-x-1/2 border-lg translate-y-3 md:translate-y-7 bg-gradient-to-r from-test3  to-test1 z-0 rounded-bl-[30px] rounded-tl-[30px] rounded-lr-[30px] rounded-br-[30px]"

        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5 }}
          className="absolute md:w-[30%] w-[45%] h-24  md:h-32 transform translate-x-1/2 -translate-y-3 md:-translate-y-7 bg-gradient-to-r from-test1  to-test3 z-0 rounded-tr-[30px] rounded-tl-[30px] rounded-lr-[30px] rounded-br-[30px]"

        />
      </div >
      <div className="flex justify-center items-center md:mt-32 mt-20 md:mt-0 mb-10 ">
        <Cards/>
      </div>
    </div>
  );
}

import { textContainer, textVariant2 } from '@/constants/motion';
import { motion } from 'framer-motion';


export const TypingText = ({ title, textStyles }) => (
  <motion.span
    variants={textContainer}
    className={`m-w-[500px] ${textStyles}`}
    style={{ maxWidth: '900px', wordWrap: 'break-word' }}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.span>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={` font-bold md:text-[64px] text-3xl text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);
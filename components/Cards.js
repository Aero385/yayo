import { motion } from "framer-motion";


export default function Cards() {
  const className = "";

  const cards = [
    {
      color: "bg-custYel",
      imageSrc: "/testing.svg",
      title: "1.Testing",
      description: "We test your team for cohesion and their preferences.",
    },
    {
      color: "bg-custRose",
      imageSrc: "/planning.svg",
      title: "2.Planning",
      description: "Creating team annual plan based on your team profile",
    },
    {
      color: "bg-primary",
      imageSrc: "/invitation.svg",
      title: "3.Inviting",
      description: "Sending personal invitation and notification",
    },
    {
      color: "bg-custPurp",
      imageSrc: "/hosting.svg",
      title: "4.Hosting",
      description: "Hosting event with your team.",
    },
    {
      color: "bg-custGrey",
      imageSrc: "/measure.svg",
      title: "5.Measuring",
      description: "Testing your team for happiness",
    },
  ];

  return (
    <div className="w-full flex flex-wrap md:flex-row gap-8 justify-center items-center px-5 pt-7 text-center">
    {cards.map((card, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
          boxShadow: `0px 0px 10px `,
        }}
        transition={{ duration: 1, delay: index * 0.2 }}
        className={`${card.color} border rounded-xl flex flex-col px-4 gap-4 ${className}`}
        style={{ width: "245px", height: "350px" }}
      >
        <div className="flex mt-auto justify-center">
          <motion.img
            src={card.imageSrc}
            width={80}
            height={80}
            alt="img"
            className="md:w-30 md:h-30 w-30 h-30"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <motion.h1
          className="text-3xl font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {card.title}
        </motion.h1>
        <motion.p
          className="text-xl mb-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {card.description}
        </motion.p>
      </motion.div>
    ))}
  </div>
);
}
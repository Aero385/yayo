import Image from "next/image";

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
    <div className="w-full flex flex-col md:flex-row gap-10 justify-center items-center px-5 py-4 text-center">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`${card.color} border rounded-xl flex flex-col pt-7 px-4 gap-7 items-center ${className}`}
          style={{ width: "200px", height: "300px" }}
        >
          <div className="flex justify-center">
            <Image
              src={card.imageSrc}
              width={80}
              height={80}
              alt="img"
              className="md:w-20 md:h-20"
            />
          </div>
          <h1 className="text-lg md:text-xl font-semibold">{card.title}</h1>
          <p className="text-sm md:text-base">{card.description}</p>
        </div>
      ))}
    </div>
  );
}
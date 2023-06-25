import Cards from "@/components/Cards";

export default function About() {
  return (
    <div className="max-w-[1440] mx-auto flex justify-center flex-col items-center md:px-4 px-8 mt-20">
      <h1 className="md:text-6xl text-4xl">How it works?</h1>
      <div className="flex justify-center items-center md:mt-14">
        <Cards/>
      </div>
    </div>
  );
}

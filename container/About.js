import Cards from "@/components/Cards";

export default function About() {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <h1 className="text-4xl">How it works?</h1>
      <div className="flex justify-center items-center md:mt-14">
        <Cards/>
      </div>
    </div>
  );
}

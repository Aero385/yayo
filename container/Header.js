import MyButton from "@/components/MyButton";
import Nav from "@/components/Nav";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <Nav />
      <div className="w-full flex justify-center gap-40 md:px-40 px-4 py-4">
        <div className="py-20 flex flex-col gap-8 text-gray-700">
          <h1 className="text-5xl mb-4">
            Unleashing Team Happiness!
          </h1>
          <h2 className="text-xl font-semibold mb-4">
            Creating The Year-long Program for Sustained Success for Your Company
          </h2>
          <p className="text-base mb-4 font-normal font-size">
            Making teams happy, more productive, without taking valuable time of the team leader for organization, communication, and preparation for the event.
          </p>
          <div className="inline-block">
            <MyButton text="Contact us" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image src="/main.png" width={1200} height={1200} alt="main"/>
          {/* <img src="/main.png" alt="main"/> */}
        </div>
      </div>
    </>
  );
}

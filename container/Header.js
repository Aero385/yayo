import MyButton from "@/components/MyButton";
import Nav from "@/components/Nav";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <Nav />
      <div className="max-w-[1440px] w-full flex flex-col md:gap-0 gap-8 mx-auto md:flex-row md:justify-center md:px-4 px-8 py-4">
        <div className="flex items-center justify-center order-1 ">
          <Image src="/main.png" width={1000} height={1000} alt="main" />
        </div>
        <div className="md:py-20 flex  flex-col gap-8 text-gray-700 order-2 md:order-none">
          <h1 className="text-5xl md:text-8xl">Unleashing Team Happiness!</h1>
          <h2 className="text-xl md:text-3xl font-semibold">
            Creating The Year-long Program for Sustained Success for Your Company
          </h2>
          <p className="text-base font-normal ">
            Making teams happy, more productive, without taking valuable time of the team leader for organization, communication, and preparation for the event.
          </p>
          <div className="flex justify-center md:justify-start md:border-none md:pb-0 border-b-2 pb-12">
            <MyButton text="Contact us" />
          </div>
        </div>
      </div>
    </>
  );
}

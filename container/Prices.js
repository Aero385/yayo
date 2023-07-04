import Packages from "@/components/Packages";

export default function Prices(){
  return (
   
      <div className="flex flex-col justify-center items-center text-center min-h-screen bg-gradient-to-tr from-[#9facb8] to-[#c9b8ba] mt-10 md:mt-48 text-gray-700">
        <h1 className="text-5xl">
          Our Packages
        </h1>
        <p className="text-3xl mt-3">
          We offer 4 annual packages
        </p>
        <Packages/>
      </div>
  )
}
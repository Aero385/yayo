import Packages from "@/components/Packages";

export default function Prices(){
  return (
   
    <div>
      <div className="flex flex-col justify-center items-center text-center min-h-screen  mt-0 pb-10 md:pb-0 text-gray-700">
        <h1 className="text-5xl mt-12 md:mt-0">
          Our Packages
        </h1>
        <p className="text-3xl mt-3">
          We offer 4 annual packages
        </p>
        <Packages/>
      </div>
    </div>
  )
}
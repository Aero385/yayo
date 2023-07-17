import MyButton from "@/components/MyButton";
import NavBar from "@/components/Nav";
// import Nav from "@/components/Nav";
import Image from "next/image";

export default function Header() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="max-w-[1440px] flex flex-col justify-between md:gap-10 gap-8 mx-auto md:flex-row md:mt-20 md:px-8 px-8 py-4">
        <div className="flex items-center justify-center order-1">
          <Image src="/headerIMG.svg" width={700} height={300} alt="main" />
        </div>
        <div className="max-w-[650px] flex flex-col lg:gap-5 justify-center gap-3 text-gray-700 order-2 md:order-none">
          <h1 className="text-2xl md:text-4xl lg:text-5xl">Meeskonnaürituste aastaplaan ja korralduse täislahendus!</h1>

          <p className="text-base md:text-lg lg:text-xl font-normal">
            Vasta 6-le lihtsale küsimusele ning leiame vastuste põhjal just Sinu tiimi rõõmustava ürituse täislahenduse.
          </p>
          <MyButton text="Võta meiega ühendust" className="w-auto bg-test1 text-white hover:text-test1 hover:bg-white" />
          <MyButton text="Tee tiimiürituse test" className="w-auto bg-basic text-white hover:text-basic hover:bg-white" />
          <div>
            <p className="text-sm md:text-base font-normal">Teie üritus - meie korraldus!</p>
            <button className="flex text-secondary hover:text-basic  transition duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] px-8 flex justify-center items-center mt-10 mx-auto">
        <div className="bg-gradient-to-br md:w-full px-20 md:px-0 flex rounded-xl justify-center items-center from-teal-100 via-pink-100 to-teal-100">
          <div className="grid md:grid-cols-2 grid-cols-1 py-7 md:gap-x-32 gap-4 rounded-xl">
            <div className="flex items-center gap-2">
              <span className="text-xl md:text-2xl lg:text-3xl">7+</span>
              <p className="text-base md:text-lg lg:text-xl font-normal">
                aastat kogemust <br /> ürituste korralduses
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl md:text-2xl lg:text-3xl">80+</span>
              <p className="text-base md:text-lg lg:text-xl font-normal">koostööpartnerit</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl md:text-2xl lg:text-3xl">100+</span>
              <p className="text-base md:text-lg lg:text-xl font-normal">edukat üritust</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl md:text-2xl lg:text-3xl">100%</span>
              <p className="text-base md:text-lg lg:text-xl font-normal">rahulolugarantii</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import MyButton from "./MyButton";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className=" shadow top-0 flex justify-center z-[10] py-8">
      <div className="md:max-w-[1440px] w-full flex justify-between items-center px-8">
        <div className="flex w-full justify-between">
          <Logo />
          <button
            className="md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <svg className='h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          </button>
        </div>
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex md:flex-row md:px-0 md:py-0 md:items-center fixed md:static inset-0 bg-white flex-col px-10 py-20 whitespace-nowrap gap-10`}
        >
          <button
            className="md:hidden absolute top-6 right-6"
            onClick={() => setMenuOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex md:flex-row flex-col gap-10">
            <Link className="hover:text-gray-500" href="/">Ettevõttele</Link>
            <Link className="hover:text-gray-500" href="/">Eraiskule</Link>
            <Link className="hover:text-gray-500" href="/">Meist</Link>
          </div>
          <MyButton text={"Loo aastaplaan"} className={'bg-test1 text-black hover:text-test1 hover:bg-white'}/>
          <MyButton text={'Kontakt'} className={'bg-basic text-white hover:text-basic hover:bg-white'}/>
        </div>
      </div>
    </div>
  );
}
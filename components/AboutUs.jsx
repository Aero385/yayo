import React, { useRef, useState } from "react";

const AboutUs = () => (
<section className="bg-white mt-8">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-700 sm:text-lg dark:text-gray-700">
            <h2 className="mb-4 text-4xl  tracking-tight font-extrabold text-gray-700 ">About us</h2>
            <p className="mb-4 text-lg font-normal">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
            <p className="mb-4 text-lg font-normal">Another one, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
            <a href='#' className='w-fit flex font-bold py-2 px-4 rounded transition duration-500 bg-test1 text-basic hover:text-white hover:bg-test1'>
               Tutvuge meie tiimiga!
            </a>
        </div>	
        <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1"/>
            <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"/>
        </div>
    </div>
</section>
)


export default AboutUs;
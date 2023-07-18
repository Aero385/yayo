import Image from 'next/image';
import React from 'react';

export default function Footer() {
  return (
    <footer>
        <div class="bg-gray-100 pt-10 pb-10">
            <div class="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-3 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
                <div class="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start">
                    <div class="flex items-center mb-8">
                        <div class=" flex items-center justify-center gap-2 text-xl">
                            <Image src='logo.svg' width={100} height={100} alt='Logo'/>
                            EventTeamly
                        </div>
                    </div>
                    <p class="mb-4">Your privacy is our priority.</p>
                    <p class="mb-4 font-normal"><strong class="font-xl">EventTeamly</strong> event orginizer for your company, boosting your Team and for building professional relationships.</p>
                    <div class="flex w-full mt-2 mb-8 -mx-2">
                        <div class="mx-2 bg-white-500 rounded-full hover:bg-test1 transition duration-500 items-center justify-center flex p-2 shadow-md">
                            <a href='#'>
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" fill="#2e71f7"></path>
                                </svg>
                            </a>
                        </div>
                        <div class="mx-2 bg-white-500 hover:bg-test1 transition duration-500 rounded-full items-center justify-center flex p-2 shadow-md">
                            <a href='#'>
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" fill="#2e71f7"></path>
                                </svg>
                            </a>
                        </div>
                        <div class="mx-2 bg-white-500 rounded-full hover:bg-test1 transition duration-500 items-center justify-center flex p-2 shadow-md">
                            <a href='#'>
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" fill="#2e71f7"></path>
                            </svg>
                            </a>
                        </div>
                    </div>
                    <p class="text-gray-400">© 2023 - EventTeamly</p>
                </div>
                <div class="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-09 flex flex-col">
                    <p class="text-black-600 mb-4 font-medium text-lg">Product</p>
                    <ul class="text-black-500">
                        <li class="my-2 hover:text-basic cursor-pointer transition-all">Ettevõttele</li>
                        <li class="my-2 hover:text-basic cursor-pointer transition-all">Eraisikule</li>
                        <li class="my-2 hover:text-basic cursor-pointer transition-all">Meist</li>
                        <li class="my-2 hover:text-basic cursor-pointer transition-all">Küsimustik</li>
                        <li class="my-2 hover:text-basic cursor-pointer transition-all">Kontaktid</li>
                    </ul>
                </div>
            </div>
            <hr class="my-6 border-gray-200 text-primary lg:my-8" />
            <span class="flex justify-center mx-auto text-sm text-gray-500 text-center dark:text-gray-400">
                © 2023 
                <a href="" class="hover:underline">Eventeamly™</a>
                . All Rights Reserved.
            </span>
        </div>
    </footer>

  )
};
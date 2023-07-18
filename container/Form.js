import MyButton from '@/components/MyButton';
import Image from 'next/image';
import { useState } from 'react';

export default function Form() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [numPeople, setNumPeople] = useState(1);
  const [additionalInfo, setAdditionalInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="min-h-screen max-w-[1440px] flex flex-col justify-center items-center mx-auto py-8 px-4 mx-auto sm:py-16 lg:px-6">
      <div className='flex flex-col md:flex-row justify-center items-center bg-white shadow-2xl border rounded-2xl md:px-12 px-6 md:py-6 pt-0 pb-8'>
        <div className="person">
          <div className="container">
            <div className="container-inner">
              <img src="/circleBg.jpg" className='circle' alt="main" />
              <img src="/Darina.png" className="img img1" alt="main" />
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <h1 className='text-3xl md:mt-10 mt-0'>Want to learn more?</h1>
          <h2 className='text-xl'>Book a call with Darina</h2>
          <p className='font-normal'>Want to know more about how EventTeamly is helping businesses? Book a call with Darina, the Founder of EventTeamly</p>
          <a href='tel:+555555' className='w-fit flex font-bold py-2 px-4 rounded transition duration-500 bg-test1 text-white hover:text-basic hover:bg-test1'>
            Helista mulle!
          </a>

        </div>
      </div>
      <div className="mt-10 flex justify-center items-center ">
        <div className="w-full max-w-md">
          <form onSubmit={handleSubmit} className="bg-test3 p-8 rounded-lg shadow-2xl">
            <h2 className="text-3xl text-gray-700 text-center mb-4">Contact us today</h2>
            <p className='text-center mb-4'>Speak to one of our team members</p>
            <div className="mb-6 flex gap-4">
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-6 flex gap-4">
              <input
                type="tel"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              />
              <input
                type="number"
                placeholder="Number of People"
                value={numPeople}
                onChange={(e) => setNumPeople(e.target.value)}
                required
                className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <textarea
                placeholder="Additional Information"
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
                required
                className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

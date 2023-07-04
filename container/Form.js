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
    <div className="min-h-screen bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('/lake.png')" }}>
      <div className="flex justify-center items-center h-screen px-4">
        <div className="w-full max-w-md">
          <form onSubmit={handleSubmit} className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl text-gray-700 text-center mb-8">Contact with us</h2>
            <div className="mb-6">
              <label htmlFor="full-name" className="text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="phone-number" className="text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="num-people" className="text-gray-700">
                Number of People
              </label>
              <input
                type="number"
                value={numPeople}
                onChange={(e) => setNumPeople(e.target.value)}
                required
                className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="additional-info" className="text-gray-700">
                Additional Information
              </label>
              <textarea
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

"use client"
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CheckingMONGO from '../app/component/CheckingMONGO'

export default function Home() {
  const [gender, setGender] = useState("");
  const [guests, setGuests] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  const handleSearch = () => {
    console.log("Gender:", gender , "Guests:", guests, "Date:", startDate);
  };

  return (
    <>
   
    <div className="bg-white">
    <main className="flex min-h-screen">
      <div
        className="flex flex-col justify-center items-center w-full h-[75vh] bg-cover bg-center bg-black/30"
        style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/empty-space-center-photo-is-left-text-about-hairdressing-tools_717906-108675.jpg)' }}
      >
        <div className="flex-grow flex flex-col justify-center items-center text-center">
          <h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl mb-6 leading-tight">
          Discover Your Perfect Look
          </h1>
          <p className="text-white text-lg md:text-xl mb-6 max-w-3xl px-4">
          Book appointments at top salons near you with just a few clicks. Your beauty journey starts here          </p>
          <button className="border border-yellow-500 bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300 ease-in-out">
            Explore Now!
          </button>
        </div>

        <div className="absolute bottom-0 w-full max-w-4xl mt-8 p-6 bg-white rounded-lg shadow-lg flex justify-between">
          <div className="flex flex-row space-x-6 w-full">
            <div className="flex-1">
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg text-black"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="flex-1">
              <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
              <select
                id="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg  text-black"
              >
                <option value="">Select Guests</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>

            <div className="flex-1">
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2 ">Date</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="w-full p-2 border border-gray-300 rounded-lg  text-black"
                dateFormat="MMMM d, yyyy"
              />
            </div>

            <div className="flex-1 flex items-center">
              <button
                onClick={handleSearch}
                className="w-full bg-yellow-400 text-black font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300 ease-in-out"
              >
                Search
              </button>
            </div>
          </div>
        </div>

      </div>
    </main>
    <CheckingMONGO />
    </div>
    </>
  );
}

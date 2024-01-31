import React, { useState, useEffect } from 'react'
import { useMyContext } from './MyContext'

const Info = (props) => {
  const { globalState, setGlobalState } = useMyContext()

  console.log(globalState)
  //     const [data, setData] = useState([]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch('./data.json'); // Assuming data.json is in the src folder
  //         const jsonData = await response.json();
  //         setData(jsonData);
  //       } catch (error) {
  //         console.error('Error fetching data:', error);
  //       }
  //     };

  //     fetchData();
  //   }, []);
  return (
    <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFR-LWh9fmtCfiEQjlCgicippSwxossXwSbw&usqp=CAU')] h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-white ">
        TV Shows
      </h1>

      <div className="show-card bg-gray-300 p-6 rounded-xl shadow-md mb-8 flex flex-row text-xl mx-8 border-4 border-blue-800">
        <div>
          <img
            src="data:image/jpeg;base64,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"
            className="w-48 h-48  rounded-md mb-4 mr-32  border-2 border-black"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Name</h2>
          <p className="text-gray-700 mb-4">Rating: </p>
          <p className="text-gray-700 mb-4">Language: </p>
          <p className="text-gray-700 mb-4">Genre: </p>
          <p className="text-gray-700 mb-4">Status: </p>
          <p className="text-gray-700 mb-4">Summary: </p>
          <p className="text-gray-700 mb-4">Country: </p>
          <p className="text-gray-700 mb-4">Runtime: </p>
          <p className="text-gray-700 mb-4">Start Date - End Date:</p>
          <p className="text-gray-700 mb-4">Days and Timing: </p>
          <p className="text-gray-700 mb-4">Network: </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
            Watch Now
          </button>
        </div>
      </div>
    </div>
  )
}
export default Info

import React, { useState, useEffect } from "react";
import { useMyContext } from "./MyContext";

const Info = ({ ...props }) => {
  const { globalState, setGlobalState } = useMyContext();

  console.log(globalState);
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
            alt="hello"
            src={globalState.show.image ? globalState.show.image.medium : null}
            className="w-48 h-48  rounded-md mb-4 mr-32  border-2 border-black"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">{globalState.show.name}</h2>
          <p className="text-gray-700 mb-4">
            Rating: {globalState.show.rating.average}{" "}
          </p>{" "}
          <p className="text-gray-700 mb-4">
            Language: {globalState.show.language}{" "}
          </p>
          <p className="text-gray-700 mb-4">
            Genre:{" "}
            {globalState.show.genres.map((e) => {
              return <span className="ml-2">{e}</span>;
            })}{" "}
          </p>
          <p className="text-gray-700 mb-4">
            Status: {globalState.show.status}
          </p>
          <p className="text-gray-700 mb-4 ">
            Summary: {globalState.show.summary}
          </p>
          <p className="text-gray-700 mb-4">
            Country:{" "}
            {globalState.show.county ? globalState.show.county.name : null}
          </p>
          <p className="text-gray-700 mb-4">Runtime: {globalState.show.name}</p>
          <p className="text-gray-700 mb-4">
            Start Date - End Date: {globalState.show.name}
          </p>
          <p className="text-gray-700 mb-4">
            Days and Timing: {globalState.show.name}
          </p>
          <p className="text-gray-700 mb-4">Network: {globalState.show.name}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
            Watch Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default Info;

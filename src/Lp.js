import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'

import axios, { all } from 'axios'
import Loader from './component/Loader'
import Stars from './component/Stars'
import Info from './Info'
import { useMyContext } from './MyContext'

function Lp() {
  const url = 'https://api.tvmaze.com/search/shows?q=all'
  const [Data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [genres, setGenres] = useState(['All'])
  const [currGen, setCurrGen] = useState('All')
  const { globalState, setGlobalState } = useMyContext()

  const getFeeds = async () => {
    try {
      const response = await axios.get(url)
      const result = response.data
      // console.log(result);
      setData(result)
      // Data.slice(20);
      // console.log(Data);
      setLoading(false)
    } catch (error) {
      setLoading(true)
      console.error(error)
    }
  }

  const findData = (id) => {
    const data = Data.filter((ele) => {
      return ele.show.id == id
    })

    setGlobalState(data[0])
  }

  useEffect(() => {
    getFeeds()
  }, [])
  useEffect(() => {
    let allGenera = Data.map((item) => {
      return item.show.genres.map((element) => {
        return element
      })
    })
    allGenera = allGenera.flat(1)

    // console.log(allGenera);
    const setOfGenera = new Set(allGenera)
    setOfGenera.add('All')
    // setOfGenera.sort();
    setGenres([...setOfGenera])
  }, [Data])

  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [status, setStatus] = useState('All') // Default to show all ministries
  // Default to no sorting
  const itemsPerPage = 5

  // Apply filters based on search, ministry, and sentiment
  const filteredData = Data.filter((item) => {
    return (
      item.show.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (status === 'All' || item.show.status === status) &&
      (currGen === 'All' || item.show.genres.includes(currGen))
    )
  })

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredData.length / itemsPerPage)

  // Ensure currentPage is within a valid range
  const validPage = Math.min(Math.max(currentPage, 1), totalPages)

  // Calculate the index of the first and last items to display on the current page
  const indexOfLastItem = validPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem)

  // Function to handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className="App bg-[#25274d] pt-7">
      <div className="mb-4 ml-8">
        <input
          type="text"
          placeholder="Search movie show..."
          className="px-2 py-1 border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="ml-4 px-2 py-1 border rounded"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Running">Running</option>
          {/* Replace with actual ministries */}
          <option value="Ended">Ended</option>
          <option value="In Development">In Development</option>
          {/* Add more ministries here */}
        </select>
        <select
          className="ml-4 px-2 py-1 border rounded"
          value={currGen}
          onChange={(e) => setCurrGen(e.target.value)}
        >
          {genres.map((item) => {
            return <option value={item}>{item}</option>
          })}
        </select>
      </div>
      {currentItems.map((item) => (
        <div
          key={item.id}
          className="bg-[#464866] p-4 rounded shadow-md flex space-x-4 border-4 border-black  mx-6 mb-7"
        >
          <img
            alt={item.show.name}
            src={item.show.image ? item.show.image.medium : null}
            className="w-60 h-52 border-4 border-black mr-8"
          />
          <div className="w-3/4">
            <div className="grid grid-cols-2 gap-4">
              <h2 className="text-3xl font-semibold text-white mb-4">
                <Link to="/info" onClick={() => findData(item.show.id)}>
                  {item.show.name}
                </Link>
                <Routes>
                  <Route path="/info" render={(props) => <Info {...props} />} />
                </Routes>
              </h2>
              <div className="text-white text-xl text-right">
                {item.show.rating.average ? (
                  <div className="flex">
                    <p className="p-1 mr-5 mb-1 text-2xl">rating :</p>
                    <div className="flex mt-2">
                      <Stars stars={item.show.rating.average} />
                    </div>
                    <p className="p-1 mr-5 mb-1 text-2xl">
                      {item.show.rating.average}
                    </p>
                  </div>
                ) : (
                  <Stars stars={0} />
                )}
              </div>
            </div>
            <p className="text-white text-l mb-2">{item.summary}</p>
            <p className="text-white text-xl mb-2">Ministry: {item.ministry}</p>
            <p className="text-white text-xl mb-2">
              Sentiment: {item.sentiment}
            </p>
          </div>
        </div>
      ))}
      <div className="flex">
        <div className="text-white mr-8  pt-4 ml-8 text-xl">
          <h2>Page no : </h2>
        </div>
        <div className="mt-4 ">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-2 mr-2 rounded ${
                validPage === index + 1
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-300 text-gray-700'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Lp

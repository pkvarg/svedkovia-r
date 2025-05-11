import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Counter = () => {
  const navigate = useNavigate()
  const [count, setCount] = useState(0)

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const apiUrl = 'https://hono-api.pictusweb.com/api/stats/sv'
  //const apiUrl = 'http://localhost:3013/api/stats/sv'

  const getStats = async () => {
    try {
      const { data } = await axios.get(apiUrl, config)

      setCount(data.visitors)
    } catch (err) {
      setError('Failed to fetch bot statistics')
      console.error('Error fetching bots:', err)
    }
  }

  // const getVisitors = async () => {
  //   const { data } = await axios.get(
  //     `https://api.pictusweb.com/api/visitors/svedkovia/counter`,

  //     // `http://localhost:2000/api/visitors/svedkovia/counter`,

  //     config
  //   )
  //   console.log(data)
  //   setCount(data)
  // }

  return (
    <div className="bg-[#a69f83] h-[100vh] text-[25px] p-10 flex flex-col gap-4">
      <button
        onClick={getStats}
        className="border px-2 rounded-xl w-[100%] lg:w-[20%] cursor-pointer"
      >
        Zobraziť počet návštev
      </button>

      <h1 className="text-[35px] ml-2">Počet návštev: {count}</h1>

      <button
        onClick={() => navigate('/')}
        className="border px-2 rounded-xl w-[100%] lg:w-[20%] cursor-pointer"
      >
        Späť na stránku
      </button>
    </div>
  )
}

export default Counter

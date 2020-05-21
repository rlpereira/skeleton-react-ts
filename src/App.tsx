import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'
import List from './components/List'

function App () {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)

    axios.get('https://reqres.in/api/users?page=2').then((res) => {
      setData(res.data.data)
      setIsLoading(false)
    })
  }, [])

  return (
    <div className='App'>
      <h1>Hello Skeleton + React + Typescript</h1>
      <List loading={isLoading} data={data} />
    </div>
  )
}

export default App

import React, { useState, useEffect } from 'react'
import './App.css'
import fetchData from './services/getImages'
import Header from './components/Header'
import TitlePics from './components/TitlePics'
import AnimePic from './components/AnimePic'

function App () {
  const [data, setData] = useState('')
  const [links, setLinks] = useState([])
  const [name, setName] = useState('')
  const loadImages = async () => {
    const response = await fetchData()
    if (response) {
      setData(response)
    } else {
      console.log('Error al cargar información desde la API')
    }
  }

  useEffect(() => {
    setLinks(data.images)
    setName(data.names)
  }, [data])

  return (
    <>
      <Header />

      <div className='container'>
        <button onClick={loadImages}>GENERATE</button>
        {name && <TitlePics name={name} />}
        <div className='images'>
          {links && links.map((link) => <AnimePic link={link} key={link} />)}
        </div>
      </div>
    </>
  )
}

export default App

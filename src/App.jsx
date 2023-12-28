import React, { useState, useEffect } from 'react'
import './App.css'
function App () {
  const [data, setData] = useState('')
  const [links, setLinks] = useState([])
  const [name, setName] = useState('')
  const [clic, setClic] = useState(false)

  useEffect(() => {
    fetch('https://waifu.it/api/waifu', {
      method: 'GET',
      headers: {
        Authorization: 'OTI2MzEyNDI1NzEwNTc5NzEy.MTcwMzcwMjMyOA--.c3990f5d3a'
      }
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.error('Error fetching image:', error)
      })
  }, [clic])

  useEffect(() => {
    setLinks(data.images)
    setName(data.names)
  }, [data])

  const imgError = (event) => {
    event.target.src = './404.gif'
  }

  return (
    <>
      <h1>Anime Waifu Heaven</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
        adipisci distinctio. Facilis illo nihil rem itaque architecto sunt nisi
        fuga, reprehenderit doloribus libero earum fugit. Ad tenetur minima quo
        sint nihil quam itaque rem dicta quia atque laboriosam quos, aliquam
        nostrum ut dolor temporibus odit eos iste quibusdam! Ipsum, dolore.
      </p>

      <div className='container'>
        <button
          onClick={() => {
            clic ? setClic(false) : setClic(true)
          }}
        >
          Regenerate
        </button>
        {name && (
          <div className='title'>
            <h2>
              {name.en} - {name.jp}
            </h2>
            <h3>{name.alt}</h3>
          </div>
        )}
        <div className='images'>
          {links &&
    links.map((link) => (
      <React.Fragment key={link}>
        <img src={link.replace(' ', '')} alt='enlace' onError={imgError} />
      </React.Fragment>
    ))}
        </div>
      </div>
    </>
  )
}

export default App

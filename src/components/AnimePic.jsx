import React from 'react'

function AnimePic ({ link }) {
  const imgError = (event) => {
    event.target.src = './404.gif'
    event.target.href = '#'
  }

  return (
    <>
      <a href={link} target='_blank' rel='noreferrer'>
        <img
          src={link.replace(' ', '')}
          alt='enlace'
          onError={imgError}
        />
      </a>

    </>
  )
}

export default AnimePic

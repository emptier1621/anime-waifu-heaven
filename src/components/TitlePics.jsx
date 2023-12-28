function TitlePics ({ name }) {
  return (
    <>
      <div className='title'>
        <h2>
          {name.en} - {name.jp}
        </h2>
        <h3>{name.alt}</h3>
      </div>
    </>
  )
}

export default TitlePics

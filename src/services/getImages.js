const KEY = String(import.meta.env.VITE_API_KEY)

const fetchData = async () => {
  const data = await fetch('https://waifu.it/api/waifu', {
    method: 'GET',
    headers: {
      Authorization: KEY
    }
  })

  if (!data.ok) {
    throw new Error('Error en la solicitud a la API')
  }

  const output = await data.json()
  return output
}

export default fetchData

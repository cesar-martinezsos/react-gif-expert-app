export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=A4zX4qjuZol0t0FJVWw9ANQototv73vD`
  const resp = await fetch(url)
  const { data } = await resp.json()

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }
  })
  return gifs
}

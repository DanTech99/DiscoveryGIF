
const apiKey = "nBFalPFCXRgO8Fr0KQhZ04BkJSrIyTm7"



export const getGifs = ({keyword = 'anime'} = {}) => {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=es`;

    return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const { data } = response
      const gifs = data.map(image => {
        const {images, title, id} = image
        const {url} = image.images.downsized_medium
      
        return {title, id, url}
      })
      console.log(gifs)
      return gifs
    })
}
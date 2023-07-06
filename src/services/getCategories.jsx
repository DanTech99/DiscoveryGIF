const apiKey = "nBFalPFCXRgO8Fr0KQhZ04BkJSrIyTm7"

export const getCategories = () => {
    const apiURL = `https://api.giphy.com/v1/gifs/categories?api_key=${apiKey}&limit=10&offset=0&rating=g&lang=es`;

    return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
        const  {data} = response
        const categories = data.map(category => {
            const {name} = category
            return {name}
        })
        return categories;
    })
}
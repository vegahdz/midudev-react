const apiKey = 'IuWWLqUZ5Hs6PpbYhwLJkmjxChNGfsjo'


async function getGifs ({keyword = 'morty'} = {}) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;

    const res = await fetch(apiURL);
    const response = await res.json();
    const { data } = response;
    const gifs = data.map(image => {
        const {images, title, id} = image
        const { url } = image.images.downsized_medium
        return {title, id, url}
    });
    return gifs;
}

export default getGifs
import { GIPHY_API_KEY, MAX_GIFS } from "../../config";

export const getGifs = async (categoryName) => {
  try {
    const currentDate = new Date();
    const randomSec = currentDate.getSeconds();
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${categoryName}&limit=${MAX_GIFS}&offset=${randomSec}&rating=g&lang=es`;
    const response = await fetch(url);
    const { data } = await response.json();
    let gifs = [];
    if (data.length > 0) {
      gifs = data.map(({ id, title, images }) => ({
        id,
        title,
        url: images?.downsized_medium.url,
      }));
    }
    return gifs;
  } catch (error) {
    console.log(error);
  }
};

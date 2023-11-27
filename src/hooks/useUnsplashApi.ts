import axios from "axios";

const accessKey = "kne3nTv7__ntufHd-qCFdSEZifJvlmPDyOVwha9jWqU";
const unsplashUrl = (perPage: number) =>
  `https://api.unsplash.com/photos/?client_id=${accessKey}&per_page=${perPage}`;
const randomUnSplashUrl = `https://api.unsplash.com/photos/random/?client_id=${accessKey}`;

interface UnsplashPhotoFortmat {
  url: string;
  alt: string;
  urls: { regular: string };
  alt_description: string;
}

const useUnsplashApi = async (perPage: number = 10) => {
  try {
    if (perPage === 1) {
    }

    const url = perPage === 1 ? randomUnSplashUrl : unsplashUrl(perPage);
    const response = await axios.get(url);
    let data;
    if (perPage === 1) {
      data = [response.data];
    } else {
      data = response.data; // this will return 10 results
    }
    const slicedArray = data.map((item: UnsplashPhotoFortmat) => {
      return {
        url: item.urls.regular,
        alt: item.alt_description,
      };
    });
    return slicedArray;
  } catch (error) {
    console.log("Error: ", error);
  }
};

export default useUnsplashApi;

import axios from "axios";
import { ReactNode, useState, useEffect } from "react";

const accessKey = "kne3nTv7__ntufHd-qCFdSEZifJvlmPDyOVwha9jWqU";
const unsplashUrl = `https://api.unsplash.com/photos/?client_id=${accessKey}`;

interface UnsplashPhotoFortmat {
  id: string;
  url: string;
  alt: string;
  urls: { regular: string };
  alt_description: string;
}

const UseUnsplashApi = async (numberOfImgs: number) => {
  try {
    const response = await axios.get(unsplashUrl);
    const data = response.data; // this will return 10 results
    const slicedArray = data
      .slice(0, numberOfImgs)
      .map((item: UnsplashPhotoFortmat) => {
        return {
          id: item.id,
          url: item.urls.regular,
          alt: item.alt_description,
        };
      });
    return slicedArray;
  } catch (error) {
    console.log("Error: ", error);
  }
};

export default UseUnsplashApi;

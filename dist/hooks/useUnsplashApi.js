var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
const accessKey = "kne3nTv7__ntufHd-qCFdSEZifJvlmPDyOVwha9jWqU";
const unsplashUrl = (perPage) => `https://api.unsplash.com/photos/?client_id=${accessKey}&per_page=${perPage}`;
const randomUnSplashUrl = `https://api.unsplash.com/photos/random/?client_id=${accessKey}`;
const useUnsplashApi = (perPage = 10) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const url = perPage === 1 ? randomUnSplashUrl : unsplashUrl(perPage);
        const response = yield axios.get(url);
        let data;
        if (perPage === 1) {
            data = [response.data];
        }
        else {
            data = response.data; // this will return 10 results
        }
        const slicedArray = data.map((item) => {
            return {
                url: item.urls.regular,
                alt: item.alt_description,
            };
        });
        return slicedArray;
    }
    catch (error) {
        console.log("Error: ", error);
    }
});
export default useUnsplashApi;

import { ImageFormat } from "../../utils/constants";
interface ImageProps {
    imgList: ImageFormat[];
    selectedImgIndex: number;
}
declare function Carousel({ imgList, selectedImgIndex }: ImageProps): import("react/jsx-runtime").JSX.Element;
export default Carousel;

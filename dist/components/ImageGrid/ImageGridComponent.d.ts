import { ImageFormat } from "../../utils/constants";
interface ImageGridProps {
    imagesGridHeight: string;
    imagesGridMaxWidth?: string;
    images: ImageFormat[];
}
export declare const ImageGridComponent: ({ imagesGridMaxWidth, imagesGridHeight, images, }: ImageGridProps) => import("react/jsx-runtime").JSX.Element;
export default ImageGridComponent;

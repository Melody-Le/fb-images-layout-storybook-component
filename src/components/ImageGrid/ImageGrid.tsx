export type Props = {};

interface ImageGridProps {
  className?: string;
  numberOfImgs?: number;
  showModal?: boolean;
  imagesGridWidth?: number;
  imagesGridHeight?: number;
}

const ImageGrid = ({
  className = "",
  numberOfImgs = 1,
  showModal = false,
  imagesGridWidth,
  imagesGridHeight,
}: ImageGridProps) => {
  const images = [
    "https://i.pinimg.com/564x/0f/71/0b/0f710bb81c2ff1aff8976239c18acfd2.jpg",
    "https://i.pinimg.com/564x/57/37/e8/5737e8017b1c6946a6eb25b6db03a72e.jpg",
    "https://i.pinimg.com/736x/55/ea/08/55ea0881688047362cb6d23f47166b65.jpg",
    "https://i.pinimg.com/564x/48/40/05/4840054e287358f6b95e6dacfe395f2b.jpg",
    "https://i.pinimg.com/564x/9c/82/a0/9c82a08a4a0e3b581122ab2576f1c07d.jpg",
  ];
  return (
    <div
      style={{
        width: imagesGridWidth,
        height: imagesGridHeight,
      }}
    >
      <img src={images[0]} alt="first" />
    </div>
  );
};
export default ImageGrid;

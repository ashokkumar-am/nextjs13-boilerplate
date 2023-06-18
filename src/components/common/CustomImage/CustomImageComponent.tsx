import Image, { ImageProps } from "next/image";

interface CustomImageProps
  extends Omit<ImageProps, "src" | "alt" | "width" | "height"> {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt,
  width,
  height,
  ...props
}) => {
  return <Image src={src} alt={alt} width={width} height={height} {...props} />;
};

export default CustomImage;

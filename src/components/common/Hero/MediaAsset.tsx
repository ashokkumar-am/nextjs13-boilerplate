import Image from 'next/image';
import ReactPlayer from 'react-player';

interface MediaAssetProps {
  src: string;
  alt: string;
  type: 'image' | 'video';
}

const MediaAsset: React.FC<MediaAssetProps> = ({ src, alt, type }) => {
  if (type === 'image') {
    return <Image src={src} alt={alt} />;
  } else if (type === 'video') {
    return <ReactPlayer url={src} controls={true} />;
  } else {
    return null;
  }
};

export default MediaAsset;

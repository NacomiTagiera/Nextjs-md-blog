import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "./Picture.scss";

interface Props {
  alt: string;
  classes: string;
  source: string;
}

export default function Picture({ alt, classes, source }: Props) {
  return (
    <LazyLoadImage
      alt={alt}
      className={`d-block picture ${classes}`}
      src={source}
    />
  );
}

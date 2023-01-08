import { LazyLoadImage } from "react-lazy-load-image-component";
import { IPicture } from "../../types/main";
import "./Picture.scss";

export default function Picture({ alt, classes, source }: IPicture) {
  return (
    <LazyLoadImage
      alt={alt}
      className={`d-block picture ${classes}`}
      src={source}
      title={alt.includes("slide") ? "" : alt}
    />
  );
}

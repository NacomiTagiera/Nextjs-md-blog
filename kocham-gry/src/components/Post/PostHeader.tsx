import { Fragment } from "react";
import CustomImage from "../Common/CustomImage";

interface Props {
  date: string;
  excerpt: string;
  thumbnail: string;
  title: string;
}

export default function PostHeader({ date, excerpt, thumbnail, title }: Props) {
  return (
    <Fragment>
      <div className="max-w-3xl">
        <time className="text-secondary text-sm md:text-md md:text-lg">
          {date}
        </time>
        <h2 className="font-bold mb-6 text-3xl sm:text-4xl md:text-5xl text-center tracking-wide">
          {title}
        </h2>
        <p className="leading-8 max-w-3xl sm:mt-4 text-xl">{excerpt}</p>
      </div>
      <div className="relative w-full aspect-video my-8 overflow-hidden px-6 md:px-0 rounded-lg">
        <CustomImage src={thumbnail} alt={title} width={768} height={432} />
      </div>
    </Fragment>
  );
}

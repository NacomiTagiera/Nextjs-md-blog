import { Fragment } from "react";

interface Props {
  date: string;
  excerpt: string;
  thumbnail: string;
  title: string;
}

export default function PostHeader({ date, excerpt, thumbnail, title }: Props) {
  return (
    <Fragment>
      <div className="px-6 py-16 pb-48 mx-auto -mb-48 text-center md:pb-96 md:-mb-96">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-2 space-x-2 text-sm">
            <p>{date}</p>
          </div>
          <div className="font-extrabold tracking-tight text-w-4xl sm:text-4xl">
            {title}
          </div>
          <div className="max-w-3xl mx-auto mt-3 text-xl leading-8 sm:mt-4">
            {excerpt}
          </div>
        </div>
      </div>
      <div className="max-w-5xl px-6 mx-auto my-16 md:px-8">
        <img
          className="object-cover w-full rounded-xl aspect-video"
          src={thumbnail}
        />
      </div>
    </Fragment>
  );
}

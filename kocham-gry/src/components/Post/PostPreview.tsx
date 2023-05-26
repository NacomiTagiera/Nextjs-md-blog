import Link from "next/link";
import { BiTimeFive } from "react-icons/bi";
import CustomImage from "../Common/CustomImage";

interface Props {
  category: string;
  date: string;
  excerpt: string;
  slug: string;
  thumbnail: string;
  title: string;
}

export default function PostPreview({
  category,
  date,
  excerpt,
  slug,
  thumbnail,
  title,
}: Props) {
  return (
    <li className="relative bg-white max-w-sm md:max-w-none overflow-hidden rounded-b-lg shadow-md">
      <div className="relative w-full aspect-video">
        <CustomImage src={thumbnail} alt={title} width={768} height={432} />
      </div>
      <div className="p-4 text-primary">
        <span className="bg-secondary mr-2 py-1 px-2 rounded-lg text-sm text-white uppercase">
          {category}
        </span>
        <h3 className="font-semibold leading-6 mt-2 text-xl">{title}</h3>
        <time className="flex items-center mb-3 text-sm">
          <BiTimeFive className="mr-1" />
          {date}
        </time>
        <p>{excerpt}</p>
      </div>
      <Link href={`/posts/${slug}`} className="absolute inset-0"></Link>
    </li>
  );
}

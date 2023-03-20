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
  return <div>PostPreview</div>;
}

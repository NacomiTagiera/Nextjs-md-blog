interface Props {
  category: string;
  excerpt: string;
  slug: string;
  thumbnail: string;
  title: string;
}

export default function PostPreview({
  category,
  excerpt,
  slug,
  thumbnail,
  title,
}: Props) {
  return <div>PostPreview</div>;
}

interface Props {
  content: string;
}

export default function PostBody({ content }: Props) {
  return (
    <div
      className='prose prose-invert max-w-none md:prose-lg lg:prose-xl prose-headings:text-secondary prose-h4:italic prose-h4:text-white prose-p:text-justify'
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

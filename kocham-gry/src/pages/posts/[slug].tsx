import PostHeader from "@/components/Post/PostHeader";
import PostBody from "@/components/Post/PostBody";

export default function PostPage() {
  return (
    <article>
      <PostHeader
        date="19-02-2023"
        excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quod
      quisquam nihil officia assumenda, ipsa obcaecati doloremque aliquid ab
      asperiores?"
        thumbnail="/images/posts/csgo/thumbnail.jpg"
        title="Counter-Strike: Global Offensive"
      />
      <PostBody content="" />
    </article>
  );
}

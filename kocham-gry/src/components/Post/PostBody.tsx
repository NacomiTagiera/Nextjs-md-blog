import styles from "@/styles/PostBody.module.css";

interface Props {
  content: string;
}

export default function PostBody({ content }: Props) {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={styles.markdown}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

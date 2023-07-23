import styles from '@/styles/PostBody.module.css';

interface Props {
  content: string;
}

export default function PostBody({ content }: Props) {
  return (
    <div
      className={styles.markdown}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

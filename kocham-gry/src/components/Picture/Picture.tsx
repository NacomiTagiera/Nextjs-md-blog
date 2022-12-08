import "./Picture.scss";

interface Props {
  alt: string;
  classes: string;
  lazyLoading: boolean;
  source: string;
}

export default function Picture({ alt, classes, lazyLoading, source }: Props) {
  return (
    <img
      loading={lazyLoading ? "lazy" : undefined}
      src={source}
      alt={alt}
      className={`d-block ${classes}`}
    />
  );
}

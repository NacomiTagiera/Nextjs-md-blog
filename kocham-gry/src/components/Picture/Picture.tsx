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
      src={source}
      alt={alt}
      loading={lazyLoading ? "lazy" : undefined}
      className={`d-block ${classes}`}
    />
  );
}

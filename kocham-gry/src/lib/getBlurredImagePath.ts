export default function getBlurredImagePath(filename: string) {
  const lastIndex = filename.lastIndexOf("/");
  const result = filename.substring(0, lastIndex + 1) + "blurred.jpg";

  return result;
}

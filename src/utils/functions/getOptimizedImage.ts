import { getImageProps } from "next/image";

function getBackgroundImage(srcSet = "") {
  const imageSet = srcSet
    .split(", ")
    .map((str) => {
      const [url, dpi] = str.split(" ");
      return `url("${url}") ${dpi}`;
    })
    .join(", ");
  return `image-set(${imageSet})`;
}

export function getOptimizedImage({
  src,
  width,
  height,
  alt,
}: {
  src: string;
  width: number;
  height: number;
  alt?: string;
}) {
  const {
    props: { srcSet, sizes },
  } = getImageProps({ src, width: width, height: height, alt: alt ?? "" });
  return getBackgroundImage(srcSet);
}

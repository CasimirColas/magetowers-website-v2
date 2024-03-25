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
  quality,
}: {
  src: string;
  width: number;
  height: number;
  alt?: string;
  quality?: number;
}) {
  const {
    props: { srcSet, sizes },
  } = getImageProps({
    src,
    width: width,
    height: height,
    alt: alt ?? "",
    quality: quality ?? 80,
  });
  return getBackgroundImage(srcSet);
}

export default function scrollBackgroundWithContent(
  scrollId: string,
  imageId: string
) {
  if (typeof window === "undefined") return;
  const div = document.getElementById(scrollId);
  const image = document.getElementById(imageId);
  if (!div || !image) return;
  const handleScroll = () => {
    const scrollTotalHight = div.scrollHeight - div.clientHeight;
    image.style.setProperty(
      "object-position",
      `0% ${(div.scrollTop / scrollTotalHight) * 100}%`
    );
  };
  div.addEventListener("scroll", handleScroll);
  return () => {
    div.removeEventListener("scroll", handleScroll);
  };
}

export default function scrollBackgroundWithContent(id: string) {
  if (typeof window === "undefined") return;
  const div = document.getElementById(id);
  if (!div) return;
  const handleScroll = () => {
    const scrollTotalHight = div.scrollHeight - div.clientHeight;
    div.style.setProperty(
      "background-position-y",
      `${(div.scrollTop / scrollTotalHight) * 100}%`
    );
  };
  div.addEventListener("scroll", handleScroll);
  return () => {
    div.removeEventListener("scroll", handleScroll);
  };
}

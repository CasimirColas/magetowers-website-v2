export default function followCursor(
  id: string,
  offsetX: number,
  offsetY: number
) {
  if (typeof window === "undefined") return;
  const element = document.getElementById(id);
  if (!element) return;
  element.style.position = "fixed";
  const handleMouseMove = (e: MouseEvent) => {
    element.style.left = `${e.clientX + offsetX}px`;
    element.style.top = `${e.clientY + offsetY}px`;
  };
  window.addEventListener("mousemove", handleMouseMove);
  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
}

export function adjustFontSize(id: string, ratio: number) {
  if (typeof window === "undefined") return;
  let textElement = document.getElementById(id);
  let parentElement = textElement?.parentElement;
  if (!textElement || !parentElement) return;
  const parentClientWidth = parentElement?.clientWidth;
  textElement.style.fontSize = `${parentClientWidth * ratio}px`;
}

import Link from "next/link";

function MainActionButton({ url, text }: { url: string; text: string }) {
  return (
    <Link
      className="p-4 rounded-full bg-green-400 text-xl font-bold text-green-800 shadow-lg text-center w-10/12"
      href={url}
    >
      {text}
    </Link>
  );
}

export default MainActionButton;

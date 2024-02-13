import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export interface ThanksCardProps {
  title: string;
  subText: string;
  image: string;
  alt: string;
  description?: JSX.Element;
}

function ThanksCard({
  title,
  subText,
  image,
  alt,
  description,
}: ThanksCardProps) {
  return (
    <Card className="flex-row flex sm:h-28 h-24">
      <Image
        className="h-full w-auto rounded-l-lg aspect-square object-center"
        src={image}
        alt={alt}
        width={200}
        height={200}
      />
      <CardHeader className="pt-4 sm:pt-6 pr-0">
        <CardTitle className="sm:text-2xl text-lg">{title}</CardTitle>
        <CardDescription className="sm:text-base text-xs">
          {subText}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0 pr-2 sm:pr-6 ml-auto">
        {description}
      </CardContent>
    </Card>
  );
}

export default ThanksCard;

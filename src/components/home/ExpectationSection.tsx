import ScreenSection from "../layout/ScreenSection";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

function ExpectationSection() {
  return (
    <ScreenSection className="flex flex-col items-center sm:flex-row bg-mossyWall bg-cover bg-right gap-8">
      <Card className="w-full sm:max-w-xl h-full bg-opacity-95 rounded-lg">
        <CardHeader>
          <CardTitle
            className="text-3xl font-title text-center mt-4 text-tile sm:text-5xl"
            style={{
              textShadow: "-2px 2px 0px #69a0bd, -1px 2px 0px #69a0bd",
            }}
          >
            Play the game !
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="sm:text-xl sm:py-8 px-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi,
            repellat. Explicabo molestias fuga ex perferendis! Voluptatum
            dolorum est neque minima reiciendis numquam consectetur consequuntur
            quod asperiores, earum non atque cum.
          </p>
        </CardContent>
      </Card>
    </ScreenSection>
  );
}

export default ExpectationSection;



import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
const OnzeDienstenCard = ({ nummer, titel, beschrijving, afbeelding }: { nummer: string; titel: string; beschrijving: string; afbeelding: string }) => {
  return (
    <>
    <Card className="relative mx-auto w-full max-w-sm pt-0" key={nummer}>
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={afbeelding}
        alt={titel}
        className="relative z-20 aspect-video w-full object-cover "
      />
      <CardHeader>

        <CardTitle>{titel}</CardTitle>
        <CardDescription>
          {beschrijving}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">Meer Info</Button>
      </CardFooter>
    </Card>
    </>
  )
}

export default OnzeDienstenCard


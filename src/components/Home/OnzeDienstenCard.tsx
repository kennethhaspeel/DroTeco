import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const OnzeDienstenCard = ({
  nummer,
  titel,
  beschrijving,
  afbeelding,
  pagina,
}: {
  nummer: string;
  titel: string;
  beschrijving: string;
  afbeelding: string;
  pagina: string;
}) => {
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
          <CardDescription>{beschrijving}</CardDescription>
        </CardHeader>
        <CardFooter>
          <Link
            to={pagina}
            aria-label={`Meer over ${titel}`}
            className="font-color-orange mt-auto inline-flex self-end rounded-sm pt-5 transition-transform duration-200 hover:translate-x-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
          >
            <ArrowRight aria-hidden="true" size={20} />
          </Link>
        </CardFooter>
      </Card>
    </>
  );
};

export default OnzeDienstenCard;

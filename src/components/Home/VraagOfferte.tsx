import VraagOfferteImage from "@/assets/afbeeldingen/vraagofferte.png";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const VraagOfferte = () => {
  return (
    <section className="relative isolate my-4 flex min-h-50 items-center overflow-hidden">
      <img
        src={VraagOfferteImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-6 text-white">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-4">
          <div className="md:w-2/3 md:pl-10 lg:pl-32">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Een inspectie vanuit de lucht?
            </h2>
            <p className="mt-2 text-white/85">Vertel ons wat u nodig hebt. Wij bekijken samen welke oplossing het meest geschikt is voor uw project.</p>
          </div>
          <div className="flex md:w-1/2 md:justify-end pr-20">
            <Button className="bg-color-orange">Vraag Offerte <ArrowRight aria-hidden="true" size={20} /></Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VraagOfferte;

import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Fotogrammetrie from "@/assets/afbeeldingen/diensten/fotogrammetrie.png";
import Thermografie from "@/assets/afbeeldingen/diensten/thermografie.png";
import Gebouwinspecties from "@/assets/afbeeldingen/diensten/gebouwinspecties.png";
import Luchtfotografie from "@/assets/afbeeldingen/diensten/luchtfotografie.png";
import Hulpdiensten from "@/assets/afbeeldingen/diensten/hulpverlening.png";
const diensten = [
  {
    nummer: "01",
    titel: "Fotogrammetrie",
    beschrijving:
      "Zet luchtbeelden om in nauwkeurige kaarten en 3D-modellen.",
    afbeelding: Fotogrammetrie,
    pagina: "/fotogrammetrie",
  },
  {
    nummer: "02",
    titel: "Thermografie",
    beschrijving:
      "Breng warmteverschillen in beeld voor gerichte inspecties.",
    afbeelding: Thermografie,
    pagina: "/thermografie",
  },
  {
    nummer: "03",
    titel: "Gebouwinspecties",
    beschrijving:
      "Bekijk daken en gevels veilig en gedetailleerd vanuit de lucht.",
    afbeelding: Gebouwinspecties,
    pagina: "/gebouwinspecties",
  },
  {
    nummer: "04",
    titel: "Luchtfotografie",
    beschrijving:
      "Leg locaties en projecten vast vanuit een nieuw perspectief.",
    afbeelding: Luchtfotografie,
    pagina: "/luchtfotografie",
  },
  {
    nummer: "05",
    titel: "Hulpdiensten",
    beschrijving:
      "Voorzie hulpdiensten van actueel overzicht vanuit de lucht.",
    afbeelding: Hulpdiensten,
    pagina: "/hulpdiensten",
  },
];

const OnzeDiensten = () => {
  return (
    <section
      aria-labelledby="diensten-title"
      className="bg-background px-6 py-5 text-foreground sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 max-w-2xl">
          <p className="font-color-orange text-sm font-semibold uppercase tracking-[0.18em]">
            Wat we doen
          </p>
          <h2
            id="diensten-title"
            className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Onze diensten
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Luchtbeelden en data die helpen om locaties beter te begrijpen.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
          {diensten.map((dienst) => (
            <article
              key={dienst.nummer}
              className="flex min-h-56 flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="font-color-orange text-sm font-semibold">
                {dienst.nummer}
              </span>
              <img
                src={dienst.afbeelding}
                alt={dienst.titel}
                className="relative z-20 aspect-video w-full object-cover"
              />
              <h3 className="mt-8 text-xl font-semibold text-card-foreground">
                {dienst.titel}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {dienst.beschrijving}
              </p>
              <Link
                to={dienst.pagina}
                aria-label={`Meer over ${dienst.titel}`}
                className="font-color-orange mt-auto inline-flex self-end rounded-sm pt-5 transition-transform duration-200 hover:translate-x-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
              >
                <ArrowRight aria-hidden="true" size={20} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnzeDiensten;
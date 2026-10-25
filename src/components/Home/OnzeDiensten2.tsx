
import OnzeDienstenCard from './OnzeDienstenCard'
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
const OnzeDiensten2 = () => {
  return (
    <section
      aria-labelledby="diensten-title"
      className="bg-background px-6 py-20 text-foreground sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="font-color-orange text-sm font-semibold uppercase tracking-[0.18em]">
            Wat we doen
          </p>
          <h2
            id="diensten-title"
            className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Onze diensten
          </h2>
          <p className="mt-4 text-base leading-7 text-[#101315]/65">
            Luchtbeelden en data die helpen om locaties beter te begrijpen.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
          {diensten.map((dienst) => (
            <OnzeDienstenCard
              key={dienst.nummer}
              nummer={dienst.nummer}
              titel={dienst.titel}
              beschrijving={dienst.beschrijving}
              afbeelding={dienst.afbeelding}
              pagina={dienst.pagina}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnzeDiensten2;
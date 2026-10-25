

const diensten = [
  {
    nummer: "01",
    titel: "Fotogrammetrie",
    beschrijving:
      "Zet luchtbeelden om in nauwkeurige kaarten en 3D-modellen.",
      afbeelding:"/afbeeldingen/diensten/fotogrammetrie.png"
  },
  {
    nummer: "02",
    titel: "Thermografie",
    beschrijving:
      "Breng warmteverschillen in beeld voor gerichte inspecties.",
    afbeelding:"/afbeeldingen/diensten/thermografie.png"
  },
  {
    nummer: "03",
    titel: "Gebouwinspecties",
    beschrijving:
      "Bekijk daken en gevels veilig en gedetailleerd vanuit de lucht.",
    afbeelding:"/afbeeldingen/diensten/gebouwinspecties.png"
  },
  {
    nummer: "04",
    titel: "Luchtfotografie",
    beschrijving:
      "Leg locaties en projecten vast vanuit een nieuw perspectief.",
    afbeelding:"/afbeeldingen/diensten/luchtfotografie.png"
  },
  {
    nummer: "05",
    titel: "Hulpdiensten",
    beschrijving:
      "Voorzie hulpdiensten van actueel overzicht vanuit de lucht.",
    afbeelding:"/afbeeldingen/diensten/hulpdiensten.png"
  },
];

const OnzeDiensten = () => {
  return (
    <section
      aria-labelledby="diensten-title"
      className="bg-[#f7f7f5] px-6 py-20 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="font-color-orange text-sm font-semibold uppercase tracking-[0.18em]">
            Wat we doen
          </p>
          <h2
            id="diensten-title"
            className="mt-3 text-3xl font-semibold tracking-tight text-[#101315] sm:text-4xl"
          >
            Onze diensten
          </h2>
          <p className="mt-4 text-base leading-7 text-[#101315]/65">
            Luchtbeelden en data die helpen om locaties beter te begrijpen.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
          {diensten.map((dienst) => (
            <article
              key={dienst.nummer}
              className="flex min-h-56 flex-col rounded-xl border border-black/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="font-color-orange text-sm font-semibold">
                {dienst.nummer}
              </span>
                    <img
        src={dienst.afbeelding}
        alt={dienst.titel}
        className="relative z-20 aspect-video w-full object-cover "
      />
              <h3 className="mt-8 text-xl font-semibold text-[#101315]">
                {dienst.titel}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#101315]/65">
                {dienst.beschrijving}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnzeDiensten;
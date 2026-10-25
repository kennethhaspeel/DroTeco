const Hero = () => {
  return (
<>
    <section className="relative isolate flex min-h-155 w-full overflow-hidden bg-[#101315] text-white sm:min-h-140 lg:min-h-170">
      <div className="absolute inset-0 flex justify-center">
        <img
          id="aerial-view"
          src="/afbeeldingen/hero_wide.png"
          alt="A drone surveying a riverside construction site at sunset"
          className="h-full w-full max-w-[1600px] object-cover object-[80%_center] sm:object-center mask-[linear-gradient(90deg,transparent,black_18%,black_82%,transparent)]"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,19,21,0.9)_0%,rgba(16,19,21,0.6)_35%,rgba(16,19,21,0.05)_70%,rgba(16,19,21,0.5)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(0deg,rgba(16,19,21,0.6)_0%,transparent_46%)]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-between gap-16 px-8 py-10 sm:px-14 sm:py-14 lg:px-20 lg:py-16">


        <div className="flex flex-1 flex-col max-w-2xl pb-2 sm:pb-4">
          <h1 className=" text-5xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Een duidelijk overzicht
            <br />
            <span className="font-color-orange">van bovenaf.</span>
          </h1>

          <p className="mt-auto max-w-xl pt-6 text-base leading-7 text-white/80 sm:mt-6 sm:pt-0 sm:text-lg sm:leading-8">
            We zetten luchtbeelden om in een beter begrip van de plaatsen om ons heen — zodat je kunt zien wat er verandert en kunt beslissen wat de volgende stap is.
          </p>

        </div>

        <div className="flex items-center justify-between border-t border-white/25 pt-4 text-xs font-medium text-white/75 sm:pt-5">
          <span>Duidelijke inzichten beginnen met een ander perspectief.</span>

        </div>
      </div>
    </section>
</>
  )
}

export default Hero
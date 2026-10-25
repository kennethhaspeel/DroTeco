import Waarom from "@/assets/afbeeldingen/WaaromDrone.png";
import { Clock4, FileText, Search, ShieldCheck } from "lucide-react";

const WaaromDrone = () => {
  return (
    <section className="relative isolate mx-4 min-h-[25rem] w-auto max-w-7xl overflow-hidden rounded-xl md:mx-auto md:w-full md:rounded-none">
      <img
        src={Waarom}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover object-left md:object-center"
      />
      <div className="absolute inset-0 bg-black/60 md:bg-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_20%,rgba(0,0,0,0.45)_30%,rgba(0,0,0,0.75)_100%)]" />
      <div className="relative z-10 flex min-h-[25rem] items-center px-6 py-12 text-white sm:px-10 lg:px-16">
        <div className="w-full md:ml-[33.333%] md:w-2/3">
          <p className="font-color-orange text-sm font-semibold uppercase tracking-[0.18em]">
            De voordelen
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Waarom drone-inspectie
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <div className="flex flex-col gap-3">
              <ShieldCheck aria-hidden="true" className="font-color-orange size-10" />
              <h3 className="font-semibold uppercase">Veiliger</h3>
              <p className="text-sm leading-6 text-white/80">
                Moeilijk bereikbare plaatsen kunnen vanop afstand worden geïnspecteerd.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Clock4 aria-hidden="true" className="font-color-orange size-10" />
              <h3 className="font-semibold uppercase">Efficiënter</h3>
              <p className="text-sm leading-6 text-white/80">
                Snelle dataverzameling zonder complexe opbouw of vertraging.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Search aria-hidden="true" className="font-color-orange size-10" />
              <h3 className="font-semibold uppercase">Gedetailleerd</h3>
              <p className="text-sm leading-6 text-white/80">
                Hoge-resolutiebeelden voor gedetailleerde inspecties.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <FileText aria-hidden="true" className="font-color-orange size-10" />
              <h3 className="font-semibold uppercase">Objectief</h3>
              <p className="text-sm leading-6 text-white/80">
                Objectieve data voor betrouwbare besluitvorming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaaromDrone;

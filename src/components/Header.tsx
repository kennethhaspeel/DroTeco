import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 h-18 w-full border-b bg-background shadow-sm sm:h-22">
      <nav
        aria-label="Hoofdnavigatie"
        className="mx-auto flex h-full w-full items-center justify-between gap-2 px-4 sm:gap-4"
      >
        <Link
          to="/"
          aria-label="Hiteco - home"
          className="flex min-w-0 items-center font-semibold text-foreground no-underline hover:text-primary"
        >
          <img
            src="/afbeeldingen/logo_enkel_trans.png"
            alt=""
            className="h-8 w-auto sm:h-16"
          />
          <img
            src="/afbeeldingen/naam_slogan.png"
            alt=""
            className="h-8 w-auto sm:h-16"
          />
        </Link>

        <div className="hidden min-w-0 items-center gap-6 md:flex">
          <Link
            to="/Fotogrammetrie"
            className="no-underline hover:text-primary"
          >
            Fotogrammetrie
          </Link>
          <Link to="/Thermografie" className="no-underline hover:text-primary">
            Thermografie
          </Link>
          <Link
            to="/GebouwInspecties"
            className="no-underline hover:text-primary"
          >
            Gebouwinspecties
          </Link>
          <Link
            to="/Luchtfotografie"
            className="no-underline hover:text-primary"
          >
            Luchtfotografie
          </Link>
          <Link to="/Hulpdiensten" className="no-underline hover:text-primary">
            Hulpdiensten
          </Link>
                    <Link to="/Contact" className="no-underline hover:text-primary">
            Contact
          </Link>
        </div>

        <div className="shrink-0 md:hidden">
          <Sheet>
            <SheetTrigger
              aria-label="Open navigatiemenu"
              render={<Button variant="outline" size="icon" />}
            >
              <Menu aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-2 px-8 pb-8">
                <Link
                  to="/Fotogrammetrie"
                  className="rounded-md px-3 py-3 no-underline hover:bg-muted"
                >
                  Fotogrammetrie
                </Link>
                <Link
                  to="/Thermografie"
                  className="rounded-md px-3 py-3 no-underline hover:bg-muted"
                >
                  Thermografie
                </Link>
                <Link
                  to="/GebouwInspecties"
                  className="rounded-md px-3 py-3 no-underline hover:bg-muted"
                >
                  Gebouwinspecties
                </Link>
                <Link
                  to="/Luchtfotografie"
                  className="rounded-md px-3 py-3 no-underline hover:bg-muted"
                >
                  Luchtfotografie
                </Link>
                <Link
                  to="/Hulpdiensten"
                  className="rounded-md px-3 py-3 no-underline hover:bg-muted"
                >
                  Hulpdiensten
                </Link>
                <Link
                  to="/Contact"
                  className="rounded-md px-3 py-3 no-underline hover:bg-muted"
                >
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;

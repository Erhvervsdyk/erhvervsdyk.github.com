import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "./ui/sheet";
import { Menu, X } from "lucide-react";

function Logo() {
  return (
    <div className="flex items-start relative shrink-0 h-[32px]">
      {/* Logotype */}
      <span className="text-white font-semibold text-2xl tracking-wide">
        Dykerhverv
      </span>
    </div>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 h-[80px] flex items-center justify-center">
      <div className="max-w-[1440px] w-full px-8 flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Button
            variant="ghost"
            className="text-white text-[18px] font-medium hover:text-[#00cece] hover:bg-transparent p-0 h-auto"
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Vi tilbyder
          </Button>
          <Button
            variant="ghost"
            className="text-white text-[18px] font-medium hover:text-[#00cece] hover:bg-transparent p-0 h-auto"
            onClick={() =>
              document
                .getElementById("cases")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Seneste projekter
          </Button>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Button
            className="bg-[#00aaaa] hover:bg-[#008888] text-white font-semibold  rounded-[8px] px-4 py-2.5 h-auto"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Kontakt os
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="text-white p-1.5 h-12 w-12 hover:bg-white/10 hover:text-white"
              >
                <Menu className="size-7" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-[#050C18] border-none text-white px-6 [&>button]:hidden"
            >
              <SheetClose asChild>
                <Button
                  variant="ghost"
                  className="absolute top-6 right-6 text-white p-1.5 h-auto w-auto"
                >
                  <X className="size-12" />
                </Button>
              </SheetClose>
              <SheetHeader className="sr-only">
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>Navigation menu</SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-6 mt-24">
                <a
                  href="#"
                  className="text-[18px] font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    setIsOpen(false);
                  }}
                >
                  Hjem
                </a>
                <a
                  href="#services"
                  className="text-[18px] font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth" });
                    setIsOpen(false);
                  }}
                >
                  Services
                </a>
                <a
                  href="#cases"
                  className="text-[18px] font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("cases")
                      ?.scrollIntoView({ behavior: "smooth" });
                    setIsOpen(false);
                  }}
                >
                  Cases
                </a>
                <Button
                  className="bg-[#00aaaa] hover:bg-[#008888] text-white font-semibold text-[16px] w-full"
                  onClick={() => {
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                    setIsOpen(false);
                  }}
                >
                  Kontakt os
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

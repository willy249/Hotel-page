"use client";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

// components
import Nav from "./Nav";
import Socials from "./Socials";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={36} className=" text-white" />
      </SheetTrigger>

      <SheetContent side="left">
        <div className=" flex flex-col justify-between h-full p-12">
          {/* 1_logo */}
          <Link href="/" className=" mb-24">
            <Image
              src="/footer/logo.svg"
              width={90}
              height={46}
              alt=""
              priority
              style={{ width: 90, height: 46 }}
            />
          </Link>
          {/* 2_nav */}
          <Nav
            containerStyles="text-black"
            listStyles="flex flex-col gap-y-6 text-xl"
          />
          {/* 3_社群 */}
          <Socials containerStyles="flex gap-x-4 text-black" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

import { SUITE } from "@/contants";
// import Nav from "@/src/ui/Home/Nav";
import NavMobile from "@/src/ui/components/Nav/NavMobile";
import ScrollTo from "@/src/ui/components/ScrollTo";

import React from "react";

import Link from "next/link";
import { Logo } from "ui/components";

import "./styles.css";
import { Button } from "@/components/ui/button";

const Hero = ({ slice }: any): JSX.Element => {
  return (
    <div className="relative m-[0.375rem] h-full sm:m-6">
      <div className="-z-1">
        {/* <PrismicNextImage
          field={slice.primary.herobg}
          fill
          className="h-full w-full rounded-[32px]"
          priority
        /> */}
      </div>
      <div className="z-10 flex w-full flex-col items-start gap-2.5 px-[0.625rem] pb-[6.25rem] pt-[2rem] sm:px-10 sm:pt-[3.7rem]">
        <div className="relative flex w-full flex-col items-center gap-16">
          <div className="flex w-full items-center justify-center">
            <div className="absolute left-0 flex h-8 w-full flex-shrink-0 flex-row items-center justify-between gap-2">
              <Logo />
              {/* <Drawer>
                <NavMobile />
              </Drawer> */}
            </div>
            {/* <Nav /> */}
            <div className="absolute right-0 hidden items-center gap-4 sm:flex">
              <Link href={SUITE.MAIN}>
                <Button>{"Block Explorer"}</Button>
              </Link>
            </div>
          </div>
          <div className="flex w-full flex-col items-center gap-[2rem] sm:gap-[7.5rem] ">
            <div className="flex flex-col items-center gap-6">
              <div className="text-white-0 text-center text-[2.5rem] font-semibold leading-none sm:text-[5.6rem] sm:leading-[112px]">
                {/* <span
                  dangerouslySetInnerHTML={{
                    __html: (slice.primary.title?.[0] as any)?.text,
                  }}
                /> */}
                <span className="text-green-0">.</span>
              </div>
              <div className="get_started_in_just_a_few_minutes_ text-white-0 self-stretch text-center text-[1rem] leading-10 sm:text-[2rem]">
                {/* <PrismicText field={slice.primary.subtitle} /> */}
                <span className="text-green-0">.</span>
              </div>
            </div>
            <div className="relative flex w-full items-center justify-center sm:justify-between ">
              <div className="hidden h-16 flex-shrink-0 items-center justify-center gap-2 rounded-full p-4 sm:flex"></div>
              <Link href={SUITE.MAIN} className="flex w-full justify-center">
                <Button>{"Get started"}</Button>
              </Link>
              <ScrollTo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

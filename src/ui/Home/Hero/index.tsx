import { EXPLORER } from "@/contants";

import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Logo } from "ui/components";
import { Button } from "@/components/ui/button";
import Nav from "../Nav";

export const Hero = () => (
  <div className="relative m-[0.375rem] h-full sm:m-6">
    <div className="-z-1">
      <Image
        src={"/home/hero-bg.png"}
        alt="hero-bg"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="h-full w-full rounded-[32px]"
      />
    </div>
    <div className="z-10 flex w-full flex-col items-start gap-2.5 px-[0.625rem] pb-[6.25rem] pt-[2rem] sm:px-10 sm:pt-[3.7rem]">
      <div className="relative flex w-full flex-col items-center gap-16">
        <div className="flex w-full items-center justify-center">
          <div className="absolute left-0 h-8 flex-shrink-0 flex-col items-start gap-2">
            <Logo />
          </div>
          <Nav />
          <div className="absolute right-0 hidden items-center gap-4 sm:flex">
            <Link href={"/explorer"}>
              <Button>{"Block Explorer"}</Button>
            </Link>
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-[2rem] sm:gap-[7.5rem] ">
          <div className="flex flex-col items-center gap-6">
            <div className="text-center text-[0.5rem] font-semibold leading-none text-[#fff] sm:text-[2rem] sm:leading-[112px]">
              A NEW ERA OF PRIVACY IN MULTICHAIN INTERACTIONS{" "}
              <br className="mt-0 block content-[''] sm:mt-1" />
              NAMADA IS A LAYER 1 BLOCKCHAIN SOLUTION THAT REDEFINES
              ASSET‑AGNOSTIC, MULTICHAIN PRIVACY.
            </div>
          </div>
          <div className="flex w-full items-center justify-center sm:justify-between">
            <div className="hidden h-16 flex-shrink-0 items-center justify-center gap-2 rounded-full p-4 sm:flex"></div>
            <Button>{"Get started"}</Button>
            <div className="hidden items-center justify-center gap-2 rounded-full border-[1.5px] border-white p-4 sm:flex">
              <svg
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_0_518)">
                  <path
                    d="M16 5V27"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 18C11.6509 19.753 13.4255 21.7811 16 27C18.4063 21.6864 20.4272 19.7158 25 18"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_518">
                    <rect width={32} height={32} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

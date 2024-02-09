import { EXPLORER, INVEST } from "@/contants";
import { Logo } from "@/src/ui/components";

import React from "react";

import Image from "next/image";
import Link from "next/link";

import { SmallDot } from "icons/src";
import { Button, Tooltips } from "ui";

export default async function SuiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-black-1 h-[100vh]">
      <div className="relative top-0 z-40 flex w-full  items-center justify-between px-3 py-3 sm:absolute sm:px-10 sm:py-6">
        <Logo />
        <div className="flex items-center justify-end gap-4">
          <div className="flex items-center gap-2 rounded-tl-[0.625rem] rounded-tr-[0.625rem] bg-[#171d1b] px-4 py-3">
            <Tooltips
              childrenContent={
                <>
                  <span className="text-white-0 text-center font-medium leading-6">
                    Green Net Network
                  </span>
                  <span className="text-white-0 text-center font-medium leading-6">
                    Operation Status
                  </span>
                  <div className="flex flex-row items-center justify-center gap-1.5">
                    <SmallDot />
                    <div className="text-white-0 font-medium leading-6">
                      Online
                    </div>
                  </div>
                </>
              }
            >
              <div className="flex flex-row items-center justify-center gap-1.5">
                <SmallDot />
                <div className="text-white-0 font-medium leading-6">
                  Green Net
                </div>
              </div>
            </Tooltips>
          </div>
          <div className="hidden items-center gap-4 sm:flex">
            <Link href={EXPLORER.MAIN}>
              <Button
                title="Block Explorer"
                variant="secondaryWhite"
                size="medium"
              />
            </Link>
          </div>
        </div>
      </div>

      {children}

      <div className="relative bottom-0 z-10 flex w-full flex-col items-start gap-6 px-3 py-3 sm:absolute sm:px-16 sm:py-6">
        <div className="flex w-full flex-wrap items-center justify-center sm:justify-between">
          <div className="flex items-center gap-1">
            <div className="text-gray-11  text-center text-sm leading-5">
              {" "}
              2023
            </div>
            <div className="text-gray-11  text-center text-sm leading-5">-</div>
            <div className="text-gray-11  text-center text-sm leading-5">
              © NAMADA
            </div>
          </div>
          <div className="flex items-center gap-5 sm:gap-10">
            <div className="text-gray-11  text-center text-sm leading-5">
              Privacy Policy
            </div>
            <div className="text-gray-11  text-center text-sm leading-5">
              Terms &amp; Conditions
            </div>
            <div className="text-gray-11  text-center text-sm leading-5">
              Cookies Policy
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black-1 absolute bottom-0 w-full">
        <Image
          src="/suite/suite-bg.svg"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%" }}
          alt={""}
        />
      </div>
    </div>
  );
}

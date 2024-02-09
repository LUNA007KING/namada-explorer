import { SUITE } from "@/contants/routes";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
// import { FrameLogo } from "icons/src";
import { Button } from "@/components/ui/button";

/**
 * Props for `Milestone`.
 */
/**
 * Component for "Milestone" Slices.
 */
const Milestone = ({ slice }: MilestoneProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-5 pt-10">
      <div className="line flex flex-col items-center justify-center sm:flex-row">
        {slice.items?.map((item, index) => {
          return (
            <div key={index} className="flex flex-col items-end gap-6">
              <div
                className={clsx(
                  " text-gray-5 flex items-center justify-center gap-2.5 self-stretch border-b  pb-0 font-semibold leading-6",
                  { "border-b-green-0 !text-green-0": item.isactive }
                )}
              >
                <PrismicRichText field={item.date} />
              </div>
              <div className="flex flex-col items-start gap-2">
                <div className=" text-white-0  self-stretch text-2xl font-semibold leading-8">
                  <PrismicRichText field={item.milestonetitle} />
                </div>
                <div className="text-gray-2 w-[20rem]  leading-6 sm:w-[15.9375rem]">
                  <PrismicRichText field={item.milestonedecs} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="relative m-6 flex h-full ">
        <div className="-z-1">
          <PrismicNextImage
            field={slice.primary.banner}
            fill={true}
            className="h-full w-full sm:rounded-[60px] rounded-[20px]"
          />
        </div>
        <div className="z-10 flex w-full items-end gap-20 self-stretch p-[1rem] sm:p-[8.75rem] sm:pt-[12.5rem]">
          <div className="flex w-full flex-col items-center gap-6 sm:items-start sm:gap-12">
            <div className="flex w-full justify-start">
              <div className="border-white-0 flex flex-col items-center justify-center gap-3 rounded-full border sm:p-6 p-3 w-16 h-16 sm:w-32 sm:h-32">
                <FrameLogo className="w-10 h-10 sm:w-20 sm:h-20" />
              </div>
            </div>
            <div className="flex w-full flex-col justify-between gap-3 text-center sm:flex-row sm:items-end sm:gap-0 sm:text-start">
              <div className="leading-0 text-white-0 flex-shrink-0 text-[2rem] font-semibold sm:w-[642px] sm:text-[5.625rem] sm:leading-[112px] sm:text-center text-start">
                <PrismicText field={slice.primary.title} />
                <span className="text-green-0">.</span>
              </div>
              <PrismicNextLink
                field={slice.primary.link}
                className="flex w-full sm:justify-end justify-center"
              >
                <Button
                  size="large"
                  title={"Get started"}
                  customStyle={"w-full sm:w-auto"}
                />
              </PrismicNextLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Milestone;

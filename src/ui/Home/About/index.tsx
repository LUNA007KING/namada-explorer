"use client";

import Slider, { Settings } from "react-slick";

import Image from "next/image";

import clsx from "clsx";
import style from "./styles.module.css";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

const Icon = () => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_0_537)">
        <path
          d="M3.75 12L20.25 12"
          stroke="#0E0F0E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.5 18.75C14.8147 15.2618 16.3358 13.9309 20.25 12C16.2648 10.1953 14.7869 8.67963 13.5 5.25"
          stroke="#0E0F0E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_0_537">
          <rect width={24} height={24} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const data = [
  {
    description:
      "Namada delivers an unparalleled layer of privacy across a myriad of assets, decentralized applications, and even entire blockchain networks.",
  },
  {
    description:
      "Namada delivers an unparalleled layer of privacy across a myriad of assets, decentralized applications, and even entire blockchain networks.",
  },
];

export const About = () => {
  const settings: Settings = {
    className: style.sliderWrapper,
    centerMode: true,
    infinite: true,
    centerPadding: "230px",
    slidesToShow: 1,
    speed: 500,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          className: style.sliderWrapper,
          centerMode: true,
          infinite: true,
          centerPadding: "230px",
          slidesToShow: 1,
          speed: 500,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          className: style.sliderWrapper,
          centerMode: true,
          infinite: true,
          centerPadding: "0px",
          slidesToShow: 1,
          speed: 500,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          className: style.sliderWrapper,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots: ReactNode[]) => (
      <div
        style={{
          bottom: -90,
        }}
      >
        <div className="flex items-center justify-center gap-5 px-5">
          {dots?.map((item, index) => {
            return (
              <div
                key={index}
                className={clsx(
                  "h-0.5 w-[4.8125rem] rounded-full",
                  item?.props?.className === "slick-active"
                    ? "h-1 bg-[#fff]"
                    : "bg-[#5e5e5e]"
                )}
              />
            );
          })}
        </div>
      </div>
    ),
  };

  return (
    <div className="flex flex-col items-center px-2 pb-[2.5rem] pt-[2.5rem] sm:pb-[6.25rem] sm:pt-[9rem]">
      <div className="w-full gap-4">
        <Slider {...settings}>
          {[...new Array(6)].map((_, i) => {
            return (
              <div
                key={i}
                className="min-w-[200px] rounded-[60px] bg-[#1b1b1b] p-4 sm:p-[3.75rem]"
              >
                <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-10">
                  <Image
                    alt=""
                    width={320}
                    height={320}
                    src={"/home/about-1.png"}
                    className="lightgray 50% / cover no-repeat, h-40 w-40 sm:h-80 sm:w-80"
                  />
                  <div className="flex flex-col items-center justify-center gap-3 self-stretch sm:items-start sm:gap-6">
                    <div className="self-stretch text-center text-[1.6rem] font-semibold leading-none text-[#43e8b3] sm:text-start sm:text-[3.25rem] sm:leading-[62px]">
                      About GNT Network.
                    </div>
                    <div className="text-[14px] leading-6 text-[#c5c5c5] sm:text-[16px]">
                      Money management made a breeze. Keep a close eye on
                      spending with smart insights and intuitive features. Money
                      management made a breeze. Keep a close eye on spending
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="w-40 text-center text-[4rem] font-semibold leading-[100px] text-[#6d6d6d] sm:w-80 sm:text-[6.25rem]">
                    {i + 1}
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-[12px] font-semibold leading-6 text-white sm:text-[16px]">
                      More about GNT
                    </div>
                    <Button>
                      <Icon />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

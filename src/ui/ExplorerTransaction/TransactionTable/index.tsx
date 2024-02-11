"use client";

import { EXPLORER } from "@/contants";
// import { useKaleidoTransactionDetail } from "@/libs/reactQuery";

import Link from "next/link";

import clsx from "clsx";
// import { Arrows, ChevronLeft, GreennetLogo, Info, Loader } from "icons/src";
import { Button } from "@/components/ui/button";

import { CopyComponent } from "../../components";

type ITransactionTableProps = {
  hash: string;
};

export const TransactionTable = ({ hash }: ITransactionTableProps) => {
  return (
    <div className="flex flex-col gap-8 text-yellow-1">
      {"Transaction Table"}
    </div>
  );
};

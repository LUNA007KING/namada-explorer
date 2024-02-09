"use client";

import { EXPLORER } from "@/contants";
import { useKaleidoTransactionDetail } from "@/libs/reactQuery";

import Link from "next/link";

import clsx from "clsx";
import { Arrows, ChevronLeft, GreennetLogo, Info, Loader } from "icons/src";
import { Button } from "@/components/ui/button";

import { CopyComponent } from "../../components";

type ITransactionTableProps = {
  hash: string;
};

export const TransactionTable = ({ hash }: ITransactionTableProps) => {
  const { data, isLoading, isSuccess } = useKaleidoTransactionDetail({ hash });

  if (isLoading) {
    return (
      <Loader className=" absolute bottom-0 left-0 right-0 top-0 m-auto h-20 w-20 animate-spin text-green-0 " />
    );
  }

  const {
    blockHash,
    blockNumber,
    from,
    hash: _hash,
    status,
    to,
    inputBytes,
    gasProvided,
  } = data || {};

  const dataTable = [
    { title: "Block Hash", value: blockHash },
    { title: "Block Number", value: blockNumber },
    { title: "Input Bytes", value: inputBytes || "" },
    { title: "Gas Provided", value: Number(gasProvided || 0) },
    { title: "From", value: from, link: `${EXPLORER.ADDRESS}/${from}` },
    { title: "To", value: to, link: `${EXPLORER.ADDRESS}/${to}` },
    { title: "Status", value: status },
  ];

  const gasTable = [{ title: "Gas Provided", value: Number(gasProvided || 0) }];

  return (
    <div className="flex flex-col gap-8">
      <div className="bg-gray-9 flex flex-col items-start gap-8 self-stretch rounded-3xl p-5 sm:p-10">
        <div className="flex items-center justify-between self-stretch">
          <Link href={EXPLORER.MAIN}>
            <Button
              size="small"
              variant="secondaryWhite"
              title={"Back"}
              prefixIcon={<ChevronLeft />}
            />
          </Link>
          <div className="c-cash_transaction text-white-0  text-center text-2xl font-semibold leading-8">
            c-Cash Transaction
          </div>
          <div className="flex hidden h-10 w-[5.875rem] flex-col items-center justify-between sm:block"></div>
        </div>
        <div className="bg-green-4 flex w-full items-center justify-between rounded-2xl">
          <div className="flex">
            <div className="flex flex-col items-start justify-center gap-0.5 pl-3 pr-1 sm:py-4 sm:pl-8 sm:pr-4">
              <div className="flex h-6 w-6 items-center justify-center">
                <Arrows width={24} height={24} />
              </div>
            </div>
            <div className="text-white-0 flex-col items-start justify-center gap-0.5 overflow-hidden  p-4 font-medium leading-6">
              Block
            </div>
          </div>
          <div className="flex">
            <div className=" text-white-0 w-[10rem] max-w-[50rem] overflow-hidden text-ellipsis p-4 leading-6 sm:w-full">
              {hash}
            </div>
            <div className="flex h-14 items-center py-4 pl-4 pr-8">
              <CopyComponent value={`${hash || ""}`} />
            </div>
          </div>
        </div>
        <div className="border-gray-8 bg-gray-9 w-full rounded-2xl border p-4 ">
          <div className="overflow-x-scroll">
            {isSuccess &&
              dataTable.map((item, i) => {
                const lastItem = dataTable.length === i + 1;
                const hasLink = Boolean(item.link);

                return (
                  <div
                    key={i}
                    className={clsx(
                      "border-b-gray-8 flex-w flex w-[60rem] flex-wrap items-center justify-between gap-5 p-4 sm:w-full",
                      {
                        "border-b": !lastItem,
                      }
                    )}
                  >
                    <div className="flex flex-row items-center justify-center gap-3">
                      <Info width={24} height={24} />
                      <div className="text-white-0 flex w-max flex-col gap-0.5 overflow-hidden text-ellipsis font-medium leading-6 ">
                        {item.title}
                      </div>
                    </div>
                    {hasLink ? (
                      <Link
                        href={item.link as string}
                        className="text-green-0 w-[900px] overflow-hidden text-ellipsis break-words"
                      >
                        {item.value}
                      </Link>
                    ) : (
                      <p className="text-gray-2 w-[900px] overflow-hidden text-ellipsis break-words">
                        {item.value}
                      </p>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
        <div className="border-gray-8 bg-gray-9 w-full rounded-2xl border p-4 ">
          <div className="overflow-x-scroll">
            {isSuccess &&
              gasTable.map((item, i) => {
                const lastItem = dataTable.length === i + 1;
                return (
                  <div
                    key={i}
                    className={clsx(
                      "border-b-gray-8 flex flex-wrap items-center justify-between gap-5 p-4 sm:w-full",
                      {
                        "border-b": !lastItem,
                      }
                    )}
                  >
                    <div className="flex flex-row items-center justify-center gap-3">
                      <Info width={24} height={24} />
                      <div className="text-white-0 flex w-max flex-col gap-0.5 overflow-hidden text-ellipsis font-medium leading-6 ">
                        {item.title}
                      </div>
                    </div>
                    <div className="flex gap-3 sm:w-[900px]">
                      <p className="text-gray-2 overflow-hidden text-ellipsis break-words">
                        {item.value}
                      </p>
                      <GreennetLogo width={24} height={24} />
                      <p className="text-gray-2 font-medium ">GNT</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between self-stretch">
        <Link href={EXPLORER.MAIN}>
          <Button
            size="small"
            variant="secondaryWhite"
            title={"Back"}
            prefixIcon={<ChevronLeft />}
          />
        </Link>
        <div className="flex h-10 w-[5.875rem] flex-col items-center justify-between"></div>
      </div>
    </div>
  );
};

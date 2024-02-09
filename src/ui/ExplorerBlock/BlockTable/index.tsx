"use client";

import { EXPLORER } from "@/contants";
// import {
//   useKaleidoBlocks,
//   useKaleidoBlocksTransactions,
// } from "@/libs/reactQuery";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { clsx } from "clsx";
import { formatDistance, formatDistanceStrict } from "date-fns";
// import {
//   Arrows,
//   Box,
//   ChevronLeft,
//   GreennetLogo,
//   Info,
//   Loader,
//   OpenIn,
// } from "icons/src";
import { Button } from "@/components/ui/button";

import { CopyComponent } from "../../components";
import { LIMIT_LIST } from "@/utils/constant";

type IBlockTableProps = {
  hash: string;
};

export const BlockTable = ({ hash }: IBlockTableProps) => {
  // const router = useRouter();

  // const {
  //   data,
  //   isError,
  //   isSuccess,
  //   isLoading = true,
  // } = useKaleidoBlocks({ hash });

  // const {
  //   data: transactionsData,
  //   isError: transactionsError,
  //   isSuccess: transactionsSuccess,
  //   isLoading: transactionsLoading = true,
  // } = useKaleidoBlocksTransactions({ hash, page: 1, limit: 100 });

  // if (isLoading || transactionsLoading) {
  //   return (
  //     <Loader className="absolute bottom-0 left-0 right-0 top-0 m-auto h-20 w-20 animate-spin text-green-0 " />
  //   );
  // }

  // if (isError || transactionsError) {
  //   router.push("/404");
  // }

  // const {
  //   gasLimit,
  //   gasUsed,
  //   hash: hashBlock,
  //   miner,
  //   number,
  //   timestamp = 0,
  //   parentHash,
  //   extraData,
  //   transactionCount,
  //   stateRoot,
  //   difficulty,
  //   mixHash,
  //   receiptsRoot,
  //   sha3Uncles,
  //   size,
  //   totalDifficulty,
  //   transactions,
  //   uncles,
  // } = data?.[0] || {};

  // Convert Unix timestamp to milliseconds
  // const timestampInMilliseconds = timestamp;

  // // Create a Date object
  // const date = new Date(timestampInMilliseconds);

  // const currentDate = new Date();

  // const ParentHashValue = () => {
  //   return (
  //     <div className="flex items-center  gap-3">
  //       <p>{`${parentHash}`}</p>
  //       <div className="flex items-center gap-3">
  //         <Link className="flex items-center gap-1" href={"#"} target="_self">
  //           <div className=" text-white-0 font-medium leading-6">Open</div>
  //           <OpenIn width={24} height={24} />
  //         </Link>
  //         <CopyComponent value={`${parentHash || ""}`} />
  //       </div>
  //     </div>
  //   );
  // };

  // const BaseValue = () => {
  //   return (
  //     <div className="flex items-center gap-2">
  //       <div className="text-gray-2  overflow-hidden leading-6">0.0765</div>
  //       <GreennetLogo />
  //       <div className=" text-white-0 font-medium leading-6">GNT</div>
  //     </div>
  //   );
  // };

  // const dataTable = [
  //   {
  //     title: "Number",
  //     value: number,
  //   },
  //   {
  //     title: "Timestamp",
  //     value:
  //       timestamp &&
  //       formatDistance(date, currentDate, {
  //         addSuffix: true,
  //       }),
  //   },
  //   {
  //     title: "Parent Hash",
  //     value: <ParentHashValue />,
  //   },
  //   { title: "Transaction Count", value: transactionCount },
  //   { title: "Mined By", value: miner },
  //   { title: "Number", value: `${gasUsed || 0}` },
  //   { title: "Gas Used", value: `${gasUsed || 0}` },
  //   { title: "Gas Limit", value: `${gasLimit || 0}` },
  //   { title: "Base", value: <BaseValue /> },
  //   { title: "Extra Data", value: `${extraData || ""}` },
  //   { title: "State Root", value: stateRoot },
  //   { title: "Difficulty", value: difficulty },
  //   { title: "Mix Hash", value: mixHash },
  //   { title: "Receipts Root", value: receiptsRoot },
  //   { title: "Sha3Uncles", value: sha3Uncles },
  //   { title: "Size", value: size },
  //   { title: "Total Difficulty", value: totalDifficulty },
  //   // TODO: How to render ?
  //   { title: "Transactions", value: "" },
  //   // TODO: How to render ?
  //   { title: "Uncles", value: "" },
  // ];

  return (
    <></>
    // <div className="flex flex-col gap-8">
    //   <div className="bg-gray-9 flex flex-col items-start gap-8 self-stretch rounded-3xl p-5 sm:p-10">
    //     <div className="flex items-center justify-between self-stretch">
    //       <Link href={EXPLORER.MAIN}>
    //         <Button
    //           size="small"
    //           variant="secondaryWhite"
    //           title={"Back"}
    //           prefixIcon={<ChevronLeft />}
    //         />
    //       </Link>
    //       <div className=" text-white-0  text-center text-2xl font-semibold leading-8">
    //         {`Block ${hash || ""}`}
    //       </div>
    //       <div className="hidden h-10 w-[5.875rem] flex-col items-center justify-between sm:block "></div>
    //     </div>
    //     <>
    //       <div className="bg-green-4 flex w-full items-center justify-between rounded-2xl">
    //         <div className="flex">
    //           <div className="flex flex-col items-start justify-center gap-0.5 pl-3 pr-1 sm:py-4 sm:pl-8 sm:pr-4">
    //             <div className="flex h-6 w-6 items-center justify-center">
    //               <Box width={24} height={24} />
    //             </div>
    //           </div>
    //           <div className="text-white-0 flex-col items-start justify-center gap-0.5 overflow-hidden  p-4 font-medium leading-6">
    //             Block
    //           </div>
    //         </div>
    //         <div className="flex">
    //           <div className=" text-white-0 w-[10rem] max-w-[50rem] overflow-hidden text-ellipsis p-4 leading-6 sm:w-full">
    //             {hashBlock}
    //           </div>
    //           <div className="flex h-14 items-center py-4 pl-4 pr-8">
    //             <CopyComponent value={`${hashBlock || ""}`} />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="border-gray-8 bg-gray-9 w-full rounded-2xl border p-4 ">
    //         <div className="overflow-x-scroll">
    //           {!isLoading &&
    //             isSuccess &&
    //             dataTable.map((item, i) => {
    //               const lastItem = dataTable.length === i + 1;
    //               return (
    //                 <div
    //                   key={i}
    //                   className={clsx(
    //                     "border-b-gray-8 flex w-[60rem] flex-wrap items-center justify-between gap-5 p-4 sm:w-full",
    //                     {
    //                       "border-b": !lastItem,
    //                     }
    //                   )}
    //                 >
    //                   <div className="flex flex-row items-center justify-center gap-3">
    //                     <Info width={24} height={24} />
    //                     <div className="text-white-0 flex w-max flex-col gap-0.5 overflow-hidden text-ellipsis font-medium leading-6 ">
    //                       {item.title}
    //                     </div>
    //                   </div>
    //                   <p className="text-gray-2 w-[900px] overflow-hidden text-ellipsis break-words">
    //                     {item.value}
    //                   </p>
    //                 </div>
    //               );
    //             })}
    //         </div>
    //       </div>
    //     </>
    //   </div>
    //   <div className="bg-gray-9 flex w-full flex-col  gap-8 rounded-3xl p-4 sm:p-10">
    //     <div className="flex items-center gap-2 ">
    //       <div className="text-white-0  text-center text-2xl font-semibold leading-8">
    //         Block Transactions
    //       </div>
    //       <Info width={24} height={24} />
    //     </div>
    //     <div className="table-container max-h-[420px] overflow-y-auto">
    //       {transactionsSuccess &&
    //         transactionsData?.data?.map((item, i) => {
    //           return (
    //             <div
    //               key={i}
    //               className="flex items-center justify-between overflow-x-scroll "
    //             >
    //               <div className="flex">
    //                 <div className="flex flex-col items-start justify-center gap-0.5  p-4">
    //                   <div className="bg-gray-8 flex items-center justify-center gap-2.5 rounded-[0.625rem] p-2 p-2.5">
    //                     <Arrows width={24} height={24} />
    //                   </div>
    //                 </div>
    //                 <div className="table-cell-61 flex flex-col items-start justify-center gap-0.5 self-stretch p-4">
    //                   <div className="0x94bhbgsvjkm77856rftyjnhvgfvfgvbjkcndfuwyer7ewt675r5___ text-white-0 self-stretch  overflow-hidden text-sm leading-5">
    //                     {item?.from}
    //                   </div>
    //                   <div className="text-gray-5 text-sm leading-5">
    //                     {formatDistanceStrict(
    //                       new Date(item?.timestamp),
    //                       new Date(),
    //                       {
    //                         addSuffix: true,
    //                         roundingMethod: "ceil",
    //                       }
    //                     )}
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="flex flex-col items-start justify-center gap-0.5 p-4">
    //                 <div className=" text-white-0 font-medium leading-6">
    //                   From
    //                 </div>
    //                 <div className="to text-gray-2  overflow-hidden text-sm leading-5">
    //                   To
    //                 </div>
    //               </div>
    //               <div className="flex">
    //                 <div className="flex flex-col items-start justify-center gap-0.5 self-stretch p-4">
    //                   <div className=" text-white-0 self-stretch  overflow-hidden text-sm leading-5">
    //                     {item?.to}
    //                   </div>
    //                   <div className=" text-gray-5 text-sm leading-5">
    //                     {formatDistanceStrict(
    //                       new Date(item?.timestamp),
    //                       new Date(),
    //                       {
    //                         addSuffix: true,
    //                         roundingMethod: "ceil",
    //                       }
    //                     )}
    //                   </div>
    //                 </div>
    //                 {/* <div className="flex items-center gap-1 self-stretch p-4">
    //               <div className=" text-white-0 font-medium leading-6">0</div>
    //               <GreennetLogo width={20} height={20} />
    //               <div className=" text-white-0 font-medium leading-6">GNT</div>
    //             </div> */}
    //               </div>
    //             </div>
    //           );
    //         })}
    //     </div>
    //   </div>
    // </div>
  );
};

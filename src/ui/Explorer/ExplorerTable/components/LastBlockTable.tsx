"use client";

import { EXPLORER } from "@/contants";
import LeafPlugin from "@/public/icons/leaf-plugin.svg";
import { tokenQueryKeys } from "@/query-keys";
import { getInfoChain, getLatestBlocks } from "@/services";
import { LIMIT_LIST } from "@/utils/constant";
import { Block } from "@/utils/types";

import { useLayoutEffect, useMemo, useState } from "react";

import Link from "next/link";

import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { formatDistance, formatDistanceStrict } from "date-fns";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";
import { IBlocks } from "@/types";

const useGetBlocks = ({ height }: { height: string }) => {
  const query = useInfiniteQuery({
    initialPageParam: Number(height),
    queryKey: tokenQueryKeys.blocks(),
    queryFn: ({ pageParam }) => {
      return getLatestBlocks({
        minHeight: (Number(pageParam) - LIMIT_LIST).toString(),
        maxHeight: pageParam.toString(),
      });
    },
    getNextPageParam: (lastPage) => {
      const lastHeight =
        lastPage.block_metas[lastPage.block_metas.length - 1].header.height;
      return lastPage.block_metas.length === LIMIT_LIST + 1
        ? Number(lastHeight) - LIMIT_LIST
        : undefined;
    },
    getPreviousPageParam: (firstPage) => {
      return 1;
    },
    enabled: !!height,
  });

  return query;
};

export const useGetInforChain = () => {
  const query = useQuery({
    queryKey: tokenQueryKeys.infor(),
    queryFn: () => {
      return getInfoChain();
    },
  });

  return query;
};

export const LastBlockTable = () => {
  const { data: infor } = useGetInforChain();
  const { data, isLoading, isFetching, fetchNextPage, hasNextPage } =
    useGetBlocks({ height: infor?.response.last_block_height || "" });

  const blocks = useMemo(
    () => (data ? data.pages.flatMap((page) => page.block_metas) : []),
    [data]
  ) as IBlocks[];

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex animate-pulse space-x-4">
          <div className="flex-1 space-y-6 px-2 py-2">
            <div className="space-y-4">
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1 h-5 rounded bg-slate-700"></div>
                <div className="col-span-1 h-5 rounded bg-slate-700"></div>
                <div className="col-span-1 h-5 rounded bg-slate-700"></div>
                <div className="col-span-1 h-5 rounded bg-slate-700"></div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1 h-5 rounded bg-slate-700"></div>
                <div className="col-span-1 h-5 rounded bg-slate-700"></div>
                <div className="col-span-1 h-5 rounded bg-slate-700"></div>
                <div className="col-span-1 h-5 rounded bg-slate-700"></div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1 h-5 rounded bg-slate-700"></div>
                <div className="col-span-1 h-5 rounded bg-slate-700"></div>
                <div className="col-span-1 h-5 rounded bg-slate-700"></div>
                <div className="col-span-1 h-5 rounded bg-slate-700"></div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="table-container max-h-[420px] overflow-y-auto">
        {blocks.map((block, index) => {
          return (
            <div key={index} className="text-white-0 w-full text-sm sm:h-14">
              <div>
                <Link
                  href={`${EXPLORER.BLOCK}/${block.block_id.hash}`}
                  className="hover:bg-gray-10  sm:border-gray-0 border-gray-0 flex cursor-pointer flex-col justify-between border-b px-3 sm:flex-row sm:items-center sm:gap-5 sm:px-4"
                >
                  <div className="w-36 py-2">
                    <p className="text-green-0 font-medium">
                      {block.block_id.hash}
                    </p>
                    <p className="text-gray-5">
                      {formatDistanceStrict(
                        new Date(block.header.time),
                        new Date(),
                        {
                          addSuffix: true,
                          roundingMethod: "ceil",
                        }
                      )}
                    </p>
                  </div>
                  <div className="py-2 font-medium">
                    <p className="text-white-0 font-semibold">
                      {block.header.version.block} txs
                    </p>
                    <p className="text-gray-2 max-w-[10rem] overflow-hidden text-ellipsis font-normal sm:max-w-[20rem]">
                      {block.header.version.block}
                    </p>
                  </div>
                  <div className="py-2">
                    <div className="flex items-center gap-1">
                      <p className="font-medium">
                        {block.header.version.block}
                      </p>
                      <LeafPlugin />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="border-gray-8 flex-1 rounded-2xl border">
      <div className="text-white-0 px-3 py-4 text-lg font-semibold sm:px-6">
        Latest block
      </div>
      {renderContent()}

      {hasNextPage && (
        <div className="flex items-center justify-center px-4 py-4">
          <Button
            onClick={() => {
              fetchNextPage();
            }}
          >
            {isFetching && (
              <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
            )}
            {"Load More"}
          </Button>
        </div>
      )}
    </div>
  );
};

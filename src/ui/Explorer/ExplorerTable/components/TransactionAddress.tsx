"use client";

import { tokenQueryKeys } from "@/query-keys";
import { getTransactionByAddress } from "@/services";
import { LIMIT_LIST } from "@/utils/constant";
import { Transaction } from "@/utils/types";

import { useMemo, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import {
  ColumnDef,
  PaginationState,
  createColumnHelper,
} from "@tanstack/react-table";
// import { Button, Table } from "ui";
import Link from "next/link";
import { EXPLORER } from "@/contants";
import { Table } from "@/src/ui/components/Table";

const useGetTransactions = ({
  pageParam,
  address,
}: {
  pageParam: number;
  address: string;
}) => {
  const query = useQuery({
    queryKey: [...tokenQueryKeys.transactionsByAddress(address), pageParam],
    queryFn: () => {
      return getTransactionByAddress({
        address,
        page: pageParam,
        limit: LIMIT_LIST,
      });
    },
  });

  return query;
};

type ITransactionTableProps = {
  address: string;
};

const columnHelper = createColumnHelper<Transaction>();

export const TransactionAddress = ({ address }: ITransactionTableProps) => {
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 15,
  });

  const { data, isLoading } = useGetTransactions({
    address,
    pageParam: pageIndex + 1,
  });

  const totalPage = data?.totalPages || 1;

  const columns = useMemo(() => {
    return [
      columnHelper.accessor("hash", {
        cell: (info) => (
          <div className="text-white-0 font-medium leading-6">
            {info.renderValue() || "-"}
          </div>
        ),
        header: () => <span>Transaction Hash</span>,
      }),

      columnHelper.accessor("from", {
        cell: (info) => (
          <div className="text-white-0 font-medium leading-6">
            <Link href={`${EXPLORER.ADDRESS}/${info.renderValue()}`}>
              {info.renderValue() || "-"}
            </Link>
          </div>
        ),
        header: () => <span>From</span>,
      }),
      columnHelper.accessor("to", {
        cell: (info) => (
          <div className="text-white-0 font-medium leading-6">
            <Link href={`${EXPLORER.ADDRESS}/${info.renderValue()}`}>
              {info.renderValue() || "-"}
            </Link>
          </div>
        ),
        header: () => <span>To</span>,
      }),
      columnHelper.accessor("blockNumber", {
        cell: (info) => (
          <div className="text-white-0 font-medium leading-6">
            {info.renderValue() || "-"}
          </div>
        ),
        header: () => <span>Number</span>,
      }),
    ] as ColumnDef<Transaction>[];
  }, []);

  const transactions = useMemo(
    () => (data ? data?.data : []),
    [data]
  ) as Transaction[];

  return (
    <div className="w-full">
      <div className="border-gray-8 flex-1 rounded-2xl">
        <div className="table-container overflow-y-auto">
          <Table
            data={transactions}
            columns={columns}
            isLoading={isLoading}
            pageSize={pageSize}
            pageIndex={pageIndex}
            pageCount={totalPage}
            setPagination={setPagination}
          />
        </div>
      </div>
    </div>
  );
};

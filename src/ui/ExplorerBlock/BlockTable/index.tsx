"use client";

type IBlockTableProps = {
  hash: string;
};

export const BlockTable = ({ hash }: IBlockTableProps) => {
  return (
    <div className="flex flex-col gap-8 text-yellow-1">{"Block Table"}</div>
  );
};

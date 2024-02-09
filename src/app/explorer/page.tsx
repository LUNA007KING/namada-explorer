import React, { Suspense } from "react";
import { getInfoChain, getLatestBlocks, getValidator } from "@/services";
import { ExplorerCard, ExplorerTable } from "@/src/ui/Explorer";
import { ChartRadialBar } from "@/src/ui/components/Charts";
import { ExplorerTitle } from "@/src/ui/components/Layout/ExplorerLayout/components/ExplorerTitle";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Explorer",
};

export default async function Page() {
  const infor = await getInfoChain();
  const blocks = await getLatestBlocks({
    minHeight: (Number(infor.response.last_block_height) - 1).toString(),
    maxHeight: infor.response.last_block_height,
  });
  const validator = await getValidator({
    height: infor.response.last_block_height,
  });

  const count = parseInt(validator.count);
  const total = parseInt(validator.total);
  const percentage = (count / total) * 100;
  const percentageNumber = Number(percentage.toFixed(0));
  const blockHeight = validator.block_height;
  const chain = blocks.block_metas[0].header.chain_id;

  return (
    <Suspense>
      <ExplorerTitle />
      <div className="flex w-full flex-wrap justify-between gap-4">
        <ExplorerCard
          title="Number of validators"
          prefixValue={`${percentageNumber}/100% active`}
          value={count}
          chart={<ChartRadialBar ratio={percentageNumber} />}
        />
        <ExplorerCard title="Block Height" value={blockHeight} chart={null} />
        <ExplorerCard title="Block Time" value={10} chart={null} />
        <ExplorerCard title="Chain ID" value={chain} chart={null} />
      </div>
      <ExplorerTable />
    </Suspense>
  );
}

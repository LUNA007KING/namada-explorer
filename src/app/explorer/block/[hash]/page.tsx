import Loading from "@/src/app/loading";
import { BlockTable } from "@/src/ui/ExplorerBlock";

import React, { Suspense } from "react";

export const metadata = {
  title: "Block",
};

export default async function BlockExplorer({
  params,
}: {
  params: { hash: string };
}) {
  const { hash } = params;

  return (
    <Suspense fallback={<Loading />}>
      <BlockTable hash={hash} />
    </Suspense>
  );
}

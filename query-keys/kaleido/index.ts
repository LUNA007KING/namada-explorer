export const kaleidoQueryKeys = {
  getKaleidoTransactionDetail: ({ hash }: { hash: string }) => [
    "get-kaleido-transactions",
    hash,
  ],
  getKaleidoBlock: ({ hash }: { hash: string }) => ["get-kaleido-block", hash],
  getKaleidoBlocksTransactions: ({
    hash,
    page,
    limit,
  }: {
    hash: string;
    page: number;
    limit: number;
  }) => ["get-kaleido-blocks-transactions", hash, page, limit],
  getKaleidoStats: ({ page, limit }: { page: number; limit: number }) => [
    "get-kaleido-stats",
    page,
    limit,
  ],
};

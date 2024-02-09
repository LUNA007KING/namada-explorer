export type ITransactionReceipt = {
  logs: [
    {
      address: string;
      topics: string[];
      data: string;
      blockNumber: number;
      transactionHash: string;
      transactionIndex: number;
      blockHash: string;
      logIndex: number;
      removed: boolean;
      id: string;
    },
  ];
  to: string;
  timestamp: Date;
  from: string;
  inputBytes: string;
  gasProvided: number;
  blockNumber: number;
  blockHash: string;
  private: false;
  status: string;
  nextHash?: string;
  previousHash: string;
  index: number;
  hash: string;
};

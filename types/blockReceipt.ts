import { ethers } from "ethers";

export type IBlockReceipt = ethers.Block | null | undefined;

export interface IKaleidoBlocksTransactions {
  index: number;
  hash: string;
  blockHash: string;
  blockNumber: number;
  timestamp: Date;
  status: string;
  private: boolean;
  from: string;
  to: string;
}

export interface IBlocks {
  block_id: {
    hash: string;
    parts: {
      total: number;
      hash: string;
    };
  };
  block_size: string;
  header: {
    version: {
      block: string;
    };
    chain_id: string;
    height: string;
    time: string;
    last_block_id: {
      hash: string;
      parts: {
        total: number;
        hash: string;
      };
    };
    last_commit_hash: string;
    data_hash: string;
    validators_hash: string;
    next_validators_hash: string;
    consensus_hash: string;
    app_hash: string;
    last_results_hash: string;
    evidence_hash: string;
    proposer_address: string;
  };
  num_txs: string;
}

export interface IBlockJSON {
  last_height: string;
  block_metas: IBlocks[];
}

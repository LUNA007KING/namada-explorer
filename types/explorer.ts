export enum EXPLORER_PRAMS {
  NET = "net",
  Q = "q",
}

export enum EXPLORER_NET_VALUE {
  MAIN = "main",
  ETHER = "ether",
  BINANCE = "binance",
}

export interface InforChain {
  response: {
    last_block_height: string;
    last_block_app_hash: string;
  };
}

export interface Validator {
  address: string;
  pub_key: {
      type: string;
      value: string;
  };
  voting_power: string;
  proposer_priority: string;
}

export interface ValidatorResponse {
  block_height: string;
  validators: Validator[];
  count: string;
  total: string;
}
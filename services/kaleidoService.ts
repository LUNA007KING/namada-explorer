import {
  IBlockJSON,
  InforChain,
  PayloadGetKaleidoTransactions,
  ValidatorResponse,
} from "@/types";
import { Payload, PayloadRequest, ResponsePagination } from "@/utils/types";

import axiosInstance from "../libs/axios/axiosInstance";

export const getInfoChain = async (): Promise<InforChain> => {
  const url = `/abci_info`;
  try {
    const response = await axiosInstance.get(url);

    return response.data.result;
  } catch (error) {
    console.error("Error retrieving transaction history:", error);
    throw error;
  }
};

export const getLatestBlocks = async ({
  minHeight,
  maxHeight,
}: PayloadRequest): Promise<IBlockJSON> => {
  const url = `/blockchain`;
  try {
    const response = await axiosInstance.get(url, {
      params: {
        minHeight,
        maxHeight,
      },
    });

    return response.data.result;
  } catch (error) {
    console.error("Error retrieving transaction history:", error);
    throw error;
  }
};

export const getLatestTransactions = async ({
  page,
  limit,
}: Payload): Promise<ResponsePagination<unknown>> => {
  const url = `/kaleido/latest-transactions`;
  try {
    const response = await axiosInstance.get(url, { params: { page, limit } });

    return response.data;
  } catch (error) {
    console.error("Error retrieving transaction history:", error);
    throw error;
  }
};

export const getTransactionDetail = async ({
  address,
  page,
  limit,
}: PayloadGetKaleidoTransactions): Promise<ResponsePagination<unknown>> => {
  const url = `/kaleido/transaction/${address}`;

  try {
    const response = await axiosInstance.get(url, {
      params: {
        page,
        limit,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error retrieving transaction history:", error);
    throw error;
  }
};

export const getBlockDetail = async ({
  address,
  page,
  limit,
}: PayloadGetKaleidoTransactions): Promise<ResponsePagination<unknown>> => {
  const url = `/kaleido/transaction/${address}`;

  try {
    const response = await axiosInstance.get(url, {
      params: {
        page,
        limit,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error retrieving transaction history:", error);
    throw error;
  }
};

export const getTransactionByAddress = async ({
  address,
  page,
  limit,
}: PayloadGetKaleidoTransactions): Promise<ResponsePagination<unknown>> => {
  const url = `/kaleido/transactions/${address}`;

  try {
    const response = await axiosInstance.get(url, {
      params: {
        page,
        limit,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error retrieving transaction history:", error);
    throw error;
  }
};

export const getValidator = async ({
  height,
}: {
  height: string;
}): Promise<ValidatorResponse> => {
  const url = `/validators`;
  try {
    const response = await axiosInstance.get(url, {
      params: { height },
    });

    return response.data.result;
  } catch (error) {
    console.error("Error retrieving transaction history:", error);
    throw error;
  }
};

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IPool,
  IPoolInterface,
} from "../../../../../../../../@chainlink/contracts-ccip/src/v0.8/ccip/interfaces/pools/IPool";

const _abi = [
  {
    inputs: [],
    name: "getToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "originalSender",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "receiver",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "remoteChainSelector",
        type: "uint64",
      },
      {
        internalType: "bytes",
        name: "extraArgs",
        type: "bytes",
      },
    ],
    name: "lockOrBurn",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "originalSender",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "remoteChainSelector",
        type: "uint64",
      },
      {
        internalType: "bytes",
        name: "extraData",
        type: "bytes",
      },
    ],
    name: "releaseOrMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IPool__factory {
  static readonly abi = _abi;
  static createInterface(): IPoolInterface {
    return new utils.Interface(_abi) as IPoolInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IPool {
    return new Contract(address, _abi, signerOrProvider) as IPool;
  }
}

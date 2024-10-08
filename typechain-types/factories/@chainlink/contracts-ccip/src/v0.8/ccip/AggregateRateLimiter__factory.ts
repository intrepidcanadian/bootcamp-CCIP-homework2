/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type {
  AggregateRateLimiter,
  AggregateRateLimiterInterface,
  RateLimiter,
} from "../../../../../../@chainlink/contracts-ccip/src/v0.8/ccip/AggregateRateLimiter";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "isEnabled",
            type: "bool",
          },
          {
            internalType: "uint128",
            name: "capacity",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "rate",
            type: "uint128",
          },
        ],
        internalType: "struct RateLimiter.Config",
        name: "config",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "OnlyCallableByAdminOrOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "PriceNotFoundForToken",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "currentRateLimiterState",
    outputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "tokens",
            type: "uint128",
          },
          {
            internalType: "uint32",
            name: "lastUpdated",
            type: "uint32",
          },
          {
            internalType: "bool",
            name: "isEnabled",
            type: "bool",
          },
          {
            internalType: "uint128",
            name: "capacity",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "rate",
            type: "uint128",
          },
        ],
        internalType: "struct RateLimiter.TokenBucket",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTokenLimitAdmin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
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
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "setAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "isEnabled",
            type: "bool",
          },
          {
            internalType: "uint128",
            name: "capacity",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "rate",
            type: "uint128",
          },
        ],
        internalType: "struct RateLimiter.Config",
        name: "config",
        type: "tuple",
      },
    ],
    name: "setRateLimiterConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200190d3803806200190d83398181016040528101906200003791906200058c565b338060008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620000ac576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000a3906200061f565b60405180910390fd5b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161462000133576200013281620002bb60201b60201c565b5b5050506040518060a0016040528082602001516fffffffffffffffffffffffffffffffff1681526020014263ffffffff16815260200182600001511515815260200182602001516fffffffffffffffffffffffffffffffff16815260200182604001516fffffffffffffffffffffffffffffffff16815250600360008201518160000160006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff16021790555060208201518160000160106101000a81548163ffffffff021916908363ffffffff16021790555060408201518160000160146101000a81548160ff02191690831515021790555060608201518160010160006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff16021790555060808201518160010160106101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff16021790555090505050620006b3565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036200032c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620003239062000691565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127860405160405180910390a350565b6000604051905090565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200044982620003fe565b810181811067ffffffffffffffff821117156200046b576200046a6200040f565b5b80604052505050565b600062000480620003ea565b90506200048e82826200043e565b919050565b60008115159050919050565b620004aa8162000493565b8114620004b657600080fd5b50565b600081519050620004ca816200049f565b92915050565b60006fffffffffffffffffffffffffffffffff82169050919050565b620004f781620004d0565b81146200050357600080fd5b50565b6000815190506200051781620004ec565b92915050565b600060608284031215620005365762000535620003f9565b5b62000542606062000474565b905060006200055484828501620004b9565b60008301525060206200056a8482850162000506565b6020830152506040620005808482850162000506565b60408301525092915050565b600060608284031215620005a557620005a4620003f4565b5b6000620005b5848285016200051d565b91505092915050565b600082825260208201905092915050565b7f43616e6e6f7420736574206f776e657220746f207a65726f0000000000000000600082015250565b600062000607601883620005be565b91506200061482620005cf565b602082019050919050565b600060208201905081810360008301526200063a81620005f8565b9050919050565b7f43616e6e6f74207472616e7366657220746f2073656c66000000000000000000600082015250565b600062000679601783620005be565b9150620006868262000641565b602082019050919050565b60006020820190508181036000830152620006ac816200066a565b9050919050565b61124a80620006c36000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806379ba50971161005b57806379ba5097146100da5780638da5cb5b146100e4578063c92b283214610102578063f2fde38b1461011e5761007d565b8063546719cd14610082578063599f6431146100a0578063704b6c02146100be575b600080fd5b61008a61013a565b6040516100979190610d26565b60405180910390f35b6100a861027b565b6040516100b59190610d82565b60405180910390f35b6100d860048036038101906100d39190610dd8565b6102a5565b005b6100e26103e8565b005b6100ec61057d565b6040516100f99190610d82565b60405180910390f35b61011c60048036038101906101179190610f52565b6105a6565b005b61013860048036038101906101339190610dd8565b610685565b005b610142610bec565b61027660036040518060a00160405290816000820160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020016000820160109054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016000820160149054906101000a900460ff161515151581526020016001820160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020016001820160109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681525050610699565b905090565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6102ad61057d565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141580156103365750600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614155b1561036d576040517ff6cd562000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f8fe72c3e0020beb3234e76ae6676fa576fbfcae600af1c4fea44784cf0db329c816040516103dd9190610d82565b60405180910390a150565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610478576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046f90610fdc565b60405180910390fd5b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a350565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6105ae61057d565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141580156106375750600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614155b1561066e576040517ff6cd562000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61068281600361075390919063ffffffff16565b50565b61068d6109eb565b61069681610a7b565b50565b6106a1610bec565b61070482606001516fffffffffffffffffffffffffffffffff1683600001516fffffffffffffffffffffffffffffffff16846020015163ffffffff16426106e89190611035565b85608001516fffffffffffffffffffffffffffffffff16610ba7565b82600001906fffffffffffffffffffffffffffffffff1690816fffffffffffffffffffffffffffffffff168152505042826020019063ffffffff16908163ffffffff1681525050819050919050565b60008260000160109054906101000a900463ffffffff1663ffffffff164261077b9190611035565b905060008114610885576108278360010160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff168460000160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff16838660010160109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff16610ba7565b8360000160006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff160217905550428360000160106101000a81548163ffffffff021916908363ffffffff1602179055505b6108d782602001516fffffffffffffffffffffffffffffffff168460000160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff16610bd3565b8360000160006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff16021790555081600001518360000160146101000a81548160ff02191690831515021790555081602001518360010160006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff16021790555081604001518360010160106101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055507f9ea3374b67bf275e6bb9c8ae68f9cae023e1c528b4b27e092f0bb209d3531c19826040516109de91906110ab565b60405180910390a1505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a79576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a7090611112565b60405180910390fd5b565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610ae9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ae09061117e565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127860405160405180910390a350565b6000610bc9858385610bb9919061119e565b86610bc491906111e0565b610bd3565b9050949350505050565b6000818310610be25781610be4565b825b905092915050565b6040518060a0016040528060006fffffffffffffffffffffffffffffffff168152602001600063ffffffff16815260200160001515815260200160006fffffffffffffffffffffffffffffffff16815260200160006fffffffffffffffffffffffffffffffff1681525090565b60006fffffffffffffffffffffffffffffffff82169050919050565b610c7e81610c59565b82525050565b600063ffffffff82169050919050565b610c9d81610c84565b82525050565b60008115159050919050565b610cb881610ca3565b82525050565b60a082016000820151610cd46000850182610c75565b506020820151610ce76020850182610c94565b506040820151610cfa6040850182610caf565b506060820151610d0d6060850182610c75565b506080820151610d206080850182610c75565b50505050565b600060a082019050610d3b6000830184610cbe565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610d6c82610d41565b9050919050565b610d7c81610d61565b82525050565b6000602082019050610d976000830184610d73565b92915050565b6000604051905090565b600080fd5b610db581610d61565b8114610dc057600080fd5b50565b600081359050610dd281610dac565b92915050565b600060208284031215610dee57610ded610da7565b5b6000610dfc84828501610dc3565b91505092915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610e5382610e0a565b810181811067ffffffffffffffff82111715610e7257610e71610e1b565b5b80604052505050565b6000610e85610d9d565b9050610e918282610e4a565b919050565b610e9f81610ca3565b8114610eaa57600080fd5b50565b600081359050610ebc81610e96565b92915050565b610ecb81610c59565b8114610ed657600080fd5b50565b600081359050610ee881610ec2565b92915050565b600060608284031215610f0457610f03610e05565b5b610f0e6060610e7b565b90506000610f1e84828501610ead565b6000830152506020610f3284828501610ed9565b6020830152506040610f4684828501610ed9565b60408301525092915050565b600060608284031215610f6857610f67610da7565b5b6000610f7684828501610eee565b91505092915050565b600082825260208201905092915050565b7f4d7573742062652070726f706f736564206f776e657200000000000000000000600082015250565b6000610fc6601683610f7f565b9150610fd182610f90565b602082019050919050565b60006020820190508181036000830152610ff581610fb9565b9050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061104082610ffc565b915061104b83610ffc565b925082820390508181111561106357611062611006565b5b92915050565b60608201600082015161107f6000850182610caf565b5060208201516110926020850182610c75565b5060408201516110a56040850182610c75565b50505050565b60006060820190506110c06000830184611069565b92915050565b7f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000600082015250565b60006110fc601683610f7f565b9150611107826110c6565b602082019050919050565b6000602082019050818103600083015261112b816110ef565b9050919050565b7f43616e6e6f74207472616e7366657220746f2073656c66000000000000000000600082015250565b6000611168601783610f7f565b915061117382611132565b602082019050919050565b600060208201905081810360008301526111978161115b565b9050919050565b60006111a982610ffc565b91506111b483610ffc565b92508282026111c281610ffc565b915082820484148315176111d9576111d8611006565b5b5092915050565b60006111eb82610ffc565b91506111f683610ffc565b925082820190508082111561120e5761120d611006565b5b9291505056fea2646970667358221220b8ebe87e4cc1b02da5d72afeb1279f0775e50939791d6bb39dd71e827af718d164736f6c63430008130033";

type AggregateRateLimiterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AggregateRateLimiterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AggregateRateLimiter__factory extends ContractFactory {
  constructor(...args: AggregateRateLimiterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    config: RateLimiter.ConfigStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AggregateRateLimiter> {
    return super.deploy(
      config,
      overrides || {}
    ) as Promise<AggregateRateLimiter>;
  }
  override getDeployTransaction(
    config: RateLimiter.ConfigStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(config, overrides || {});
  }
  override attach(address: string): AggregateRateLimiter {
    return super.attach(address) as AggregateRateLimiter;
  }
  override connect(signer: Signer): AggregateRateLimiter__factory {
    return super.connect(signer) as AggregateRateLimiter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AggregateRateLimiterInterface {
    return new utils.Interface(_abi) as AggregateRateLimiterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AggregateRateLimiter {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AggregateRateLimiter;
  }
}

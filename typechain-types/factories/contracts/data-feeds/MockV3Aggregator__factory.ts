/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MockV3Aggregator,
  MockV3AggregatorInterface,
} from "../../../contracts/data-feeds/MockV3Aggregator";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
      },
      {
        internalType: "int256",
        name: "_initialAnswer",
        type: "int256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "int256",
        name: "current",
        type: "int256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "roundId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256",
      },
    ],
    name: "AnswerUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "roundId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "startedBy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startedAt",
        type: "uint256",
      },
    ],
    name: "NewRound",
    type: "event",
  },
  {
    inputs: [],
    name: "aggregator",
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
        name: "_aggregator",
        type: "address",
      },
    ],
    name: "confirmAggregator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "description",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "roundId",
        type: "uint256",
      },
    ],
    name: "getAnswer",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint80",
        name: "_roundId",
        type: "uint80",
      },
    ],
    name: "getRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "roundId",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "answer",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "startedAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "answeredInRound",
        type: "uint80",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "roundId",
        type: "uint256",
      },
    ],
    name: "getTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestAnswer",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestRound",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "roundId",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "answer",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "startedAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "answeredInRound",
        type: "uint80",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract AggregatorV2V3Interface",
        name: "_aggregator",
        type: "address",
      },
    ],
    name: "proposeAggregator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proposedAggregator",
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
        internalType: "int256",
        name: "_answer",
        type: "int256",
      },
    ],
    name: "updateAnswer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint80",
        name: "_roundId",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "_answer",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startedAt",
        type: "uint256",
      },
    ],
    name: "updateRoundData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200251538038062002515833981810160405281019062000037919062000187565b81816040516200004790620000fb565b62000054929190620001f0565b604051809103906000f08015801562000071573d6000803e3d6000fd5b506000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050506200021d565b610ea8806200166d83390190565b600080fd5b600060ff82169050919050565b62000126816200010e565b81146200013257600080fd5b50565b60008151905062000146816200011b565b92915050565b6000819050919050565b62000161816200014c565b81146200016d57600080fd5b50565b600081519050620001818162000156565b92915050565b60008060408385031215620001a157620001a062000109565b5b6000620001b18582860162000135565b9250506020620001c48582860162000170565b9150509250929050565b620001d9816200010e565b82525050565b620001ea816200014c565b82525050565b6000604082019050620002076000830185620001ce565b620002166020830184620001df565b9392505050565b611440806200022d6000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80639a6fc8f511610097578063b633620c11610066578063b633620c1461028f578063e8c4be30146102bf578063f8a2abd3146102dd578063feaf968c146102f957610100565b80639a6fc8f5146101f3578063a87a20ce14610227578063a928c09614610243578063b5ab58dc1461025f57610100565b806354fd4d50116100d357806354fd4d501461017b578063668a0f02146101995780637284e416146101b75780638205bf6a146101d557610100565b8063245a7bfc14610105578063313ce567146101235780634aa2011f1461014157806350d25bcd1461015d575b600080fd5b61010d61031b565b60405161011a9190610c6b565b60405180910390f35b61012b61033f565b6040516101389190610ca2565b60405180910390f35b61015b60048036038101906101569190610d70565b6103d6565b005b61016561046d565b6040516101729190610de6565b60405180910390f35b610183610504565b6040516101909190610e10565b60405180910390f35b6101a1610509565b6040516101ae9190610e10565b60405180910390f35b6101bf6105a0565b6040516101cc9190610ebb565b60405180910390f35b6101dd6105c0565b6040516101ea9190610e10565b60405180910390f35b61020d60048036038101906102089190610edd565b610657565b60405161021e959493929190610f19565b60405180910390f35b610241600480360381019061023c9190610f6c565b61070d565b005b61025d60048036038101906102589190610fc5565b61079b565b005b61027960048036038101906102749190610ff2565b6108d2565b6040516102869190610de6565b60405180910390f35b6102a960048036038101906102a49190610ff2565b610976565b6040516102b69190610e10565b60405180910390f35b6102c7610a1a565b6040516102d49190610c6b565b60405180910390f35b6102f760048036038101906102f2919061105d565b610a40565b005b610301610b81565b604051610312959493929190610f19565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156103ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103d191906110b6565b905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634aa2011f858585856040518563ffffffff1660e01b815260040161043594939291906110e3565b600060405180830381600087803b15801561044f57600080fd5b505af1158015610463573d6000803e3d6000fd5b5050505050505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166350d25bcd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104ff919061113d565b905090565b600081565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663668a0f026040518163ffffffff1660e01b8152600401602060405180830381865afa158015610577573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061059b919061117f565b905090565b60606040518060600160405280602381526020016113e860239139905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16638205bf6a6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561062e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610652919061117f565b905090565b60008060008060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639a6fc8f5876040518263ffffffff1660e01b81526004016106b991906111ac565b60a060405180830381865afa1580156106d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106fa91906111dc565b9450945094509450945091939590929450565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a87a20ce826040518263ffffffff1660e01b81526004016107669190610de6565b600060405180830381600087803b15801561078057600080fd5b505af1158015610794573d6000803e3d6000fd5b5050505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461082b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610822906112a3565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b5ab58dc836040518263ffffffff1660e01b815260040161092e9190610e10565b602060405180830381865afa15801561094b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061096f919061113d565b9050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b633620c836040518263ffffffff1660e01b81526004016109d29190610e10565b602060405180830381865afa1580156109ef573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a13919061117f565b9050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610aaf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aa690611335565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610b3d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b34906113c7565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008060008060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa158015610bf5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c1991906111dc565b945094509450945094509091929394565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610c5582610c2a565b9050919050565b610c6581610c4a565b82525050565b6000602082019050610c806000830184610c5c565b92915050565b600060ff82169050919050565b610c9c81610c86565b82525050565b6000602082019050610cb76000830184610c93565b92915050565b600080fd5b600069ffffffffffffffffffff82169050919050565b610ce181610cc2565b8114610cec57600080fd5b50565b600081359050610cfe81610cd8565b92915050565b6000819050919050565b610d1781610d04565b8114610d2257600080fd5b50565b600081359050610d3481610d0e565b92915050565b6000819050919050565b610d4d81610d3a565b8114610d5857600080fd5b50565b600081359050610d6a81610d44565b92915050565b60008060008060808587031215610d8a57610d89610cbd565b5b6000610d9887828801610cef565b9450506020610da987828801610d25565b9350506040610dba87828801610d5b565b9250506060610dcb87828801610d5b565b91505092959194509250565b610de081610d04565b82525050565b6000602082019050610dfb6000830184610dd7565b92915050565b610e0a81610d3a565b82525050565b6000602082019050610e256000830184610e01565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610e65578082015181840152602081019050610e4a565b60008484015250505050565b6000601f19601f8301169050919050565b6000610e8d82610e2b565b610e978185610e36565b9350610ea7818560208601610e47565b610eb081610e71565b840191505092915050565b60006020820190508181036000830152610ed58184610e82565b905092915050565b600060208284031215610ef357610ef2610cbd565b5b6000610f0184828501610cef565b91505092915050565b610f1381610cc2565b82525050565b600060a082019050610f2e6000830188610f0a565b610f3b6020830187610dd7565b610f486040830186610e01565b610f556060830185610e01565b610f626080830184610f0a565b9695505050505050565b600060208284031215610f8257610f81610cbd565b5b6000610f9084828501610d25565b91505092915050565b610fa281610c4a565b8114610fad57600080fd5b50565b600081359050610fbf81610f99565b92915050565b600060208284031215610fdb57610fda610cbd565b5b6000610fe984828501610fb0565b91505092915050565b60006020828403121561100857611007610cbd565b5b600061101684828501610d5b565b91505092915050565b600061102a82610c4a565b9050919050565b61103a8161101f565b811461104557600080fd5b50565b60008135905061105781611031565b92915050565b60006020828403121561107357611072610cbd565b5b600061108184828501611048565b91505092915050565b61109381610c86565b811461109e57600080fd5b50565b6000815190506110b08161108a565b92915050565b6000602082840312156110cc576110cb610cbd565b5b60006110da848285016110a1565b91505092915050565b60006080820190506110f86000830187610f0a565b6111056020830186610dd7565b6111126040830185610e01565b61111f6060830184610e01565b95945050505050565b60008151905061113781610d0e565b92915050565b60006020828403121561115357611152610cbd565b5b600061116184828501611128565b91505092915050565b60008151905061117981610d44565b92915050565b60006020828403121561119557611194610cbd565b5b60006111a38482850161116a565b91505092915050565b60006020820190506111c16000830184610f0a565b92915050565b6000815190506111d681610cd8565b92915050565b600080600080600060a086880312156111f8576111f7610cbd565b5b6000611206888289016111c7565b955050602061121788828901611128565b94505060406112288882890161116a565b93505060606112398882890161116a565b925050608061124a888289016111c7565b9150509295509295909350565b7f496e76616c69642070726f706f7365642061676772656761746f720000000000600082015250565b600061128d601b83610e36565b915061129882611257565b602082019050919050565b600060208201905081810360008301526112bc81611280565b9050919050565b7f50726f706f7365642061676772656761746f722063616e6e6f74206265207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b600061131f602a83610e36565b915061132a826112c3565b604082019050919050565b6000602082019050818103600083015261134e81611312565b9050919050565b7f50726f706f7365642061676772656761746f722063616e6e6f7420626520637560008201527f7272656e742061676772656761746f7200000000000000000000000000000000602082015250565b60006113b1603083610e36565b91506113bc82611355565b604082019050919050565b600060208201905081810360008301526113e0816113a4565b905091905056fe7372632f646174612d66656564732f4d6f636b563341676772656761746f722e736f6ca2646970667358221220640d2c277a33cb586cbdb81401c14e3de1db98cb6dad4eb12b9a156b5a9bb2eb64736f6c6343000813003360806040523480156200001157600080fd5b5060405162000ea838038062000ea8833981810160405281019062000037919062000210565b816000806101000a81548160ff021916908360ff16021790555062000062816200011960201b60201c565b6001600460006101000a81548177ffffffffffffffffffffffffffffffffffffffffffffffff021916908360170b77ffffffffffffffffffffffffffffffffffffffffffffffff16021790555075ffffffffffffffffffffffffffffffffffffffffffff600560006101000a81548177ffffffffffffffffffffffffffffffffffffffffffffffff021916908360170b77ffffffffffffffffffffffffffffffffffffffffffffffff1602179055505050620002dd565b8060018190555042600281905550600360008154809291906200013c9062000290565b919050555080600660006003548152602001908152602001600020819055504260076000600354815260200190815260200160002081905550426008600060035481526020019081526020016000208190555050565b600080fd5b600060ff82169050919050565b620001af8162000197565b8114620001bb57600080fd5b50565b600081519050620001cf81620001a4565b92915050565b6000819050919050565b620001ea81620001d5565b8114620001f657600080fd5b50565b6000815190506200020a81620001df565b92915050565b600080604083850312156200022a576200022962000192565b5b60006200023a85828601620001be565b92505060206200024d85828601620001f9565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000819050919050565b60006200029d8262000286565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203620002d257620002d162000257565b5b600182019050919050565b610bbb80620002ed6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80638205bf6a1161008c578063a87a20ce11610066578063a87a20ce146101f4578063b5ab58dc14610210578063b633620c14610240578063feaf968c14610270576100cf565b80638205bf6a1461018657806384cf7519146101a45780639a6fc8f5146101c0576100cf565b806322adbc78146100d4578063313ce567146100f25780634aa2011f1461011057806350d25bcd1461012c578063668a0f021461014a57806370da2f6714610168575b600080fd5b6100dc610292565b6040516100e9919061067e565b60405180910390f35b6100fa6102a5565b60405161010791906106b5565b60405180910390f35b61012a60048036038101906101259190610783565b6102b6565b005b61013461032b565b60405161014191906107f9565b60405180910390f35b610152610331565b60405161015f9190610823565b60405180910390f35b610170610337565b60405161017d919061067e565b60405180910390f35b61018e61034a565b60405161019b9190610823565b60405180910390f35b6101be60048036038101906101b9919061086a565b610350565b005b6101da60048036038101906101d591906108aa565b6104dd565b6040516101eb9594939291906108e6565b60405180910390f35b61020e60048036038101906102099190610939565b61055a565b005b61022a60048036038101906102259190610966565b6105d1565b60405161023791906107f9565b60405180910390f35b61025a60048036038101906102559190610966565b6105e9565b6040516102679190610823565b60405180910390f35b610278610601565b6040516102899594939291906108e6565b60405180910390f35b600460009054906101000a900460170b81565b60008054906101000a900460ff1681565b8369ffffffffffffffffffff16600381905550826001819055508160028190555082600660006003548152602001908152602001600020819055508160076000600354815260200190815260200160002081905550806008600060035481526020019081526020016000208190555050505050565b60015481565b60035481565b600560009054906101000a900460170b81565b60025481565b8060170b8260170b12610398576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161038f90610a16565b60405180910390fd5b600160170b8260170b12156103e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103d990610a82565b60405180910390fd5b75ffffffffffffffffffffffffffffffffffffffffffff60170b8160170b1315610441576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161043890610aee565b60405180910390fd5b81600460006101000a81548177ffffffffffffffffffffffffffffffffffffffffffffffff021916908360170b77ffffffffffffffffffffffffffffffffffffffffffffffff16021790555080600560006101000a81548177ffffffffffffffffffffffffffffffffffffffffffffffff021916908360170b77ffffffffffffffffffffffffffffffffffffffffffffffff1602179055505050565b600080600080600085600660008869ffffffffffffffffffff16815260200190815260200160002054600860008969ffffffffffffffffffff16815260200190815260200160002054600760008a69ffffffffffffffffffff16815260200190815260200160002054899450945094509450945091939590929450565b80600181905550426002819055506003600081548092919061057b90610b3d565b919050555080600660006003548152602001908152602001600020819055504260076000600354815260200190815260200160002081905550426008600060035481526020019081526020016000208190555050565b60066020528060005260406000206000915090505481565b60076020528060005260406000206000915090505481565b6000806000806000600354600660006003548152602001908152602001600020546008600060035481526020019081526020016000205460076000600354815260200190815260200160002054600354945094509450945094509091929394565b60008160170b9050919050565b61067881610662565b82525050565b6000602082019050610693600083018461066f565b92915050565b600060ff82169050919050565b6106af81610699565b82525050565b60006020820190506106ca60008301846106a6565b92915050565b600080fd5b600069ffffffffffffffffffff82169050919050565b6106f4816106d5565b81146106ff57600080fd5b50565b600081359050610711816106eb565b92915050565b6000819050919050565b61072a81610717565b811461073557600080fd5b50565b60008135905061074781610721565b92915050565b6000819050919050565b6107608161074d565b811461076b57600080fd5b50565b60008135905061077d81610757565b92915050565b6000806000806080858703121561079d5761079c6106d0565b5b60006107ab87828801610702565b94505060206107bc87828801610738565b93505060406107cd8782880161076e565b92505060606107de8782880161076e565b91505092959194509250565b6107f381610717565b82525050565b600060208201905061080e60008301846107ea565b92915050565b61081d8161074d565b82525050565b60006020820190506108386000830184610814565b92915050565b61084781610662565b811461085257600080fd5b50565b6000813590506108648161083e565b92915050565b60008060408385031215610881576108806106d0565b5b600061088f85828601610855565b92505060206108a085828601610855565b9150509250929050565b6000602082840312156108c0576108bf6106d0565b5b60006108ce84828501610702565b91505092915050565b6108e0816106d5565b82525050565b600060a0820190506108fb60008301886108d7565b61090860208301876107ea565b6109156040830186610814565b6109226060830185610814565b61092f60808301846108d7565b9695505050505050565b60006020828403121561094f5761094e6106d0565b5b600061095d84828501610738565b91505092915050565b60006020828403121561097c5761097b6106d0565b5b600061098a8482850161076e565b91505092915050565b600082825260208201905092915050565b7f6d696e416e73776572206d757374206265206c657373207468616e206d61784160008201527f6e73776572000000000000000000000000000000000000000000000000000000602082015250565b6000610a00602583610993565b9150610a0b826109a4565b604082019050919050565b60006020820190508181036000830152610a2f816109f3565b9050919050565b7f6d696e416e7377657220697320746f6f206c6f77000000000000000000000000600082015250565b6000610a6c601483610993565b9150610a7782610a36565b602082019050919050565b60006020820190508181036000830152610a9b81610a5f565b9050919050565b7f6d6178416e7377657220697320746f6f20686967680000000000000000000000600082015250565b6000610ad8601583610993565b9150610ae382610aa2565b602082019050919050565b60006020820190508181036000830152610b0781610acb565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610b488261074d565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610b7a57610b79610b0e565b5b60018201905091905056fea26469706673582212204b7a2b5f97fcc588be2a43ddc54885f57e789d3f6daad23c59d583dea8c7368564736f6c63430008130033";

type MockV3AggregatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockV3AggregatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockV3Aggregator__factory extends ContractFactory {
  constructor(...args: MockV3AggregatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _decimals: PromiseOrValue<BigNumberish>,
    _initialAnswer: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockV3Aggregator> {
    return super.deploy(
      _decimals,
      _initialAnswer,
      overrides || {}
    ) as Promise<MockV3Aggregator>;
  }
  override getDeployTransaction(
    _decimals: PromiseOrValue<BigNumberish>,
    _initialAnswer: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _decimals,
      _initialAnswer,
      overrides || {}
    );
  }
  override attach(address: string): MockV3Aggregator {
    return super.attach(address) as MockV3Aggregator;
  }
  override connect(signer: Signer): MockV3Aggregator__factory {
    return super.connect(signer) as MockV3Aggregator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockV3AggregatorInterface {
    return new utils.Interface(_abi) as MockV3AggregatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockV3Aggregator {
    return new Contract(address, _abi, signerOrProvider) as MockV3Aggregator;
  }
}

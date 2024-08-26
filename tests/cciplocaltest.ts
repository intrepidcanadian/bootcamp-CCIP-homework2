import { expect } from "chai";
import { ethers } from "hardhat";
import {
  CCIPLocalSimulator,
  CrossChainNameServiceRegister,
  CrossChainNameServiceReceiver,
  CrossChainNameServiceLookup,
  MockRouter,
} from "../typechain-types";

describe("CrossChain Name Service Local Testing", function () {
  let ccipLocalSimulator: CCIPLocalSimulator;
  let ccnsRegister: CrossChainNameServiceRegister;
  let ccnsReceiver: CrossChainNameServiceReceiver;
  let ccnsLookupSource: CrossChainNameServiceLookup;
  let ccnsLookupReceiver: CrossChainNameServiceLookup;
  let mockRouter: MockRouter;
  let alice: string;
  let routerAddress: string;

  const supportedChainSelector = 16015286601757825753n;
   // Using the supported chain selector in the CCIPLocalSimulator libarry

  beforeEach(async function () {
    // Fetch signers
    const [deployer, aliceSigner] = await ethers.getSigners();
    alice = aliceSigner.address;

    // Step 1: Deploy the MockRouter contract
    const MockRouter = await ethers.getContractFactory("MockRouter");
    mockRouter = await MockRouter.deploy();
    await mockRouter.deployed();
    console.log("✅ MockRouter deployed at:", mockRouter.address);

    // Step 2: Deploy the CCIPLocalSimulator contract with the fully qualified name
    const CCIPLocalSimulator = await ethers.getContractFactory(
      "contracts/ccip/CCIPLocalSimulator.sol:CCIPLocalSimulator"
    );
    ccipLocalSimulator = await CCIPLocalSimulator.deploy();
    await ccipLocalSimulator.deployed();
    console.log("✅ CCIPLocalSimulator deployed at:", ccipLocalSimulator.address);

    // Step 3: Get the Router contract address from the configuration()
    routerAddress = mockRouter.address; // Using MockRouter as the router
    console.log("ℹ️ Router Address retrieved:", routerAddress);

    // Step 4: Deploy the CrossChainNameServiceRegister contract
    const CCNSRegister = await ethers.getContractFactory(
      "CrossChainNameServiceRegister"
    );
    ccnsRegister = await CCNSRegister.deploy(
      routerAddress,
      ccipLocalSimulator.address // Passing the correct lookup address
    );
    await ccnsRegister.deployed();
    console.log("✅ CrossChainNameServiceRegister deployed at:", ccnsRegister.address);

    // Step 5: Deploy the CrossChainNameServiceReceiver contract
    const CCNSReceiver = await ethers.getContractFactory(
      "CrossChainNameServiceReceiver"
    );
    ccnsReceiver = await CCNSReceiver.deploy(
      routerAddress,
      ccipLocalSimulator.address, // Passing the correct lookup address
      supportedChainSelector
    );
    await ccnsReceiver.deployed();
    console.log("✅ CrossChainNameServiceReceiver deployed at:", ccnsReceiver.address);

    // Step 6: Deploy the CrossChainNameServiceLookup contracts
    const CCNSLookup = await ethers.getContractFactory(
      "CrossChainNameServiceLookup"
    );

    // Deploy source lookup contract
    ccnsLookupSource = await CCNSLookup.deploy();
    await ccnsLookupSource.deployed();
    console.log("✅ CrossChainNameServiceLookup (Source) deployed at:", ccnsLookupSource.address);

    // Deploy receiver lookup contract
    ccnsLookupReceiver = await CCNSLookup.deploy();
    await ccnsLookupReceiver.deployed();
    console.log("✅ CrossChainNameServiceLookup (Receiver) deployed at:", ccnsLookupReceiver.address);

    // Step 7: Enable the chain on all contracts
    const gasLimit = 2000000; // Adjust this value as necessary
    await ccnsRegister.enableChain(supportedChainSelector, ccnsReceiver.address, gasLimit);
    console.log("✅ Chain enabled on CrossChainNameServiceRegister");

    await ccnsLookupSource.setCrossChainNameServiceAddress(ccnsRegister.address);
    console.log("✅ CrossChainNameService address set on Lookup (Source)");

    await ccnsLookupReceiver.setCrossChainNameServiceAddress(ccnsReceiver.address);
    console.log("✅ CrossChainNameService address set on Lookup (Receiver)");
  });

  it("should deploy all contracts and register a name successfully", async function () {
    // Register a name using CrossChainNameServiceRegister
    const registerTx = await ccnsRegister.register("alice.ccns");
    await registerTx.wait();

    // Verify that the name was registered successfully
    const registeredAddress = await ccnsLookupSource.lookup("alice.ccns");
    expect(registeredAddress).to.equal(alice);
    console.log("✅ 'alice.ccns' registered and verified successfully");
  });
});

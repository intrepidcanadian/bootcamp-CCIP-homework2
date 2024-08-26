import { ethers } from "hardhat";

async function deploy() {
  // Step 1: Use the fully qualified name for the CCIPLocalSimulator contract
  const localSimulatorFactory = await ethers.getContractFactory(
    "contracts/ccip/CCIPLocalSimulator.sol:CCIPLocalSimulator"
  );

  // Step 2: Deploy the contract without arguments since the constructor expects none
  const localSimulator = await localSimulatorFactory.deploy();

  // Wait for the deployment to be mined
  await localSimulator.deployed();

  console.log("CCIPLocalSimulator deployed to:", localSimulator.address);

  // Step 3: Retrieve the configuration from the deployed contract
  const config = await localSimulator.configuration();
  console.log("Configuration retrieved:", config);

  // Step 4: Return the deployed contract instance and configuration
  return {
    localSimulator,
    config: {
      chainSelector: config.chainSelector_,
      sourceRouter: config.sourceRouter_,
      destinationRouter: config.destinationRouter_,
      wrappedNative: config.wrappedNative_,
      linkToken: config.linkToken_,
      ccipBnM: config.ccipBnM_,
      ccipLnM: config.ccipLnM_,
    }
  };
}

// Script to run the deployment
async function main() {
  try {
    const { localSimulator, config } = await deploy();

    // Log the configuration details
    console.log("Deployed CCIPLocalSimulator at:", localSimulator.address);
    console.log("Chain Selector:", config.chainSelector);
    console.log("Source Router:", config.sourceRouter);
    console.log("Destination Router:", config.destinationRouter);
    console.log("Wrapped Native Token:", config.wrappedNative);
    console.log("Link Token:", config.linkToken);
    console.log("CCIP Business Network Management:", config.ccipBnM);
    console.log("CCIP Link Network Management:", config.ccipLnM);
  } catch (error) {
    console.error("Error deploying contracts:", error);
    process.exit(1);
  }
  process.exit(0);
}

// Execute the main function to deploy
main();

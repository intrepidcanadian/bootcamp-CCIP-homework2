// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {Client} from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
import {IRouterClient} from "@chainlink/contracts-ccip/src/v0.8/ccip/interfaces/IRouterClient.sol";
import {WETH9, LinkToken, BurnMintERC677Helper} from "@chainlink/local/src/ccip/CCIPLocalSimulator.sol";

contract MockRouter is IRouterClient {
    // match the CCIPLocalSimulator
    uint64 constant SUPPORTED_CHAIN_SELECTOR = 16015286601757825753;

    BurnMintERC677Helper internal immutable i_ccipBnM;
    BurnMintERC677Helper internal immutable i_ccipLnM;

    event MessageSent(address indexed sender, uint64 indexed destinationChainSelector, bytes32 messageId);

    constructor() {
        i_ccipBnM = new BurnMintERC677Helper("CCIP-BnM", "CCIP-BnM");
        i_ccipLnM = new BurnMintERC677Helper("CCIP-LnM", "CCIP-LnM");
    }

    function isChainSupported(uint64 chainSelector) public pure returns (bool) {
        return chainSelector == SUPPORTED_CHAIN_SELECTOR;
    }

    function getSupportedTokens(uint64 chainSelector) external view override returns (address[] memory tokens) {
        if (!isChainSupported(chainSelector)) {
            return new address[](0);
        }
        tokens = new address[](2);
        tokens[0] = address(i_ccipBnM);
        tokens[1] = address(i_ccipLnM);
    }

    function getFee(
        uint64 destinationChainSelector,
        Client.EVM2AnyMessage calldata message
    ) external view override returns (uint256 fee) {
        require(isChainSupported(destinationChainSelector), "Unsupported destination chain");
        return 0;
    }

    function ccipSend(
        uint64 destinationChainSelector,
        Client.EVM2AnyMessage calldata message
    ) external payable override returns (bytes32) {
        require(isChainSupported(destinationChainSelector), "Unsupported destination chain");

        bytes32 messageId = keccak256(abi.encode(destinationChainSelector, message));
        emit MessageSent(msg.sender, destinationChainSelector, messageId);

        return messageId;
    }
}

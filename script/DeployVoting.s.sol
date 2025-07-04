// SPDX-License-Identifier: MIT

import {Script} from "forge-std/Script.sol";
import {console2} from "forge-std/console2.sol";
import {VotingSystem} from "../src/Voting.sol";

pragma solidity 0.8.30;

contract DeployVoting is Script {
    function run() external returns (VotingSystem) {
        vm.startBroadcast();
        VotingSystem votingContract = new VotingSystem(address(0));
        console2.log(" contract address", address(votingContract ));
        vm.stopBroadcast();
        return votingContract;
    }
}
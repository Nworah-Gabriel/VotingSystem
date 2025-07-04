// SPDX-License-Identifier: MIT

import {Test} from "forge-std/Test.sol";
import {VotingSystem} from "../src/Voting.sol";
import {DeployVoting} from "../script/DeployVoting.s.sol";

pragma solidity 0.8.30;

contract VotingTest is Test {
    VotingSystem public contractInstance;
    DeployVoting public deployer;
    function setUp() public {
        deployer = new DeployVoting();
        contractInstance = deployer.run();

    }

    function testExample() public {
        // Add your test logic here
    }
}
// SPDX-License-Identifier: MIT
pragma solidity 0.8.30;

import "@ethereum-attestation-service/contracts/IEAS.sol";

/// @title Voting System with EAS Attestation Verification
/// @author Chidinma Authur
/// @notice This contract allows users to vote for candidates after verifying their identity using the Ethereum Attestation Service (EAS).
/// @dev Uses the EAS contract interface to verify vote eligibility via attestations.

contract VotingSystem {
    /// @notice Interface to the Ethereum Attestation Service (EAS)
    IEAS public eas;

    /// @notice Address of the contract owner
    address public owner;

    /// @notice Total number of votes cast in the system
    uint256 public totalVotes;

    /// @notice Tracks whether a given address has already voted
    mapping(address => bool) public hasVoted;

    /// @notice Stores the number of votes each candidate has received
    /// @dev candidateId => vote count
    mapping(uint256 => uint256) public candidateVotes;

    /// @notice Emitted when a vote is successfully cast
    /// @param voter Address of the voter
    /// @param candidateId ID of the candidate voted for
    event VoteCast(address indexed voter, uint256 candidateId);

    /// @notice Deploys the VotingSystem contract with a reference to the EAS contract
    /// @param _eas Address of the deployed EAS contract
    constructor(address _eas) {
        eas = IEAS(_eas);
        owner = msg.sender;
    }

    /// @notice Allows a user to cast a vote for a specific candidate
    /// @dev Checks if the voter has already voted and validates their attestation using EAS
    /// @param candidateId The ID of the candidate to vote for
    /// @param attestationUID The unique identifier of the attestation linked to the voter's identity
    function vote(uint256 candidateId, bytes32 attestationUID) external {
        require(!hasVoted[msg.sender], "Already voted");
        require(eas.getAttestation(attestationUID).recipient == msg.sender, "Invalid attestation");

        hasVoted[msg.sender] = true;
        candidateVotes[candidateId]++;
        totalVotes++;

        emit VoteCast(msg.sender, candidateId);
    }

    /// @notice Returns the number of votes received by a given candidate
    /// @param candidateId The ID of the candidate
    /// @return The number of votes for the candidate
    function getVotes(uint256 candidateId) external view returns (uint256) {
        return candidateVotes[candidateId];
    }
}

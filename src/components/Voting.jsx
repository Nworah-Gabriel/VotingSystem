import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { Box, Button, Card, Heading, Text, Flex, Spinner, Input } from "theme-ui";
import { FaVoteYea, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function Voting() {
    const [hasMetamask, setHasMetamask] = useState(false);
    const [isConnected, setIsConnected] = useState(false);
    const [account, setAccount] = useState("");
    const [candidateId, setCandidateId] = useState(1);
    const [status, setStatus] = useState("Connect Wallet to Vote");
    const [isLoading, setIsLoading] = useState(false);
    const [voteCounts, setVoteCounts] = useState({});

    // Check for MetaMask
    useEffect(() => {
        if (window.ethereum) {
            setHasMetamask(true);
        }
    }, []);

    // Connect Wallet
    const connectWallet = async () => {
        try {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const accounts = await provider.send("eth_requestAccounts", []);
            setAccount(accounts[0]);
            setIsConnected(true);
            setStatus("Wallet Connected");
        } catch (error) {
            setStatus(`Error: ${error.message}`);
        }
    };

    // Submit Vote
    const vote = async () => {
        if (!isConnected) {
            setStatus("Please connect your wallet first");
            return;
        }

        setIsLoading(true);
        setStatus("Processing...");

        try {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const contract = new ethers.Contract(
                "YOUR_CONTRACT_ADDRESS",
                ["function vote(uint256 candidateId, bytes32 attestationUID)"],
                signer
            );

            const tx = await contract.vote(candidateId, "YOUR_ATTESTATION_UID");
            await tx.wait();
            setStatus("Vote Successful!");
        } catch (error) {
            setStatus(`Error: ${error.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            alignContent: "center",
            height: "100%",
            padding: "auto",
            justifySelf: "space-around",
            marginTop: 5
        }}>
            <Card
                sx={{
                    maxWidth: "600px",
                    mx: "auto",
                    p: 4,
                    borderRadius: "lg",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
            >
                <Heading as="h2" sx={{ mb: 3 }}>
                    {/* Logo */}
                    <Flex sx={{ alignItems: "center", gap: 2 }}>
                        <FaVoteYea size={40} />
                        <Text
                            sx={{
                                fontSize: 5,
                                fontWeight: 900, // extremely bold
                                fontFamily: "'Great Vibes', cursive", // calligraphic font
                                letterSpacing: "0.2px",
                            }}
                        >
                            iVote
                        </Text>
                    </Flex>
                </Heading>

                {!hasMetamask ? (
                    <Text sx={{ color: "accent" }}>
                        Please install MetaMask to use this application.
                    </Text>
                ) : !isConnected ? (
                    <Button onClick={connectWallet}>Connect Wallet</Button>
                ) : (
                    <>
                        <Text sx={{ mb: 2 }}>
                            Connected: <strong>{account.slice(0, 6)}...{account.slice(-4)}</strong>
                        </Text>

                        <Box sx={{ mb: 3 }}>
                            <Text>Select Candidate:</Text>
                            <Flex sx={{ gap: 2, mt: 2 }}>
                                {[1, 2, 3].map((id) => (
                                    <Button
                                        key={id}
                                        variant={candidateId === id ? "primary" : "outline"}
                                        onClick={() => setCandidateId(id)}
                                    >
                                        Candidate {id}
                                    </Button>
                                ))}
                            </Flex>
                        </Box>

                        <Button onClick={vote} disabled={isLoading}>
                            {isLoading ? <Spinner size={20} /> : "Submit Vote"}
                        </Button>

                        <Text sx={{ mt: 3, fontWeight: "bold" }}>
                            Status: {status}
                        </Text>
                    </>
                )}
            </Card>
        </Box>

    );
}
import { Box, Heading, Text, Button, Flex, Image } from "theme-ui";

export default function Hero() {
    return (
        <Flex
            sx={{
                flexDirection: ["column", "row"],
                alignItems: "center",
                justifyContent: "space-between",
                p: [0, 2],
                pr: [0, 0],
                py: [0, 0],
                px: [0, 0],
                // border: "1px solid red",
                bg: "muted",
                minHeight: "70vh",
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    overflow: "hidden",
                    maxWidth: ["100%", "100%"],
                    textAlign: ["center", "left"],
                    p: 0,
                    m: 0,
                    width: ["100%", "100%"],
                    height: ["600px", "650px"],
                    backgroundImage: 'url("vote.png")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    // borderRadius: "lg",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                    "::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        bg: "rgba(0,0,0,0.5)", // Dark overlay
                        zIndex: 0,
                    },
                }}
            >
                <Box
                    sx={{
                         position: "relative", zIndex: 1,
                        display: "flex",
                        flexDirection: ["column"],
                        alignItems: "center",
                        alignContent: "center",
                        alignSelf: "center",
                        px: [, 6],
                        textAlign: "center",
                        justifyContent: "center",
                        marginTop: ["170px", "200px"]
                    }}
                >
                    <Heading as="h1" sx={{ fontSize: ["35px", "80px"], mb: 1,  color: "white" }}>
                        Decentralized Voting
                    </Heading>
                    <Heading as="h2" sx={{ fontSize: ["25px", "55px"], mb: 3 , color: "rgb(175, 175, 175)"}}>
                        for a Transparent Future
                    </Heading>
                    <Text sx={{ fontSize: [2, 3], mb: 4, color: "grey" }}>
                        Secure, tamper-proof elections powered by blockchain technology. Every vote is immutable and verifiable.
                    </Text>
                    <Flex sx={{ gap: 3, justifyContent: ["center", "flex-start"] }}>
                        <Button sx={{ borderRadius: "5px"}}>Get Started</Button>
                        <Button variant="outline">Learn More</Button>
                    </Flex>
                </Box>

            </Box>
        </Flex>
    );
}
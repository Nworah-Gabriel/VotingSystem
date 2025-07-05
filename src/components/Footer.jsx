import { Box, Flex, Text, Link } from "theme-ui";

export default function Footer() {
    return (
        <Box
            as="footer"
            sx={{
                bg: "footerBg",
                color: "white",
                p: 4,
                textAlign: "center",
            }}
        >

            <Flex
                sx={{
                    justifyContent: "center",
                    gap: 4,
                    mb: 3,
                    flexWrap: "wrap",
                }}
            >
                <Link href="#features" sx={{ color: "white" }}>
                    Features
                </Link>
                <Link href="#how-it-works" sx={{ color: "white" }}>
                    How It Works
                </Link>
                <Link href="/privacy" sx={{ color: "white" }}>
                    Privacy Policy
                </Link>
                <Link href="/contact" sx={{ color: "white" }}>
                    Contact
                </Link>
            </Flex>
            <Text sx={{ fontSize: 1 }}>
                © {new Date().getFullYear()} iVote. Powered by EAS.
            </Text>
        </Box>
    );
}
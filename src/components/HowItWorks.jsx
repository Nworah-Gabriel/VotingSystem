import { Box, Flex, Heading, Text } from "theme-ui";
import { FaUserCheck, FaVoteYea, FaChartBar } from "react-icons/fa";

const steps = [
  {
    icon: <FaUserCheck size={24} />,
    title: "1. Register & Verify",
    description: "Connect your wallet and verify identity via EAS attestation.",
  },
  {
    icon: <FaVoteYea size={24} />,
    title: "2. Cast Your Vote",
    description: "Select your candidate and submit securely.",
  },
  {
    icon: <FaChartBar size={24} />,
    title: "3. Real-Time Results",
    description: "View live tallies on the blockchain.",
  },
];

export default function HowItWorks() {
  return (
    <Box id="how-it-works" sx={{ py: 5, px: 3, bg: "muted", borderRadius: " 45px 45px 0px 0px " }}>
      <Heading as="h2" sx={{ textAlign: "center", mb: 5, fontSize: [4, 5] }}>
        How It Works
      </Heading>
      <Flex
        sx={{
          flexDirection: ["column", "row"],
          justifyContent: "center",
          gap: 4,
          maxWidth: "1000px",
          mx: "auto",
        }}
      >
        {steps.map((step, index) => (
          <Flex
            key={index}
            sx={{
              flexDirection: "column",
              alignItems: "center",
              p: 4,
              border: "background",
              bg: "white",
              borderRadius: "10px",
              width: ["100%", "30%"],
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <Box sx={{ color: "primary", mb: 3}}>{step.icon}</Box>
            <Heading as="h3" sx={{ fontSize: 2, mb: 2  , color: "black"}}>
              {step.title}
            </Heading>
            <Text sx={{ textAlign: "center" , color: "grey"}}>{step.description}</Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
}
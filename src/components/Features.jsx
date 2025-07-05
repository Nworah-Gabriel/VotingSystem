import { Box, Grid, Heading, Text, Card } from "theme-ui";
import { FaLock, FaEye, FaCheckCircle, FaGlobe } from "react-icons/fa";

const features = [
  {
    icon: <FaLock size={32} />,
    title: "End-to-End Encryption",
    description: "Votes are cryptographically secured on the blockchain.",
  },
  {
    icon: <FaEye size={32} />,
    title: "Transparent Results",
    description: "Auditable by anyone in real-time.",
  },
  {
    icon: <FaCheckCircle size={32} />,
    title: "One Vote Per Person",
    description: "Prevents double voting with smart contracts.",
  },
  {
    icon: <FaGlobe size={32} />,
    title: "Global Accessibility",
    description: "Vote from anywhere with an internet connection.",
  },
];

export default function Features() {
  return (
    <Box id="features" sx={{ py: 5, px: 3, bg: "background" }}>
      <Heading as="h2" sx={{ textAlign: "center", mb: 5, fontSize: [4, 5] }}>
        Why Choose iVote?
      </Heading>
      <Grid
        columns={[1, 2, 4]}
        gap={4}
        sx={{ maxWidth: "1200px", mx: "auto", mt: 4 }}
      >
        {features.map((feature, index) => (
          <Card
            key={index}
            sx={{
              p: 4,
              borderRadius: "md",
              textAlign: "center",
              bg: "white",
              transition: "transform 0.3s",
              "&:hover": { transform: "translateY(-5px)" },
            }}
          >
            <Box sx={{ color: "primary", mb: 3 }}>{feature.icon}</Box>
            <Heading as="h3" sx={{ fontSize: 3, mb: 2, color: "black" }}>
              {feature.title}
            </Heading>
            <Text sx={{ color: "grey" }}>{feature.description}</Text>
          </Card>
        ))}
      </Grid>
    </Box>
  );
}
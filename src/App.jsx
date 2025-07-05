// import { Box } from "theme-ui";
// import Voting from "./components/Voting";
// import ThemeToggle from "./components/ThemeToggle";

// export default function App() {
//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         bg: "background",
//         p: 4,
//       }}
//     >
      
//       <Voting />
//     </Box>
//   );
// }

import { Box } from "theme-ui";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  return (
    <Box sx={{ minHeight: "100vh", bg: "background" }}>
      {/* <ThemeToggle /> */}
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Footer />
      <ThemeToggle />
    </Box>
  );
}
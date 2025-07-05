import { useColorMode, Button } from "theme-ui";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <Button
      onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
      sx={{
        position: "fixed",
        bottom: 3,
        right: 3,
        p: 2,
        borderRadius: "circle",
      }}
    >
      {colorMode === "light" ? <FaMoon /> : <FaSun />}
    </Button>
  );
}
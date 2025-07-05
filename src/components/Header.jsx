/** @jsxImportSource theme-ui */
import { useState, useEffect, useRef } from "react";
import { Flex, Box, Text, Button, IconButton, Link } from "theme-ui";
import { FaVoteYea } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  const route = [
    { name: "Home", link: "/" },
    { name: "Features", link: "#features" },
    { name: "How It Works", link: "#how-it-works" },
    { name: "FAQ", link: "/faq" },
    { name: "Contact", link: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY.current) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box as="header" sx={{ position: "fixed", width: "100%", zIndex: 1000 }}>
      <Flex
        as="nav"
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          px: [3, 4],
          py: 3,
          bg: "primary",
          color: "white",
          opacity: showNavbar ? 1 : 0,
          transform: showNavbar ? "translateY(0)" : "translateY(-20px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
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

        {/* Desktop Nav */}
        <Flex
          as="ul"
          sx={{
            listStyle: "none",
            gap: 4,
            display: ["none", "none", "flex"],
            alignItems: "center",
          }}
        >
          {route.map((route) => (
            <Link
              key={route.name}
              href={route.link}
              sx={{ color: "white", textDecoration: "none", fontSize: 1 }}
            >
              {route.name}
            </Link>
          ))}
        </Flex>

        {/* CTA Button for Desktop */}
        <Box sx={{ display: ["none", "none", "block"] }}>
          <Button
            onClick={() => navigate("/vote")}
            sx={{
              bg: "white",
              "&:hover": { bg: "darkaccent" },
              borderRadius: "md",
              px: 3,
              py: 2,
              color: "primary"
            }}
          >
            Start Voting
          </Button>
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          onClick={() => setIsOpen(true)}
          sx={{ display: ["block", "block", "none"], color: "white" }}
        >
          <FiMenu size={24} />
        </IconButton>
      </Flex>

      {/* Mobile Menu Overlay */}
      <>
        <Box
          onClick={() => setIsOpen(false)}
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            bg: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(4px)",
            zIndex: isOpen ? 998 : -1,
            opacity: isOpen ? 1 : 0,
            transition: "opacity 0.5s ease",
            pointerEvents: isOpen ? "auto" : "none",
          }}
        />

        {/* Mobile Menu Drawer */}
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: ["75%", "65%", "50%"],
            height: "100%",
            bg: "background",
            color: "text",
            zIndex: 999,
            p: 4,
            transform: isOpen ? "translateX(0)" : "translateX(-100%)",
            opacity: isOpen ? 1 : 0,
            transition: "transform 0.4s ease, opacity 0.4s ease",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Flex sx={{ justifyContent: "space-between", mb: 4 }}>
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
            <IconButton
              onClick={() => setIsOpen(false)}
              sx={{ color: "text" }}
            >
              <FiX size={20} />
            </IconButton>
          </Flex>

          

          {route.map((route) => (
            <Link
              key={route.name}
              href={route.link}
              sx={{
                color: "text",
                textDecoration: "none",
                py: 3,
                fontSize: 2,
                borderBottom: "1px solid rgba(200, 200, 200, 0.2)",
              }}
            >
              {route.name}
            </Link>
          ))}

          <Box sx={{ mt: "auto", pt: 2 }}>
            <Button
              onClick={() => {
                setIsOpen(false);
                navigate("/vote");
              }}
              sx={{
                width: "100%",
                borderRadius: 8,
                bg: "accent",
                "&:hover": { bg: "darkaccent" },
              }}
            >
              Start Voting
            </Button>
          </Box>
        </Box>
      </>
    </Box>
  );
}

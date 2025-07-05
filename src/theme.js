import { base } from "@theme-ui/presets";

export default {
    ...base,

    colors: {
        white: "#FFFFFF",
        offWhite: "#F8F9FA",
        snow: "#F1F3F4",
        pearl: "#EDEDED",
        ghost: "#FAFAFA",

        text: "#081C15",
        background: "#D8F3DC",
        backgroundBorder: "1px solid #D8F3DC",
        primary: "#52B788",      // Trust / Growth
        secondary: "#40916C",    // Freedom / Solidity
        accent: "#70E000",       // Bright CTA
        muted: "#95D5B2",        // Section backgrounds
        border: "#B7E4C7",
        highlight: "#CCFF33",    // Hover BG or Notice
        error: "#E74C3C",
        success: "#38B000",

        darkaccent: "#38B000",

        footerBg: "#1B4332",     // Footer background

        modes: {
            dark: {
                text: "#FAFAFA",
                background: "#081C15",
                primary: "#74C69D",
                secondary: "#2D6A4F",
                accent: "#9EF01A",
                muted: "#40916C",
                border: "#1B4332",
                highlight: "#004B23",
                error: "#FF6B6B",
                success: "#38B000",
                darkaccent: "#70E000",
                footerBg: "#121212",
            },
        },
    },

    fonts: {
        body: "'Inter', system-ui, sans-serif",
        heading: "'DM Serif Display', serif",
        mono: "Menlo, monospace",
    },


    fontWeights: {
        body: 400,
        heading: 800,
        bold: 700,
    },

    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],

    lineHeights: {
        body: 1.6,
        heading: 1.25,
    },

    space: [0, 4, 8, 16, 32, 64, 128],

    sizes: {
        container: 1024,
        full: "100%",
    },

    radii: {
        default: 8,
        circle: 9999,
        md: 12,
        lg: 16,
    },

    shadows: {
        card: "0 4px 12px rgba(0, 0, 0, 0.06)",
        deep: "0 6px 20px rgba(0, 0, 0, 0.1)",
    },

    borders: {
        normal: "1px solid",
    },

    buttons: {
        primary: {
            bg: "primary",
            color: "white",
            px: 3,
            py: 2,
            borderRadius: "md",
            fontWeight: "bold",
            "&:hover": {
                bg: "accent",
            },
        },
        secondary: {
            bg: "secondary",
            color: "white",
            "&:hover": {
                bg: "primary",
            },
        },
        outline: {
            bg: "transparent",
            border: "2px solid",
            borderColor: "primary",
            color: "primary",
            "&:hover": {
                bg: "highlight",
                color: "#081C15",
            },
        },
    },

    cards: {
        primary: {
            padding: 3,
            bg: "background",
            borderRadius: "md",
            boxShadow: "card",
            border: "normal",
            borderColor: "border",
        },
    },

    forms: {
        input: {
            borderColor: "border",
            borderRadius: "md",
            px: 3,
            py: 2,
            fontSize: 2,
            bg: "white",
            "&:focus": {
                borderColor: "primary",
                outline: "none",
                boxShadow: "0 0 0 2px rgba(82, 183, 136, 0.3)",
            },
        },
        textarea: {
            variant: "forms.input",
        },
        select: {
            variant: "forms.input",
        },
        label: {
            fontWeight: "bold",
            mb: 1,
            fontSize: 1,
        },
    },

    links: {
        nav: {
            fontWeight: "bold",
            color: "primary",
            textDecoration: "none",
            px: 2,
            py: 1,
            "&:hover": {
                color: "accent",
            },
        },
    },
};

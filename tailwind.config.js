const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: colors.orange,
        // gray: colors.neutral,
      },
      typography: (theme) => ({
        // DEFAULT: {
        //   css: {
        //     // color: theme("colors.gray.700"),
        //     a: {
        //       color: theme("colors.primary.500"),
        //       "&:hover": {
        //         color: theme("colors.primary.600"),
        //       },
        //       code: { color: theme("colors.primary.400") },
        //     },
        //     h1: {
        //       fontWeight: "700",
        //       letterSpacing: theme("letterSpacing.tight"),
        //       // color: theme("colors.gray.900"),
        //     },
        //     h2: {
        //       fontWeight: "700",
        //       letterSpacing: theme("letterSpacing.tight"),
        //       // color: theme("colors.gray.900"),
        //     },
        //     h3: {
        //       fontWeight: "600",
        //       // color: theme("colors.gray.900"),
        //     },
        //     "h4,h5,h6": {
        //       // color: theme("colors.gray.900"),
        //     },
        //     code: {
        //       color: theme("colors.pink.500"),
        //       backgroundColor: theme("colors.gray.100"),
        //       paddingLeft: "4px",
        //       paddingRight: "4px",
        //       paddingTop: "2px",
        //       paddingBottom: "2px",
        //       borderRadius: "0.25rem",
        //     },
        //     "code:before": {
        //       content: "none",
        //     },
        //     "code:after": {
        //       content: "none",
        //     },
        //     details: {
        //       backgroundColor: theme("colors.gray.100"),
        //       paddingLeft: "4px",
        //       paddingRight: "4px",
        //       paddingTop: "2px",
        //       paddingBottom: "2px",
        //       borderRadius: "0.25rem",
        //     },
        //     hr: { borderColor: theme("colors.gray.200") },
        //     "ol li:before": {
        //       fontWeight: "600",
        //       // color: theme("colors.gray.500"),
        //     },
        //     "ul li:before": {
        //       backgroundColor: theme("colors.gray.500"),
        //     },
        //     strong: { color: theme("colors.gray.600") },
        //     blockquote: {
        //       // color: theme("colors.gray.900"),
        //       borderLeftColor: theme("colors.gray.200"),
        //     },
        //   },
        // },
        // dark: {
        //   css: {
        //     // color: theme("colors.gray.300"),
        //     a: {
        //       color: theme("colors.primary.500"),
        //       "&:hover": {
        //         color: theme("colors.primary.400"),
        //       },
        //       code: { color: theme("colors.primary.400") },
        //     },
        //     h1: {
        //       fontWeight: "700",
        //       letterSpacing: theme("letterSpacing.tight"),
        //       // color: theme("colors.gray.100"),
        //     },
        //     h2: {
        //       fontWeight: "700",
        //       letterSpacing: theme("letterSpacing.tight"),
        //       // color: theme("colors.gray.100"),
        //     },
        //     h3: {
        //       fontWeight: "600",
        //       // color: theme("colors.gray.100"),
        //     },
        //     "h4,h5,h6": {
        //       // color: theme("colors.gray.100"),
        //     },
        //     code: {
        //       backgroundColor: theme("colors.gray.800"),
        //     },
        //     details: {
        //       backgroundColor: theme("colors.gray.800"),
        //     },
        //     hr: { borderColor: theme("colors.gray.700") },
        //     "ol li:before": {
        //       fontWeight: "600",
        //       color: theme("colors.gray.400"),
        //     },
        //     "ul li:before": {
        //       backgroundColor: theme("colors.gray.400"),
        //     },
        //     strong: { color: theme("colors.gray.100") },
        //     thead: {
        //       // color: theme("colors.gray.100"),
        //     },
        //     tbody: {
        //       tr: {
        //         borderBottomColor: theme("colors.gray.700"),
        //       },
        //     },
        //     blockquote: {
        //       // color: theme("colors.gray.100"),
        //       borderLeftColor: theme("colors.gray.700"),
        //     },
        //   },
        // },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};

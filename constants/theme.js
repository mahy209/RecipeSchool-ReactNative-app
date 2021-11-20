import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    darkNave: "#181820",
    darkOrange: "#D66F30",
    lightOrange: "#D8CA9E",
    lightOrange2: "#F1E1B0",
    white: "#FFFFFF",
    gray: "#969494",
    gray2: "#F8F8F8",
    lightGray: "#F5F6FB",
    lightGray2: "#757575",

    transparentBlack1: 'rgba(2, 2, 2, 0.1)',
    transparentBlack3: 'rgba(2, 2, 2, 0.3)',
    transparentBlack5: 'rgba(2, 2, 2, 0.5)',
    transparentBlack7: 'rgba(2, 2, 2, 0.7)',
    transparentBlack9: 'rgba(2, 2, 2, 0.9)',

    transparentGray: 'rgba(150,148,148)',
    transparentDarkGray: 'rgba(20,20,20, 0.9)',

    transparent: 'transparent',
};
export const SIZES = {
    // global sizes
    base: 8,
    font: 16,
    radius: 12,
    padding: 24,

    // font sizes
    largeTitle: 36,
    h1: 28,
    h2: 20,
    h3: 18,
    h4: 16,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};
export const FONTS = {
    largeTitle: { fontFamily: "sans-serif", fontSize: SIZES.largeTitle },
    h1: { fontFamily: "sans-serif", fontSize: SIZES.h1, lineHeight: 33 },
    h2: { fontFamily: "sans-serif", fontSize: SIZES.h2, lineHeight: 23 },
    h3: { fontFamily: "sans-serif", fontSize: SIZES.h3, lineHeight: 20 },
    h4: { fontFamily: "sans-serif", fontSize: SIZES.h4, lineHeight: 16 },
    body1: { fontFamily: "sans-serif", fontSize: SIZES.body1, lineHeight: 40 },
    body2: { fontFamily: "sans-serif", fontSize: SIZES.body2, lineHeight: 33 },
    body3: { fontFamily: "sans-serif", fontSize: SIZES.body3, lineHeight: 23 },
    body4: { fontFamily: "sans-serif", fontSize: SIZES.body4, lineHeight: 20 },
    body5: { fontFamily: "sans-serif", fontSize: SIZES.body5, lineHeight: 16 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
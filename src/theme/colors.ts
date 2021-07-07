import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#f6e572",
  primaryBright: "#8b8474",
  primaryDark: "#8b8474",
  secondary: "#ff0000",
  success: "#8b8474",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#EE7D72",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#444444",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#FFB606",
  tertiary: "#1C1C1C",
  text: "#EE7D72",
  textDisabled: "#EE7D72",
  textSubtle: "#f6e572",
  borderColor: "#E9EAEB",
  card: "#EAEAEA",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#f6e572",
  background: "#000000",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#000000",
  input: "#8b8474",
  primaryDark: "#3eb489",
  tertiary: "#8b8474",
  text: "#f6e572",
  textDisabled: "#BDC2C4",
  textSubtle: "#f6e572",
  borderColor: "#E9EAEB",
  card: "#343434",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
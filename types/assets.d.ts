declare module "*.ttf" {
  const font: import("expo-font").FontSource;
  export default font;
}

declare module "*.png" {
  const image: import("react-native").ImageSourcePropType;
  export default image;
}

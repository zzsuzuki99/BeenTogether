export const getExternalImageResource = (image, defaultImage) => {
  return image
    ? {
        uri: image
      }
    : defaultImage;
};

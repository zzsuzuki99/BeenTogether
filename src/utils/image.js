export const getExternalImageResource = (image, defaultImage) => {
  return image
    ? {
        uri: image
      }
    : defaultImage;
};

export const getBase64ImageResource = (image, defaultImage) => {
  return image
    ? {
        uri: `data:${image.type};base64,${image.data}`
      }
    : defaultImage;
};

const convertText = (
  text: string,
  options: {
    withHyphens?: boolean;
    capitalize?: boolean;
  } = {}
) => {
  let formattedText = text;

  if (options.capitalize) {
    formattedText =
      formattedText.length > 3
        ? formattedText.charAt(0).toUpperCase() +
          formattedText.slice(1).toLowerCase()
        : formattedText.toUpperCase();
  }

  if (options.withHyphens) {
    formattedText = formattedText.replaceAll(' ', '-');
  }

  return formattedText;
};

export default convertText;

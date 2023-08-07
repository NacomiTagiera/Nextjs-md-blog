export const capitalizeText = (text: string) =>
  text.length <= 3
    ? text.toUpperCase()
    : text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

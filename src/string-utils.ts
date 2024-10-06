export const stringIncrement = (numberString: string): string => {
  try {
    return (parseInt(numberString) + 1).toString();
  } catch (error) {
    return "0";
  }
};

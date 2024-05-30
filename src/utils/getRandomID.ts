export const getRandomId = (min: number, max: number) => {
  const randomId = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomId.toString();
};

type GenerateRandomPositiveInt = (max?: number) => number;

export const generateRandomPositiveInt: GenerateRandomPositiveInt = (
  max = 10000,
) => {
  return Math.floor(Math.random() * max);
};

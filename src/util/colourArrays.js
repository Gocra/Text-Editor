const colourShadesArray = () => {
  return [
    "hsl(0, 0%, 0%)",
    "hsl(0, 0%, 11%)",
    "hsl(0, 0%, 22%)",
    "hsl(0, 0%, 33%)",
    "hsl(0, 0%, 44%)",
    "hsl(0, 0%, 56%)",
    "hsl(0, 0%, 67%)",
    "hsl(0, 0%, 78%)",
    "hsl(0, 0%, 89%)",
    "hsl(0, 0%, 100%)",
  ];
};

const colourDefaultsArray = () => {
  return [
    "hsl(0, 100%, 27%)",
    "hsl(0, 100%, 50%)",
    "hsl(39, 100%, 50%)",
    "hsl(60, 100%, 50%)",
    "hsl(120, 100%, 25%)",
    "hsl(180, 100%, 50%)",
    "hsl(219, 79%, 66%)",
    "hsl(240, 100%, 50%)",
    "hsl(300, 100%, 25%)",
    "hsl(300, 100%, 50%)",
  ];
};

const createColoursArray = (lightness) => {
  return [
    `hsl(0, 100%, ${lightness}%)`,
    `hsl(0, 100%, ${lightness}%)`,
    `hsl(39, 100%, ${lightness}%)`,
    `hsl(60, 100%, ${lightness}%)`,
    `hsl(120, 100%, ${lightness}%)`,
    `hsl(180, 100%, ${lightness}%)`,
    `hsl(219, 79%, ${lightness}%)`,
    `hsl(240, 100%, ${lightness}%)`,
    `hsl(300, 100%, ${lightness}%)`,
    `hsl(300, 100%, ${lightness}%)`,
  ];
};

const coloursArray = [
  colourShadesArray(),
  colourDefaultsArray(),
  createColoursArray(90),
  createColoursArray(75),
  createColoursArray(60),
  createColoursArray(45),
  createColoursArray(30),
  createColoursArray(15),
];

export default coloursArray;

export const calculateDistance = (a, b) => Math.abs(a - b);

export const calculateSegmentProduct = (a, b, c) => Math.abs(a - c) * Math.abs(c - b);

export const calculateKilobytes = (a) => Math.floor(a / 1024);

export const calculateSegments = (a, b) => Math.floor(a / b);

export const calculateDigitSum = (str) => {
  const d = String(str);
  const r1 = Number(d[0]);
  const r2 = Number(d[1]);
  const b = r1 + r2;
  return b;
};

export const swapHundredsAndTens = (str) => {
  const d = String(str);
  const r1 = String(d[0]);
  const r2 = String(d[1]);
  const r3 = String(d[2]);
  const b = r2 + r1 + r3;
  const s = Number(b);
  return s;
};

export const getHundredsDigit = () => null;

export const getFullHours = () => null;

export const getDayOfWeek = () => null;

export const countSquares = () => null;

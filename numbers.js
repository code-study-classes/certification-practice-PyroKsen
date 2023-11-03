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

export const getHundredsDigit = (str) => {
  const d = String(str);
  const dlina = d.length;
  const r3 = String(d[dlina - 3]);
  return Number(r3);
};

export const getFullHours = (a) => {
  if (a === 0) {
    return 0;
  } if (a >= 3600) {
    return Math.floor(a / 3600);
  }
};

export const getDayOfWeek = (dayOfYear) => {
  if (dayOfYear <= 7) {
    return dayOfYear;
  }
  if (dayOfYear === 365) {
    return 1;
  }
  return dayOfYear % 7;
};

export const countSquares = (a, b, c) => {
  const d = a - (a % c);
  const v = b - (b % c);
  if (a % c === 0 && b % c === 0) {
    return ((a * b) / (c * c));
  } if (a % c !== 0 && b % c === 0) {
    return ((d * b) / (c * c));
  } if ((a % c === 0 && b % c !== 0)) {
    return ((a * v) / (c * c));
  } if (a % c !== 0 && b % c !== 0) {
    return ((d * v) / (c * c));
  }
};

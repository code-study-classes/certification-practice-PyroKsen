export const isPositive = (a) => Boolean(a > 0);

export const isOdd = (a) => Boolean(a % 2 === 1 || a % 2 === -1);

export const checkInequality = (a, b) => Boolean(a > 2 && b <= 3);

export const checkInequality2 = (a, b) => Boolean(a >= 0 || b < -2);

export const checkBetweenNumbers = (a, b, c) => Boolean(b > a && b < c);

export const checkOddThreeDigitNumber = (a) => Boolean((a < -99 && a > -1000 && a % 2 === 1) || (a < 1000 && a > 99 && a % 2 === 1));

export const checkUniqueDigits = () => {};

export const isSecondQuadrant = (x, y) => Boolean(x < 0 && y > 0);

export const isIsoscelesTriangle = (a, b, c) => Boolean((a === b || b === c || a === c) && a + b + c !== 0);

export const areSameColorFields = () => {};
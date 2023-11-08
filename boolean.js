export const isPositive = (a) => {
    if (a > 0) {
        return true
    } else {
        return false
    }
};

export const isOdd = (a) => {
    if (a % 2 === 1 || a % 2 === -1) {
        return true
    } else {
        return false
    }
};

export const checkInequality = (a, b) => {
    if (a > 2 && b <= 3) {
        return true
    } else {
        return false
    }
};

export const checkInequality2 = (a, b) => {
    if (a >= 0 || b < -2) {
        return true
    } else {
        return false
    }
};

export const checkBetweenNumbers = (a, b, c) => {
    if (b > a && b < c) {
        return true
    } else {
        return false
    }
};

export const checkOddThreeDigitNumber = (a) => {
    if ((a < -99 && a > -1000 || a < 1000 && a > 99)) {
        if (a % 2 === 1) {
            return true
        }
        return false
    }
    return false
};

export const checkUniqueDigits = () => {};

export const isSecondQuadrant = (x, y) => {
    if (x < 0 && y > 0) {
        return true
    } else {
        return false
    }
};

export const isIsoscelesTriangle = (a, b, c) => {
    if (a === 0 || b === 0 || c === 0) {
        return false
    } else if (a === b || b === c || a === c) {
        return true
    } else {
        return false
    }
};

export const areSameColorFields = () => {};
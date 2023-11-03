export const countUppercaseLetters = (str) => {
  let i = 0;
  let index = 0;
  let s = 0;
  const dlina = str.length;
  while (i < dlina) {
    if (str[index] === str[index].toUpperCase() && str[index] === str[index].toLowerCase()) {
      i += 1;
      index += 1;
    } else if (str[index] === str[index].toUpperCase()) {
      s += 1;
      i += 1;
      index += 1;
    } else {
      i += 1;
      index += 1;
    }
  } return s;
};

export const combineStrings = (num1, num2, str1, str2) => {
  let i = 0;
  let index = 0;
  const dlina2 = str2.length;
  let result = '';
  while (i < num1) {
    result += str1[index];
    i += 1;
    index += 1;
  }
  index = 0;
  i = 0;
  while (i < num2) {
    result += str2[(dlina2 - num2) + index];
    i += 1;
    index += 1;
  } return result;
};

export const containsSubstring = (s, so) => s.includes(so);

export const replaceSubstring = (str1, str2, str3) => str1.replace(str2, str3);

export const countWordsWithSameLetters = (str) => {
  let i = 0;
  let index = 0;
  let result = 0;
  let slovo = '';
  const dlina = str.length;
  while (i < dlina) {
    if ((str[index - 1] === ' ' && str[index + 1] === ' ')(str[index + 1] === undefined && str[index - 1] === ' ')) {
      slovo += str[index];
      slovo += str[index];
      i += 1;
      index += 1;
    } else if ((str[index - 1] === ' ' || str[index - 1] === undefined)) {
      slovo += str[index];
      i += 1;
      index += 1;
    } else if (str[index + 1] === ' ' || str[index + 1] === undefined) {
      slovo += str[index];
      i += 1;
      index += 1;
    } else {
      i += 1;
      index += 1;
    }
  }
  i = 0;
  index = 0;
  const dlinasr = slovo.length;
  const rrr = slovo.toUpperCase();
  while (i < dlinasr) {
    if (i % 2 === 0 && rrr[index] === rrr[index + 1]) {
      result += 1;
      i += 1;
      index += 1;
    } else {
      i += 1;
      index += 1;
    }
  } return result;
};

export const countWordsWithA = (strr) => {
  const str = `${strr} `;
  let i = 0;
  let index = 0;
  let slovo = '';
  let res = 0;
  let i2 = 0;
  let index2 = 0;
  while (i < str.length) {
    if (str[index] !== ' ') {
      slovo += str[index];
      i += 1;
      index += 1;
      console.log(slovo);
    } else if (str[index] === ' ' || str[index + 1] === undefined) {
      i += 1;
      index += 1;
      while (i2 < slovo.length) {
        if (slovo[index2] === 'a' || slovo[index2] === 'A') {
          res += 1;
          i2 += 1;
          index2 += 1;
          break;
        } else {
          i2 += 1;
          index2 += 1;
        }
      }
      slovo = '';
      index2 = 0;
      i2 = 0;
    }
  } return res;
};

export const normalizeSpaces = () => {};

export const extractFileName = () => {};

export const encryptSentence = () => {};

export const checkBrackets = () => {};

function reverseWords(str) {
  let currentWord = '';
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === ' ') {
      newStr += currentWord + ' ';
      currentWord = '';
      continue;
    }
    currentWord =  str[i] + currentWord;
  }
  newStr += currentWord;
  return newStr;
}
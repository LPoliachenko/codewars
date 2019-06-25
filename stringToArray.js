

function stringToArray(string){
  let arrayOfWords = [];
  let currentWord = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
     arrayOfWords.push(currentWord);
     currentWord = '';
    } else {
      currentWord = currentWord + string[i];
    }
  }
  arrayOfWords.push(currentWord);
  return arrayOfWords;
}

//Function
function stringToArray(string){
  return string.split(' ');
}

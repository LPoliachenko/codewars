/*
Regex count lowercase letters
https://www.codewars.com/kata/regex-count-lowercase-letters/train/javascript
*/

function lowercaseCount(str){
   return (str.match(/[a-z]/g) || []).length;
}
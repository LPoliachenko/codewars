/*
 https://www.codewars.com/kata/filter-out-the-geese/train/javascript
 Filter out the geese
*/

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(birds => !geese.includes(birds))
  }
;

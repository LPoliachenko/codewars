[sPoNgEbOb MeMe] (https://www.codewars.com/kata/spongebob-meme/train/javascript)

function spongeMeme(s) {
 let str = '';
 for(let i = 0; i < s.length; i++) {
     if (i % 2 == 0) { str += s[i].toUpperCase();
     }else { str += s[i].toLowerCase();
   }
}
return str;
}
function tickets(peopleInLine){
  let bill50 = 0;
  let bill25 = 0;
  for (let i = 0; i < peopleInLine.length; i++) {
    const currentPayment = peopleInLine[i];
    if (currentPayment === 25) {
      bill25++;
      continue;
    }
    if (currentPayment === 50) {
      bill50++;
      if (bill25 > 0) {
        bill25--;
      } else {
        return 'NO';
      }
      continue;
    }
    if (currentPayment === 100) {
      if (bill50 > 0 && bill25 > 0) {
        bill50--;
        bill25--;
        continue;
      }
      if (bill25 >= 3) {
        bill25 -= 3;
        continue;
      }
      return 'NO';
    }
  }
  return 'YES';
}
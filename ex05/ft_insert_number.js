let tab = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
insertNumber(tab, 5.2);

function insertNumber(tab, number) {
  for (let i = 0; i < tab.length; i++) {
    if (number < tab[i]) {
      tab.splice(i, 0, number);
      return;
    }
  }
  tab.push(number);
}


console.log(tab)

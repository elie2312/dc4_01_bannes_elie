let tableau = ['1', '2', '3', '4', '5', '6', '7', '8'];

function printhalfarray(tableau) {
  for (let i = 0; i < tableau.length; i += 2) {
    console.log(tableau[i]);
  }
}
printhalfarray(tableau)

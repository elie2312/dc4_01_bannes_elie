let tableau = ['1', '2', '3', '4', '5', '6', '7', '8'];

function printUpdate(tableau) {
  for (let i = 0; i < tableau.length; i++) {
    tableau[i] = parseInt(tableau[i]) + 1; 
  }
  console.log(tableau); 

printUpdate(tableau);

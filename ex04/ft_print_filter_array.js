let tableau = ['1', '2', '3', '4', '5', '6', '7', '8'];

function printFilter(tableau) {
 let impair = tableau.filter(function(element) {
    return element % 2 !== 0;
     });
  console.log(impair); 
}
printFilter(tableau);

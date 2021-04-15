// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// let accounts = [[1, 2, 3], [3, 2, 1]];
// let accounts = [[1, 5], [7, 3], [3, 5]];
let accounts = [[2,8,7],[7,1,3],[1,9,5]]
let compareArr = [];

console.log(compareArr);

function findRichest(arr) {
  
  let compare = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
      // console.log(sum,i,j)
    }
    if (compare < sum) {
      compare = sum;
      sum = 0;
    }
  }
  
  return compare;
}

console.log(findRichest(accounts));

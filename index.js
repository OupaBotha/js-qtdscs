// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// O(n^2)
const selectionSort = (arr) => {
  
  // O(n)
  for(let i = 0; i < arr.length; i++){
    // O(1)
    let min = i;

    // O(n)
    for(let j = i + 1; j < arr.length; j++) {
      // O(1)
      if(arr[j] < arr[min]){
        // O(1)
        min = j;
      }
    }

    // O(1)
    if(i !== min){
      swap(arr, i, min);
    }
  }

  return arr;
}

const numbers = [100, 5, 23, 34, 56, 67, 89];

console.log('Selection Sort', selectionSort(numbers))
const numbers = [1, 2, 3, 4, 5];

function myMap(arr, func) {
    let mappedArr = [];
    for (let i = 0; i < arr.length; i++) {
      mappedArr.push(func(arr[i]));
    }
    return mappedArr;
  }
  
  const doubled = myMap(numbers, (num) => num * 2);
  console.log(doubled);

  function myFilter(arr, func) {
    let filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (func(arr[i])) {
        filteredArr.push(arr[i]);
      }
    }
    return filteredArr;
  }
  
 
  
  const evens = myFilter(numbers, (num) => num % 2 === 0);
  console.log(evens);
  
function myReduce(arr, func, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < arr.length; i++) {
      accumulator = func(accumulator, arr[i]);
    }
    return accumulator;
  }
  
  const sum = myReduce(numbers, (acc, curr) => acc + curr, 0);
  console.log(sum); 

  function myForEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
      func(arr[i]);
    }
  }
  
  myForEach(numbers, (num) => {
    console.log(num * 2); 
  });
  
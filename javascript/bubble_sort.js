function bubbleSort(arr) {
  // 0(n^2)
  // iterate through the arr
  // compare the current element vs next element
    // if current is bigger
      // then we swap
  // go through swapping until array is fully sorted

  let swapped = false

  for(let i = 0; i < arr.length; i++){
    swapped = false
    for(let j = 0; j < (arr.length -1 -i); j++){
      if(arr[j] > arr[j + 1]){
        // [arr[j], arr[j + 1]] = [arr[j +1], arr[j]]
        // or this would work for swapping
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        swapped = true
      }
    }
    if(!swapped) {
      break
    }
  }
  return arr
}

// test with node bubble_sort

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [1, 2, 3, 4]");
  console.log("=>", bubbleSort([3, 2, 1, 4]));
  
  console.log("");
  
  console.log("Expecting: [1, 2, 3]");
  console.log("=>", bubbleSort([1, 2, 3]));
  
  console.log("");
  
  console.log("Expecting: []");
  console.log("=>", bubbleSort([]));

  console.log("");
  
  console.log("Expecting: [1, 2, 3]");
  console.log("=>", bubbleSort([2, 3, 1]));
}

module.exports = bubbleSort;

// first attempt

// let i = 0

// while (i < arr.length-1){
//   if(arr[i] > arr [i+1])
//   {
//     [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
//   }
//   i++
// }
// return arr
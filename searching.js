// Implement a linear search algorithm

function linearSearch(array, target) {
  for(let i=0;i<array.length;i++){
    if(array[i] === target){
      return i
    }
  }
  return -1
}

// Implement a binary search algorithm

function binarySearch(array, target) {
  var low= 1
  var high= array.length;

  while(low <= high){
    let mid = Math.floor(low + (high - low)/2)
    if(array[mid] === target){
      return mid
    } else if (array[mid] < target){
      low = mid + 1
    } else {
      high = mid - 1
    }
    return -1
  }
}

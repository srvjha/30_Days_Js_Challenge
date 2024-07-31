// Tasks/Actvities:

// Activity 1: Sorting Algorithms

// Task 1: 
console.log("Bubble Sort Algorithm-->");

function bubbleSort(array){
    let isSwapped;

    do{
       isSwapped = false;
       for(let i=0;i<array.length-1;i++){
        if(array[i] > array[i+1]){
            [array[i],array[i+1]] = [array[i+1],array[i]];
            isSwapped = true;
        }
       }
    }while(isSwapped)
        return array;
}

let array = [5,2,7,8,1];
console.log(`Bubble Sort of [${array}] is: ${bubbleSort(array)}`)


// Task 2: 
console.log("Selection Sort Algorithm-->");

function selectionSort(array){
    let n = array.length;

    for(let i=0;i<n-1;i++){
        let minElement = i;
        //console.log("before minElement: ",minElement)
        for(let j=i+1;j<n;j++){
            if(array[j] < array[minElement]){
                minElement = j;
                //console.log("after minElement: ",minElement)
            }
        }
        if(minElement !== i){
            [array[i],array[minElement]] = [array[minElement],array[i]];
        }
    }
    return array;
}
let selectionArray = [4,5,7,8,1,3];
console.log(`Selection Sort of [${selectionArray}] is: ${selectionSort(selectionArray)}`);

// Task 3:
console.log("Quick Sort Algorithm-->");
//[5,2,7,8,1]
function quickSort(array,low=0,high=array.length-1){
    if(low < high){
    let pivot = helperPivot(array,low,high);
     quickSort(array,low,pivot-1);
     quickSort(array,pivot+1,high);
     }
    return array;
}

function helperPivot(array,low,high){
    let pivotElement = array[high];
    let i = low-1;
    for(let j=low;j<high;j++){
        // ignore the big element
        if(array[j] < pivotElement){
            i++; // very imp;
            [array[i],array[j]] = [array[j],array[i]];
        }
    }

    // final swap of ith val
    [array[i+1],array[high]] = [array[high],array[i+1]];
    return i+1;
}

console.log(
    `QuickSort of [${[4,5,7,8,1,3]}] is
    ${quickSort([4,5,7,8,1,3])}`
)

// Activity 2: Searching Algorithms

// Task 4:
console.log("Searching Algorithms");


function linearSearchAlgo(array,target){
    let n = array.length;
    for(let i=0;i<n;i++){
        if(array[i] === target){
            return i;
        }
    }
    return `The ${target} was not found in [${array}].`
}

console.log(
    `Linear Search of [${[1,2,3,4,5]}] for target ${5} is: 
    ${linearSearchAlgo([1,2,3,4,5],5)}`
)

// Task 5:

function binarySearch(array,target,startIndex){
    let mid = Math.floor(array.length/2);
    if(array.length === 0) return "No Element Found."
    if(array[mid] === target) return startIndex + mid;
    else if(array[mid] > target) {
        return binarySearch(array.slice(0,mid-1),target,startIndex+mid-1);
    }
    else {
        return binarySearch(array.slice(mid+1),target,startIndex+mid+1);
    }
}

console.log(
    `Binary Search of [${[1,2,3,4,5]}] for target 5 is: 
    ${binarySearch([1,2,3,4,5],5,0)}`
)

// Activity 3: String Algorithms
console.log("String Algorithms.")

// Task 6:

let string = "aaabbbcccdd";
function countOccurrence(string){
    let charCountsInString = new Map();
    for(let char of string){
        charCountsInString.set(char,(charCountsInString.get(char) || 0) + 1)
    }
    return charCountsInString;
}

let charCounts = countOccurrence(string);


let charCountsString = Array.from(charCounts).map(([char, count]) => `${char}: ${count}`).join(", ");

console.log(
    `Count of each character in string '${string}': ${charCountsString}`
);

// Task 7: 
let mystr = "abbcdefghiijhkk"
function longestSubstring(s){
    let maxLength = 0;
    let start = 0;
    let storeString = new Set();

    for (let end = 0; end < s.length; end++) {
        while (storeString.has(s[end])) {
            storeString.delete(s[start]);
            start++;
        }
        storeString.add(s[end]);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}
 console.log(
    `Length of the longest substring without repeating characters in '${mystr}': ${longestSubstring(mystr)}`
 ); 

 // Activity 4: Array Algorithm

 console.log("Array Algorithm.");
 // Task 8:
 let arr = [1, 2, 3, 4, 5, 6];
 console.log(`Original Array: [${arr}]`)
 let k = 4;
 console.log("K: ",k)

function reverse(nums,start,end){
    while(start<end){
        [nums[start],nums[end]] = [nums[end],nums[start]];
        start++;
        end--;
    }
}
function rotateByK(nums, k) {
  let n = nums.length;
  k = k%n;
   nums.reverse();
   reverse(nums,0,k-1);
   reverse(nums,k,nums.length-1);

   return nums;
};

console.log(
    `Rotated array: ${JSON.stringify(rotateByK(arr, k))}`
)

// Task 9:

let sorted1 = [5,6,7,8];
let sorted2 = [1,2,3,4];
console.log(`Sorted1: ${sorted1} and Sorted2:${sorted2}`)

function merge(sorted1,sorted2){
    let result = [];
    let i = 0;
    let j = 0;
    while(i<sorted1.length && j<sorted2.length){
        if(sorted1[i]<sorted2[j]){
            result.push(sorted1[i]);
            i++;
        }else{
            result.push(sorted2[j]);
            j++;
        }
    }
    while(i<sorted1.length){
        result.push(sorted1[i]);
        i++;
    }
    while(j<sorted2.length){
        result.push(sorted2[j]);
        j++;
    }
    return result;
}

console.log(
    `Merged array: [${(merge(sorted1, sorted2))}]`
)


// Activity 5: Dynamic Programming.
console.log("Dynamic Programming.")

// Task 10:

function fibMemo(n,memo={}){
    if(n in memo){
      console.log("MEMO CAllED: ",memo[n])
      return memo[n]
    }
        
   if(n <=1) return n

   memo[n] = fibMemo(n-1,memo) + fibMemo(n-2,memo)
   console.log("MEMO: ",memo[n])

   return memo[n]
}
let n=10;

console.log(
    `Fibonacci number at position ${n}:  ${fibMemo(10)}`
)

// Task 11:

function knapsack(values,weights,W){
    const n = values.length;

    // Memoization table jo store karega results of subproblems
    const memo = Array.from({length:n},()=>Array(W+1).fill(-1))

    function knapsackRec(index,remainingWeight){

        //! Base Case: if no item left or remaining weight is 0 then return 0
        if(index<0 || remainingWeight === 0){
            return 0;
        }

        // if subProblem already solved then return the stored result
        if(memo[index][remainingWeight]!==-1){
            return memo[index][remainingWeight];
        }

        // Case 1: Not to include the current item
        let result = knapsackRec(index-1,remainingWeight);

        // Case 2: Include the current item
        if(weights[index] <= remainingWeight){
            result = Math.max(
                result,values[index] + knapsackRec(index-1,remainingWeight-weights[index])
            );
        }

        // Storing the result in memo table
        memo[index][remainingWeight] = result;

        return result;
    }

    return knapsackRec(n-1,W)
}

const values = [75,120,140];
const weights = [20,30,40];
const W = 60;

console.log(
    `Maximum value [${values}] and weights [${weights}] that can be put in a knapsack of capacity ${W}:  ${
    knapsack(values,weights,W)
    }`
)
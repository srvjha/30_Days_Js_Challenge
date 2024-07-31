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
    `Length of the longest substring without repeating characters in '${mystr}': ${longestSubstring}`
 ); 

 // Activity 4: Array Algorithm

 console.log("Array Algorithm.");
 // Task 8:
 let arr = [1, 2, 3, 4, 5, 6]
 let k = 4;
 
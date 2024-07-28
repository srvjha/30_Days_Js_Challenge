// Tasks/Activites

// Activity 1: Basic Recursion

// Task 1: 

console.log("Tasks and Activites about Recursive Function.");

console.log("Factorial Number.")

function fact(n){
    // edge case
    if(n===0) return 1;

    return n * fact(n-1); 
}

let n = 5;

console.log(`The factorial of ${n} is ${fact(n)}`);

// Task 2:

console.log("Fibonacci Number");

function fibbo(n){
    if(n===0 || n===1) return n;

    return fibbo(n-1) + fibbo(n-2)
}
let num = 5

console.log(`The fibonacci number of ${num} is ${fibbo(num)}`);

// Activity 2: Recursion with Arrays;
console.log("Recursion with Arrays.")

// Task 3:

function sumOfElements(arr){
    if(arr.length===1) return arr[0];

    return arr[0] + sumOfElements(arr.slice(1))
}

console.log(`The sum of array:- ${[1,2,4,5,7]} is ${sumOfElements([1,2,4,5,7])}`)
console.log(`The sum of array:- ${[100,200,45,51,37]} is ${sumOfElements([100,200,45,51,37])}`)


// Task 4:

function maxElem(arr){
    if(arr.length===1) return arr[0];
    let max = arr[0];
    
    if(maxElem(arr.slice(1))>max){
        max = maxElem(arr.slice(1));
        return max;
    }
    else{
        return max;
    }
}

console.log(`The max of ${[100,20,34]} is ${maxElem([100,20,34])}`);
console.log(`The max of ${[100,20,34]} is ${maxElem([230,920,54])}`);;


// Activity 3: String Manipulation with Recursion

// Task 5:

let string = "Saurav";

function reverseString(string){
    if(string.length === 0) return "";
    if(string.length === 1) return string;

    return string[string.length-1] + reverseString(string.slice(0,string.length-1));
}

let testString = "Saurav";
console.log(`The reverse of "${testString}" is "${reverseString(testString)}"`);

testString = "hello";
console.log(`The reverse of "${testString}" is "${reverseString(testString)}"`);

testString = "";
console.log(`The reverse of an empty string is "${reverseString(testString)}"`);

testString = "a";
console.log(`The reverse of "${testString}" is "${reverseString(testString)}"`);

// Task 6:

let newStr = "Saam";

function palindromeStr(newStr){
    if(newStr.length <= 1) return true;

    if(newStr[0].toLowerCase() === newStr[newStr.length-1].toLowerCase()){
        return palindromeStr(newStr.slice(1,newStr.length-1)); // or (1,-1)
    }
    else {
        return false;
    }

}

let testStr = "Saam";
console.log(`The string: ${testStr} is a palindrome: ${palindromeStr(testStr)}`);

testStr = "madam";
console.log(`The string: ${testStr} is a palindrome: ${palindromeStr(testStr)}`);

testStr = "racecar";
console.log(`The string: ${testStr} is a palindrome: ${palindromeStr(testStr)}`);

testStr = "hello";
console.log(`The string: ${testStr} is a palindrome: ${palindromeStr(testStr)}`);

// Activity 4: Recursive Search

// Task 7:

function binarySearch(array,target,startIndex=0){
    let mid = Math.floor(array.length/2);
    if(array.length === 0) return "No Element Found";
    if(array[mid] === target) return startIndex + mid;
    else if(array[mid] < target) return binarySearch(array.slice(mid+1),target,startIndex);
    else return binarySearch(array.slice(0,mid),target,startIndex);
}

console.log(`
    The index of 5 in the array [1, 2, 3, 4, 5]
    is: ${binarySearch([1, 2, 3, 4, 5], 5)}
    `);

console.log(`
    The index of 3 in the array [1, 2, 3, 4, 5]
    is: ${binarySearch([1, 2, 3, 4, 5], 3)}
    `);

console.log(`
    The index of 1 in the array [1, 2, 3, 4, 5]
    is: ${binarySearch([1, 2, 3, 4, 5], 1)}
    `);

console.log(`
    The index of 6 in the array [1, 2, 3, 4, 5]
    is: ${binarySearch([1, 2, 3, 4, 5], 6)}
    `);

// Task 8:

function countOcc(arr,target,count=0){
    if(arr.length === 0 ) return count;
    if(arr[0] === target) {
        count = 1 + countOcc(arr.slice(1),target,count);

    }
    else {
       count =  countOcc(arr.slice(1),target,count)
    }
    return count;
}
console.log(`Total occurrences of 5: ${countOcc([2, 3, 4, 5, 5, 5, 6], 5)}`);
console.log(`Total occurrences of 2: ${countOcc([2, 3, 4, 5, 5, 5, 6], 2)}`);
console.log(`Total occurrences of 7: ${countOcc([2, 3, 4, 5, 5, 5, 6], 7)}`);
console.log(`Total occurrences of 5 in an empty array: ${countOcc([], 5)}`);

// Activity 5: Tree Traversal (Optional)

// Task 9:

console.log("Tree Traversal using In order with recursion." )

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function inOrderTraversal(node){
    if(node === null) return;

    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right);
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("In-order traversal of the tree:");
inOrderTraversal(root);

// Task 10:

function calculateDepth(node){
    if(node === null) return 0;

    let leftDepth = calculateDepth(node.left);
    let rightDepth = calculateDepth(node.right);

    return Math.max(leftDepth,rightDepth) + 1;
}

console.log(`Depth of the tree is: ${calculateDepth(root)}`);

    



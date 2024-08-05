// Tasks/Activites
console.log("Leetcode Hard Questions--> ")
// Activity 1: Median of Two Sorted Arrays
console.log("Median of Two Sorted Arrays.")
// Task 1:

var findMedianSortedArrays = function(nums1, nums2) {
    let n1 = nums1.length;
    let n2 = nums2.length;
    if(n1 > n2) return findMedianSortedArrays(nums2,nums1);

    let low = 0; high = n1;
    let left = Math.floor((n1 + n2 + 1)/2);
    let n = n1 + n2;
    while(low <= high){
        let mid1 = Math.floor((low + high) /2);
        let mid2 = left - mid1;
         let l1 = mid1 > 0 ? nums1[mid1 - 1] : -Infinity;
        let l2 = mid2 > 0 ? nums2[mid2 - 1] : -Infinity;
        let r1 = mid1 < n1 ? nums1[mid1] : Infinity;
        let r2 = mid2 < n2 ? nums2[mid2] : Infinity;
        if(l1<=r2 && l2<=r1){
            if( n % 2===1) return Math.max(l1,l2);
            return (Math.max(l1,l2) + Math.min(r1,r2))/2;
        }
        else if(l1 > r2) high = mid1-1;
        else low = mid1 + 1;

    }
    return 0;
}

console.log("Test Case:1 ");
console.log(`Input: nums1 = ${[1,3]}, nums2 = ${2}`);
console.log(`Output: ${findMedianSortedArrays([1,3],[2])}`)

console.log("Test Case:2 ");
console.log(`Input: nums1 = ${[1,2]}, nums2 = ${[3,4]} `);
console.log(`Output: ${findMedianSortedArrays([1,2],[3,4])}`);

//Activity 2: Merge k Sorted Lists;
console.log("Merge k Sorted Lists");
// Task 2:

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function arrayToList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Convert a linked list to an array
function listToArray(node) {
    let result = [];
    while (node) {
        result.push(node.val);
        node = node.next;
    }
    return result;
}

var mergeTwoLists = function (l1,l2){
    if(!l1) return l2;
    if(!l2) return l1;
    if(l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next,l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1,l2.next);
        return l2;
    }
}
var mergeKLists = function(lists) {
    let resultList = null;
    for(let i=0;i<lists.length;i++){
        resultList = mergeTwoLists(resultList,lists[i])
    }
    return resultList;
};

const lists1 = [
    arrayToList([1, 4, 5]),
    arrayToList([1, 3, 4]),
    arrayToList([2, 6])
];

const mergedList1 = mergeKLists(lists1);
console.log(listToArray(mergedList1));

const lists2 = [];
const mergedList2 = mergeKLists(lists2);
console.log(listToArray(mergedList2));

// Activity 3: Trapping Rain Water
// Task 3:
console.log("Trapping Rain Water");

var trap = function(height) {
    let n = height.length;
    let totalTrapWater = 0;
    let leftMax = 0;
    let rightMax = 0;
    let l = 0;
    let r = n-1;
    while(l < r){
        if(height[l] <= height[r] ){
            if(leftMax > height[l]){
               totalTrapWater += leftMax - height[l]
            }
            else{
                leftMax = height[l]
            }
            l = l + 1;
        }
        else {
            if(rightMax > height[r] ){
                totalTrapWater += rightMax - height[r]
            }
            else {
                rightMax = height[r];
            }
            r = r - 1;
        }
    }
    return totalTrapWater
};
console.log("Test Case 1:")
console.log(`Input: Height= [0,1,0,2,1,0,1,3,2,1,2,1]`);
console.log(`Output: ${trap([0,1,0,2,1,0,1,3,2,1,2,1])}`);

console.log("Test Case 2:")
console.log(`Input: Height= [4,2,0,3,2,5]`);
console.log(`Output: ${trap([4,2,0,3,2,5])}`);


// Activity 4: N-Queens
console.log("Activity 4: N-Queens");
// Task 4:

var solveNQueens = function(n) {
    const board = [];

    function isSafe(board,row,col){
        // check for column on left side

        for(let i=0;i<row;i++){
            if(board[i][col] === "Q") return false;
        }

                // check for upper diagonal on left side
            for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
                if (board[i][j] === "Q") return false;
            }

            // check lower diagonal on left side
            for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
                if (board[i][j] === "Q") return false;
            }
        return true
    }
    
    function solve(chessBoard ,row){
        if(row === n){
         const solution = chessBoard.map((row)=>row.join(""));
        
         board.push(solution);
         return;
        }

        for(let col=0;col<n;col++){
            if(isSafe(chessBoard,row,col)){
                chessBoard[row][col] = "Q";
                solve(chessBoard,row + 1);
                chessBoard[row][col] = "." // backtrack
            }
        }
    }
    // Empty Chessboard
    const chessBoard =  Array.from({length:n},()=>Array(n).fill('.'));
    solve(chessBoard,0);
    return board;
};


const n = 4;
const solutions = solveNQueens(n);
console.log(`There are ${solutions.length} solutions for ${n}-Queens:`);
console.log(solutions);


// Activity 5: Word Ladder
console.log("Word Ladder");
// Task 5:

var ladderLength = function(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if(!wordSet.has(endWord)) return 0;

    let queue = [[beginWord,1]];
    const alpha = 'abcdefghijklmnopqrstuvwxyz';

    while(queue.length > 0){
        const [currentWord , level] = queue.shift();
        if(currentWord === endWord) return level;

        for(let i=0;i<currentWord.length;i++){
            for(const c of alpha){
                const newWord = currentWord.slice(0,i) + c + currentWord.slice(i + 1);

                if(wordSet.has(newWord)){
                    queue.push([newWord,level + 1]);
                    wordSet.delete(newWord); // remove to avoid revisiting
                }
            }
        }
    }
    return 0;
};

// Test Cases
const beginWord = "hit";
const endWord = "cog";
const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
console.log(ladderLength(beginWord, endWord, wordList)); 





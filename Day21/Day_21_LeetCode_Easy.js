// Tasks/Activites:

// Activity 1: Two Sum
// Task 1:
console.log("Two Sum Problem ->");

function twoSum(nums, target) {
    var n = nums.length;
    var ans = {};
    for (let i = 0; i < n; i++) {
        let complement = target - nums[i];
        if (ans[complement] !== undefined) {
            return [ans[complement], i];
        }
        ans[nums[i]] = i;
    }
    return [-1, -1];
}
console.log("Test Case 1: ")
console.log(`Input: nums = ${[2,7,11,15]}, target = ${9}`);
console.log(`Output: ${JSON.stringify(twoSum([2,7,11,15],9))}`);

console.log("Test Case 2: ")
console.log(`Input: nums = ${[3,2,4]} , target = ${6}`);
console.log(`Output: ${JSON.stringify(twoSum([3,2,4],6))}`);

console.log("Test Case 3: ")
console.log(`Input: nums = ${[3,3]} , target = ${6}`);
console.log(`Output: ${JSON.stringify(twoSum([3,3],6))}`);

// Activity 2: Reverse Integer
// Task 2:
console.log("\nReverse Integer Problem ->");

function reverseInt(x){
    const INT_MIN = -Math.pow(2, 31);
    const INT_MAX = Math.pow(2, 31) - 1;
    if(x < 0){
     let res = "-" + x.toString().slice(1).split("").reverse().join("");
     if(Number(res) < INT_MIN || Number(res) > INT_MAX) return 0;
     else return res;
    }
    else if(x > 0){
        let res = x.toString().split("").reverse().join("");
        if(res < INT_MIN || res > INT_MAX) return 0;
        else return res;
    }else{
        return x
    }
}

console.log("Test Case: 1");
console.log(`Input: x = ${123}`);
console.log(`Output: ${reverseInt(123)}`);

console.log("Test Case: 2");
console.log(`Input: x = ${-123}`);
console.log(`Output: ${reverseInt(-123)}`);

console.log("Test Case: 3");
console.log(`Input: x = ${120}`);
console.log(`Output: ${reverseInt(120)}`);

console.log("Test Case: 4");
console.log(`Input: x = ${1534236469}`);
console.log(`Output: ${reverseInt(1534236469)}`);

console.log("Test Case: 5");
console.log(`Input: x = ${-2147483648}`);
console.log(`Output: ${reverseInt(-2147483648)}`);

// Activity 3: Palindrome Number
// Task 3:
console.log("\nPalindrome Number Problem ->");

function isPalindrome(x) {
    if(x < 0) return false;
    let res = Number(x.toString().split("").reverse().join(""));
    return x === res
};

console.log("Task Case: 1");
console.log(`Input: x = ${12321}`);
console.log(`Output: ${isPalindrome(12321)}`);

console.log("Task Case: 2");
console.log(`Input: x = ${-123456}`);
console.log(`Output: ${isPalindrome(-123456)}`);

console.log("Task Case: 3");
console.log(`Input: x = ${1234567890}`);
console.log(`Output: ${isPalindrome(1234567890)}`);

// Activity 4: Merge Two Sorted Lists
console.log("\nMerge Two Sorted Lists")

class ListNode {
    constructor(val = 0, next=null) {
        this.val = val
        this.next = null;
    }
}

var mergeTwoLists = function(l1, l2) {
    if (!l1) return l2;
   else if (!l2) return l1;
   else if (l1.val <= l2.val) {
       l1.next = mergeTwoLists(l1.next, l2);
       return l1;
   } else {
       l2.next = mergeTwoLists(l1, l2.next);
       return l2
   }
};

let l1 = new ListNode(1)
l1.next = new ListNode(2)
l1.next.next = new ListNode(8)

let l2 = new ListNode(1)
l2.next = new ListNode(3)
l2.next.next = new ListNode(4)
function display(li){
    temp = li
    while(li!=null){
        console.log(li.val)
        li=li.next
    }
}
let dli = mergeTwoLists(l1,l2)
display(dli);

console.log("Test Case: 1");
console.log(`Input: l1 = [1,2,8], l2 = [1]`);
console.log(`Output: ${display(mergeTwoLists(l1,l2))}`);

console.log("Test Case: 2");
console.log(`Input: l1 = [1,2,8], l2 = [1]`);
console.log(`Output: ${display(mergeTwoLists(l1,l2))}`);

// Activity 5: Valid Parentheses
console.log("\nValid Parentheses");

function balancePara(array,startIndex=0,count=0)
{
    if(startIndex===array.length) return count===0
    if(count<0) return false

    if(array[startIndex] =="("||array[startIndex] =="["||array[startIndex] =="{"||array[startIndex] =="<")
        {
            balancePara(array,startIndex+1,count+1)
        }
    else if(array[startIndex]===")"||array[startIndex] =="]"||array[startIndex] =="}"||array[startIndex] ==">")
        {
            balancePara(array,startIndex+1,count-1)
        }
    else return false
}
var isValid = function(s) {
    let array = s.split("")
    console.log("Array: ",array)
    return balancePara(array)
};

console.log("Test Case: 1");
console.log(`Input: s = "()"`);
console.log(`Output: ${isValid("()")}`);

console.log("Test Case: 2");
console.log(`Input: s = "()[]{}"`)
console.log(`Output: ${isValid("()[]{}")}`);
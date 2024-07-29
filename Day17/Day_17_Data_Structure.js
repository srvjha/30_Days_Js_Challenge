// Tasks/Activites

// Activity 1: Linked List

// Task 1:

console.log("Linked List");
console.log("TASK 1")

class Node{
    constructor(value,next){
        this.value = value;
        this.next = next;
    }
}

let element1 = new Node(5);
let element2 = new Node(15);

element1.next = element2;
element2.next = null;

console.log(element1.value);
console.log(element1.next.value);

// Task 2:
console.log("TASK 2")

class Node1{
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }

    addNodeAtEnd(data){
        const newNode = new Node1(data);
        if(!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current.next){
            current = current.next
        }
        current.next = newNode
    }

    removeNodeAtEnd(){
        if(!this.head) console.log("Linked List is empty.")
        if(!this.head.next){
            this.head = null;
            return;
        }

        let last = this.head
        while(last.next.next){
            last  = last.next;
        }
       
        last.next=null;
        
    }

    printMe() {
        if (!this.head) {
            console.log("Linked List is empty.");
            return;
        }
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Example usage:
const ll = new LinkedList();

// Add nodes to the linked list
ll.addNodeAtEnd(1);
ll.addNodeAtEnd(2);
ll.addNodeAtEnd(3);
ll.addNodeAtEnd(4);

// Display all nodes
console.log("Nodes in the linked list:");
ll.printMe(); 

// Remove a node from the end
ll.removeNodeAtEnd();
console.log("After removing the last node:");
ll.printMe(); 

// Remove another node from the end
ll.removeNodeAtEnd();
console.log("After removing another node from the end:");
ll.printMe(); 

// Activity 2: Stack

console.log("Stack");
// Task 3 & Task 4:
console.log("TASK 3 & TASK 4");

class Stack{
    constructor(){
        this.stack = [];
    }

    push(data){
        this.stack.push(data);
    }

    pop(){
        if(this.stack.length === 0){
            console.error("Empty Stack");
            return null;
        }
        else{
            return this.stack.pop();
        }
    }

    peek(){
        if(this.stack.length === 0){
            return null;
        }
        return this.stack[this.stack.length-1];
    }

    empty(){
        return this.stack =[]
    }

    reverseString(string){
        let reversedString = "";
        // this.stack = string.split("");
        // let current = this.stack;
        for(let char of string){
            this.push(char);
        }
        let current = this.stack;
        while(current.length>0){
            reversedString += current.pop();
        }
        return reversedString
    }
}
let string = "saurav"
const stack = new Stack();
stack.push("h");
stack.push("e");
stack.push("l");
stack.push("l");
stack.push("o");
stack.push("s");
console.log("Stack List After Push Method: ",stack);
stack.pop();
console.log("Stack List After Pop Method: ",stack);

console.log("Stack List After Peek Method: ",stack.peek());

console.log("Stack List After Empty Method: ",stack.empty());

console.log(`The Reverse of ${string} is ${stack.reverseString(string)}`);

// Activity 3: Queue

console.log("Queue");

// Task 5 & Task 6

class Queue{
    constructor(){
        this.queue = [];
    }

    enqueue(data){
        this.queue.push(data);
    }
    dequeue(){
        if(this.queue.length < 1)
            return null;
        return this.queue.shift();
        }
    front(){
        if(this.queue.length < 1){
            return null;
        }
            
        return this.queue[0];
    }

    printJobSimulation(printJobs) {
        for (let job of printJobs) {
            this.enqueue(job);
        }

        while (this.queue.length > 0) {
            let currentJob = this.dequeue();
            console.log(`Printing job: ${currentJob}`);
        }
    }
}

const printerQueue = new Queue();
printerQueue.printJobSimulation(["Job1", "Job2", "Job3"]); 

// Activity 4: Binary Tree

console.log("Binary Tree.");
console.log("Task 7 & Task 8");

// Task 7 & Task 8:

class TreeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{
    constructor(){
        this.root = null;
    }

    insert(val){
        const newNode = new TreeNode(val);
        if(this.root === null){
            this.root = newNode;
        } else{
            this.insertNode(this.root,newNode);
        }
        
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inOrderTraversal(node, callback) {
        if (node !== null) {
            this.inOrderTraversal(node.left, callback);
            callback(node.value);
            this.inOrderTraversal(node.right, callback);
        }
    }

    
    inOrder(callback) {
        this.inOrderTraversal(this.root, callback);
    }
}

const binaryTree = new BinaryTree();
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.insert(31);
binaryTree.insert(7);

console.log("In-order traversal:");
binaryTree.inOrder(value => console.log(value)); 

// Activity 5: Graph

console.log("Graph");
console.log("Task 9 & Task 10");

// Task 9 & Task 10:
//Undirected Graph
class Graph{
    constructor(){
        this.adjacenyList = {}
    }

    addVertex(vertex){
        if(!this.adjacenyList[vertex]){
            this.adjacenyList[vertex] = [];
        }
    }

    addEdge(vertex1,vertex2){
        if(this.adjacenyList[vertex1] && this.adjacenyList[vertex2]){
            this.adjacenyList[vertex1].push(vertex2);
            this.adjacenyList[vertex2].push(vertex1);
        }
    }

    bfs(start){
        const queue = [start];
        const result = [];
        const visited = new Set([start]);

        while(queue.length > 0){
            const node = queue.shift();
            result.push(node)
            for(const neighbour of this.adjacenyList[node]){
                if(!visited.has(neighbour)){
                    
                    visited.add(neighbour);
                    queue.push(neighbour);

                }
            }
        }
        return result;
    }

    bfsShortestpath(start,dest){
        const queue = [[start,[start]]]
        
        const visited = new Set([start]);

        while(queue.length > 0){
            const [node,distance] = queue.shift();
            if(node === dest) return distance

            // now proccessing child

            for(const neighbour of this.adjacenyList[node]){
                if(!visited.has(neighbour)){
                    visited.add(neighbour)
                    queue.push([neighbour,distance.concat(neighbour)]);
                }
            }
        }
        return null;
    }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

console.log("BFS starting from vertex A:");
console.log(graph.bfs('A')); 

console.log("Shortest path between A and F:");
console.log(graph.bfsShortestpath('A', 'C')); 
   





// Task/Activites

// Activity 1: Class Definition
// Task 1:

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greetMessage(){
        return `
        Hello, my name is ${this.name} and I am ${this.age} years old.
        
        `
    }
}

const person1 = new Person("Saurav Jha",22);
console.log(person1.greetMessage());

// Task 2:

Person.prototype.updatedAge = function(age){
    this.age = age;
}

console.log("Original Age: ",person1.age)
person1.updatedAge(23);
console.log("Updated Age: ",person1.age)
console.log(person1.greetMessage());

// Activity 2: Class Inheritance

// Task 3:

class Student extends Person{
    constructor(name, age, studentId) {
        super(name,age);
        this.studentId = studentId;
    }

    getStudentId(){
        return this.studentId;
    }
}

const rohit = new Student("Rohit",15,3);
console.log("Student Id: ",rohit.studentId);
console.log(rohit.greetMessage());

// Task 4:

Student.prototype.greetMessage  = function(){
    return `
    Hello, my name is ${this.name} and I am ${this.age} years old and my StudentId is ${this.studentId}
    `
}
const rahul = new Student("Rahul",19,12);
console.log(rahul.greetMessage());


// Activity 3: Static Methods and Properties

// Task 5:

Person.genericGreeting = function(){
    return "Welcome to the Generic Mesaage!";
}
console.log(Person.genericGreeting());

// Task 6:

class Student1 extends Person{
    static countStudents = 0;
    constructor(name,age,studentId){
        super(name,age);
        this.studentId = studentId;

        // For Incrementing the static property when new student is created
        Student1.countStudents++;
    }

    getStudentId(){
        return this.studentId;
    }

    getStudentDetail(){
        return `Student Name: ${this.name}, Age: ${this.age}, StudentId: ${
        this.studentId
        }`
    }

    // Static method to get the total number of students
    static getTotalStudents(){
        return Student1.countStudents;
        }
    
}

const student1 = new Student1("Student1",15,3);
const student2 = new Student1("Student2",16,4);
const student3 = new Student1("Student3",19,6);
console.log(`Total Number of students: ${Student1.getTotalStudents()}`);

// Activity 4: Getters and Setters

// Task 7:

class Person1 {
    constructor(firstName,lastName ,age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

    }

    // Getter Method
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    // Setter Method
    set fullName(name){
        const parts = name.split(' ');
        if(parts.length === 2){
            this.firstName = parts[0];
            this.lastName = parts[1];
        }
        else{
            throw new Error("Invalid full name");
            }
    }
}

const person2 = new Person1("Rajat","Shah",34);
console.log("Full Name(using getter):", person2.fullName);

// Task 8:
person2.fullName = "Salman Jha";
console.log("Full Name(using setter):", person2.fullName);

// Activity 5: Private Fields (Optional)

// Task 9: 
class Account {
    #balance; // Private Field;

    constructor(initialBalance){
        this.#balance = initialBalance;
    }

    // Method to deposit money;
    deposit(amount){
        if(amount>0){
            this.#balance += amount;
            console.log(`Deposited : $${amount}`);
        }
        else{
            console.log("Invalid amount");
        }
    }

    // now to withdraw
    withdraw(amount){
        if(amount>0 && this.#balance >= amount){
            this.#balance -= amount;
            console.log(`Withdrawn : $${amount}`);
        }
        else{
            console.log("Invalid amount");
        }
    }

    getBalance(){
        return this.#balance;
    }
}

// Task10:

const myAcc = new Account(100);

myAcc.deposit(50);
console.log(`Current Balance Deposited Money: $${myAcc.getBalance()}`);
myAcc.withdraw(30);
console.log(`Current Balance After Withdraw: $${myAcc.getBalance()}`);

myAcc.withdraw(120);
console.log(`Current Balance After WithDraw Money: $${myAcc.getBalance()}`);

myAcc.deposit(-20);
console.log(`Current Balance After Invalid Deposit: $${myAcc.getBalance()}`);

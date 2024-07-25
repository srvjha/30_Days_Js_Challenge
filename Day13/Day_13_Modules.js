
// Tasks/Activites

// Activity 1: Creating and Exporting Modules

// Task 1:
import { addTwoNum } from "./functionsNamedExport.js";
console.log(addTwoNum(8,3));

// Task 2:
import { person } from "./obj.js";
console.log(person.bio());

// Activity 2: Named and Default Exports

// Task 3:
import { multiplyTwoNum,divideTwoNum,checkPrime,checkEven } from "./functionsNamedExport.js";
console.log(multiplyTwoNum(8,3));
console.log(divideTwoNum(8,3));
console.log(checkPrime(8));
console.log(checkEven(8));

// Task 4:
import greetMe from "./functionDefaultExport.js";
greetMe("Saurav Jha");

// Activity 3: Importing Entire Modules
// Task 5:

import { playerObj } from "./exportMultipleCandF.js";
console.log(playerObj);
console.log(playerObj.interestingFact());

// Activity 4: Using Third-Party Modules
// Task 6:
// Using faker
import { faker } from '@faker-js/faker';

console.log(faker.name.fullName());

// Task 7:
// npm i axios
import axios from "axios";
axios("https://randomuser.me/api/?result=1")
.then((data)=>{
    console.log("Name: ",data.data.results[0].name.first);
})

// Activity 5: Module Bundling(Optional)
// Task 8:

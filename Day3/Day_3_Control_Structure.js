// Task/Activites:

// Activity 1: If-Else Statements

// Task-1:

const checkNumStatus =2;// process.argv[2];
//console.log("process: ",process)
if (checkNumStatus > 0) {
    console.log(`${checkNumStatus} is Positive.`);
}
else if(checkNumStatus<0){
    console.log(`${checkNumStatus} is Negative.`)
}
else {
    console.log(`${checkNumStatus} is Zero.`)
}

// Task-2:
const ageCriteriaToVote =25; // process.argv[3];
if(ageCriteriaToVote>=18){
    console.log(`Person with age ${ageCriteriaToVote} has the right to Vote.`)
}
else if(ageCriteriaToVote < 18 && ageCriteriaToVote>0){
    console.log(`Person with age ${ageCriteriaToVote} does not have the right to Vote.`)
}
else if(ageCriteriaToVote<=0){
    console.log(`Please Enter a valid age!!`)
}

// Activity 2:

// Task 3:
const num1 = 23 //process.argv[2];
const num2 = 34 //process.argv[3];
const num3 = 56 //process.argv[4];

if(num1 > num2 && num1 > num3){
    console.log(`${num1} is the largest number.`)
}
else if(num2 > num1 && num2 > num3){
    console.log(`${num2} is the largest number.`)
}
else{
    console.log(`${num3} is the largest number.`)
}

// Activity 3: Switch Case

// Task-4:

let day = process.argv[2]

switch(day)
{
   case "1":"Monday",
   console.log(`${day} is Monday`)
   break;

   case "2":"Tuesday",
   console.log(`${day} is Tuesday`)
   break;

   case "3":"Wednesday",
   console.log(`${day} is Wednesday`)
   break;

   case "4":"Thursday",
   console.log(`${day} is Thursday`)
   break;

   case "5":"Friday",
   console.log(`${day} is Friday`)
   break;

   case "6":"Saturday",
   console.log(`${day} is Saturday`)
   break;

   case "7":"Sunday",
   console.log(`${day} is Sunday`)
   break;

    default:
    console.log(`Please Enter a Day Between 1-7`)
}

// Task-5:

let score  = 65 // process.argv[2];

switch(score){
    
    case "75":"A",
    console.log(`Your Grade is A`);
    break;
    case "65":"B",
    console.log(`Your Grade is B`);
    break;
    case "55":"C",
    console.log(`Your Grade is C`);
    break;
    case "45":"D",
    console.log(`Your Grade is D`);
    break;
    case "35":"E",
    console.log(`Your Grade is E`);
    break;
    default:
        console.log(`Please Enter a Score Between 35-75`)
}

// Activity 4: Conditional (Ternary) Operator

// Task 6:

let number = process.argv[2];
number%2===0?console.log(`${number} is Even`):console.log(`${number} is Odd`)


// Activity 5: Combining Conditions

// Task 7:

let checkYear = process.argv[2];

if((checkYear % 4 === 0 && checkYear % 100!==0) || (checkYear % 400===0)){
    console.log(`${checkYear} is a Leap Year`)
}
else {
    console.log(`${checkYear} is not a Leap Year`)
}

// Feature Request 

// 1. Number Check Script:
function numCheck(num){
    if (num > 0) {
        console.log(`${num} is Positive.`);
    }
    else if(num < 0){
        console.log(`${num} is Negative.`)
    }
    else {
        console.log(`${num} is Zero.`)
    }
}

numCheck(-3);

function voteEligibilty(age){
    if(age>=18){
        console.log(`Person with age ${age} has the right to Vote.`)
    }
    else if(age < 18 && age > 0){
        console.log(`Person with age ${age} does not have the right to Vote.`)
    }
    else if(age<=0){
        console.log(`Please Enter a valid age!!`)
    }
}
voteEligibilty(17);

function dayOfWeek(day){
    switch(day)
{
   case "1":"Monday",
   console.log(`${day} is Monday`)
   break;

   case "2":"Tuesday",
   console.log(`${day} is Tuesday`)
   break;

   case "3":"Wednesday",
   console.log(`${day} is Wednesday`)
   break;

   case "4":"Thursday",
   console.log(`${day} is Thursday`)
   break;

   case "5":"Friday",
   console.log(`${day} is Friday`)
   break;

   case "6":"Saturday",
   console.log(`${day} is Saturday`)
   break;

   case "7":"Sunday",
   console.log(`${day} is Sunday`)
   break;

    default:
    console.log(`Please Enter a Day Between 1-7`)
}
}

dayOfWeek(3)

function gradeAssignment(score){
    switch(score){
    
        case "75":"A",
        console.log(`Your Grade is A`);
        break;
        case "65":"B",
        console.log(`Your Grade is B`);
        break;
        case "55":"C",
        console.log(`Your Grade is C`);
        break;
        case "45":"D",
        console.log(`Your Grade is D`);
        break;
        case "35":"E",
        console.log(`Your Grade is E`);
        break;
        default:
            console.log(`Please Enter a Score Between 35-75`)
    }
}

gradeAssignment(45);

function leapYearCheck(year){
    if((year % 4 === 0 && year % 100!==0) || (year % 400===0)){
        console.log(`${year} is a Leap Year`)
    }
    else {
        console.log(`${year} is not a Leap Year`)
    }
}

leapYearCheck(2024)
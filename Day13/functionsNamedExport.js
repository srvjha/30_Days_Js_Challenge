export function addTwoNum(num1,num2){
    return `The sum of ${num1} and ${num2} is ${num1+num2}`
}

export function multiplyTwoNum(num1,num2){
    return `The product of ${num1} and ${num2} is ${num1*num2}`
}

export function divideTwoNum(num1,num2){
    if(num2===0){
        return "Cannot divide by zero"
    }
    else{
         return `The quotient of ${num1} and ${num2} is ${num1/num2}`
    }
   
}

export function checkPrime(num){
    if(num===1 || num===0){
        return "Not a prime number"
        }
        else{
            for(let i=2;i<num;i++){
                if(num%i===0){
                    return "Not a prime number"
                    }
                }
            return "Prime number"
         }
}

export function checkEven(num){
    if(num%2===0){
        return "Even number"
        }
        else{
            return "Odd number"
            }
            
}
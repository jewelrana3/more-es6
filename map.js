const numbers = [4,5,64,7,8];
// const output = [];
// for (const number of numbers){
//     const double = number * 2;
//     output.push(double)
// }
// console.log(output);

function getDoule(numbers){
    const output = [];
    for(const number of numbers){
        const double = doubleIt(number);
        output.push(double)
    }
    return output;
}


//  function doubleIt(number){
//     return number * 2
//  } 
//  arrow function
const doubleIt=num => num * 2;
const makeDouble = numbers.map(doubleIt);
const makeSingle = numbers.map(num => num * 2);
const fiveTimes = [2,3,4,5].map(x=> x*5)
console.log(fiveTimes)
console.log(makeSingle)

// const result = getDoule(numbers);
// console.log(result);
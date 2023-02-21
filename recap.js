// 1. var let const 
const number = [33,45,33,367,87,99];
let salary = 444;
salary = 544;

// 2 default parameter
function salaryCalculate(salary,tax=0.22,bonus){
    const salaryPie = salary - tax*salary;
    const allSalary = salary + bonus;
    return allSalary;
}

// 3 . templete string
const newLine = `
<h1>name:</h1>
<h1>salary:${salaryCalculate(1000,0,4)}</h1>
<h1>name:${number[2]}</h1>
`

// 4 . arrow function 
const doubleIt = x => x * 2;
const threeLine = (taka, bonus ,tax) => taka - bonus + tax;

// 5 . spread operator
const ages = [22,41,12,33,54,55];
const friend = [...ages,41,62];
console.log(friend);

// 6 . destructure 

// object side 
const {name} = {name:'juyel',adress:'bademaju',salary:22222}

// arrow side
const [x,y,z,...x] = [44,654,88,09,764,33]
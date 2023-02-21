const number = [2,56,78,54,32,12,34,568,43,22];
const result = number.find(num => num > 10);
const result2 = number.filter(num => num > 10);
console.log(result)
console.log(result2)

const product = [
    {id:101, name:'manik',price:62000,brand:'laptop'},
    {id:101, name:'mama',price:12000,brand:'mobile'},
    {id:101, name:'manik',price:42000,brand:'desktop'},
    ];
    const manSide = product.find(num => num.price > 10000);
    console.log(manSide)
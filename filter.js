const number = [2,56,78,54,32,12,34,568,43,22];
// const result = number.filter(n=> console.log(n))
const result = number.filter(num => num > 20);
const result1 = number.filter(poin => poin % 2 == 0)
console.log(result1)

const product = [
    {id:101, name:'manik',price:62000,brand:'laptop'},
    {id:101, name:'mama',price:12000,brand:'mobile'},
    {id:101, name:'manik',price:42000,brand:'desktop'},
    ];
const mann = product.filter(prod => prod.price > 20000)
console.log(mann);    
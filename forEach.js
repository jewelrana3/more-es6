const product = [
{id:101, name:'manik',price:62000,brand:'laptop'},
{id:101, name:'mama',price:12000,brand:'mobile'},
{id:101, name:'manik',price:42000,brand:'desktop'},
];

const pie = product.forEach(products => console.log(products));
const product3 = product.forEach(p => p.brand);
console.log(product3)
const number = [34,23,56,77];
const result = number.map(n => n/2);
console.log(result);

const friend = ['juyel','hasan','tasmin','munnika'];
const name  = friend.map( f => f.length);
console.log(name);

const product = [
    {id:101, name:'manik',price:62000,brand:'laptop'},
{id:101, name:'mama',price:12000,brand:'mobile'},
{id:101, name:'manik',price:42000,brand:'desktop'},
]

const result1 = product.map(products=>console.log(products));
const result3 = product.map(p => p.brand);
console.log(result3)

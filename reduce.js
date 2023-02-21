const number = [1,2,3,4,5];
// const result = number.reduce((previus,current) => previus + current , 0);
const result = number.reduce((previus,curent)=> {
    console.log(previus,curent)
    return previus + curent
},0)
const numbers = [20, 15, 2, 3, 8, 45, 32, 98, 54, 0];
const bigNumber = numbers.filter(number => number >= 20);
const smallNumber = numbers.filter(number => number < 10);
// console.log(bigNumber, smallNumber);



const products = [
    { name: 'water Bottle', price: 50, color: 'black' },
    { name: 'Mobile Phone', price: 15000, color: 'Golden' },
    { name: 'Smart Watch', price: 3000, color: 'black' },
    { name: 'Sticky note', price: 20, color: 'pink' },
    { name: 'water glass', price: 5, color: 'white' }
];

const expensive = products.filter(product => product.price > 100);
// console.log(expensive);
const blacks = products.filter(product => product.color == 'black');
// console.log(blacks);

// find element
const pinkItem = products.find(product => product.color == 'pink');
console.log(pinkItem);

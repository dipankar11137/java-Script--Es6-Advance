const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];

const fLangths = friends.map(friend => friend.length);
// console.log(fLangths);


const products = [
    { name: 'water Bottle', price: 50, color: 'yellow' },
    { name: 'Mobile Phone', price: 15000, color: 'Golden' },
    { name: 'Smart Watch', price: 3000, color: 'Black' },
    { name: 'Sticky note', price: 20, color: 'pink' },
    { name: 'water glass', price: 5, color: 'white' }
];

const productNames = products.map(product => product.name);
const productPrices = products.map(product => product.price);
console.log(productNames, productPrices);
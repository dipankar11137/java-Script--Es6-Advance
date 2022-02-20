const fish = { id: 57, name: 'King Hilsha', price: 900, phone: '01745095345', address: 'Barishal', dress: 'silver' };

// destructuring
const { name, id, price, phone } = fish;

// console.log(name, id, price, phone);


// destructuring object
const company = {
    name1: 'GP',
    ceo: { id: 12, name: 'ajmol', food: 'fuckha' },
    web: {
        work: 'web develop', employee: 22, framework: 'react',
        tech: { first: 'Html', second: 'Css', Third: 'js' }
    }
}

const { work, framework } = company.web;
const { food } = company.ceo;
const { first, second } = company.web.tech;
console.log(work, framework, food, first, second);
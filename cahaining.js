// declatre variable based on the name of an object property
const myObject = { x: 2, y: 50, z: 600, a: 25, b: 68 };
const { x, b } = myObject;
// console.log(x, b);


// destructuring array
const [p, q, r] = [45, 56, 77, 89, 12, 45];
// console.log(p, q, r);


const company = {
    name1: 'GP',
    ceo: { id: 12, name: 'ajmol', food: 'fuckha' },
    web: {
        work: 'web develop', employee: 22, framework: 'react',
        tech: { first: 'Html', second: 'Css', third: 'js' }
    }
}

console.log(company.web.tech.third);
console.log(company?.backend?.tech.third);

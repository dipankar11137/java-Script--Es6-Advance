// 1.    
const hubby = 'Rojoni'

// 2. tamplate string 
const myNotes = ` i am mojnu ${hubby}.I dont have a laili`;

// 3. default parameter and aprede or 3 dot(.)
function maxNumber(array = []) {
    const max = Math.max(...array);
    return max;
}
// const maxNumbe = [12, 102, 99];
// const maxValue = maxNumber(maxNumbe)
// console.log(maxValue);

// 4.arrow function 
const squere = x => x * x;
console.log(squere(8));

class Support {
    name;
    designation = 'Support Web Dev';
    address = 'Bd';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'Start a support session');
    }
}
const aamir = new Support('Amir Khan', 'India');
const slaman = new Support('Salman khan', 'Varat');
aamir.startSession();
slaman.startSession();
// console.log(aamir);
// console.log(slaman);
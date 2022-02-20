
class TeamMember {
    name;
    designation = 'Support Web Dev';
    address = 'Bd';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

class Support extends TeamMember {
    groupSupportTime;

    constructor(name, address, time) {
        super(name, address)
        this.groupSupportTime = time;
    }
    startSession() {
        console.log(this.name, 'Start a support session');
    }
}

class StudentCare extends TeamMember {

    buildARoutine(Student) {
        console.log(this.name, 'Build a new routine', Student);
    }
}

// naptune
class NaptuneDev extends TeamMember {
    codeEditor;
    constructor(editor) {
        super(name, address)
        this.codeEditor = editor;
    }
    releaseApp(virsion) {
        console.log(this.name, 'release app virsion', virsion);
        // 
    }

}

const aamir = new Support('Amir Khan', 'India');
const slaman = new Support('Salman khan', 'Varat');
const saruk = new Support('SRK khan', 'Varat');
const aksoy = new Support('Salman khan', 'Varat');

const alia = new StudentCare('Alia Bhatt', 'Mumbai');
console.log(alia);
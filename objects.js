// let ericsObject = {
//     firstName: "Greatest",
//     lastName: "Ever",
//     middleName: undefined
// }

// console.log(ericsObject)
// ericsObject['age'] = 36;
// // if(ericsObject.middleName) {console.log("Hello world")}
// ericsObject.firstName = "Eric";
// ericsObject.lastName = "Fithian";

// // ericsObject = {key: "value"}
// let myVar = 'firstName'
// console.log(typeof ericsObject)
// console.log(`${ericsObject[myVar]} ${ericsObject.lastName} and he is ${ericsObject.age}`);

const class404 = {
    instructors: [
        {
            name: "Sarah",
            role: "IA",
            notes: "awesome person, great at her job"
        }, {
            name: "Kenneth",
            role: "IA",
            notes: "Awesome lectures and debugging"
        }, {
            name: "Troy",
            role: "IL",
            notes: "Just the worst"
        }, {
            name: "Eric",
            role: "Honestly nobody's really sure",
            notes: "Loves Mondays in this class"
        }
    ],
    students: [],
    timeZone: "PST",
    addStudent(name) {
        return this.students.push(name);
    },
    printAllStudentsIndividually() {
        this.students.forEach(student => {
            console.log(student);
        })
    }
}

// console.log(class404);
// class404.addStudent("Jeddy");
// class404.addStudent("Braydon");
// console.log(class404);
// class404.printAllStudentsIndividually();


// class404.instructors.forEach(instructor => {
//     console.log(instructor)
//     console.log(`This cohort is fun for ${instructor.name}`)
//     if(instructor.role === "IA") {
//         console.log("This cohort loves " + instructor.name)
//     }
// })

// for(let key in class404) {
//     console.log(`The key is ${key} with value of ${class404[key]}`)
// }

const batman = {
    persona: "Batman",
    identity: "Bruce Wayne",
    health: 100,
    power: 30,
    money: 1000000000,
    revealIdentity(){
      console.log(`I'm ${this.persona}!`);
    },
  // out new method
    takeDamage(amount){
      return this.health = this.health - amount;
    }, 
    makesMoney(amount) {
        return this.money = this.money + amount
    }
  }

// console.log(batman);
// batman.takeDamage(25);
// batman.makesMoney(234567)
// console.log(batman);
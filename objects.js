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
    ]
}

// console.log(class404.instructors[0].name)

class404.instructors.forEach(instructor => {
    console.log(instructor)
    console.log(`This cohort is fun for ${instructor.name}`)
    if(instructor.role === "IA") {
        console.log("This cohort loves " + instructor.name)
    }
})
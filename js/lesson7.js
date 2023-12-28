



const person = {
    firstName: "Qais",
    lastName: "Vadia",
    age: 23,
    fullName: function(){
        return person.firstName+" "+person.lastName
    }
}

console.log(person.fullName())
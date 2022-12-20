const person = {
    fName:'Soumya',
    lName: 'Das',
    age: 30,
    fullName: function(){
        return this.fName + " " + this.lName
    }

}

console.log(person)
console.log(person['fName'])
person.age = 40
console.log(person['age'])
let x = person.fullName()
console.log(x.toUpperCase())
person.nationality = 'indian'
delete person.age;

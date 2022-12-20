function Person(fname,lname,age){
    this.fname=fname,
    this.lname=lname,
    this.age=age,
    this.fullname= function(){
        return this.fname + " " + this.lname
    }
}

const soumya = new Person('Soumya','Das',30)
soumya.country = 'India'
console.log(soumya)
console.log(soumya.fullname())
console.log(Object.values(soumya))
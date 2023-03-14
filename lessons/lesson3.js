//objects

var customer = {
    firstName: 'John',
    lastName: 'Smith',
    cars: ["Volvo", "Toyota", "Tesla"]
}
//Dot notation
customer.firstName = 'Mike'
customer.cars[0] = 'Audi'
//Bracket notation
customer['lastName'] = 'Silver'


console.log(customer)
console.log(customer.firstName)
console.log(customer['lastName'])
console.log(`${customer.firstName} ${customer.lastName}`)

//arrays
var car = ["Volvo", "Toyota", "Tesla"]
car[0] = "Audi"
console.log(car[0])
console.log(car[2])

console.log(customer.cars[0])
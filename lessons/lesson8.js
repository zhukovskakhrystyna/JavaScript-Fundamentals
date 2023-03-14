//Declarative function

helloOne()

function helloOne() {
    console.log('Hello One!')
}

//Anonymus function

var helloTwo = function(){
    console.log('Hello Two!')
}

helloTwo()

//ES6 function syntax or arrow function

var helloThree = () => {
    console.log('Hello Three!')
}

helloThree()

//Function with arguments
function printName(name, lastName, age){
    console.log(name, lastName + ' ' + age)
}

printName('Khrystyna', 'Zhukovska', 25)

//Function with return
function multipleByTwo(number){
    var result = number * 2
    return result
}
var myResult = multipleByTwo(20)
console.log(myResult)

//import function
import { printAge } from '../helpers/printHelper.js'
printAge(5)

//import everything
import * as helper from '../helpers/printHelper.js'
helper.printAge(10)
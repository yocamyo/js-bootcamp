let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()
greetUser()
greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)
console.log(value);
console.log(otherValue);

let fahrenheitToCelcius = function (fahrenheit) {
    let result = (fahrenheit - 32) * 5 / 9
    return result
}

let tempOne = fahrenheitToCelcius(32)
let tempTwo = fahrenheitToCelcius(68)

console.log(tempOne);
console.log(tempTwo);



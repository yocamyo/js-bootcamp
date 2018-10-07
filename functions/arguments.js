let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result);

let getScoreText = function (name = 'Anonymous', score = 0) {
    return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText('Camden', 99)
console.log(scoreText);

let getTip = function (bill, tipPercent = .2) {
    return bill * tipPercent
}


let totalTip = getTip(20)
console.log(totalTip);


let name = 'Jen'
let age = 12
console.log(`Hey my name is ${name}! I am ${age} years old.`);


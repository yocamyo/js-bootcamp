let fahrenheitToCelcius = function(fahrenheit) {
  let result = ((fahrenheit - 32) * 5) / 9;
  return result;
};

let tempOne = fahrenheitToCelcius(32);
let tempTwo = fahrenheitToCelcius(68);

console.log(tempOne);
console.log(tempTwo);

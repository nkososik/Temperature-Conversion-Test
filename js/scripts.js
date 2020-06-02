let fahrenheitToCelsius = function(userInput) {
  return ((userInput-32)*5)/9;
}

  let fahrenheit =  parseFloat(prompt("Enter Temperature in Degrees Fahrenheit:"));
  alert(fahrenheitToCelsius(fahrenheit).toFixed(2));
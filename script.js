let answer = document.getElementById("answer");
let inputNumber = document.getElementById("inputNumber");
let button = document.getElementById("button");

button.addEventListener("click", () => {
  fizzBuzz(Number(inputNumber.value));
});

const fizzBuzz = (number) => {
  if (typeof number !== "number") {
    return (answer.innerHTML = "Por favor, digite um número");
  } else if (number % 3 === 0 && number % 5 === 0) {
    return (answer.innerHTML = "FizzBuzz");
  } else if (number % 3 === 0) {
    return (answer.innerHTML = "Fizz");
  } else if (number % 5 === 0) {
    return (answer.innerHTML = "Buzz");
  } else {
    return (answer.innerHTML = number);
  }
};

let answer = document.getElementById("answer");
let inputNumber = document.getElementById("inputNumber");
let button = document.getElementById("button");

button.addEventListener("click", () => {
  fizzBuzz(Number(inputNumber.value));
});

const fizzBuzz = (number) => {
  let isFizz = number % 3 === 0;
  let isBuzz = number % 5 === 0;

  if (typeof number !== "number") {
    return (answer.innerHTML = "Por favor, digite um número");
  } else if (isFizz && isBuzz) {
    return (answer.innerHTML = "FizzBuzz");
  } else if (isFizz) {
    return (answer.innerHTML = "Fizz");
  } else if (isBuzz) {
    return (answer.innerHTML = "Buzz");
  } else {
    return (answer.innerHTML = number);
  }
};

let text = document.querySelectorAll("h3");
let input = document.querySelector("input");
const btn = document.querySelectorAll(".btn");

let score = 10;
let play = true;

let num;

num = Math.round(Math.random() * 100);
text[1].innerText = `Number :- ${num}`;
console.log(num);

btn[0].addEventListener("click", () => {
  if (input.value === "" && play === true) {
    alert("Please enter the number!");
  } else if (input.value == num && play === true) {
    text[1].classList.remove("hide");
    text[2].innerText = "winner";
    text[2].style.color = "#0f0";
    text[2].style.background = "#454545";
  } else if (input.value > num && play == true) {
    score--;
    text[0].innerText = `Lifes :- ${score}`;
    text[2].innerText = `Guess is greater then number`;
    text[2].style.color = "#0ff";
    text[2].style.background = "#454545";
  } else if (input.value < num && play == true) {
    score--;
    text[0].innerText = `Lifes :- ${score}`;
    text[2].innerText = `Guess is less then number`;
    text[2].style.color = "#ff0";
    text[2].style.background = "#454545";
  }
  if (score == 0) {
    play = false;
    text[1].classList.remove("hide");
    text[2].innerText = `Game over`;
  }
});

btn[1].addEventListener("click", () => location.reload());

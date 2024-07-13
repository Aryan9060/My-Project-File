let button = document.querySelector(".btn");
let text = document.querySelectorAll("h3");
let span = document.querySelector("span");
let input = document.querySelector("#angle");

input.oninput = () => {
  const x = input.value;
  sliderColor = ` linear-gradient(90deg, #ff2289 ${x / 3.6}%, #fff ${ x / 3.6}%)`;
  input.style.background = sliderColor;
  span.innerText = input.value + "°";
};

backgroundColor1 = () => {
  hex = "0123456789abcdef";
  color = "#";
  for (let i = 0; i < 6; i++) {
    let val = hex[Math.round(Math.random() * 16)];
    if (val == undefined) {
      i--;
    } else {
      color += val;
    }
  }
  console.log(color);
  return color;
};

backgroundColor2 = () => {
  hex = "0123456789abcdef";
  color2 = "#";
  for (let i = 0; i < 6; i++) {
    let val = hex[Math.round(Math.random() * 16)];
    if (val == undefined) {
      i--;
    } else {
      color2 += val;
    }
  }
  console.log(color);
  return color2;
};

button.addEventListener("click", () => {
  document.body.style.background = `linear-gradient(${
    input.value
  }deg, ${backgroundColor1()},${backgroundColor2()})`;
  text[0].innerText = `${input.value}°`;
  text[1].innerText = color;
  text[2].innerText = color2;
});

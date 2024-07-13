let button = document.querySelector(".btn");
let text = document.querySelectorAll("h3");

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

// angle = () => {
//   return input;
// };

button.addEventListener("click", () => {
  let input = document.querySelector("#angle");
  if (input.value == "") {
    input.value = 0;
  } else if (input.value == undefined || input.value > 360 || input.value < 0) {
    alert("please enter angle between 0° and 360°");
  } else {
    console.log(input.value);
    document.body.style.background = `linear-gradient(${
      input.value
    }deg, ${backgroundColor1()},${backgroundColor2()})`;
    text[0].innerText = `${input.value}°`;
    text[1].innerText = color;
    text[2].innerText = color2;
  }
});

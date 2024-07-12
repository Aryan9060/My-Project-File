let button = document.querySelector(".btn");
let text = document.querySelector("h3");

backgroundColor = () => {
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
  return color;
};

button.addEventListener("click", () => {
  document.body.style.background = backgroundColor();
  text.innerText = color;
});

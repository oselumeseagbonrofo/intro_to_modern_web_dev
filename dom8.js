const h1 = document.querySelector("h1");
document.body.onload = () => {
  console.log("body loaded");
};

document.addEventListener("DOMContentLoaded", (e) => {
  console.log("ready");
  const output = document.querySelector(".output");
  console.log(output);
});

document.addEventListener("keydown", (e) => {
  console.log(e.key);
  h1.textContent += e.key;
});

document.addEventListener("keyup", (e) => {
  console.log(e.key);
});
console.dir(window);
// window.alert('hello');

window.onresize = () => {
  h1.innerText = window.innerHeight + " " + window.innerWidth;
};

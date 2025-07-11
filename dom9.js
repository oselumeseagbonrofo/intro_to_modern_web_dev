const first = document.querySelector("input");
const btn = document.querySelector("button");
const holder = document.querySelector(".holder");
const div = document.createElement("div");
const output = document.querySelector("div.output");
output.style.border = "1px solid black";
let counter = 0;
output.addEventListener("click", adder);

first.value = "Oselumese";
btn.addEventListener("click", (e) => {
  //holder.innerHTML = "";
  console.log(first.value);
  div.textContent = first.value;
  console.log(div);
  const div1 = document.createElement("div");
  holder.append(div1);
  div1.textContent = "HELLO";
  holder.append(div);
  holder.prepend(div);
  div.style.color = "red";
});

function adder() {
  counter++;
  console.log("clicked");
  const newEle = createEle("div", output, 
    "hi " + counter);
  console.log(newEle);
  newEle.style.background = "blue";
  newEle.style.color = "white";
}

function createEle(elType, parent, html) {
  const ele = document.createElement(elType);
  ele.innerHTML = html;
  return parent.appendChild(ele);
}

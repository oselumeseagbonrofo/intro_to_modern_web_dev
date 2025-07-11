// Select elements
const el = document.getElementById("el");
console.log(el);

const el2 = document.querySelector("div.output");
console.log(el2)

const el3 = document.querySelector('h1');
console.log(el3);

const el4 = document.querySelector("#el")
console.log(el4);

console.log(el.textContent);
el.textContent = "Its content changes"
console.log(el4.textContent);

const el5 = document.querySelectorAll(".output");
console.log(el5);
console.clear()

el5.forEach(function(ele, ind){
    console.log(ele.textContent);
    ele.textContent = 'My Element ' + ind
})
const output = document.querySelector('.output');
console.log(output.style);
output.style.color = "green"
console.log(output.style.color);

const el1 = document.querySelector('div.output');
el1.style.background = "#0000ff";
el1.style.color = "rgb(255, 255, 0)";
el1.style.padding = "10px";
el1.style.border = '4px solid grey';
el1.style.borderColor = 'red';
el1.style.fontSize = '3em';

el1.setAttribute('style', '')

const divs = document.querySelectorAll('div');
divs.forEach((el, index) => {
    el.style.color = "darkorange";
    el.style.fontWeight = "bolder";
    el.classList.add('box');
    console.log(el.classList.contains('output'))
    if(el.classList.contains('output')){
        el.innerHTML += " very good";
    }
    el.classList.remove('output');
    el.classList.toggle('active'); // toggles class on or off depending on current state
    el.setAttribute("id", 'id'+(index + 1));    
    console.log(el.classList);
    console.log(el.classList.contains('active'));
});



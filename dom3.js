const outputs = document.querySelectorAll('.output');
let html = 'Oselumese <br> Codes';
console.dir(outputs[0].tagName)

outputs[0].textContent = 'Updated via DOM';
outputs[1].innerHTML = html;

if(outputs[0].tagName == 'DIV'){
    outputs[0].textContent = 'New updates';

}

outputs.forEach((output, ind)=>{
    if(output.tagName != 'DIV'){
    output.innerHTML = '<a href="" style="background-color:blue; text-decoration:none; color:white;">More changes</a>';

}
    output.innerHTML += " " + ind;
})

document.writeln("I wrote this from the dom3.js file")
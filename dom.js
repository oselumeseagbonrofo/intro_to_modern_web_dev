console.dir(document);
let url = document.URL;
console.log(url);

let element = document.querySelector('.output');
console.dir(element);
console.dir(element.textContent);
element.textContent = "Manipulating JS DOM";

var myDOM = {
    URL : "My URL",
    children: [
        {html: {
            "body": "Content"
        }
        }
    ],
}
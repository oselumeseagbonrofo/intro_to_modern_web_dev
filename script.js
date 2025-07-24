// function (fxn declaration)
function welcome(){
    alert("Hello. Thanks for visiting my website");
}

menu = document.querySelector('.menu');
links = document.querySelector('.hidemenu');

menu.addEventListener('click', e =>{
    links.classList.toggle('hidemenu');
    console.log(links)

})
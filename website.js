const menu = document.querySelector('.menu');
const ul = document.querySelector('.hidemenu')
menu.addEventListener('click', e =>{
    ul.classList.toggle('hidemenu');
})
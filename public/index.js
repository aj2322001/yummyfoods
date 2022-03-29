const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.addEventListener('click',()=>{
    menu.classList.contains('hidden') ? menu.classList.remove('hidden') : menu.classList.add('hidden');
})

const loadMore = document.getElementById('loadMore');

loadMore.addEventListener("click",()=>{
    alert("you wish ...")
})
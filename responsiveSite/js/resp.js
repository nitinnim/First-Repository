burger = document.querySelector('.burger')
navigate = document.querySelector('.navigate')
navlist = document.querySelector('.nav-list')
navright = document.querySelector('.right-nav')

burger.addEventListener('click', ()=>{
    navlist.classList.toggle('v-class');
    navright.classList.toggle('v-class');
    navigate.classList.toggle('h-nav');
})

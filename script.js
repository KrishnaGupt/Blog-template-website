burger = document.querySelector('.burger'); //burger
navbar = document.querySelector('.navbar'); //navbar
navList= document.querySelector('.nav-list'); //ul


isToggled = false;
const toggle = () =>{
    isToggled = true;
    let menu = document.getElementById('menu')
    menu.classList.replace('fa-bars' , 'fa-times')
}
const unToggle = () =>{
    isToggled = false;
    let menu = document.getElementById('menu')
    menu.classList.replace('fa-times' , 'fa-bars')
}
function classToggle() {
 if(isToggled){
     unToggle()
 }
 else{
     toggle()
 }
}

burger.addEventListener('click', ()=>{
    navList.classList.toggle('v-class')
    navbar.classList.toggle('nav-h')
    classToggle();
})
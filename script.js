//typing animation
var typed = new Typed(".typing",{
    strings:["Web Developer", "Programmer", "Eletcronics Engineer", "Freelancer"],
    typeSpeed:150,
    Backspeed:60,
    loop:true
})

const asideToggler = document.querySelector(".nav-toggler");
asideToggler.addEventListener("click",() => {
    document.querySelector(".aside").classList.toggle("open");
    document.querySelector(".logo").style.top = "100px";
    
    })
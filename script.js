//typing animation
    var typed = new Typed(".typing",{
        strings:["Web Developer", "Programmer", "ECE Engineer", "Freelancer"],
        typeSpeed:150,
        Backspeed:40,
        loop:true
    })

var typed3 = new Typed(".typing3",{
    strings:["Web Developer", "Programmer", "ECE Engineer", "Freelancer"],
    typeSpeed:150,
    Backspeed:40,
    loop:true
})

var typed2 = new Typed(".typing2",{
    strings:["Web Developer", "Programmer", "ECE Engineer", "Freelancer"],
    typeSpeed:150,
    Backspeed:40,
    loop:true
})



const asideToggler = document.querySelector(".nav-toggler");
asideToggler.addEventListener("click",() => {
    document.querySelector(".aside").classList.toggle("open");
    document.querySelector(".logo").style.top = "100px";
    })

const listelement = document.querySelector(".nav");
listelement.addEventListener("click",() =>{
    document.querySelector(".aside").classList.toggle("open");
})
